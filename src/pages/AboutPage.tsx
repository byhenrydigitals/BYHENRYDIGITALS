import { ArrowRight } from 'lucide-react';
import { PageRoute, SITE_CONFIG } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { ResilientImage } from '../components/ResilientImage';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Page Intro */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="min-w-0 space-y-5 lg:col-span-6">
          <p className="text-xs font-medium text-[#eab308]">{t.about.kicker}</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-balance text-[#f5f5f4] sm:text-4xl">
            {t.about.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-[#a1a1aa]">
            {t.about.intro}
          </p>
        </div>

        <div className="min-w-0 lg:col-span-6">
          <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-[#141414]">
            <ResilientImage
              src="/src/assets/images/product_advanced_ecommerce_1795329936570.jpg"
              alt="Digital strategy collaboration at BYHENRYDIGITALS"
              fallbackTitle="About BYHENRYDIGITALS"
              priority
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        <div className="min-w-0 rounded-2xl border border-white/[0.09] bg-[#141414] p-6 sm:p-7">
          <h2 className="font-display text-xl font-semibold text-[#f5f5f4]">
            {t.about.missionTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#a1a1aa]">
            {t.about.missionBody}
          </p>
        </div>

        <div className="min-w-0 rounded-2xl border border-white/[0.09] bg-[#141414] p-6 sm:p-7">
          <h2 className="font-display text-xl font-semibold text-[#f5f5f4]">
            {t.about.visionTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#a1a1aa]">
            {t.about.visionBody}
          </p>
        </div>
      </div>

      {/* Principles */}
      <div className="mt-14 space-y-6">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[#f5f5f4]">
          {t.about.principlesTitle}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.principles.map((item, idx) => (
            <div
              key={item.title}
              className="min-w-0 rounded-2xl border border-white/[0.08] bg-[#101010] p-6"
            >
              <div className="font-mono-tabular text-xs text-[#eab308] mb-2">
                0{idx + 1}
              </div>
              <h3 className="font-display text-base font-semibold text-[#f5f5f4]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a1a1aa]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Section */}
      <div className="mt-14 rounded-2xl border border-[#e4e4e7] bg-white p-6 text-[#0b0b0b] sm:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="min-w-0 space-y-3 lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#a16207]">
              {t.about.founderKicker}
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#0b0b0b]">
              {t.about.founderTitle}
            </h2>
            <p className="text-xs font-medium text-[#52525b]">
              {t.about.founderRole} · {SITE_CONFIG.founderName}
            </p>
            <p className="text-sm leading-relaxed text-[#3f3f46]">
              {t.about.founderBio}
            </p>
            <p className="text-xs text-[#71717a]">{t.about.founderNote}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
            <a
              href="/products"
              onClick={(e) => {
                if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  onNavigate('/products');
                }
              }}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#0b0b0b] px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#27272a] transition-colors"
            >
              <span>{t.about.exploreProductsCta}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#eab308]" />
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  onNavigate('/contact');
                }
              }}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#d4d4d8] px-5 py-2.5 text-center text-sm font-medium text-[#0b0b0b] hover:bg-[#f4f4f5] transition-colors"
            >
              <span>{t.about.contactCta}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
