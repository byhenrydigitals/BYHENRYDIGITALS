import { ArrowRight, ArrowUpRight, BookOpen, Globe } from 'lucide-react';
import { PageRoute, SITE_CONFIG } from '../config/siteConfig';
import { BHD_SERVICES, BHD_ARTICLES, DIGITAL_PRODUCTS } from '../data/catalog';
import { useLanguage } from '../i18n/LanguageContext';
import { ResilientImage } from '../components/ResilientImage';
import { SocialConnectSection } from '../components/SocialConnectSection';

interface HomePageProps {
  onNavigate: (route: PageRoute, preselectedSubject?: string) => void;
  onOpenVanessa: () => void;
}

export function HomePage({ onNavigate, onOpenVanessa }: HomePageProps) {
  const { t, registry } = useLanguage();

  return (
    <div>
      {/* 1. Hero Section (Obsidian Black + White + Gold Accent) */}
      <section className="mx-auto max-w-[1280px] px-5 pt-12 pb-16 sm:px-6 sm:pt-16 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div className="space-y-6">
              <p className="text-xs font-medium tracking-wide text-[#eab308]">
                {t.home.kicker}
                <span aria-hidden="true" className="mx-2 text-[#52525b]">·</span>
                <span className="text-[#d4d4d8]">{t.home.secondaryTagline}</span>
              </p>

              <h1 className="font-display font-semibold tracking-tight text-[#f5f5f4] leading-[1.08] text-[clamp(2.35rem,4.3vw,3.75rem)] text-balance">
                {t.home.heroTitle}
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-[#a1a1aa] sm:text-[17px]">
                {t.home.heroSubtitle}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('/services')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b]"
              >
                <span>{t.home.primaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/about')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/[0.16] px-5 py-2.5 text-sm font-medium text-[#f5f5f4] hover:bg-white/[0.06] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
              >
                <span>{t.home.secondaryCta}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-[#141414] lg:h-full min-h-[280px]">
              <ResilientImage
                src="/src/assets/images/product_global_commerce_1795329935936.jpg"
                alt="World map crafted from gold and silver coins on obsidian slate symbolizing global digital impact"
                fallbackTitle="BYHENRYDIGITALS — Global Digital Impact"
                className="h-full w-full object-cover aspect-[16/10] lg:aspect-auto"
              />
            </div>
          </div>
        </div>

        {/* 4-Column Value Pillars directly below Hero Split */}
        <div className="mt-14 grid grid-cols-1 gap-6 border-y border-white/[0.08] py-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.pillars.map((pillar, idx) => (
            <div key={pillar.title} className="space-y-1.5">
              <div className="font-mono-tabular text-xs font-medium text-[#eab308]">
                0{idx + 1}
              </div>
              <h2 className="font-display text-sm font-semibold text-[#f5f5f4]">
                {pillar.title}
              </h2>
              <p className="text-xs leading-relaxed text-[#a1a1aa]">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Digital Products Overview (Crisp White Contrast Editorial Section) */}
      <section className="bg-white text-[#0b0b0b]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#a16207]">
                {t.home.productsSectionKicker}
              </p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-[#0b0b0b] sm:text-3xl">
                {t.home.productsSectionTitle}
              </h2>
              <p className="text-[15px] leading-relaxed text-[#52525b]">
                {t.home.productsSectionDesc}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('/products')}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0b0b0b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#27272a] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto cursor-pointer"
            >
              <span>{t.home.viewAllProducts}</span>
              <ArrowRight className="h-4 w-4 text-[#eab308]" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {DIGITAL_PRODUCTS.map((product) => {
              const productText = t.products.items[product.id];
              return (
                <article
                  key={product.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-[#e4e4e7] bg-[#fafafa]"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#e4e4e7]">
                    <ResilientImage
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      fallbackTitle={product.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="space-y-2.5">
                      <div className="text-xs font-mono-tabular text-[#a16207]">
                        {product.index} · {t.home.selarBadge}
                      </div>
                      <h3 className="font-display text-lg font-semibold text-[#0b0b0b]">
                        {product.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#52525b]">
                        {productText.shortDescription}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-[#e4e4e7] pt-4 text-xs">
                      <span className="font-medium text-[#52525b]">
                        {productText.priceDisplay}
                      </span>
                      <a
                        href={product.selarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-[#0b0b0b] hover:text-[#a16207] transition-colors"
                      >
                        <span>{t.home.selarLinkShort}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Services Overview (Obsidian Black) */}
      <section className="bg-[#0b0b0b] text-[#f5f5f4]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="space-y-4 lg:col-span-5">
              <p className="text-xs font-medium text-[#eab308]">
                {t.home.servicesSectionKicker}
              </p>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.home.servicesSectionTitle}
              </h2>
              <p className="text-[15px] leading-relaxed text-[#a1a1aa]">
                {t.home.servicesSectionDesc}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors cursor-pointer"
                >
                  <span>{t.home.exploreServices}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] lg:col-span-7">
              {BHD_SERVICES.map((service) => {
                const serviceText = t.services.items[service.id];
                return (
                  <div
                    key={service.id}
                    className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono-tabular text-xs text-[#eab308]">
                        {service.index}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-[#f5f5f4]">
                          {serviceText.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#a1a1aa]">
                          {serviceText.summary}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate('/contact', serviceText.title)}
                      className="self-start sm:self-center text-xs font-medium text-[#eab308] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      {t.home.enquireShort}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Affiliate Programme Introduction */}
      <section className="border-y border-white/[0.08] bg-[#141414]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 lg:col-span-7">
              <p className="text-xs font-medium text-[#eab308]">
                {t.home.affiliateSectionKicker}
              </p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-[#f5f5f4] sm:text-3xl">
                {t.home.affiliateSectionTitle}
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-[#a1a1aa]">
                {t.home.affiliateSectionDesc}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('/contact', t.affiliate.applyNowSubject)
                  }
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>{t.home.applyAffiliate}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/affiliate-programme')}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/[0.14] px-5 py-2.5 text-sm font-medium text-[#f5f5f4] hover:bg-white/[0.06] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>{t.home.learnAffiliate}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:col-span-5">
              <div className="rounded-xl border border-white/[0.08] bg-[#0b0b0b] p-5">
                <div className="font-display font-mono-tabular text-2xl font-semibold text-[#eab308]">
                  {SITE_CONFIG.affiliateCommissionRate}
                </div>
                <div className="mt-1 text-xs text-[#a1a1aa]">
                  {t.home.affiliateCards.commissionLabel}
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#0b0b0b] p-5">
                <div className="font-display font-mono-tabular text-2xl font-semibold text-[#f5f5f4]">
                  ₦0
                </div>
                <div className="mt-1 text-xs text-[#a1a1aa]">
                  {t.home.affiliateCards.signupLabel}
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#0b0b0b] p-5">
                <div className="font-display text-lg font-semibold text-[#f5f5f4]">
                  {t.home.affiliateCards.noMlmTitle}
                </div>
                <div className="mt-1 text-xs text-[#a1a1aa]">
                  {t.home.affiliateCards.noMlmLabel}
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#0b0b0b] p-5">
                <div className="font-display font-mono-tabular text-lg font-semibold text-[#f5f5f4]">
                  {SITE_CONFIG.affiliateStarterKitPrice}
                </div>
                <div className="mt-1 text-xs text-[#a1a1aa]">
                  {t.home.affiliateCards.starterKitLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Digital Resources & Learning Section */}
      <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-2.5">
            <p className="text-xs font-medium text-[#eab308]">
              {t.home.resourcesSectionKicker}
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#f5f5f4] sm:text-3xl">
              {t.home.resourcesSectionTitle}
            </h2>
            <p className="text-[15px] leading-relaxed text-[#a1a1aa]">
              {t.home.resourcesSectionDesc}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/resources')}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/[0.14] px-5 py-2.5 text-sm font-medium text-[#f5f5f4] hover:border-[#eab308] hover:text-[#eab308] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto cursor-pointer"
          >
            <span>{t.home.browseResources}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {BHD_ARTICLES.slice(0, 2).map((article) => {
            const articleText = t.resources.articles[article.id];
            return (
              <article
                key={article.id}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.09] bg-[#141414] p-6"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#a1a1aa]">
                    <span className="text-[#eab308]">
                      {t.resources.topics[article.topicId]}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{articleText.publishedLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{articleText.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#f5f5f4]">
                    {articleText.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#a1a1aa]">
                    {articleText.excerpt}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => onNavigate('/resources')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#eab308] hover:underline cursor-pointer"
                  >
                    <span>{t.resources.readArticle}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 6. International Vision + Vanessa Searchable FAQ Split */}
      <section className="border-t border-white/[0.08] bg-white text-[#0b0b0b]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* International Vision */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#e4e4e7] bg-[#fafafa] p-7 sm:p-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#a16207]">
                  <Globe className="h-4 w-4" />
                  <span>{t.home.visionKicker}</span>
                </div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-[#0b0b0b]">
                  {t.home.visionTitle}
                </h2>
                <p className="text-sm leading-relaxed text-[#52525b]">
                  {t.home.visionDesc}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-[#e4e4e7] pt-5 text-xs text-[#52525b]">
                {registry.slice(0, 10).map((lang) => (
                  <span
                    key={lang.code}
                    className={
                      lang.status === 'ready'
                        ? 'font-semibold text-[#0b0b0b]'
                        : ''
                    }
                  >
                    {lang.nativeName}
                    {lang.flag ? ` ${lang.flag}` : ''}
                  </span>
                ))}
                <span className="font-medium text-[#a16207]">
                  + {Math.max(0, registry.length - 10)} {t.home.visionMorePlanned}
                </span>
              </div>
            </div>

            {/* Vanessa — Detailed BHD FAQ Intro */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#0b0b0b] bg-[#0b0b0b] p-7 sm:p-8 text-[#f5f5f4]">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#eab308]">
                  <BookOpen className="h-4 w-4" />
                  <span>{t.home.vanessaKicker}</span>
                </div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-[#f5f5f4]">
                  {t.home.vanessaTitle}
                </h2>
                <p className="text-sm leading-relaxed text-[#a1a1aa]">
                  {t.home.vanessaDesc}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 pt-5 border-t border-white/[0.08]">
                <button
                  type="button"
                  onClick={onOpenVanessa}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>{t.home.openVanessaFaq}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact CTA Banner */}
          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#e4e4e7] bg-white p-7 sm:flex-row sm:items-center sm:p-8">
            <div className="space-y-1.5">
              <h2 className="font-display text-xl font-semibold text-[#0b0b0b] sm:text-2xl">
                {t.home.contactBannerTitle}
              </h2>
              <p className="text-sm text-[#52525b]">
                {t.home.contactBannerDesc}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0b0b0b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#27272a] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{t.home.contactBannerCta}</span>
              <ArrowRight className="h-4 w-4 text-[#eab308]" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Official Social Media Section ("Let's Connect!") */}
      <SocialConnectSection />
    </div>
  );
}
