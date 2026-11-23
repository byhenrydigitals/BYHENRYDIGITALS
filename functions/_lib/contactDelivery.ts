export const OFFICIAL_RECIPIENT_EMAIL = 'byhenrydigitals@gmail.com';
export const MAX_CONTACT_BODY_BYTES = 64 * 1024;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;
const DEDUP_WINDOW_MS = 60 * 1000; // 60 seconds
const MAX_CACHE_ENTRIES = 1000;
const PROVIDER_TIMEOUT_MS = 8000;

export interface ContactEnv {
  RESEND_API_KEY?: string;
  BREVO_API_KEY?: string;
  SENDGRID_API_KEY?: string;
  MAILGUN_API_KEY?: string;
  MAILGUN_DOMAIN?: string;
  MAILGUN_BASE_URL?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_RECIPIENT_EMAIL?: string;
  CONTACT_WEBHOOK_URL?: string;
  CONTACT_FORWARD_SECRET?: string;
  VITE_SITE_URL?: string;
  APP_URL?: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  language: string;
  receivedAt: string;
}

export interface ParsedContactResult {
  ok: true;
  data: {
    name: string;
    email: string;
    subject: string;
    message: string;
    language: string;
    idempotencyKey: string;
  };
}

export interface ParsedContactError {
  ok: false;
  status: number;
  code: 'validation_failed' | 'spam_detected' | 'invalid_json';
  error: string;
  fieldErrors?: Record<string, string>;
}

interface RateBucket {
  timestamps: number[];
}

interface DedupEntry {
  createdAt: number;
  inFlight: boolean;
  referenceId?: string;
  receivedAt?: string;
}

const ipRateBuckets = new Map<string, RateBucket>();
const idempotencyStore = new Map<string, DedupEntry>();
const contentFingerprintStore = new Map<string, number>();

function pruneMapIfNeeded<K, V>(map: Map<K, V>, maxEntries = MAX_CACHE_ENTRIES) {
  if (map.size <= maxEntries) return;
  const excess = map.size - maxEntries;
  let removed = 0;
  for (const key of map.keys()) {
    map.delete(key);
    removed += 1;
    if (removed >= excess) break;
  }
}

async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  timeoutMs = PROVIDER_TIMEOUT_MS
): Promise<Response> {
  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timerId);
  }
}

export function stripHeaderControlChars(value: string): string {
  return value.replace(/[\r\n\0]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function isPrivateOrLoopbackHost(host: string): boolean {
  const normalized = host.toLowerCase().replace(/^\[|\]$/g, '');
  if (
    normalized === 'localhost' ||
    normalized === '127.0.0.1' ||
    normalized === '0.0.0.0' ||
    normalized === '::1' ||
    normalized.endsWith('.localhost') ||
    normalized.endsWith('.local') ||
    normalized.endsWith('.internal') ||
    normalized.startsWith('10.') ||
    normalized.startsWith('192.168.') ||
    normalized.startsWith('169.254.') ||
    normalized.startsWith('fe80:') ||
    normalized.startsWith('fc00:') ||
    normalized.startsWith('fd00:')
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

export function isSafeHttpsUrl(value: string): boolean {
  if (!value) return false;
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== 'https:') return false;
    return !isPrivateOrLoopbackHost(parsed.hostname);
  } catch {
    return false;
  }
}

export function isAllowedCorsOrigin(
  originHeader: string | null,
  requestHost: string | null,
  env?: Pick<ContactEnv, 'VITE_SITE_URL' | 'APP_URL'>
): string | null {
  if (!originHeader) return null;
  let parsed: URL;
  try {
    parsed = new URL(originHeader);
  } catch {
    return null;
  }

  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
    return null;
  }

  const hostname = parsed.hostname.toLowerCase();
  const normalizedHostHeader = (requestHost || '').split(':')[0].toLowerCase();

  if (normalizedHostHeader && hostname === normalizedHostHeader) {
    return parsed.origin;
  }

  if (
    hostname === 'byhenrydigitals.com' ||
    hostname === 'www.byhenrydigitals.com' ||
    hostname.endsWith('.pages.dev') ||
    hostname.endsWith('.workers.dev') ||
    hostname.endsWith('.run.app') ||
    hostname === 'localhost' ||
    hostname === '127.0.0.1'
  ) {
    return parsed.origin;
  }

  for (const configuredUrl of [env?.VITE_SITE_URL, env?.APP_URL]) {
    if (!configuredUrl) continue;
    try {
      const cfg = new URL(configuredUrl);
      if (cfg.origin === parsed.origin) {
        return parsed.origin;
      }
    } catch {
      // Ignore malformed env URL
    }
  }

  return null;
}

export function buildCorsHeaders(
  originHeader: string | null,
  requestHost: string | null,
  env?: Pick<ContactEnv, 'VITE_SITE_URL' | 'APP_URL'>
): Record<string, string> {
  const allowedOrigin = isAllowedCorsOrigin(originHeader, requestHost, env);
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
  if (allowedOrigin) {
    headers['Access-Control-Allow-Origin'] = allowedOrigin;
  }
  return headers;
}

export function getConfiguredProviders(
  env: ContactEnv & {
    SMTP_HOST?: string;
    SMTP_USER?: string;
    SMTP_PASS?: string;
  }
): string[] {
  const providers: string[] = [];
  if ((env.RESEND_API_KEY || '').trim()) providers.push('resend');
  if ((env.BREVO_API_KEY || '').trim()) providers.push('brevo');
  if ((env.SENDGRID_API_KEY || '').trim()) providers.push('sendgrid');
  if ((env.MAILGUN_API_KEY || '').trim() && (env.MAILGUN_DOMAIN || '').trim()) {
    providers.push('mailgun');
  }
  if (
    (env.SMTP_HOST || '').trim() &&
    (env.SMTP_USER || '').trim() &&
    (env.SMTP_PASS || '').trim()
  ) {
    providers.push('smtp');
  }
  if (isSafeHttpsUrl((env.CONTACT_WEBHOOK_URL || '').trim())) {
    providers.push('webhook');
  }
  return providers;
}

export function extractClientIp(
  headers: { get(name: string): string | null },
  fallbackIp?: string
): string {
  const cfIp = headers.get('cf-connecting-ip');
  if (cfIp && cfIp.trim()) return cfIp.trim();

  const forwarded = headers.get('x-forwarded-for');
  if (forwarded && forwarded.trim()) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }

  const realIp = headers.get('x-real-ip');
  if (realIp && realIp.trim()) return realIp.trim();

  return fallbackIp || 'unknown';
}

export function checkRateLimit(
  clientKey: string,
  now = Date.now()
): { allowed: boolean; retryAfterSeconds: number } {
  const key = clientKey || 'unknown';
  const bucket = ipRateBuckets.get(key) ?? { timestamps: [] };
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  bucket.timestamps = bucket.timestamps.filter((ts) => ts > cutoff);

  if (bucket.timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    const oldest = bucket.timestamps[0] ?? now;
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((oldest + RATE_LIMIT_WINDOW_MS - now) / 1000)
    );
    ipRateBuckets.set(key, bucket);
    return { allowed: false, retryAfterSeconds };
  }

  bucket.timestamps.push(now);
  ipRateBuckets.set(key, bucket);
  pruneMapIfNeeded(ipRateBuckets);
  return { allowed: true, retryAfterSeconds: 0 };
}

function buildContentFingerprint(
  email: string,
  subject: string,
  message: string
): string {
  return `${email.toLowerCase()}::${subject.toLowerCase()}::${message.slice(0, 400)}`;
}

export function acquireSubmissionLock(
  idempotencyKey: string,
  email: string,
  subject: string,
  message: string,
  now = Date.now()
):
  | { status: 'acquired' }
  | { status: 'already_delivered'; referenceId: string; receivedAt: string }
  | { status: 'duplicate_conflict' } {
  for (const [k, entry] of idempotencyStore.entries()) {
    if (now - entry.createdAt > DEDUP_WINDOW_MS) {
      idempotencyStore.delete(k);
    }
  }
  for (const [fp, ts] of contentFingerprintStore.entries()) {
    if (now - ts > DEDUP_WINDOW_MS) {
      contentFingerprintStore.delete(fp);
    }
  }

  if (idempotencyKey) {
    const existing = idempotencyStore.get(idempotencyKey);
    if (existing) {
      if (existing.inFlight) {
        return { status: 'duplicate_conflict' };
      }
      if (existing.referenceId && existing.receivedAt) {
        return {
          status: 'already_delivered',
          referenceId: existing.referenceId,
          receivedAt: existing.receivedAt,
        };
      }
    }
  }

  const fingerprint = buildContentFingerprint(email, subject, message);
  const recentFp = contentFingerprintStore.get(fingerprint);
  if (recentFp && now - recentFp < DEDUP_WINDOW_MS) {
    return { status: 'duplicate_conflict' };
  }

  if (idempotencyKey) {
    idempotencyStore.set(idempotencyKey, { createdAt: now, inFlight: true });
    pruneMapIfNeeded(idempotencyStore);
  }
  contentFingerprintStore.set(fingerprint, now);
  pruneMapIfNeeded(contentFingerprintStore);

  return { status: 'acquired' };
}

export function completeSubmissionLock(
  idempotencyKey: string,
  referenceId: string,
  receivedAt: string
) {
  if (!idempotencyKey) return;
  idempotencyStore.set(idempotencyKey, {
    createdAt: Date.now(),
    inFlight: false,
    referenceId,
    receivedAt,
  });
}

export function releaseSubmissionLockOnFailure(
  idempotencyKey: string,
  email: string,
  subject: string,
  message: string
) {
  if (idempotencyKey) {
    idempotencyStore.delete(idempotencyKey);
  }
  contentFingerprintStore.delete(buildContentFingerprint(email, subject, message));
}

export function validateContactBody(
  body: Record<string, unknown> | null | undefined,
  now = Date.now()
): ParsedContactResult | ParsedContactError {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return {
      ok: false,
      status: 400,
      code: 'invalid_json',
      error: 'Invalid request payload.',
    };
  }

  // Honeypot spam protection
  const honeypot = typeof body.website === 'string' ? body.website.trim() : '';
  if (honeypot.length > 0) {
    return {
      ok: false,
      status: 400,
      code: 'spam_detected',
      error: 'Submission rejected by spam protection.',
    };
  }

  // Optional form timing guard against automated instant POST bots
  if (typeof body.formLoadedAt === 'number' && Number.isFinite(body.formLoadedAt)) {
    const elapsedMs = now - body.formLoadedAt;
    if (elapsedMs >= 0 && elapsedMs < 400) {
      return {
        ok: false,
        status: 400,
        code: 'spam_detected',
        error: 'Please take a moment to review your message before sending.',
      };
    }
  }

  const rawName = typeof body.name === 'string' ? body.name : '';
  const rawEmail = typeof body.email === 'string' ? body.email : '';
  const rawSubject = typeof body.subject === 'string' ? body.subject : '';
  const rawMessage = typeof body.message === 'string' ? body.message : '';

  const name = stripHeaderControlChars(rawName);
  const email = stripHeaderControlChars(rawEmail);
  const subject = stripHeaderControlChars(rawSubject);
  const message = rawMessage.replace(/\0/g, '').trim();

  const rawLang =
    typeof body.language === 'string' ? body.language.trim().toLowerCase() : 'en';
  const language = /^[a-z]{2,8}$/.test(rawLang) ? rawLang : 'en';

  const rawIdempotency =
    typeof body.idempotencyKey === 'string' ? body.idempotencyKey.trim() : '';
  const idempotencyKey = rawIdempotency.slice(0, 128);

  const fieldErrors: Record<string, string> = {};

  if (name.length < 2 || name.length > 120) {
    fieldErrors.name = 'Please enter a valid name (2–120 characters).';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
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
    return {
      ok: false,
      status: 400,
      code: 'validation_failed',
      error: 'Validation failed. Please review the highlighted fields.',
      fieldErrors,
    };
  }

  // Basic link-spam guard
  const linkMatches = message.match(/https?:\/\//gi) || [];
  if (linkMatches.length > 4) {
    return {
      ok: false,
      status: 400,
      code: 'spam_detected',
      error: 'Too many external links detected in your message.',
    };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      subject,
      message,
      language,
      idempotencyKey,
    },
  };
}

export function formatReadableTimestamp(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  const formattedUtc = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'UTC',
  }).format(date);
  return `${formattedUtc} (${isoDate})`;
}

export interface FormattedContactEmail {
  recipientEmail: string;
  emailSubject: string;
  submittedAtFormatted: string;
  textBody: string;
  htmlBody: string;
}

export function buildContactEmailContent(
  submission: ContactSubmission,
  configuredRecipient?: string
): FormattedContactEmail {
  const recipientCandidate = stripHeaderControlChars(configuredRecipient || '');
  const recipientEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(recipientCandidate)
    ? recipientCandidate
    : OFFICIAL_RECIPIENT_EMAIL;

  const emailSubject = `New Website Enquiry – BHD Contact Form: ${submission.subject}`;
  const submittedAtFormatted = formatReadableTimestamp(submission.receivedAt);

  const textBody = [
    'BYHENRYDIGITALS — New Website Enquiry',
    '====================================================',
    `Reference ID: ${submission.id}`,
    `Submitted At: ${submittedAtFormatted}`,
    `Language:     ${submission.language.toUpperCase()}`,
    '',
    'Visitor Contact Details',
    '-----------------------',
    `Name:         ${submission.name}`,
    `Email:        ${submission.email}`,
    `Subject:      ${submission.subject}`,
    '',
    'Message',
    '-------',
    submission.message,
    '',
    '====================================================',
    'Sent via the official BYHENRYDIGITALS Contact Form.',
  ].join('\n');

  const safeId = escapeHtml(submission.id);
  const safeTimestamp = escapeHtml(submittedAtFormatted);
  const safeLanguage = escapeHtml(submission.language.toUpperCase());
  const safeName = escapeHtml(submission.name);
  const safeEmail = escapeHtml(submission.email);
  const safeSubject = escapeHtml(submission.subject);
  const safeMessageHtml = escapeHtml(submission.message).replace(/\n/g, '<br />');

  const htmlBody = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:24px;background-color:#0b0b0b;color:#f5f5f4;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background-color:#141414;border:1px solid #27272a;border-radius:12px;overflow:hidden;">
      <tr>
        <td style="padding:24px 28px;border-bottom:1px solid #27272a;background-color:#0b0b0b;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#eab308;">BYHENRYDIGITALS (BHD)</div>
          <h1 style="margin:6px 0 0;font-size:20px;font-weight:700;color:#f5f5f4;">New Website Enquiry – BHD Contact Form</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 28px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-size:14px;line-height:1.5;">
            <tr>
              <td style="padding:8px 0;color:#a1a1aa;width:140px;vertical-align:top;">Reference ID</td>
              <td style="padding:8px 0;color:#eab308;font-weight:700;">${safeId}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#a1a1aa;vertical-align:top;">Submitted At</td>
              <td style="padding:8px 0;color:#f5f5f4;">${safeTimestamp}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#a1a1aa;vertical-align:top;">Visitor Name</td>
              <td style="padding:8px 0;color:#f5f5f4;font-weight:600;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#a1a1aa;vertical-align:top;">Visitor Email</td>
              <td style="padding:8px 0;"><a href="mailto:${safeEmail}" style="color:#eab308;text-decoration:none;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#a1a1aa;vertical-align:top;">Subject</td>
              <td style="padding:8px 0;color:#f5f5f4;font-weight:600;">${safeSubject}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#a1a1aa;vertical-align:top;">Site Language</td>
              <td style="padding:8px 0;color:#d4d4d8;">${safeLanguage}</td>
            </tr>
          </table>

          <div style="margin-top:20px;padding:18px;border-radius:10px;background-color:#0b0b0b;border:1px solid #27272a;">
            <div style="margin-bottom:8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#eab308;">Visitor Message</div>
            <div style="font-size:14px;line-height:1.65;color:#f5f5f4;word-break:break-word;">${safeMessageHtml}</div>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 28px;border-top:1px solid #27272a;font-size:12px;color:#71717a;">
          You can reply directly to this email to respond to ${safeName} (${safeEmail}).
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return {
    recipientEmail,
    emailSubject,
    submittedAtFormatted,
    textBody,
    htmlBody,
  };
}

export type EmailDeliveryOutcome =
  | { delivered: true; provider: string }
  | {
      delivered: false;
      statusCode: 502 | 503;
      code:
        | 'delivery_not_configured'
        | 'delivery_auth_failed'
        | 'delivery_sender_unverified'
        | 'delivery_failed';
      error: string;
    };

function classifyProviderFailure(
  status: number,
  detail: string
): 'delivery_auth_failed' | 'delivery_sender_unverified' | 'delivery_failed' {
  const lower = detail.toLowerCase();
  if (status === 401) return 'delivery_auth_failed';
  if (
    status === 403 &&
    (lower.includes('domain') ||
      lower.includes('verify') ||
      lower.includes('sender') ||
      lower.includes('testing emails'))
  ) {
    return 'delivery_sender_unverified';
  }
  return 'delivery_failed';
}

function parseFromHeader(
  rawFrom: string | undefined,
  fallbackEmail: string
): {
  email: string;
  name: string;
  formatted: string;
} {
  const cleaned = stripHeaderControlChars(rawFrom || '');
  const angleMatch = /^(.*?)<([^>]+)>$/.exec(cleaned);
  if (angleMatch) {
    const name = angleMatch[1].trim().replace(/^"|"$/g, '') || 'BYHENRYDIGITALS';
    const email = angleMatch[2].trim();
    return { email, name, formatted: `${name} <${email}>` };
  }
  if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleaned)) {
    return {
      email: cleaned,
      name: 'BYHENRYDIGITALS Website',
      formatted: `BYHENRYDIGITALS Website <${cleaned}>`,
    };
  }
  return {
    email: fallbackEmail,
    name: 'BYHENRYDIGITALS Website',
    formatted: `BYHENRYDIGITALS Website <${fallbackEmail}>`,
  };
}

export async function deliverContactEmail(
  submission: ContactSubmission,
  env: ContactEnv,
  nodeSmtpFallback?: (
    submission: ContactSubmission,
    formatted: FormattedContactEmail
  ) => Promise<EmailDeliveryOutcome | null>
): Promise<EmailDeliveryOutcome> {
  const formatted = buildContactEmailContent(
    submission,
    env.CONTACT_RECIPIENT_EMAIL
  );

  const resendKey = (env.RESEND_API_KEY || '').trim();
  if (resendKey) {
    try {
      const fromAddress =
        stripHeaderControlChars(env.CONTACT_FROM_EMAIL || '') ||
        'BYHENRYDIGITALS Contact <onboarding@resend.dev>';

      const response = await fetchWithTimeout('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [formatted.recipientEmail],
          reply_to: submission.email,
          subject: formatted.emailSubject,
          html: formatted.htmlBody,
          text: formatted.textBody,
        }),
      });

      if (response.ok) {
        return { delivered: true, provider: 'resend' };
      }

      const detail = await response.text().catch(() => '');
      console.error('Resend delivery failed:', response.status, detail.slice(0, 300));
      return {
        delivered: false,
        statusCode: 502,
        code: classifyProviderFailure(response.status, detail),
        error:
          "We couldn't deliver your message right now. Please try again or contact us directly.",
      };
    } catch (err) {
      console.error('Resend network error:', err);
      return {
        delivered: false,
        statusCode: 502,
        code: 'delivery_failed',
        error:
          "We couldn't deliver your message right now. Please try again or contact us directly.",
      };
    }
  }

  const brevoKey = (env.BREVO_API_KEY || '').trim();
  if (brevoKey) {
    try {
      const sender = parseFromHeader(
        env.CONTACT_FROM_EMAIL,
        formatted.recipientEmail
      );
      const response = await fetchWithTimeout(
        'https://api.brevo.com/v3/smtp/email',
        {
          method: 'POST',
          headers: {
            'api-key': brevoKey,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            sender: { email: sender.email, name: sender.name },
            to: [{ email: formatted.recipientEmail, name: 'BYHENRYDIGITALS' }],
            replyTo: { email: submission.email, name: submission.name },
            subject: formatted.emailSubject,
            htmlContent: formatted.htmlBody,
            textContent: formatted.textBody,
          }),
        }
      );

      if (response.ok) {
        return { delivered: true, provider: 'brevo' };
      }

      const detail = await response.text().catch(() => '');
      console.error('Brevo delivery failed:', response.status, detail.slice(0, 300));
      return {
        delivered: false,
        statusCode: 502,
        code: classifyProviderFailure(response.status, detail),
        error:
          "We couldn't deliver your message right now. Please try again or contact us directly.",
      };
    } catch (err) {
      console.error('Brevo network error:', err);
      return {
        delivered: false,
        statusCode: 502,
        code: 'delivery_failed',
        error:
          "We couldn't deliver your message right now. Please try again or contact us directly.",
      };
    }
  }

  const sendgridKey = (env.SENDGRID_API_KEY || '').trim();
  if (sendgridKey) {
    try {
      const sender = parseFromHeader(
        env.CONTACT_FROM_EMAIL,
        formatted.recipientEmail
      );
      const response = await fetchWithTimeout(
        'https://api.sendgrid.com/v3/mail/send',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${sendgridKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{ email: formatted.recipientEmail, name: 'BYHENRYDIGITALS' }],
                subject: formatted.emailSubject,
              },
            ],
            from: { email: sender.email, name: sender.name },
            reply_to: { email: submission.email, name: submission.name },
            content: [
              { type: 'text/plain', value: formatted.textBody },
              { type: 'text/html', value: formatted.htmlBody },
            ],
          }),
        }
      );

      if (response.ok) {
        return { delivered: true, provider: 'sendgrid' };
      }

      const detail = await response.text().catch(() => '');
      console.error('SendGrid delivery failed:', response.status, detail.slice(0, 300));
      return {
        delivered: false,
        statusCode: 502,
        code: classifyProviderFailure(response.status, detail),
        error:
          "We couldn't deliver your message right now. Please try again or contact us directly.",
      };
    } catch (err) {
      console.error('SendGrid network error:', err);
      return {
        delivered: false,
        statusCode: 502,
        code: 'delivery_failed',
        error:
          "We couldn't deliver your message right now. Please try again or contact us directly.",
      };
    }
  }

  const mailgunKey = (env.MAILGUN_API_KEY || '').trim();
  const mailgunDomain = stripHeaderControlChars(env.MAILGUN_DOMAIN || '');
  if (mailgunKey && mailgunDomain && /^[a-z0-9.-]+$/i.test(mailgunDomain)) {
    try {
      const baseUrl = isSafeHttpsUrl(env.MAILGUN_BASE_URL || '')
        ? (env.MAILGUN_BASE_URL || '').replace(/\/+$/, '')
        : 'https://api.mailgun.net';
      const sender = parseFromHeader(
        env.CONTACT_FROM_EMAIL,
        `postmaster@${mailgunDomain}`
      );
      const form = new URLSearchParams();
      form.set('from', sender.formatted);
      form.set('to', formatted.recipientEmail);
      form.set('h:Reply-To', `${submission.name} <${submission.email}>`);
      form.set('subject', formatted.emailSubject);
      form.set('text', formatted.textBody);
      form.set('html', formatted.htmlBody);

      const authHeader = `Basic ${btoa(`api:${mailgunKey}`)}`;
      const response = await fetchWithTimeout(
        `${baseUrl}/v3/${mailgunDomain}/messages`,
        {
          method: 'POST',
          headers: {
            Authorization: authHeader,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: form.toString(),
        }
      );

      if (response.ok) {
        return { delivered: true, provider: 'mailgun' };
      }

      const detail = await response.text().catch(() => '');
      console.error('Mailgun delivery failed:', response.status, detail.slice(0, 300));
      return {
        delivered: false,
        statusCode: 502,
        code: classifyProviderFailure(response.status, detail),
        error:
          "We couldn't deliver your message right now. Please try again or contact us directly.",
      };
    } catch (err) {
      console.error('Mailgun network error:', err);
      return {
        delivered: false,
        statusCode: 502,
        code: 'delivery_failed',
        error:
          "We couldn't deliver your message right now. Please try again or contact us directly.",
      };
    }
  }

  if (nodeSmtpFallback) {
    const smtpOutcome = await nodeSmtpFallback(submission, formatted);
    if (smtpOutcome) {
      return smtpOutcome;
    }
  }

  const webhookUrl = (env.CONTACT_WEBHOOK_URL || '').trim();
  if (webhookUrl) {
    if (!isSafeHttpsUrl(webhookUrl)) {
      console.error('Configured CONTACT_WEBHOOK_URL rejected by HTTPS safety check.');
      return {
        delivered: false,
        statusCode: 503,
        code: 'delivery_not_configured',
        error:
          "We couldn't deliver your message right now. Please try again or contact us directly.",
      };
    }

    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (env.CONTACT_FORWARD_SECRET) {
        headers['X-BHD-Secret'] = env.CONTACT_FORWARD_SECRET;
      }
      const response = await fetchWithTimeout(webhookUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          recipientEmail: formatted.recipientEmail,
          emailSubject: formatted.emailSubject,
          submittedAt: formatted.submittedAtFormatted,
          submission,
          textBody: formatted.textBody,
          htmlBody: formatted.htmlBody,
        }),
      });

      if (response.ok) {
        return { delivered: true, provider: 'webhook' };
      }

      const detail = await response.text().catch(() => '');
      console.error('Webhook delivery failed:', response.status, detail.slice(0, 300));
      return {
        delivered: false,
        statusCode: 502,
        code: 'delivery_failed',
        error:
          "We couldn't deliver your message right now. Please try again or contact us directly.",
      };
    } catch (err) {
      console.error('Webhook network error:', err);
      return {
        delivered: false,
        statusCode: 502,
        code: 'delivery_failed',
        error:
          "We couldn't deliver your message right now. Please try again or contact us directly.",
      };
    }
  }

  console.error(
    'Contact email delivery aborted: no email provider secret configured (RESEND_API_KEY, BREVO_API_KEY, SENDGRID_API_KEY, MAILGUN_API_KEY/DOMAIN, SMTP_*, or CONTACT_WEBHOOK_URL).'
  );
  return {
    delivered: false,
    statusCode: 503,
    code: 'delivery_not_configured',
    error:
      "We couldn't deliver your message right now. Please try again or contact us directly.",
  };
}
