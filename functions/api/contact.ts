import {
  acquireSubmissionLock,
  buildCorsHeaders,
  checkRateLimit,
  completeSubmissionLock,
  type ContactEnv,
  type ContactSubmission,
  deliverContactEmail,
  extractClientIp,
  MAX_CONTACT_BODY_BYTES,
  OFFICIAL_RECIPIENT_EMAIL,
  releaseSubmissionLockOnFailure,
  validateContactBody,
} from '../_lib/contactDelivery.ts';

interface PagesContext {
  request: Request;
  env: ContactEnv;
}

export async function onRequestOptions(context: PagesContext): Promise<Response> {
  const { request, env } = context;
  const corsHeaders = buildCorsHeaders(
    request.headers.get('origin'),
    request.headers.get('host'),
    env
  );
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function onRequestPost(context: PagesContext): Promise<Response> {
  const { request, env } = context;
  const corsHeaders = buildCorsHeaders(
    request.headers.get('origin'),
    request.headers.get('host'),
    env
  );

  const jsonResponse = (
    payload: Record<string, unknown>,
    status: number,
    extraHeaders?: Record<string, string>
  ) =>
    Response.json(payload, {
      status,
      headers: {
        ...corsHeaders,
        'Cache-Control': 'no-store',
        ...(extraHeaders || {}),
      },
    });

  const contentLengthHeader = request.headers.get('content-length');
  if (contentLengthHeader) {
    const declaredBytes = Number(contentLengthHeader);
    if (!Number.isNaN(declaredBytes) && declaredBytes > MAX_CONTACT_BODY_BYTES) {
      return jsonResponse(
        { ok: false, code: 'payload_too_large', error: 'Request payload is too large.' },
        413
      );
    }
  }

  let rawText = '';
  try {
    rawText = await request.text();
  } catch {
    return jsonResponse(
      { ok: false, code: 'invalid_body', error: 'Unable to read request body.' },
      400
    );
  }

  if (new TextEncoder().encode(rawText).byteLength > MAX_CONTACT_BODY_BYTES) {
    return jsonResponse(
      { ok: false, code: 'payload_too_large', error: 'Request payload is too large.' },
      413
    );
  }

  let body: Record<string, unknown> | null = null;
  try {
    const parsed: unknown = rawText ? JSON.parse(rawText) : null;
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      body = parsed as Record<string, unknown>;
    }
  } catch {
    return jsonResponse(
      { ok: false, code: 'invalid_json', error: 'Invalid JSON request body.' },
      400
    );
  }

  const parsedResult = validateContactBody(body);
  if (!parsedResult.ok) {
    return jsonResponse(
      {
        ok: false,
        code: parsedResult.code,
        error: parsedResult.error,
        ...(parsedResult.fieldErrors ? { fieldErrors: parsedResult.fieldErrors } : {}),
      },
      parsedResult.status
    );
  }

  const clientIp = extractClientIp(request.headers);
  const rateLimit = checkRateLimit(clientIp);
  if (!rateLimit.allowed) {
    return jsonResponse(
      {
        ok: false,
        code: 'rate_limited',
        error:
          'Too many enquiries sent recently. Please wait a few minutes or contact us directly.',
        retryAfterSeconds: rateLimit.retryAfterSeconds,
      },
      429,
      { 'Retry-After': String(rateLimit.retryAfterSeconds) }
    );
  }

  const { name, email, subject, message, language, idempotencyKey } =
    parsedResult.data;

  const lock = acquireSubmissionLock(idempotencyKey, email, subject, message);
  if (lock.status === 'already_delivered') {
    return jsonResponse(
      {
        ok: true,
        referenceId: lock.referenceId,
        receivedAt: lock.receivedAt,
        recipientEmail: OFFICIAL_RECIPIENT_EMAIL,
        deduplicated: true,
      },
      200
    );
  }
  if (lock.status === 'duplicate_conflict') {
    return jsonResponse(
      {
        ok: false,
        code: 'duplicate_submission',
        error:
          'This enquiry was just submitted. Please wait a moment before sending again.',
      },
      409
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

  const outcome = await deliverContactEmail(submission, env);
  if (!outcome.delivered) {
    releaseSubmissionLockOnFailure(idempotencyKey, email, subject, message);
    return jsonResponse(
      {
        ok: false,
        code: outcome.code,
        error: outcome.error,
      },
      outcome.statusCode
    );
  }

  completeSubmissionLock(idempotencyKey, submission.id, submission.receivedAt);

  return jsonResponse(
    {
      ok: true,
      referenceId: submission.id,
      receivedAt: submission.receivedAt,
      recipientEmail: OFFICIAL_RECIPIENT_EMAIL,
    },
    201
  );
}
