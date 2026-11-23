import { FormEvent, useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { SocialPlatformIcon } from '../components/SocialIcons';

interface ContactPageProps {
  initialSubject?: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function generateIdempotencyKey(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `bhd-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function ContactPage({ initialSubject = '' }: ContactPageProps) {
  const { t, language } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const inFlightRef = useRef(false);
  const formLoadedAtRef = useRef<number>(Date.now());
  const idempotencyKeyRef = useRef<string>(generateIdempotencyKey());

  useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
    }
  }, [initialSubject]);

  const validateClient = (): FieldErrors => {
    const next: FieldErrors = {};
    if (name.trim().length < 2 || name.trim().length > 120) {
      next.name = t.contact.validation.nameError;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(email.trim()) || email.trim().length > 180) {
      next.email = t.contact.validation.emailError;
    }
    if (subject.trim().length < 2 || subject.trim().length > 160) {
      next.subject = t.contact.validation.subjectError;
    }
    if (message.trim().length < 15 || message.trim().length > 3000) {
      next.message = t.contact.validation.messageError;
    }
    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inFlightRef.current || submitting) {
      return;
    }

    setSubmitError(null);

    const clientErrors = validateClient();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    inFlightRef.current = true;
    setErrors({});
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          website: honeypot,
          language,
          formLoadedAt: formLoadedAtRef.current,
          idempotencyKey: idempotencyKeyRef.current,
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.ok) {
        if (payload?.fieldErrors) {
          setErrors({
            name: payload.fieldErrors.name ? t.contact.validation.nameError : undefined,
            email: payload.fieldErrors.email ? t.contact.validation.emailError : undefined,
            subject: payload.fieldErrors.subject ? t.contact.validation.subjectError : undefined,
            message: payload.fieldErrors.message ? t.contact.validation.messageError : undefined,
          });
        }

        if (response.status === 429 || payload?.code === 'rate_limited') {
          setSubmitError(t.contact.validation.rateLimitError);
        } else if (response.status === 409 || payload?.code === 'duplicate_submission') {
          setSubmitError(t.contact.validation.duplicateError);
        } else {
          setSubmitError(t.contact.validation.genericSubmitError);
        }
        return;
      }

      setReferenceId(payload.referenceId || 'BHD-INQUIRY');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setHoneypot('');
      idempotencyKeyRef.current = generateIdempotencyKey();
      formLoadedAtRef.current = Date.now();
    } catch {
      setSubmitError(t.contact.validation.networkError);
    } finally {
      inFlightRef.current = false;
      setSubmitting(false);
    }
  };

  const handleResetSuccess = () => {
    setReferenceId(null);
    setSubmitError(null);
    setErrors({});
    idempotencyKeyRef.current = generateIdempotencyKey();
    formLoadedAtRef.current = Date.now();
  };

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="max-w-3xl space-y-4">
        <p className="text-xs font-medium text-[#eab308]">{t.contact.kicker}</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-balance text-[#f5f5f4] sm:text-4xl">
          {t.contact.title}
        </h1>
        <p className="text-base leading-relaxed text-[#a1a1aa]">
          {t.contact.intro}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Form Card */}
        <div className="min-w-0 rounded-2xl border border-white/[0.1] bg-[#141414] p-5 sm:p-8 lg:col-span-7">
          {referenceId ? (
            <div
              role="status"
              aria-live="polite"
              className="space-y-6 rounded-xl border border-[#eab308]/40 bg-[#0b0b0b] p-5 sm:p-7"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#eab308]/40 bg-[#eab308]/15 text-[#eab308]">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-2xl font-semibold text-[#f5f5f4]">
                  {t.contact.successTitle}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#f5f5f4]">
                  {t.contact.successBody}
                </p>
                <div className="inline-flex flex-wrap items-center gap-2 rounded-lg border border-white/[0.1] bg-[#141414] px-3.5 py-2 text-xs text-[#a1a1aa]">
                  <span>{t.contact.referenceLabel}:</span>
                  <span className="font-mono-tabular font-semibold text-[#eab308]">
                    {referenceId}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleResetSuccess}
                className="min-h-[44px] rounded-lg border border-[#eab308]/50 bg-[#141414] px-5 py-2 text-xs font-semibold text-[#f5f5f4] hover:border-[#eab308] hover:text-[#eab308] transition-colors cursor-pointer"
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <h2 className="font-display text-xl font-semibold text-[#f5f5f4]">
                {t.contact.formTitle}
              </h2>

              {/* Honeypot field for basic automated spam prevention */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {submitError && (
                <div
                  role="alert"
                  className="space-y-2.5 rounded-xl border border-[#f87171]/40 bg-[#f87171]/10 p-4 text-xs sm:text-sm text-[#fca5a5]"
                >
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 ps-6 text-xs">
                    <a
                      href={SITE_CONFIG.mailtoUrl}
                      className="font-semibold text-[#eab308] underline underline-offset-2 hover:text-[#facc15]"
                    >
                      {SITE_CONFIG.contactEmail}
                    </a>
                    <span aria-hidden="true" className="text-white/30">
                      ·
                    </span>
                    <a
                      href={SITE_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#eab308] underline underline-offset-2 hover:text-[#facc15]"
                    >
                      <span>{t.contact.whatsappUsButton}</span>
                      <ArrowUpRight className="h-3 w-3 shrink-0" />
                    </a>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="min-w-0 space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-[#d4d4d8]"
                  >
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    disabled={submitting}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      idempotencyKeyRef.current = generateIdempotencyKey();
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder={t.contact.namePlaceholder}
                    className="min-h-[44px] w-full rounded-lg border border-white/[0.12] bg-[#0b0b0b] px-3.5 py-2.5 text-sm text-[#f5f5f4] placeholder:text-[#52525b] focus:border-[#eab308] focus:outline-none disabled:opacity-60"
                  />
                  {errors.name && (
                    <p className="text-xs text-[#f87171]">{errors.name}</p>
                  )}
                </div>

                <div className="min-w-0 space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-[#d4d4d8]"
                  >
                    {t.contact.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    disabled={submitting}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      idempotencyKeyRef.current = generateIdempotencyKey();
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder={t.contact.emailPlaceholder}
                    className="min-h-[44px] w-full rounded-lg border border-white/[0.12] bg-[#0b0b0b] px-3.5 py-2.5 text-sm text-[#f5f5f4] placeholder:text-[#52525b] focus:border-[#eab308] focus:outline-none disabled:opacity-60"
                  />
                  {errors.email && (
                    <p className="text-xs text-[#f87171]">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium text-[#d4d4d8]"
                >
                  {t.contact.subjectLabel}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  disabled={submitting}
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    idempotencyKeyRef.current = generateIdempotencyKey();
                    if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined }));
                  }}
                  placeholder={t.contact.subjectPlaceholder}
                  className="min-h-[44px] w-full rounded-lg border border-white/[0.12] bg-[#0b0b0b] px-3.5 py-2.5 text-sm text-[#f5f5f4] placeholder:text-[#52525b] focus:border-[#eab308] focus:outline-none disabled:opacity-60"
                />
                {errors.subject && (
                  <p className="text-xs text-[#f87171]">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-[#d4d4d8]"
                >
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  disabled={submitting}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    idempotencyKeyRef.current = generateIdempotencyKey();
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full rounded-lg border border-white/[0.12] bg-[#0b0b0b] px-3.5 py-2.5 text-sm text-[#f5f5f4] placeholder:text-[#52525b] focus:border-[#eab308] focus:outline-none disabled:opacity-60"
                />
                {errors.message && (
                  <p className="text-xs text-[#f87171]">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#eab308] px-6 py-2.5 text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] disabled:opacity-70 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                {submitting ? (
                  <Loader2 className="h-4 w-4 shrink-0 animate-spin" />
                ) : (
                  <Send className="h-4 w-4 shrink-0" />
                )}
                <span>
                  {submitting ? t.contact.submitting : t.contact.submitCta}
                </span>
              </button>
            </form>
          )}
        </div>

        {/* Official BHD Contact Channels & Verified Storefront */}
        <aside className="min-w-0 space-y-6 lg:col-span-5">
          <div className="rounded-2xl border border-white/[0.1] bg-[#141414] p-5 sm:p-7 space-y-5">
            <div className="space-y-1.5">
              <h2 className="font-display text-lg font-semibold text-[#f5f5f4]">
                {t.contact.detailsTitle}
              </h2>
              <p className="text-xs leading-relaxed text-[#a1a1aa]">
                {t.contact.directChannelsNotice}
              </p>
            </div>

            {/* Primary Direct Action Buttons */}
            <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-3">
              <a
                href={SITE_CONFIG.mailtoUrl}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/[0.16] bg-[#0b0b0b] px-4 py-2.5 text-center text-xs font-semibold text-[#f5f5f4] hover:border-[#eab308] hover:text-[#eab308] transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#eab308]" />
                <span>{t.contact.emailUsButton}</span>
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#eab308] px-4 py-2.5 text-center text-xs font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>{t.contact.whatsappUsButton}</span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
              </a>
            </div>

            <dl className="divide-y divide-white/[0.08] text-xs">
              <div className="py-3 space-y-1">
                <dt className="text-[#71717a]">{t.contact.emailChannelLabel}</dt>
                <dd>
                  <a
                    href={SITE_CONFIG.mailtoUrl}
                    className="font-medium text-[#eab308] hover:underline break-all"
                  >
                    {SITE_CONFIG.contactEmail}
                  </a>
                </dd>
              </div>
              <div className="py-3 space-y-1">
                <dt className="text-[#71717a]">{t.contact.whatsappChannelLabel}</dt>
                <dd>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[#eab308] hover:underline"
                  >
                    <span>{SITE_CONFIG.whatsappNumberDisplay}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </dd>
              </div>
              <div className="py-3 space-y-1">
                <dt className="text-[#71717a]">{t.contact.responseChannelLabel}</dt>
                <dd className="text-[#f5f5f4]">
                  {t.contact.responseChannelValue}
                </dd>
              </div>
              <div className="py-3 space-y-1">
                <dt className="text-[#71717a]">{t.contact.storefrontLabel}</dt>
                <dd>
                  <a
                    href={SITE_CONFIG.selarStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#eab308] hover:underline break-all"
                  >
                    <span>{SITE_CONFIG.selarStoreUrl}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-white/[0.1] bg-[#141414] p-5 sm:p-7 space-y-4">
            <div className="space-y-1">
              <h2 className="font-display text-lg font-semibold text-[#f5f5f4]">
                {t.social.heading}
              </h2>
              <p className="text-xs leading-relaxed text-[#a1a1aa]">
                {t.social.description}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name} — BYHENRYDIGITALS`}
                  className="group flex min-h-[44px] min-w-0 items-center justify-between gap-2.5 rounded-xl border border-white/[0.1] bg-[#0b0b0b] px-3.5 py-2.5 text-xs text-[#f5f5f4] transition-colors hover:border-[#eab308]/60 hover:text-[#eab308]"
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    <SocialPlatformIcon platform={item.id} className="h-4 w-4 shrink-0" />
                    <span className="font-medium truncate">{item.name}</span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[#71717a] group-hover:text-[#eab308]" />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
