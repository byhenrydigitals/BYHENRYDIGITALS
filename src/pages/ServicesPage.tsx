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
    <div className="min-w-0">
      {/* Services Intro & Engineering Philosophy (Deep Slate-Navy Canvas) */}
      <section className="bg-[#0e121a] text-[#f5f4f0]">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="min-w-0 space-y-4 lg:col-span-7">
              <p className="text-xs font-semibold text-[#eab308]">
                {t.services.kicker}
              </p>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-balance text-[#f5f4f0] sm:text-4xl">
                {t.services.title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[#b0b4be]">
                {t.services.intro}
              </p>
            </div>

            <div className="min-w-0 rounded-xl border border-[#60a5fa]/30 bg-[#121824] p-5 sm:p-6 lg:col-span-5">
              <h2 className="font-display text-base font-semibold text-[#60a5fa]">
                {t.services.philosophyTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#d4d4d8]">
                {t.services.philosophyBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Catalogue on Warm Ivory Surface */}
      <section className="border-t border-[#e5e0d3] bg-[#f6f3eb] text-[#111216]">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="space-y-6 lg:space-y-8">
            {BHD_SERVICES.map((service) => {
              const serviceText = t.services.items[service.id];
              return (
                <article
                  key={service.id}
                  className="grid grid-cols-1 overflow-hidden rounded-xl border border-[#dfd9ca] bg-white lg:grid-cols-12"
                >
                  <div className="min-w-0 border-b border-[#ece7da] lg:col-span-5 lg:border-b-0 lg:border-e">
                    <ResilientImage
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fallbackTitle={serviceText.title}
                      className="h-full w-full object-cover aspect-[16/10] lg:aspect-auto lg:min-h-[300px]"
                    />
                  </div>

                  <div className="flex min-w-0 flex-col justify-between p-5 sm:p-8 lg:col-span-7">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#4b4e57]">
                        <span className="font-mono-tabular font-semibold text-[#9a6700]">
                          {service.index}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{t.services.brandServicesTag}</span>
                      </div>

                      <h2 className="font-display text-2xl font-semibold text-[#111216]">
                        {serviceText.title}
                      </h2>

                      <p className="text-sm leading-relaxed text-[#3f3f46]">
                        {serviceText.summary}
                      </p>

                      <p className="text-xs font-semibold text-[#0f766e]">
                        {serviceText.functionalFocus}
                      </p>

                      <ul className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-2">
                        {serviceText.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs text-[#3f3f46]"
                          >
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0f766e]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#ece7da] pt-5">
                      <span className="text-xs font-medium text-[#4b4e57]">
                        {t.services.customScopedLabel}
                      </span>
                      <a
                        href="/contact"
                        onClick={(e) => {
                          if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                            e.preventDefault();
                            onNavigate('/contact', serviceText.title);
                          }
                        }}
                        className="inline-flex min-h-[44px] w-full min-[400px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-[#111216] px-5 py-2.5 text-center text-xs font-semibold text-white hover:bg-[#232630] transition-colors"
                      >
                        <span>{t.services.discussCta}</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#eab308]" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-xs leading-relaxed text-[#4b4e57]">
            {t.services.pricingNotice}
          </p>
        </div>
      </section>
    </div>
  );
}
