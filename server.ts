import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  acquireSubmissionLock,
  buildCorsHeaders,
  checkRateLimit,
  completeSubmissionLock,
  type ContactSubmission,
  deliverContactEmail,
  type EmailDeliveryOutcome,
  extractClientIp,
  type FormattedContactEmail,
  getConfiguredProviders,
  OFFICIAL_RECIPIENT_EMAIL,
  releaseSubmissionLockOnFailure,
  validateContactBody,
} from './functions/_lib/contactDelivery.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('trust proxy', 1);
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '64kb' }));

async function sendViaNodeSmtp(
  submission: ContactSubmission,
  formatted: FormattedContactEmail
): Promise<EmailDeliveryOutcome | null> {
  const host = (process.env.SMTP_HOST || '').trim();
  const user = (process.env.SMTP_USER || '').trim();
  const pass = (process.env.SMTP_PASS || '').trim();

  if (!host || !user || !pass) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT) || 465;
  const secure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE.toLowerCase() === 'true'
      : port === 465;

  const fromAddress =
    (process.env.CONTACT_FROM_EMAIL || '').trim() ||
    `BYHENRYDIGITALS Website <${user}>`;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 10000,
    });

    await transporter.sendMail({
      from: fromAddress,
      to: formatted.recipientEmail,
      replyTo: `${submission.name} <${submission.email}>`,
      subject: formatted.emailSubject,
      text: formatted.textBody,
      html: formatted.htmlBody,
    });

    return { delivered: true, provider: 'smtp' };
  } catch (err) {
    console.error('SMTP delivery failed:', err);
    return {
      delivered: false,
      statusCode: 502,
      code: 'delivery_failed',
      error:
        "We couldn't deliver your message right now. Please try again or contact us directly.",
    };
  }
}

app.get('/api/health', (_req, res) => {
  const configuredProviders = getConfiguredProviders(process.env);
  res.setHeader('Cache-Control', 'no-store');
  res.json({
    ok: true,
    service: 'BYHENRYDIGITALS',
    recipient: OFFICIAL_RECIPIENT_EMAIL,
    contactDeliveryConfigured: configuredProviders.length > 0,
    activeProvider: configuredProviders[0] ?? null,
  });
});

app.options('/api/contact', (req, res) => {
  const corsHeaders = buildCorsHeaders(
    typeof req.headers.origin === 'string' ? req.headers.origin : null,
    typeof req.headers.host === 'string' ? req.headers.host : null,
    process.env
  );
  for (const [k, v] of Object.entries(corsHeaders)) {
    res.setHeader(k, v);
  }
  return res.status(204).end();
});

app.post('/api/contact', async (req, res) => {
  const corsHeaders = buildCorsHeaders(
    typeof req.headers.origin === 'string' ? req.headers.origin : null,
    typeof req.headers.host === 'string' ? req.headers.host : null,
    process.env
  );
  for (const [k, v] of Object.entries(corsHeaders)) {
    res.setHeader(k, v);
  }
  res.setHeader('Cache-Control', 'no-store');

  const body = req.body as Record<string, unknown> | undefined;
  const parsedResult = validateContactBody(body);

  if (!parsedResult.ok) {
    return res.status(parsedResult.status).json({
      ok: false,
      code: parsedResult.code,
      error: parsedResult.error,
      ...(parsedResult.fieldErrors ? { fieldErrors: parsedResult.fieldErrors } : {}),
    });
  }

  const clientIp = extractClientIp(
    {
      get(headerName: string) {
        const value = req.headers[headerName.toLowerCase()];
        if (Array.isArray(value)) return value[0] ?? null;
        return typeof value === 'string' ? value : null;
      },
    },
    req.ip || req.socket?.remoteAddress
  );

  const rateLimit = checkRateLimit(clientIp);
  if (!rateLimit.allowed) {
    res.setHeader('Retry-After', String(rateLimit.retryAfterSeconds));
    return res.status(429).json({
      ok: false,
      code: 'rate_limited',
      error:
        'Too many enquiries sent recently. Please wait a few minutes or contact us directly.',
      retryAfterSeconds: rateLimit.retryAfterSeconds,
    });
  }

  const { name, email, subject, message, language, idempotencyKey } =
    parsedResult.data;

  const lock = acquireSubmissionLock(idempotencyKey, email, subject, message);
  if (lock.status === 'already_delivered') {
    return res.status(200).json({
      ok: true,
      referenceId: lock.referenceId,
      receivedAt: lock.receivedAt,
      recipientEmail: OFFICIAL_RECIPIENT_EMAIL,
      deduplicated: true,
    });
  }
  if (lock.status === 'duplicate_conflict') {
    return res.status(409).json({
      ok: false,
      code: 'duplicate_submission',
      error:
        'This enquiry was just submitted. Please wait a moment before sending again.',
    });
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

  const outcome = await deliverContactEmail(
    submission,
    {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      BREVO_API_KEY: process.env.BREVO_API_KEY,
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
      MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
      MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
      MAILGUN_BASE_URL: process.env.MAILGUN_BASE_URL,
      CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
      CONTACT_RECIPIENT_EMAIL: process.env.CONTACT_RECIPIENT_EMAIL,
      CONTACT_WEBHOOK_URL: process.env.CONTACT_WEBHOOK_URL,
      CONTACT_FORWARD_SECRET: process.env.CONTACT_FORWARD_SECRET,
      VITE_SITE_URL: process.env.VITE_SITE_URL,
      APP_URL: process.env.APP_URL,
    },
    sendViaNodeSmtp
  );

  if (!outcome.delivered) {
    releaseSubmissionLockOnFailure(idempotencyKey, email, subject, message);
    return res.status(outcome.statusCode).json({
      ok: false,
      code: outcome.code,
      error: outcome.error,
    });
  }

  completeSubmissionLock(idempotencyKey, submission.id, submission.receivedAt);

  return res.status(201).json({
    ok: true,
    referenceId: submission.id,
    receivedAt: submission.receivedAt,
    recipientEmail: OFFICIAL_RECIPIENT_EMAIL,
  });
});

async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath, { extensions: ['html'] }));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    const configuredProviders = getConfiguredProviders(process.env);
    console.log(
      `BYHENRYDIGITALS server listening on port ${PORT} (email providers configured: ${
        configuredProviders.length > 0 ? configuredProviders.join(', ') : 'none'
      })`
    );
  });
}

startServer();
