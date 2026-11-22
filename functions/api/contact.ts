interface PagesEnv {
  CONTACT_WEBHOOK_URL?: string;
  CONTACT_FORWARD_SECRET?: string;
}

interface PagesContext {
  request: Request;
  env: PagesEnv;
}

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  language: string;
  receivedAt: string;
}

const MAX_BODY_BYTES = 64 * 1024;

function isPrivateOrLoopbackHost(host: string): boolean {
  const normalized = host.toLowerCase().replace(/^\[|\]$/g, '');
  if (
    normalized === 'localhost' ||
    normalized === '127.0.0.1' ||
    normalized === '0.0.0.0' ||
    normalized === '::1' ||
    normalized.startsWith('10.') ||
    normalized.startsWith('192.168.') ||
    normalized.startsWith('169.254.')
  ) {
    return true;
  }

  const ipv4Match = /^172\.(\d+)\./.exec(normalized);
  if (ipv4Match) {
    const secondOctet = Number(ipv4Match[1]);
    if (secondOctet >= 16 && secondOctet <= 31) {
      return true;
    }
  }

  return false;
}

function isSafeHttpsUrl(value: string): boolean {
  if (!value) return false;
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== 'https:') return false;
    return !isPrivateOrLoopbackHost(parsed.hostname);
  } catch {
    return false;
  }
}

export async function onRequestPost(context: PagesContext): Promise<Response> {
  const { request, env } = context;

  const contentLengthHeader = request.headers.get('content-length');
  if (contentLengthHeader) {
    const declaredBytes = Number(contentLengthHeader);
    if (!Number.isNaN(declaredBytes) && declaredBytes > MAX_BODY_BYTES) {
      return Response.json(
        { ok: false, error: 'Request payload is too large.' },
        { status: 413 }
      );
    }
  }

  let rawText = '';
  try {
    rawText = await request.text();
  } catch {
    return Response.json(
      { ok: false, error: 'Unable to read request body.' },
      { status: 400 }
    );
  }

  if (new TextEncoder().encode(rawText).byteLength > MAX_BODY_BYTES) {
    return Response.json(
      { ok: false, error: 'Request payload is too large.' },
      { status: 413 }
    );
  }

  let body: Record<string, unknown> | null = null;
  try {
    const parsed: unknown = rawText ? JSON.parse(rawText) : null;
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      body = parsed as Record<string, unknown>;
    }
  } catch {
    return Response.json(
      { ok: false, error: 'Invalid JSON request body.' },
      { status: 400 }
    );
  }

  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const subject = typeof body?.subject === 'string' ? body.subject.trim() : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';
  const rawLang =
    typeof body?.language === 'string' ? body.language.trim().toLowerCase() : 'en';
  const language = /^[a-z]{2,8}$/.test(rawLang) ? rawLang : 'en';

  const fieldErrors: Record<string, string> = {};

  if (name.length < 2 || name.length > 120) {
    fieldErrors.name = 'Please enter a valid name (2–120 characters).';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length > 180) {
    fieldErrors.email = 'Please enter a valid email address.';
  }
  if (subject.length < 2 || subject.length > 160) {
    fieldErrors.subject = 'Please provide a clear subject.';
  }
  if (message.length < 15 || message.length > 3000) {
    fieldErrors.message = 'Please enter a message of at least 15 characters.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return Response.json(
      {
        ok: false,
        error: 'Validation failed. Please review the highlighted fields.',
        fieldErrors,
      },
      { status: 400 }
    );
  }

  const submission: ContactSubmission = {
    id: `BHD-${Date.now().toString(36).toUpperCase()}`,
    name,
    email,
    subject,
    message,
    language,
    receivedAt: new Date().toISOString(),
  };

  const webhookUrl = (env.CONTACT_WEBHOOK_URL || '').trim();
  if (webhookUrl && isSafeHttpsUrl(webhookUrl)) {
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (env.CONTACT_FORWARD_SECRET) {
        headers['X-BHD-Secret'] = env.CONTACT_FORWARD_SECRET;
      }
      await fetch(webhookUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(submission),
        signal: AbortSignal.timeout(5000),
      });
    } catch {
      // Non-fatal forwarding error; inquiry is still acknowledged cleanly.
    }
  }

  return Response.json(
    {
      ok: true,
      referenceId: submission.id,
      receivedAt: submission.receivedAt,
    },
    { status: 201 }
  );
}
