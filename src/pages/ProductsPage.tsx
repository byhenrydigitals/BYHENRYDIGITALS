import { ArrowUpRight, Check } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { DIGITAL_PRODUCTS } from '../data/catalog';
import { useLanguage } from '../i18n/LanguageContext';
import { ResilientImage } from '../components/ResilientImage';

export function ProductsPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 sm:py-16">
      <div className="max-w-3xl space-y-4">
        <p className="text-xs font-medium text-[#eab308]">{t.products.kicker}</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[#f5f5f4] sm:text-4xl text-balance">
          {t.products.title}
        </h1>
        <p className="text-base leading-relaxed text-[#a1a1aa]">
          {t.products.intro}
        </p>
      </div>

      {/* Official Selar Store Banner */}
      <div className="mt-8 flex flex-col justify-between gap-6 rounded-2xl border border-[#eab308]/35 bg-[#141414] p-6 sm:flex-row sm:items-center sm:p-8">
        <div className="space-y-1.5">
          <h2 className="font-display text-lg font-semibold text-[#f5f5f4]">
            {t.products.storeBannerTitle}
          </h2>
          <p className="text-sm text-[#a1a1aa]">{t.products.storeBannerDesc}</p>
        </div>
        <a
          href={SITE_CONFIG.selarStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors whitespace-nowrap shrink-0"
        >
          <span>{t.products.visitStoreCta}</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-[#a1a1aa]">
        {t.products.storeIntegrityNotice}
      </p>

      {/* Product Catalogue */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {DIGITAL_PRODUCTS.map((product) => {
          const productText = t.products.items[product.id];
          return (
            <article
              key={product.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-[#141414]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/[0.08]">
                <ResilientImage
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fallbackTitle={product.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 text-xs text-[#a1a1aa]">
                    <span className="font-mono-tabular text-[#eab308]">
                      {product.index}
                    </span>
                    <span className="truncate">{t.products.brandPlatformTag}</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[11px] font-medium text-[#eab308]">
                      {productText.resourceTypeLabel}
                    </div>
                    <h2 className="font-display text-xl font-semibold text-[#f5f5f4]">
                      {product.title}
                    </h2>
                  </div>

                  <p className="text-sm leading-relaxed text-[#d4d4d8]">
                    {productText.shortDescription}
                  </p>

                  <div className="border-t border-white/[0.08] pt-4 space-y-1">
                    <div className="text-xs font-semibold text-[#f5f5f4]">
                      {t.products.problemLabel}
                    </div>
                    <p className="text-xs leading-relaxed text-[#a1a1aa]">
                      {productText.problemAddressed}
                    </p>
                  </div>

                  <div className="border-t border-white/[0.08] pt-3 space-y-1">
                    <div className="text-xs font-semibold text-[#f5f5f4]">
                      {t.products.audienceLabel}
                    </div>
                    <p className="text-xs leading-relaxed text-[#a1a1aa]">
                      {productText.intendedAudience}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-[#f5f5f4]">
                      {t.products.outcomesLabel}
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#a1a1aa]">
                      {productText.learningOutcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#eab308]" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/[0.08] pt-3 space-y-1">
                    <div className="text-xs font-semibold text-[#f5f5f4]">
                      {t.products.originalLanguageLabel}
                    </div>
                    <p className="text-xs leading-relaxed text-[#a1a1aa]">
                      {productText.originalLanguageNote}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-white/[0.08] pt-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#a1a1aa]">{t.products.priceLabel}</span>
                    <span className="font-medium text-[#f5f5f4]">
                      {productText.priceDisplay}
                    </span>
                  </div>

                  <a
                    href={product.selarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#f5f5f4] px-4 py-2.5 text-sm font-semibold text-[#0b0b0b] hover:bg-white transition-colors"
                  >
                    <span>{t.products.productCta}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
