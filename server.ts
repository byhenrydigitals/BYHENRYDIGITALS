import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '64kb' }));

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  language: string;
  receivedAt: string;
}

const recentInquiries: ContactSubmission[] = [];

function isSafeHttpsUrl(value: string): boolean {
  if (!value) return false;
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== 'https:') return false;
    const host = parsed.hostname.toLowerCase();
    if (
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '::1' ||
      host.startsWith('10.') ||
      host.startsWith('192.168.') ||
      host === '169.254.169.254'
    ) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'BYHENRYDIGITALS' });
});

app.post('/api/contact', async (req, res) => {
  const body = req.body as Record<string, unknown> | undefined;
  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const subject = typeof body?.subject === 'string' ? body.subject.trim() : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';
  const language =
    typeof body?.language === 'string' ? body.language.trim() : 'en';

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
    fieldErrors.message =
      'Please enter a message of at least 15 characters.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return res.status(400).json({
      ok: false,
      error: 'Validation failed. Please review the highlighted fields.',
      fieldErrors,
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

  recentInquiries.unshift(submission);
  if (recentInquiries.length > 50) {
    recentInquiries.length = 50;
  }

  const webhookUrl = (process.env.CONTACT_WEBHOOK_URL || '').trim();
  if (webhookUrl && isSafeHttpsUrl(webhookUrl)) {
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (process.env.CONTACT_FORWARD_SECRET) {
        headers['X-BHD-Secret'] = process.env.CONTACT_FORWARD_SECRET;
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

  return res.status(201).json({
    ok: true,
    referenceId: submission.id,
    receivedAt: submission.receivedAt,
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
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`BYHENRYDIGITALS server listening on port ${PORT}`);
  });
}

startServer();
