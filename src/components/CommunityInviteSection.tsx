import { ArrowUpRight, MessagesSquare, Users } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';

export function CommunityInviteSection() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="bhd-community-heading"
      className="border-t border-white/[0.08] bg-[#0d1118] text-[#f5f4f0]"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-xl border border-[#eab308]/35 bg-[#121824] p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="min-w-0 space-y-3 lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#eab308]">
                <Users className="h-4 w-4 shrink-0 text-[#60a5fa]" />
                <span>{t.community.kicker}</span>
              </div>

              <h2
                id="bhd-community-heading"
                className="font-display text-2xl font-semibold tracking-tight text-[#f5f4f0] sm:text-3xl text-balance"
              >
                {t.community.title}
              </h2>

              <p className="max-w-2xl text-[15px] leading-relaxed text-[#b0b4be]">
                {t.community.description}
              </p>
            </div>

            <div className="flex flex-col items-start gap-2.5 lg:col-span-5 lg:items-end">
              <a
                href={SITE_CONFIG.matrixCommunityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2.5 rounded-lg bg-[#eab308] px-6 py-3 text-center text-sm font-semibold text-[#0b0c0f] transition-colors duration-150 hover:bg-[#facc15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#121824]"
              >
                <MessagesSquare className="h-4 w-4 shrink-0" />
                <span>{t.community.cta}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>

              <p className="text-xs text-[#b0b4be] lg:text-right">
                {t.community.channelName} · {t.community.channelTagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
