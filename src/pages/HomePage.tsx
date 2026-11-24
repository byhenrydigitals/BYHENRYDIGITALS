import { ArrowRight, ArrowUpRight, BookOpen, Briefcase, Globe, MessagesSquare, Store } from 'lucide-react';
import { PageRoute, SITE_CONFIG } from '../config/siteConfig';
import { BHD_SERVICES, BHD_ARTICLES, DIGITAL_PRODUCTS } from '../data/catalog';
import { useLanguage } from '../i18n/LanguageContext';
import { ResilientImage } from '../components/ResilientImage';
import { CommunityInviteSection } from '../components/CommunityInviteSection';
import { SocialConnectSection } from '../components/SocialConnectSection';
import { SelectedProjectsSection } from '../components/SelectedProjectsSection';

interface HomePageProps {
  onNavigate: (route: PageRoute, preselectedSubject?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t, registry } = useLanguage();

  return (
    <div className="min-w-0">
      {/* 1. Hero Section (Obsidian Ink + Warm White + Signature Gold) */}
      <section className="bg-[#0b0c0f] text-[#f5f4f0]">
        <div className="mx-auto max-w-[1280px] px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-16 lg:px-8 lg:pt-18 lg:pb-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12">
            <div className="flex flex-col justify-between min-w-0 lg:col-span-6">
              <div className="space-y-4">
                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-[#eab308]">
                  <span>{t.home.kicker}</span>
                  <span aria-hidden="true" className="text-[#52525b]">·</span>
                  <span className="text-[#f5f4f0] font-semibold">{t.home.tagline}</span>
                </p>

                <h1 className="font-display font-semibold tracking-tight text-[#f5f4f0] leading-[1.1] text-[clamp(1.85rem,3.8vw,3.35rem)] text-balance">
                  {t.home.heroTitle}
                </h1>

                <p className="max-w-xl text-[15px] leading-relaxed text-[#b0b4be] sm:text-[17px]">
                  {t.home.heroSubtitle}
                </p>

                <div className="max-w-xl rounded-lg border border-white/[0.12] bg-[#12161f] p-4 space-y-1">
                  <p className="text-xs font-semibold text-[#eab308]">
                    {t.home.needsApproachTitle}
                  </p>
                  <p className="text-xs sm:text-[13.5px] leading-relaxed text-[#d4d4d8]">
                    {t.home.needsApproachBody}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#business-services"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('business-services')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex min-h-[44px] w-full min-[400px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-center text-sm font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors min-[400px]:whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c0f]"
                >
                  <span>{t.home.primaryCta}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>

                <a
                  href="#academy-products"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('academy-products')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex min-h-[44px] w-full min-[400px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg border border-white/[0.16] bg-[#12161f] px-5 py-2.5 text-center text-sm font-medium text-[#f5f4f0] hover:border-[#eab308]/50 hover:bg-[#171c28] transition-colors min-[400px]:whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
                >
                  <span>{t.home.secondaryCta}</span>
                </a>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <div className="overflow-hidden rounded-xl border border-white/[0.12] bg-[#12161f] lg:h-full min-h-[220px] sm:min-h-[290px]">
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

          {/* 4-Column Editorial Value Pillars */}
          <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/[0.1] pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {t.home.pillars.map((pillar, idx) => (
              <div key={pillar.title} className="min-w-0 space-y-1.5">
                <div className="font-mono-tabular text-xs font-semibold text-[#eab308]">
                  0{idx + 1}.
                </div>
                <h2 className="font-display text-sm font-semibold text-[#f5f4f0]">
                  {pillar.title}
                </h2>
                <p className="text-xs leading-relaxed text-[#b0b4be]">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1b. Two Visitor Pathways: BHD Academy vs. BHD Services (Crisp Editorial White Surface) */}
      <section
        id="visitor-pathways"
        className="scroll-mt-20 border-b border-[#e5e0d3] bg-white text-[#111216]"
      >
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-semibold text-[#9a6700]">
              {t.home.pathways.sectionKicker}
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#111216] sm:text-3xl text-balance">
              {t.home.pathways.sectionTitle}
            </h2>
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#4b4e57]">
              {t.home.pathways.sectionSubtitle}
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* BHD ACADEMY — FOR INDIVIDUALS */}
            <article className="flex min-w-0 flex-col justify-between rounded-xl border border-[#dfd9ca] bg-[#f6f3eb] p-6 sm:p-8 text-[#111216] space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0f766e]">
                  <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.home.pathways.individual.label}</span>
                </div>
                <h3 className="font-display text-xl font-semibold leading-snug text-[#111216] sm:text-2xl text-balance">
                  {t.home.pathways.individual.title}
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#4b4e57]">
                  {t.home.pathways.individual.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#e5e0d3]">
                <a
                  href="#academy-products"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('academy-products')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-[#111216] px-5 py-2.5 text-center text-sm font-semibold text-[#f6f3eb] hover:bg-[#232630] transition-colors min-[420px]:whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111216] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f3eb]"
                >
                  <span>{t.home.pathways.individual.cta}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#eab308]" />
                </a>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-[#3f3f46]">
                  <a
                    href="/products"
                    onClick={(e) => {
                      if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        onNavigate('/products');
                      }
                    }}
                    className="inline-flex min-h-[34px] items-center gap-1 hover:text-[#0f766e] hover:underline"
                  >
                    <span>{t.home.pathways.individual.productsLinkLabel}</span>
                    <ArrowRight className="h-3 w-3 shrink-0" />
                  </a>
                  <span aria-hidden="true" className="text-[#b8b1a0]">·</span>
                  <a
                    href="/resources"
                    onClick={(e) => {
                      if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        onNavigate('/resources');
                      }
                    }}
                    className="inline-flex min-h-[34px] items-center gap-1 hover:text-[#0f766e] hover:underline"
                  >
                    <span>{t.home.pathways.individual.resourcesLinkLabel}</span>
                    <ArrowRight className="h-3 w-3 shrink-0" />
                  </a>
                  <span aria-hidden="true" className="text-[#b8b1a0]">·</span>
                  <a
                    href="/affiliate-programme"
                    onClick={(e) => {
                      if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        onNavigate('/affiliate-programme');
                      }
                    }}
                    className="inline-flex min-h-[34px] items-center gap-1 hover:text-[#0f766e] hover:underline"
                  >
                    <span>{t.home.pathways.individual.affiliateLinkLabel}</span>
                    <ArrowRight className="h-3 w-3 shrink-0" />
                  </a>
                </div>
              </div>
            </article>

            {/* BHD SERVICES — FOR BUSINESSES */}
            <article className="flex min-w-0 flex-col justify-between rounded-xl border border-[#1e2738] bg-[#101520] p-6 sm:p-8 text-[#f5f4f0] space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#eab308]">
                  <Briefcase className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.home.pathways.business.label}</span>
                </div>
                <h3 className="font-display text-xl font-semibold leading-snug text-[#f5f4f0] sm:text-2xl text-balance">
                  {t.home.pathways.business.title}
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#b0b4be]">
                  {t.home.pathways.business.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/[0.1]">
                <a
                  href="#business-services"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('business-services')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-center text-sm font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors min-[420px]:whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101520]"
                >
                  <span>{t.home.pathways.business.cta}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-[#d4d4d8]">
                  <a
                    href="/services"
                    onClick={(e) => {
                      if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        onNavigate('/services');
                      }
                    }}
                    className="inline-flex min-h-[34px] items-center gap-1 hover:text-[#eab308] hover:underline"
                  >
                    <span>{t.home.pathways.business.servicesLinkLabel}</span>
                    <ArrowRight className="h-3 w-3 shrink-0" />
                  </a>
                  <span aria-hidden="true" className="text-white/25">·</span>
                  <a
                    href="#selected-projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById('selected-projects')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex min-h-[34px] items-center gap-1 hover:text-[#eab308] hover:underline"
                  >
                    <span>{t.home.pathways.business.projectsLinkLabel}</span>
                    <ArrowRight className="h-3 w-3 shrink-0" />
                  </a>
                  <span aria-hidden="true" className="text-white/25">·</span>
                  <a
                    href="/contact"
                    onClick={(e) => {
                      if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        onNavigate('/contact', t.home.pathways.business.label);
                      }
                    }}
                    className="inline-flex min-h-[34px] items-center gap-1 hover:text-[#eab308] hover:underline"
                  >
                    <span>{t.home.pathways.business.contactLinkLabel}</span>
                    <ArrowRight className="h-3 w-3 shrink-0" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 2. Digital Products Overview (Warm Ivory Paper Surface) */}
      <section
        id="academy-products"
        className="scroll-mt-20 bg-[#f6f3eb] text-[#111216]"
      >
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl min-w-0 space-y-2">
              <p className="text-xs font-semibold text-[#9a6700]">
                {t.home.productsSectionKicker}
              </p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-[#111216] sm:text-3xl text-balance">
                {t.home.productsSectionTitle}
              </h2>
              <p className="text-[15px] leading-relaxed text-[#4b4e57]">
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
              className="inline-flex min-h-[44px] max-w-full items-center gap-2 rounded-lg bg-[#111216] px-5 py-2.5 text-sm font-semibold text-[#f6f3eb] hover:bg-[#232630] transition-colors min-[380px]:whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>{t.home.viewAllProducts}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#eab308]" />
            </a>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
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
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div className="space-y-2">
                      <div className="text-xs font-mono-tabular text-[#9a6700]">
                        {product.index} · {t.home.selarBadge}
                      </div>
                      <h3 className="font-display text-lg font-semibold text-[#111216]">
                        {product.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#4b4e57]">
                        {productText.shortDescription}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#ece7da] pt-4 text-xs">
                      <span className="font-medium text-[#4b4e57]">
                        {productText.priceDisplay}
                      </span>
                      <a
                        href={product.selarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-[#111216] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#232630] transition-colors"
                      >
                        <Store className="h-3.5 w-3.5 shrink-0 text-[#eab308]" />
                        <span>{t.home.selarLinkShort}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[#eab308]" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Services Overview (Deep Slate-Navy Surface) */}
      <section
        id="business-services"
        className="scroll-mt-20 border-t border-white/[0.08] bg-[#101520] text-[#f5f4f0]"
      >
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="min-w-0 space-y-5 lg:col-span-5">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#60a5fa]">
                  {t.home.servicesSectionKicker}
                </p>
                <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl text-balance">
                  {t.home.servicesSectionTitle}
                </h2>
                <p className="max-w-lg text-[15px] leading-relaxed text-[#b0b4be]">
                  {t.home.servicesSectionDesc}
                </p>
              </div>

              {/* BHD Approach Summary */}
              <div className="rounded-xl border border-white/[0.1] bg-[#0b0e16] p-4 sm:p-5 space-y-3">
                <p className="text-xs font-semibold text-[#eab308]">
                  {t.services.approachKicker}
                </p>
                <p className="font-display text-sm sm:text-base font-semibold text-[#f5f4f0] text-balance">
                  {t.services.approachHeading}
                </p>
                <p className="text-xs leading-relaxed text-[#b0b4be]">
                  {t.services.approachLead}
                </p>
              </div>

              <div className="pt-1">
                <a
                  href="/services"
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      onNavigate('/services');
                    }
                  }}
                  className="inline-flex min-h-[44px] max-w-full items-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-sm font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors"
                >
                  <span>{t.home.exploreServices}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              </div>

              <p className="text-xs leading-relaxed text-[#9ca3af]">
                {t.services.availabilityNotice}
              </p>
            </div>

            <div className="min-w-0 divide-y divide-white/[0.09] border-y border-white/[0.09] lg:col-span-7">
              {BHD_SERVICES.map((service) => {
                const serviceText = t.services.items[service.id];
                return (
                  <div
                    key={service.id}
                    className="flex flex-col gap-3 py-5 px-2 -mx-2 rounded-lg transition-colors hover:bg-white/[0.025] sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                  >
                    <div className="flex min-w-0 items-baseline gap-4">
                      <span className="font-mono-tabular text-xs font-semibold text-[#eab308] shrink-0">
                        {service.index}.
                      </span>
                      <div className="min-w-0 space-y-1.5">
                        <h3 className="font-display text-base font-semibold text-[#f5f4f0]">
                          {serviceText.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#d4d4d8]">
                          {serviceText.summary}
                        </p>
                        <p className="text-xs leading-relaxed text-[#b0b4be]">
                          <span className="font-semibold text-[#eab308]">
                            {t.services.labels.problem}:{' '}
                          </span>
                          {serviceText.problemAddressed}
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
                      className="inline-flex min-h-[38px] items-center self-start text-xs font-semibold text-[#60a5fa] hover:text-[#eab308] transition-colors whitespace-nowrap shrink-0"
                    >
                      {t.home.enquireShort} →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3b. Selected Projects Portfolio Section (Crisp Editorial White Surface) */}
      <SelectedProjectsSection
        onNavigate={onNavigate}
        showServicesLink
        variant="white"
      />

      {/* 4. Affiliate Starter Kit vs. BHD Affiliate Programme (Deep Forest-Slate Surface) */}
      <section className="border-y border-white/[0.08] bg-[#0d1816] text-[#f5f4f0]">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="min-w-0 space-y-4 lg:col-span-7">
              <p className="text-xs font-semibold text-[#2dd4bf]">
                {t.home.affiliateSectionKicker}
              </p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-[#f5f4f0] sm:text-3xl text-balance">
                {t.home.affiliateSectionTitle}
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-[#b4c4c0]">
                {t.home.affiliateSectionDesc}
              </p>
            </div>

            {/* Clean Hairline Programme Ledger (Programme Facts Only) */}
            <div className="lg:col-span-5 min-w-0 overflow-hidden rounded-xl border border-[#2dd4bf]/25 bg-[#091210]">
              <div className="grid grid-cols-1 min-[360px]:grid-cols-2 divide-y min-[360px]:divide-y-0 divide-white/[0.08]">
                <div className="p-5 min-[360px]:border-b min-[360px]:border-e border-white/[0.08]">
                  <div className="font-display font-mono-tabular text-2xl font-semibold text-[#eab308]">
                    {SITE_CONFIG.affiliateCommissionRate}
                  </div>
                  <div className="mt-1 text-xs text-[#b4c4c0]">
                    {t.home.affiliateCards.commissionLabel}
                  </div>
                </div>
                <div className="p-5 min-[360px]:border-b border-white/[0.08]">
                  <div className="font-display font-mono-tabular text-2xl font-semibold text-[#2dd4bf]">
                    ₦0
                  </div>
                  <div className="mt-1 text-xs text-[#b4c4c0]">
                    {t.home.affiliateCards.signupLabel}
                  </div>
                </div>
                <div className="p-5 min-[360px]:border-e border-white/[0.08]">
                  <div className="font-display text-lg font-semibold text-[#f5f4f0]">
                    {t.home.affiliateCards.noMlmTitle}
                  </div>
                  <div className="mt-1 text-xs text-[#b4c4c0]">
                    {t.home.affiliateCards.noMlmLabel}
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-display text-lg font-semibold text-[#f5f4f0]">
                    {t.home.affiliateCards.selectionTitle}
                  </div>
                  <div className="mt-1 text-xs text-[#b4c4c0]">
                    {t.home.affiliateCards.selectionLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Differentiated Cards: A (Educational Product) vs B (Official Affiliate Programme) */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Section A: Educational Product — ₦8,000 Affiliate Starter Kit */}
            <div className="flex min-w-0 flex-col justify-between rounded-xl border border-[#eab308]/35 bg-[#12161f] p-6 sm:p-7 space-y-5">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#eab308]">
                  {t.home.starterKitOffer.kicker}
                </p>
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-semibold text-[#f5f4f0]">
                    {t.home.starterKitOffer.title}
                  </h3>
                  <p className="font-mono-tabular text-sm font-semibold text-[#eab308]">
                    {t.home.starterKitOffer.priceLabel}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-[#b0b4be]">
                  {t.home.starterKitOffer.description}
                </p>
                <p className="rounded-lg border border-white/[0.1] bg-[#0b0e14] p-3 text-xs leading-relaxed text-[#d4d4d8]">
                  {t.home.starterKitOffer.clarification}
                </p>
              </div>

              <div className="pt-1">
                <a
                  href={SITE_CONFIG.selarStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg border border-[#eab308]/60 bg-[#0b0e14] px-5 py-2.5 text-center text-sm font-semibold text-[#eab308] hover:bg-[#eab308] hover:text-[#0b0c0f] transition-colors"
                >
                  <Store className="h-4 w-4 shrink-0" />
                  <span>{t.home.starterKitOffer.cta}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </div>

            {/* Section B: Official Affiliate Programme — Application & BHD Selection */}
            <div className="flex min-w-0 flex-col justify-between rounded-xl border border-[#2dd4bf]/35 bg-[#091210] p-6 sm:p-7 space-y-5">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#2dd4bf]">
                  {t.home.programmeOffer.kicker}
                </p>
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-semibold text-[#f5f4f0]">
                    {t.home.programmeOffer.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#2dd4bf]">
                    {t.home.programmeOffer.priceLabel}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-[#b4c4c0]">
                  {t.home.programmeOffer.description}
                </p>
                <p className="rounded-lg border border-white/[0.1] bg-[#060d0b] p-3 text-xs leading-relaxed text-[#d4e0dd]">
                  {t.home.programmeOffer.clarification}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="/contact"
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      onNavigate('/contact', t.affiliate.applyNowSubject);
                    }
                  }}
                  className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-center text-sm font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors"
                >
                  <span>{t.home.programmeOffer.cta}</span>
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
                  className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg border border-[#2dd4bf]/35 bg-[#060d0b] px-4 py-2.5 text-center text-sm font-medium text-[#f5f4f0] hover:border-[#2dd4bf] transition-colors"
                >
                  <span>{t.home.learnAffiliate}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Direct Plain Clarification Callout */}
          <div className="rounded-xl border border-white/[0.16] bg-[#091210] p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-[#e4e8e7]">
              {t.home.affiliateClarification}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Digital Resources & Learning Section (Clean White Editorial Surface) */}
      <section className="bg-white text-[#111216]">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl min-w-0 space-y-2">
              <p className="text-xs font-semibold text-[#1d4ed8]">
                {t.home.resourcesSectionKicker}
              </p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-[#111216] sm:text-3xl text-balance">
                {t.home.resourcesSectionTitle}
              </h2>
              <p className="text-[15px] leading-relaxed text-[#4b4e57]">
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
              className="inline-flex min-h-[44px] max-w-full items-center gap-2 rounded-lg border border-[#d6d3cb] bg-[#f8f7f3] px-5 py-2.5 text-sm font-semibold text-[#111216] hover:border-[#111216] hover:bg-[#f0ede4] transition-colors min-[380px]:whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>{t.home.browseResources}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#9a6700]" />
            </a>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {BHD_ARTICLES.slice(0, 2).map((article) => {
              const articleText = t.resources.articles[article.id];
              return (
                <article
                  key={article.id}
                  className="flex min-w-0 flex-col justify-between rounded-xl border border-[#e5e2d9] bg-[#f8f7f3] p-6"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#4b4e57]">
                      <span className="font-semibold text-[#1d4ed8]">
                        {t.resources.topics[article.topicId]}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{articleText.publishedLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{articleText.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#111216]">
                      {articleText.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#4b4e57]">
                      {articleText.excerpt}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#e5e2d9]">
                    <a
                      href="/resources"
                      onClick={(e) => {
                        if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                          e.preventDefault();
                          onNavigate('/resources');
                        }
                      }}
                      className="inline-flex min-h-[38px] items-center gap-1.5 text-xs font-semibold text-[#111216] hover:text-[#1d4ed8] transition-colors"
                    >
                      <span>{t.resources.readArticle}</span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#9a6700]" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Supported Languages + Vanessa Searchable FAQ Split (Warm Ivory Surface) */}
      <section className="border-t border-[#e5e0d3] bg-[#f6f3eb] text-[#111216]">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {/* Supported Languages */}
            <div className="flex min-w-0 flex-col justify-between rounded-xl border border-[#dfd9ca] bg-white p-6 sm:p-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0f766e]">
                  <Globe className="h-4 w-4 shrink-0" />
                  <span>{t.home.visionKicker}</span>
                </div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-[#111216] text-balance">
                  {t.home.visionTitle}
                </h2>
                <p className="text-sm leading-relaxed text-[#4b4e57]">
                  {t.home.visionDesc}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[#ece7da] pt-5 sm:grid-cols-3">
                {registry.map((lang) => (
                  <div key={lang.code} className="min-w-0">
                    <div className="text-xs font-semibold text-[#111216]">
                      {lang.nativeName}
                      {lang.flag ? ` ${lang.flag}` : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vanessa — Detailed BHD FAQ Intro */}
            <div className="flex min-w-0 flex-col justify-between rounded-xl border border-[#1d2536] bg-[#101622] p-6 sm:p-8 text-[#f5f4f0]">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#eab308]">
                  <BookOpen className="h-4 w-4 shrink-0" />
                  <span>{t.home.vanessaKicker}</span>
                </div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-[#f5f4f0] text-balance">
                  {t.home.vanessaTitle}
                </h2>
                <p className="text-sm leading-relaxed text-[#b0b4be]">
                  {t.home.vanessaDesc}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 pt-5 border-t border-white/[0.1]">
                <a
                  href="/faq"
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      onNavigate('/faq');
                    }
                  }}
                  className="inline-flex min-h-[44px] max-w-full items-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-sm font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors"
                >
                  <span>{t.home.openVanessaFaq}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact & Community Banner */}
          <div className="mt-7 flex flex-col items-start justify-between gap-5 rounded-xl border border-[#dfd9ca] bg-white p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="min-w-0 space-y-1.5">
              <h2 className="font-display text-xl font-semibold text-[#111216] sm:text-2xl">
                {t.home.contactBannerTitle}
              </h2>
              <p className="text-sm text-[#4b4e57]">
                {t.home.contactBannerDesc}
              </p>
            </div>
            <div className="flex w-full sm:w-auto flex-wrap items-center gap-3 shrink-0">
              <a
                href={SITE_CONFIG.matrixCommunityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg border border-[#d6d3cb] bg-[#f8f7f3] px-4 py-2.5 text-sm font-semibold text-[#111216] hover:border-[#eab308] hover:bg-[#fefce8] transition-colors"
              >
                <MessagesSquare className="h-4 w-4 shrink-0 text-[#9a6700]" />
                <span>{t.community.cta}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#9a6700]" />
              </a>

              <a
                href="/contact"
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    onNavigate('/contact');
                  }
                }}
                className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-[#111216] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#232630] transition-colors min-[380px]:whitespace-nowrap shrink-0"
              >
                <span>{t.home.contactBannerCta}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-[#eab308]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Dedicated Join the BHD Community Section (Matrix) */}
      <CommunityInviteSection />

      {/* 8. Official Connect With Us Section */}
      <SocialConnectSection />
    </div>
  );
}
