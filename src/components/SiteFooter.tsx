import { ArrowUpRight, Mail, MessageCircle, MessagesSquare, Store } from 'lucide-react';
import { PageRoute, ROUTES, SITE_CONFIG, SOCIAL_LINKS } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { BrandLogo } from './BrandLogo';
import { SocialPlatformIcon } from './SocialIcons';

interface SiteFooterProps {
  onNavigate: (route: PageRoute) => void;
}

export function SiteFooter({ onNavigate }: SiteFooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/[0.08] bg-[#08090c] text-[#b0b4be]">
      <div className="mx-auto max-w-[1280px] px-4 pt-12 pb-24 sm:px-6 sm:pt-14 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-3 md:col-span-2 lg:col-span-5 min-w-0">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308] rounded"
            >
              <BrandLogo />
            </a>
            <p className="text-sm font-medium text-[#f5f4f0] max-w-md">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-[#b0b4be] max-w-md">
              {t.footer.secondaryTagline}
            </p>
            <div className="pt-2">
              <div className="mb-2.5 text-xs font-semibold text-[#f5f4f0]">
                {t.footer.socialTitle}
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.name} — BYHENRYDIGITALS`}
                    title={`${item.name} (${item.handle})`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.12] bg-[#12161f] text-[#f5f4f0] transition-colors duration-150 hover:border-[#eab308] hover:text-[#eab308] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
                  >
                    <SocialPlatformIcon platform={item.id} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <p className="pt-2 text-xs text-[#8b909c]">
              {t.footer.languagesLabel}
            </p>
          </div>

          <div className="space-y-3 lg:col-span-3 min-w-0">
            <h2 className="font-display text-xs font-semibold tracking-wide text-[#f5f4f0]">
              {t.footer.navigationTitle}
            </h2>
            <ul className="grid grid-cols-1 min-[340px]:grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
              {ROUTES.map((item) => (
                <li key={item.route} className="min-w-0">
                  <a
                    href={item.route}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.route);
                    }}
                    className="inline-flex min-h-[38px] items-center py-1 text-[#b0b4be] hover:text-[#eab308] transition-colors"
                  >
                    {t.nav[item.navKey]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 lg:col-span-4 min-w-0">
            <h2 className="font-display text-xs font-semibold tracking-wide text-[#f5f4f0]">
              {t.footer.officialLinksTitle}
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.mailtoUrl}
                  className="inline-flex min-h-[36px] items-center gap-2 text-[#f5f4f0] hover:text-[#eab308] transition-colors break-all"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#eab308]" />
                  <span>{SITE_CONFIG.contactEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[36px] items-center gap-2 text-[#f5f4f0] hover:text-[#2dd4bf] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#2dd4bf]" />
                  <span>{SITE_CONFIG.whatsappNumberDisplay}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.matrixCommunityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[36px] items-center gap-2 text-[#f5f4f0] hover:text-[#eab308] transition-colors"
                >
                  <MessagesSquare className="h-4 w-4 shrink-0 text-[#60a5fa]" />
                  <span>{t.community.channelName}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              </li>
              <li className="flex flex-wrap gap-2.5 pt-2">
                <a
                  href={SITE_CONFIG.mailtoUrl}
                  className="inline-flex min-h-[42px] max-w-full items-center gap-1.5 rounded-lg border border-white/[0.14] bg-[#12161f] px-3.5 py-2 text-xs font-medium text-[#f5f4f0] hover:border-[#eab308] hover:text-[#eab308] transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#eab308]" />
                  <span>{t.footer.emailUsLabel}</span>
                </a>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] max-w-full items-center gap-1.5 rounded-lg bg-[#eab308] px-3.5 py-2 text-xs font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{t.footer.whatsappUsLabel}</span>
                </a>
                <a
                  href={SITE_CONFIG.selarStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] max-w-full items-center gap-1.5 rounded-lg border border-[#eab308]/45 bg-[#12161f] px-3.5 py-2 text-xs font-semibold text-[#eab308] hover:border-[#eab308] hover:bg-[#eab308] hover:text-[#0b0c0f] transition-colors"
                >
                  <Store className="h-3.5 w-3.5 shrink-0" />
                  <span>{t.footer.selarLinkLabel}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-xs text-[#8b909c] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p>{t.footer.globalOperationLabel}</p>
        </div>
      </div>
    </footer>
  );
}
