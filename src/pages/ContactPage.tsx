import { useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  MessagesSquare,
  Store,
} from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { SocialPlatformIcon } from '../components/SocialIcons';

const TALLY_EMBED_URL =
  'https://tally.so/embed/9N7284?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';
const TALLY_WIDGET_SCRIPT_SRC = 'https://tally.so/widgets/embed.js';

declare global {
  interface Window {
    Tally?: {
      loadEmbeds?: () => void;
    };
  }
}

interface ContactPageProps {
  initialSubject?: string;
}

export function ContactPage({ initialSubject }: ContactPageProps) {
  const { t } = useLanguage();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const loadTally = () => {
      if (typeof window !== 'undefined' && window.Tally?.loadEmbeds) {
        window.Tally.loadEmbeds();
      } else if (iframeRef.current && !iframeRef.current.getAttribute('src')) {
        iframeRef.current.setAttribute('src', TALLY_EMBED_URL);
      }
    };

    if (typeof document === 'undefined') return;

    if (window.Tally?.loadEmbeds) {
      loadTally();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${TALLY_WIDGET_SCRIPT_SRC}"]`
    );

    if (existingScript) {
      existingScript.addEventListener('load', loadTally);
      existingScript.addEventListener('error', loadTally);
      const fallbackTimer = window.setTimeout(loadTally, 1200);
      return () => {
        window.clearTimeout(fallbackTimer);
        existingScript.removeEventListener('load', loadTally);
        existingScript.removeEventListener('error', loadTally);
      };
    }

    const script = document.createElement('script');
    script.src = TALLY_WIDGET_SCRIPT_SRC;
    script.async = true;
    script.addEventListener('load', loadTally);
    script.addEventListener('error', loadTally);
    document.body.appendChild(script);
    const fallbackTimer = window.setTimeout(loadTally, 1500);

    return () => {
      window.clearTimeout(fallbackTimer);
      script.removeEventListener('load', loadTally);
      script.removeEventListener('error', loadTally);
    };
  }, []);

  return (
    <section className="min-w-0 bg-[#0e121a] text-[#f5f4f0]">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-[#eab308]">{t.contact.kicker}</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-balance text-[#f5f4f0] sm:text-4xl">
            {t.contact.title}
          </h1>
          <p className="text-base leading-relaxed text-[#b0b4be]">
            {t.contact.intro}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Official BYHENRYDIGITALS Enquiry Form (Embedded via Tally) */}
          <div className="min-w-0 rounded-xl border border-white/[0.12] bg-[#121824] p-4 sm:p-7 lg:col-span-7">
            <div className="mb-4 space-y-2 border-b border-white/[0.08] pb-3.5">
              <h2 className="font-display text-xl font-semibold text-[#f5f4f0]">
                {t.contact.formTitle}
              </h2>
              {initialSubject && (
                <p className="text-xs text-[#b0b4be]">
                  <span className="font-semibold text-[#eab308]">
                    {t.contact.selectedTopicLabel}:{' '}
                  </span>
                  <span className="text-[#f5f4f0]">{initialSubject}</span>
                </p>
              )}
            </div>

            <div className="w-full min-w-0 overflow-hidden">
              <iframe
                ref={iframeRef}
                data-tally-src={TALLY_EMBED_URL}
                width="100%"
                height={720}
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title={t.contact.formTitle}
                className="block w-full max-w-full border-0 bg-transparent"
              />
            </div>
          </div>

          {/* Official BHD Contact Channels & Verified Storefront */}
          <aside className="min-w-0 space-y-6 lg:col-span-5">
            <div className="rounded-xl border border-white/[0.12] bg-[#121824] p-4 sm:p-7 space-y-5">
              <div className="space-y-1.5">
                <h2 className="font-display text-lg font-semibold text-[#f5f4f0]">
                  {t.contact.detailsTitle}
                </h2>
                <p className="text-xs leading-relaxed text-[#b0b4be]">
                  {t.contact.directChannelsNotice}
                </p>
              </div>

              {/* Primary Direct Action Buttons */}
              <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-3">
                <a
                  href={SITE_CONFIG.mailtoUrl}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/[0.16] bg-[#0b0c0f] px-4 py-2.5 text-center text-xs font-semibold text-[#f5f4f0] hover:border-[#eab308] hover:text-[#eab308] transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#eab308]" />
                  <span>{t.contact.emailUsButton}</span>
                </a>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#2dd4bf] px-4 py-2.5 text-center text-xs font-semibold text-[#06211d] hover:bg-[#5eead4] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>{t.contact.whatsappUsButton}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              </div>

              <dl className="divide-y divide-white/[0.08] text-xs">
                <div className="py-3 space-y-1">
                  <dt className="text-[#9aa0ac]">{t.contact.emailChannelLabel}</dt>
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
                  <dt className="text-[#9aa0ac]">{t.contact.whatsappChannelLabel}</dt>
                  <dd>
                    <a
                      href={SITE_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-[#2dd4bf] hover:underline"
                    >
                      <span>{SITE_CONFIG.whatsappNumberDisplay}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                    </a>
                  </dd>
                </div>
                <div className="py-3 space-y-1">
                  <dt className="text-[#9aa0ac]">{t.contact.responseChannelLabel}</dt>
                  <dd className="text-[#f5f4f0]">
                    {t.contact.responseChannelValue}
                  </dd>
                </div>
                <div className="py-3 space-y-2">
                  <dt className="text-[#9aa0ac]">{t.contact.storefrontLabel}</dt>
                  <dd>
                    <a
                      href={SITE_CONFIG.selarStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] w-full min-[360px]:w-auto items-center justify-center gap-2 rounded-lg bg-[#eab308] px-4 py-2 text-xs font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors"
                    >
                      <Store className="h-3.5 w-3.5 shrink-0" />
                      <span>{t.footer.selarLinkLabel}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-white/[0.12] bg-[#121824] p-4 sm:p-7 space-y-4">
              <div className="space-y-1">
                <h2 className="font-display text-lg font-semibold text-[#f5f4f0]">
                  {t.social.heading}
                </h2>
                <p className="text-xs leading-relaxed text-[#b0b4be]">
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
                    className="group flex min-h-[44px] min-w-0 items-center justify-between gap-2.5 rounded-xl border border-white/[0.1] bg-[#0b0c0f] px-3.5 py-2.5 text-xs text-[#f5f4f0] transition-colors hover:border-[#eab308]/60 hover:text-[#eab308]"
                  >
                    <span className="flex items-center gap-2.5 min-w-0">
                      <SocialPlatformIcon platform={item.id} className="h-4 w-4 shrink-0" />
                      <span className="font-medium truncate">{item.name}</span>
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[#9aa0ac] group-hover:text-[#eab308]" />
                  </a>
                ))}

                <a
                  href={SITE_CONFIG.matrixCommunityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.community.channelName} — ${t.community.cta}`}
                  className="group sm:col-span-2 flex min-h-[48px] min-w-0 items-center justify-between gap-2.5 rounded-xl border border-[#eab308]/45 bg-[#101622] px-3.5 py-2.5 text-xs text-[#f5f4f0] transition-colors hover:border-[#eab308] hover:text-[#eab308]"
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    <MessagesSquare className="h-4 w-4 shrink-0 text-[#60a5fa]" />
                    <span className="font-semibold">{t.community.channelName}</span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[#eab308]" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
