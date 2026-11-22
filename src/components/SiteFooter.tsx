import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { PageRoute, ROUTES, SITE_CONFIG, SOCIAL_LINKS } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { BrandLogo } from './BrandLogo';
import { SocialPlatformIcon } from './SocialIcons';

interface SiteFooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenVanessa: () => void;
}

export function SiteFooter({ onNavigate, onOpenVanessa }: SiteFooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/[0.08] bg-[#0b0b0b] text-[#a1a1aa]">
      <div className="mx-auto max-w-[1280px] px-5 pt-14 pb-24 sm:px-6 sm:pb-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="space-y-3 md:col-span-5">
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
            <p className="text-sm font-medium text-[#f5f5f4]">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-[#a1a1aa]">
              {t.footer.secondaryTagline}
            </p>
            <div className="pt-2">
              <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-[#f5f5f4]">
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
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.12] bg-[#141414] text-[#f5f5f4] transition-colors duration-150 hover:border-[#eab308] hover:text-[#eab308] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
                  >
                    <SocialPlatformIcon platform={item.id} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <p className="pt-2 text-xs text-[#71717a]">
              {t.footer.languagesLabel}
            </p>
          </div>

          <div className="space-y-3 md:col-span-4">
            <h2 className="font-display text-xs font-semibold uppercase tracking-wider text-[#f5f5f4]">
              {t.footer.navigationTitle}
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {ROUTES.map((item) => (
                <li key={item.route}>
                  <a
                    href={item.route}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.route);
                    }}
                    className="inline-block py-1 hover:text-[#eab308] transition-colors"
                  >
                    {t.nav[item.navKey]}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenVanessa}
                  className="inline-block py-1 text-start hover:text-[#eab308] transition-colors cursor-pointer"
                >
                  {t.nav.faq}
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-3">
            <h2 className="font-display text-xs font-semibold uppercase tracking-wider text-[#f5f5f4]">
              {t.footer.officialLinksTitle}
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.mailtoUrl}
                  className="inline-flex items-center gap-2 text-[#f5f5f4] hover:text-[#eab308] transition-colors break-all"
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
                  className="inline-flex items-center gap-2 text-[#f5f5f4] hover:text-[#eab308] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#eab308]" />
                  <span>{SITE_CONFIG.whatsappNumberDisplay}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.selarStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#d4d4d8] hover:text-[#eab308] transition-colors"
                >
                  <span>{t.footer.selarLinkLabel}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li className="flex flex-wrap gap-2 pt-1">
                <a
                  href={SITE_CONFIG.mailtoUrl}
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-white/[0.14] bg-[#141414] px-3 py-1.5 text-xs font-medium text-[#f5f5f4] hover:border-[#eab308] hover:text-[#eab308] transition-colors whitespace-nowrap"
                >
                  <Mail className="h-3.5 w-3.5 text-[#eab308]" />
                  <span>{t.footer.emailUsLabel}</span>
                </a>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg bg-[#eab308] px-3 py-1.5 text-xs font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>{t.footer.whatsappUsLabel}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-xs text-[#71717a] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p>{t.footer.globalOperationLabel}</p>
        </div>
      </div>
    </footer>
  );
}
