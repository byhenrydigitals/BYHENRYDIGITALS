import { ArrowRight, ArrowUpRight, BookOpen, Globe } from 'lucide-react';
import { PageRoute, SITE_CONFIG } from '../config/siteConfig';
import { BHD_SERVICES, BHD_ARTICLES, DIGITAL_PRODUCTS } from '../data/catalog';
import { useLanguage } from '../i18n/LanguageContext';
import { ResilientImage } from '../components/ResilientImage';
import { SocialConnectSection } from '../components/SocialConnectSection';

interface HomePageProps {
  onNavigate: (route: PageRoute, preselectedSubject?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t, registry } = useLanguage();

  return (
    <div className="min-w-0">
      {/* 1. Hero Section (Obsidian Black + White + Gold Accent) */}
      <section className="mx-auto max-w-[1280px] px-4 pt-10 pb-14 sm:px-6 sm:pt-14 sm:pb-16 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <div className="flex flex-col justify-between min-w-0 lg:col-span-6">
            <div className="space-y-6">
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium tracking-wide text-[#eab308]">
                <span>{t.home.kicker}</span>
                <span aria-hidden="true" className="text-[#52525b]">·</span>
                <span className="text-[#d4d4d8]">{t.home.secondaryTagline}</span>
              </p>

              <h1 className="font-display font-semibold tracking-tight text-[#f5f5f4] leading-[1.08] text-[clamp(2rem,4.3vw,3.75rem)] text-balance">
                {t.home.heroTitle}
              </h1>

              <p className="max-w-xl text-[15px] leading-relaxed text-[#a1a1aa] sm:text-[17px]">
                {t.home.heroSubtitle}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="/services"
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    onNavigate('/services');
                  }
                }}
                className="inline-flex min-h-[44px] max-w-full items-center justify-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-center text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors min-[400px]:whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b]"
              >
                <span>{t.home.primaryCta}</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>

              <a
                href="/about"
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    onNavigate('/about');
                  }
                }}
                className="inline-flex min-h-[44px] max-w-full items-center justify-center gap-2 rounded-lg border border-white/[0.16] px-5 py-2.5 text-center text-sm font-medium text-[#f5f5f4] hover:bg-white/[0.06] transition-colors min-[400px]:whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
              >
                <span>{t.home.secondaryCta}</span>
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-[#141414] lg:h-full min-h-[240px] sm:min-h-[300px]">
              <ResilientImage
                src="/src/assets/images/product_global_commerce_1795329935936.jpg"
                alt="World map crafted from gold and silver coins on obsidian slate symbolizing global digital impact"
                fallbackTitle="BYHENRYDIGITALS — Global Digital Impact"
                priority
                className="h-full w-full object-cover aspect-[16/10] lg:aspect-auto"
              />
            </div>
          </div>
        </div>

        {/* 4-Column Value Pillars directly below Hero Split */}
        <div className="mt-14 grid grid-cols-1 gap-6 border-y border-white/[0.08] py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {t.home.pillars.map((pillar, idx) => (
            <div key={pillar.title} className="min-w-0 space-y-1.5">
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
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl min-w-0 space-y-2.5">
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

            <a
              href="/products"
              onClick={(e) => {
                if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  onNavigate('/products');
                }
              }}
              className="inline-flex min-h-[44px] max-w-full items-center gap-2 rounded-lg bg-[#0b0b0b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#27272a] transition-colors min-[380px]:whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>{t.home.viewAllProducts}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#eab308]" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {DIGITAL_PRODUCTS.map((product) => {
              const productText = t.products.items[product.id];
              return (
                <article
                  key={product.id}
                  className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e4e4e7] bg-[#fafafa]"
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

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-[#e4e4e7] pt-4 text-xs">
                      <span className="font-medium text-[#52525b]">
                        {productText.priceDisplay}
                      </span>
                      <a
                        href={product.selarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[36px] items-center gap-1 font-semibold text-[#0b0b0b] hover:text-[#a16207] transition-colors"
                      >
                        <span>{t.home.selarLinkShort}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
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
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="min-w-0 space-y-4 lg:col-span-5">
              <p className="text-xs font-medium text-[#eab308]">
                {t.home.servicesSectionKicker}
              </p>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.home.servicesSectionTitle}
              </h2>
              <p className="max-w-lg text-[15px] leading-relaxed text-[#a1a1aa]">
                {t.home.servicesSectionDesc}
              </p>
              <div className="pt-2">
                <a
                  href="/services"
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      onNavigate('/services');
                    }
                  }}
                  className="inline-flex min-h-[44px] max-w-full items-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors"
                >
                  <span>{t.home.exploreServices}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </div>

            <div className="min-w-0 divide-y divide-white/[0.08] border-y border-white/[0.08] lg:col-span-7">
              {BHD_SERVICES.map((service) => {
                const serviceText = t.services.items[service.id];
                return (
                  <div
                    key={service.id}
                    className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <div className="flex min-w-0 items-baseline gap-4">
                      <span className="font-mono-tabular text-xs text-[#eab308] shrink-0">
                        {service.index}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-base font-semibold text-[#f5f5f4]">
                          {serviceText.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#a1a1aa]">
                          {serviceText.summary}
                        </p>
                      </div>
                    </div>
                    <a
                      href="/contact"
                      onClick={(e) => {
                        if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                          e.preventDefault();
                          onNavigate('/contact', serviceText.title);
                        }
                      }}
                      className="inline-flex min-h-[36px] items-center self-start sm:self-center text-xs font-medium text-[#eab308] hover:underline whitespace-nowrap shrink-0"
                    >
                      {t.home.enquireShort}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Affiliate Programme Introduction */}
      <section className="border-y border-white/[0.08] bg-[#141414]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="min-w-0 space-y-4 lg:col-span-7">
              <p className="text-xs font-medium text-[#eab308]">
                {t.home.affiliateSectionKicker}
              </p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-[#f5f5f4] sm:text-3xl">
                {t.home.affiliateSectionTitle}
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-[#a1a1aa]">
                {t.home.affiliateSectionDesc}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <a
                  href="/contact"
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      onNavigate('/contact', t.affiliate.applyNowSubject);
                    }
                  }}
                  className="inline-flex min-h-[44px] max-w-full items-center justify-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-center text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors min-[380px]:whitespace-nowrap"
                >
                  <span>{t.home.applyAffiliate}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
                <a
                  href="/affiliate-programme"
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      onNavigate('/affiliate-programme');
                    }
                  }}
                  className="inline-flex min-h-[44px] max-w-full items-center justify-center gap-2 rounded-lg border border-white/[0.14] px-5 py-2.5 text-center text-sm font-medium text-[#f5f5f4] hover:bg-white/[0.06] transition-colors min-[380px]:whitespace-nowrap"
                >
                  <span>{t.home.learnAffiliate}</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-4 lg:col-span-5 min-w-0">
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
      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl min-w-0 space-y-2.5">
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
          <a
            href="/resources"
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate('/resources');
              }
            }}
            className="inline-flex min-h-[44px] max-w-full items-center gap-2 rounded-lg border border-white/[0.14] px-5 py-2.5 text-sm font-medium text-[#f5f5f4] hover:border-[#eab308] hover:text-[#eab308] transition-colors min-[380px]:whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            <span>{t.home.browseResources}</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {BHD_ARTICLES.slice(0, 2).map((article) => {
            const articleText = t.resources.articles[article.id];
            return (
              <article
                key={article.id}
                className="flex min-w-0 flex-col justify-between rounded-2xl border border-white/[0.09] bg-[#141414] p-6"
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
                  <a
                    href="/resources"
                    onClick={(e) => {
                      if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        onNavigate('/resources');
                      }
                    }}
                    className="inline-flex min-h-[36px] items-center gap-1.5 text-xs font-semibold text-[#eab308] hover:underline"
                  >
                    <span>{t.resources.readArticle}</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 6. Supported Languages + Vanessa Searchable FAQ Split */}
      <section className="border-t border-white/[0.08] bg-white text-[#0b0b0b]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Supported Languages */}
            <div className="flex min-w-0 flex-col justify-between rounded-2xl border border-[#e4e4e7] bg-[#fafafa] p-6 sm:p-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#a16207]">
                  <Globe className="h-4 w-4 shrink-0" />
                  <span>{t.home.visionKicker}</span>
                </div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-[#0b0b0b]">
                  {t.home.visionTitle}
                </h2>
                <p className="text-sm leading-relaxed text-[#52525b]">
                  {t.home.visionDesc}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2.5 border-t border-[#e4e4e7] pt-5 sm:grid-cols-3">
                {registry.map((lang) => (
                  <div
                    key={lang.code}
                    className="rounded-lg border border-[#e4e4e7] bg-white px-3 py-2 text-xs"
                  >
                    <div className="font-semibold text-[#0b0b0b]">
                      {lang.nativeName}
                      {lang.flag ? ` ${lang.flag}` : ''}
                    </div>
                    {lang.name !== lang.nativeName && (
                      <div className="text-[11px] text-[#71717a]">{lang.name}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Vanessa — Detailed BHD FAQ Intro */}
            <div className="flex min-w-0 flex-col justify-between rounded-2xl border border-[#0b0b0b] bg-[#0b0b0b] p-6 sm:p-8 text-[#f5f5f4]">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#eab308]">
                  <BookOpen className="h-4 w-4 shrink-0" />
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
                <a
                  href={SITE_CONFIG.vanessaSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] max-w-full items-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors"
                >
                  <span>{t.home.openVanessaFaq}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact CTA Banner */}
          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#e4e4e7] bg-white p-6 sm:flex-row sm:items-center sm:p-8 lg:p-10">
            <div className="min-w-0 space-y-1.5">
              <h2 className="font-display text-xl font-semibold text-[#0b0b0b] sm:text-2xl">
                {t.home.contactBannerTitle}
              </h2>
              <p className="text-sm text-[#52525b]">
                {t.home.contactBannerDesc}
              </p>
            </div>
            <a
              href="/contact"
              onClick={(e) => {
                if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  onNavigate('/contact');
                }
              }}
              className="inline-flex min-h-[44px] max-w-full items-center gap-2 rounded-lg bg-[#0b0b0b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#27272a] transition-colors min-[380px]:whitespace-nowrap shrink-0"
            >
              <span>{t.home.contactBannerCta}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#eab308]" />
            </a>
          </div>
        </div>
      </section>

      {/* 7. Official Social Media Section ("Let's Connect!") */}
      <SocialConnectSection />
    </div>
  );
}
