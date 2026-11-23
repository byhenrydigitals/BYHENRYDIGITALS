import { useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { SocialPlatformIcon } from '../components/SocialIcons';

const TALLY_EMBED_URL =
  'https://tally.so/embed/9N7284?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';
const TALLY_WIDGET_SCRIPT_SRC = 'https://tally.so/widgets/embed.js';
const OFFICIAL_FORM_NAME = 'BYHENRYDIGITALS Enquiry Form';

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

export function ContactPage(_props: ContactPageProps) {
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
      return () => {
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

    return () => {
      script.removeEventListener('load', loadTally);
      script.removeEventListener('error', loadTally);
    };
  }, []);

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
        {/* Official BYHENRYDIGITALS Enquiry Form (Embedded via Tally) */}
        <div className="min-w-0 rounded-2xl border border-white/[0.1] bg-[#141414] p-5 sm:p-8 lg:col-span-7">
          <div className="mb-4 space-y-1">
            <h2 className="font-display text-xl font-semibold text-[#f5f5f4]">
              {OFFICIAL_FORM_NAME}
            </h2>
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
              title={OFFICIAL_FORM_NAME}
              className="block w-full max-w-full border-0 bg-transparent"
            />
          </div>
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
