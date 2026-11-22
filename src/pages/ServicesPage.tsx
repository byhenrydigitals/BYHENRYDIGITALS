import { ArrowRight, Check } from 'lucide-react';
import { PageRoute } from '../config/siteConfig';
import { BHD_SERVICES } from '../data/catalog';
import { useLanguage } from '../i18n/LanguageContext';
import { ResilientImage } from '../components/ResilientImage';

interface ServicesPageProps {
  onNavigate: (route: PageRoute, subject?: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 sm:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
        <div className="space-y-4 lg:col-span-7">
          <p className="text-xs font-medium text-[#eab308]">
            {t.services.kicker}
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-balance text-[#f5f5f4] sm:text-4xl">
            {t.services.title}
          </h1>
          <p className="text-base leading-relaxed text-[#a1a1aa]">
            {t.services.intro}
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.1] bg-[#141414] p-6 lg:col-span-5">
          <h2 className="font-display text-base font-semibold text-[#eab308]">
            {t.services.philosophyTitle}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#d4d4d8]">
            {t.services.philosophyBody}
          </p>
        </div>
      </div>

      {/* Services Cards */}
      <div className="mt-12 space-y-6">
        {BHD_SERVICES.map((service) => {
          const serviceText = t.services.items[service.id];
          return (
            <article
              key={service.id}
              className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#141414] lg:grid-cols-12"
            >
              <div className="lg:col-span-4 border-b border-white/[0.08] lg:border-b-0 lg:border-e">
                <ResilientImage
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fallbackTitle={serviceText.title}
                  className="h-full w-full object-cover aspect-[16/10] lg:aspect-auto"
                />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-[#a1a1aa]">
                    <span className="font-mono-tabular text-[#eab308]">
                      {service.index}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{t.services.brandServicesTag}</span>
                  </div>

                  <h2 className="font-display text-2xl font-semibold text-[#f5f5f4]">
                    {serviceText.title}
                  </h2>

                  <p className="text-sm leading-relaxed text-[#a1a1aa]">
                    {serviceText.summary}
                  </p>

                  <p className="text-xs font-medium text-[#d4d4d8]">
                    {serviceText.functionalFocus}
                  </p>

                  <ul className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-2">
                    {serviceText.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-[#a1a1aa]"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#eab308]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
                  <span className="text-xs text-[#71717a]">
                    {t.services.customScopedLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate('/contact', serviceText.title)}
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#eab308] px-4 py-2 text-xs font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors cursor-pointer"
                  >
                    <span>{t.services.discussCta}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-8 text-xs text-[#71717a]">{t.services.pricingNotice}</p>
    </div>
  );
}
