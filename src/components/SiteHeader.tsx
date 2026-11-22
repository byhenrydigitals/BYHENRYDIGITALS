import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { PageRoute, ROUTES } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { ActiveLanguageCode } from '../i18n/types';
import { BrandLogo } from './BrandLogo';

interface SiteHeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export function SiteHeader({ currentRoute, onNavigate }: SiteHeaderProps) {
  const { language, setLanguage, t, currentDefinition, registry } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLangMenuOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleNavClick = (route: PageRoute) => {
    setMobileOpen(false);
    setLangMenuOpen(false);
    onNavigate(route);
  };

  const handleSelectLanguage = (code: ActiveLanguageCode) => {
    setLanguage(code);
    setLangMenuOpen(false);
  };

  const readyLanguages = registry.filter((l) => l.status === 'ready');
  const plannedLanguages = registry.filter((l) => l.status === 'planned');

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#0b0b0b]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
        {/* Brand Zone */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/');
          }}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308] rounded shrink-0"
          aria-label="BYHENRYDIGITALS"
        >
          <BrandLogo />
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-4 2xl:gap-6 text-[13px] 2xl:text-sm font-medium"
        >
          {ROUTES.map((item) => {
            const active = currentRoute === item.route;
            return (
              <a
                key={item.route}
                href={item.route}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.route);
                }}
                aria-current={active ? 'page' : undefined}
                className={`whitespace-nowrap shrink-0 py-1.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308] rounded ${
                  active
                    ? 'text-[#eab308] font-semibold'
                    : 'text-[#a1a1aa] hover:text-[#f5f5f4]'
                }`}
              >
                {t.nav[item.navKey]}
              </a>
            );
          })}
        </nav>

        {/* Actions Zone: Language Selector + Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Language Dropdown */}
          <div ref={langMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen((prev) => !prev)}
              aria-expanded={langMenuOpen}
              aria-haspopup="listbox"
              aria-label={`${t.nav.languageMenuLabel}: ${currentDefinition.nativeName}`}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-white/[0.12] bg-[#141414] px-3 py-1.5 text-xs font-medium text-[#f5f5f4] hover:border-white/[0.25] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
            >
              <Globe className="h-3.5 w-3.5 text-[#eab308] shrink-0" />
              <span>
                {currentDefinition.nativeName}
                {currentDefinition.flag ? ` ${currentDefinition.flag}` : ''}
              </span>
              <ChevronDown className="h-3.5 w-3.5 text-[#a1a1aa] shrink-0" />
            </button>

            {langMenuOpen && (
              <div
                role="dialog"
                aria-label={t.nav.languageMenuLabel}
                className="absolute end-0 mt-2 w-72 rounded-xl border border-white/[0.12] bg-[#141414] p-3 shadow-2xl z-50"
              >
                <div className="mb-2 flex items-center justify-between px-1">
                  <span className="text-xs font-semibold text-[#f5f5f4]">
                    {t.nav.activeLanguagesLabel}
                  </span>
                  <span className="text-[11px] font-mono-tabular text-[#eab308]">
                    {readyLanguages.length} {t.nav.activeBadge}
                  </span>
                </div>

                <div className="space-y-1" role="listbox" aria-label={t.nav.activeLanguagesLabel}>
                  {readyLanguages.map((lang) => {
                    const isCurrent = language === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        role="option"
                        aria-selected={isCurrent}
                        onClick={() =>
                          handleSelectLanguage(lang.code as ActiveLanguageCode)
                        }
                        className={`flex w-full min-h-[38px] items-center justify-between rounded-lg px-3 py-1.5 text-xs transition-colors cursor-pointer ${
                          isCurrent
                            ? 'bg-[#eab308] text-[#0b0b0b] font-semibold'
                            : 'text-[#e4e4e7] hover:bg-white/[0.06]'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <span>{lang.nativeName}</span>
                          {lang.flag && <span aria-hidden="true">{lang.flag}</span>}
                          {lang.name !== lang.nativeName && (
                            <span className="opacity-75">({lang.name})</span>
                          )}
                        </span>
                        <span className="text-[11px] font-mono-tabular">
                          {isCurrent ? t.nav.activeBadge : ''}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 border-t border-white/[0.08] pt-2.5">
                  <p className="px-1 text-[11px] leading-relaxed text-[#a1a1aa]">
                    {t.nav.plannedLanguagesNote}
                  </p>
                  <div className="mt-2 max-h-40 overflow-y-auto space-y-1 pe-1">
                    {plannedLanguages.map((lang) => (
                      <div
                        key={lang.code}
                        className="flex items-center justify-between rounded-md px-2.5 py-1 text-[11px] text-[#71717a]"
                        dir={lang.dir}
                      >
                        <span>
                          {lang.nativeName} · {lang.name}
                          {lang.dir === 'rtl' ? ' (RTL)' : ''}
                        </span>
                        <span className="text-[10px] font-mono-tabular uppercase">
                          {t.nav.plannedBadge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <a
            href="/services"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/services');
            }}
            className="hidden sm:inline-flex min-h-[40px] items-center justify-center rounded-lg bg-[#eab308] px-4 py-2 text-xs font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b]"
          >
            {t.nav.primaryCta}
          </a>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.nav.closeMenuAria : t.nav.openMenuAria}
            className="xl:hidden inline-flex min-h-[42px] min-w-[42px] items-center justify-center rounded-lg border border-white/[0.12] text-[#f5f5f4] hover:bg-white/[0.06] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Navigation Drawer (< xl) */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-white/[0.08] bg-[#0b0b0b] px-5 py-4 sm:px-6">
          <nav className="grid grid-cols-1 gap-1 sm:grid-cols-2" aria-label="Mobile Navigation">
            {ROUTES.map((item) => {
              const active = currentRoute === item.route;
              return (
                <a
                  key={item.route}
                  href={item.route}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.route);
                  }}
                  aria-current={active ? 'page' : undefined}
                  className={`flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-[#141414] text-[#eab308] font-semibold'
                      : 'text-[#d4d4d8] hover:bg-white/[0.04] hover:text-[#f5f5f4]'
                  }`}
                >
                  {t.nav[item.navKey]}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-3 border-t border-white/[0.08]">
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/services');
              }}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#eab308] px-4 py-2.5 text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors"
            >
              {t.nav.primaryCta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
