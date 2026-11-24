import { ArrowUpRight, Check, Store } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { DIGITAL_PRODUCTS } from '../data/catalog';
import { useLanguage } from '../i18n/LanguageContext';
import { ResilientImage } from '../components/ResilientImage';

export function ProductsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-w-0">
      {/* Page Intro & Official BHD Store Banner (Deep Slate-Navy Canvas) */}
      <section className="bg-[#0e121a] text-[#f5f4f0]">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold text-[#eab308]">{t.products.kicker}</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-[#f5f4f0] sm:text-4xl text-balance">
              {t.products.title}
            </h1>
            <p className="text-base leading-relaxed text-[#b0b4be]">
              {t.products.intro}
            </p>
          </div>

          {/* Official Selar Store Banner */}
          <div className="mt-8 flex flex-col justify-between gap-6 rounded-xl border border-[#eab308]/35 bg-[#121824] p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="min-w-0 space-y-1.5">
              <h2 className="font-display text-lg font-semibold text-[#f5f4f0]">
                {t.products.storeBannerTitle}
              </h2>
              <p className="text-sm text-[#b0b4be]">{t.products.storeBannerDesc}</p>
            </div>
            <a
              href={SITE_CONFIG.selarStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] w-full sm:w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-center text-sm font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors min-[400px]:whitespace-nowrap shrink-0 self-start sm:self-auto"
            >
              <Store className="h-4 w-4 shrink-0" />
              <span>{t.products.visitStoreCta}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </a>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-[#b0b4be]">
            {t.products.storeIntegrityNotice}
          </p>
        </div>
      </section>

      {/* Product Catalogue on Warm Ivory Paper for High Editorial Readability */}
      <section className="border-t border-[#e5e0d3] bg-[#f6f3eb] text-[#111216]">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
            {DIGITAL_PRODUCTS.map((product) => {
              const productText = t.products.items[product.id];
              return (
                <article
                  key={product.id}
                  className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#dfd9ca] bg-white"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#ece7da]">
                    <ResilientImage
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      fallbackTitle={product.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 space-y-5">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2 text-xs text-[#4b4e57]">
                        <span className="font-mono-tabular font-semibold text-[#9a6700] shrink-0">
                          {product.index}
                        </span>
                        <span className="truncate">{t.products.brandPlatformTag}</span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-[11px] font-semibold text-[#0f766e]">
                          {productText.resourceTypeLabel}
                        </div>
                        <h2 className="font-display text-xl font-semibold text-[#111216]">
                          {product.title}
                        </h2>
                      </div>

                      <p className="text-sm leading-relaxed text-[#3f3f46]">
                        {productText.shortDescription}
                      </p>

                      <div className="border-t border-[#ece7da] pt-4 space-y-1">
                        <h3 className="text-xs font-semibold text-[#111216]">
                          {t.products.problemLabel}
                        </h3>
                        <p className="text-xs leading-relaxed text-[#4b4e57]">
                          {productText.problemAddressed}
                        </p>
                      </div>

                      <div className="border-t border-[#ece7da] pt-3 space-y-1">
                        <h3 className="text-xs font-semibold text-[#111216]">
                          {t.products.audienceLabel}
                        </h3>
                        <p className="text-xs leading-relaxed text-[#4b4e57]">
                          {productText.intendedAudience}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-[#111216]">
                          {t.products.outcomesLabel}
                        </h3>
                        <ul className="space-y-1.5 text-xs text-[#3f3f46]">
                          {productText.learningOutcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0f766e]" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-[#ece7da] pt-3 space-y-1">
                        <h3 className="text-xs font-semibold text-[#111216]">
                          {t.products.originalLanguageLabel}
                        </h3>
                        <p className="text-xs leading-relaxed text-[#4b4e57]">
                          {productText.originalLanguageNote}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 border-t border-[#ece7da] pt-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="text-[#4b4e57]">{t.products.priceLabel}</span>
                        <span className="font-semibold text-[#111216]">
                          {productText.priceDisplay}
                        </span>
                      </div>

                      <a
                        href={product.selarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#111216] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#232630] transition-colors"
                      >
                        <Store className="h-4 w-4 shrink-0 text-[#eab308]" />
                        <span>{t.products.productCta}</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-[#eab308]" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
