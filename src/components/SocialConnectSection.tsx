import { ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { SocialPlatformIcon } from './SocialIcons';

export function SocialConnectSection() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="social-connect-heading"
      className="border-t border-white/[0.08] bg-[#0b0b0b] text-[#f5f5f4]"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="space-y-3 lg:col-span-5 min-w-0">
            <p className="text-xs font-medium text-[#eab308]">
              {t.social.kicker}
            </p>
            <h2
              id="social-connect-heading"
              className="font-display text-2xl font-semibold tracking-tight text-[#f5f5f4] sm:text-3xl"
            >
              {t.social.heading}
            </h2>
            <p className="max-w-lg text-[15px] leading-relaxed text-[#a1a1aa]">
              {t.social.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 min-w-0">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.name} — BYHENRYDIGITALS`}
                className="group flex min-h-[76px] min-w-0 items-center justify-between gap-4 rounded-2xl border border-white/[0.1] bg-[#141414] p-5 transition-colors duration-150 hover:border-[#eab308]/60 hover:bg-[#191919] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-[#0b0b0b] text-[#f5f5f4] transition-colors duration-150 group-hover:border-[#eab308]/50 group-hover:text-[#eab308]">
                    <SocialPlatformIcon platform={item.id} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-sm font-semibold text-[#f5f5f4] truncate">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#a1a1aa] truncate">
                      {item.handle}
                    </div>
                  </div>
                </div>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#71717a] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#eab308]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
