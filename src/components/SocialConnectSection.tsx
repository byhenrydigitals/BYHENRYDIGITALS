import { ArrowUpRight, MessageCircle, MessagesSquare } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { SocialPlatformIcon } from './SocialIcons';

export function SocialConnectSection() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="social-connect-heading"
      className="border-t border-white/[0.08] bg-[#0b0c0f] text-[#f5f4f0]"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="space-y-3 lg:col-span-5 min-w-0">
            <p className="text-xs font-semibold text-[#eab308]">
              {t.social.kicker}
            </p>
            <h2
              id="social-connect-heading"
              className="font-display text-2xl font-semibold tracking-tight text-[#f5f4f0] sm:text-3xl text-balance"
            >
              {t.social.heading}
            </h2>
            <p className="max-w-lg text-[15px] leading-relaxed text-[#b0b4be]">
              {t.social.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:col-span-7 min-w-0">
            {/* WhatsApp Official Messaging */}
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.community.whatsappChannelName} — BYHENRYDIGITALS`}
              className="group flex min-h-[78px] min-w-0 items-center justify-between gap-3.5 rounded-xl border border-[#2dd4bf]/30 bg-[#0d1917] p-4 sm:p-5 transition-colors duration-150 hover:border-[#2dd4bf]/70 hover:bg-[#10201d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2dd4bf]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#2dd4bf]/35 bg-[#091210] text-[#2dd4bf] transition-colors duration-150 group-hover:bg-[#2dd4bf] group-hover:text-[#0b0c0f]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-[#2dd4bf]">
                    {t.community.directChannelGroupLabel}
                  </div>
                  <div className="font-display text-sm font-semibold text-[#f5f4f0]">
                    {t.community.whatsappChannelName}
                  </div>
                  <div className="text-xs text-[#b0b4be] truncate">
                    {SITE_CONFIG.whatsappNumberDisplay}
                  </div>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 shrink-0 text-[#2dd4bf] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Social Media Channels (Instagram, TikTok, X, Facebook) */}
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.name} — BYHENRYDIGITALS`}
                className="group flex min-h-[78px] min-w-0 items-center justify-between gap-3.5 rounded-xl border border-white/[0.1] bg-[#12161f] p-4 sm:p-5 transition-colors duration-150 hover:border-[#eab308]/60 hover:bg-[#161b26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.1] bg-[#0b0c0f] text-[#f5f4f0] transition-colors duration-150 group-hover:border-[#eab308]/50 group-hover:text-[#eab308]">
                    <SocialPlatformIcon platform={item.id} className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] font-medium text-[#b0b4be]">
                      {t.community.socialChannelGroupLabel}
                    </div>
                    <div className="font-display text-sm font-semibold text-[#f5f4f0] truncate">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#b0b4be] truncate">
                      {item.handle}
                    </div>
                  </div>
                </div>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#71717a] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#eab308]" />
              </a>
            ))}

            {/* BHD Community (Matrix) */}
            <a
              href={SITE_CONFIG.matrixCommunityUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.community.channelName} — ${t.community.cta}`}
              className="group flex min-h-[78px] min-w-0 items-center justify-between gap-3.5 rounded-xl border border-[#eab308]/45 bg-[#141720] p-4 sm:p-5 transition-colors duration-150 hover:border-[#eab308] hover:bg-[#191d28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#eab308]/40 bg-[#eab308]/10 text-[#eab308] transition-colors duration-150 group-hover:bg-[#eab308] group-hover:text-[#0b0c0f]">
                  <MessagesSquare className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-[#eab308]">
                    {t.community.communityChannelGroupLabel}
                  </div>
                  <div className="font-display text-sm font-semibold text-[#f5f4f0]">
                    {t.community.channelName}
                  </div>
                  <div className="text-xs font-medium text-[#eab308]">
                    {t.community.cta}
                  </div>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 shrink-0 text-[#eab308] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
