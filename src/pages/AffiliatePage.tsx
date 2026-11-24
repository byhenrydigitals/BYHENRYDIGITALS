import { ArrowRight, ArrowUpRight, CheckCircle2, Info, Mail, MessageCircle, Store } from 'lucide-react';
import { PageRoute, SITE_CONFIG } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';

interface AffiliatePageProps {
  onNavigate: (route: PageRoute, subject?: string) => void;
}

export function AffiliatePage({ onNavigate }: AffiliatePageProps) {
  const { t } = useLanguage();

  return (
    <div className="min-w-0">
      {/* Intro & Facts on Deep Forest-Slate Surface */}
      <section className="bg-[#0d1816] text-[#f5f4f0]">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="min-w-0 space-y-4 lg:col-span-7">
              <p className="text-xs font-semibold text-[#2dd4bf]">
                {t.affiliate.kicker}
              </p>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-balance text-[#f5f4f0] sm:text-4xl">
                {t.affiliate.title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[#b4c4c0]">
                {t.affiliate.intro}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/contact"
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      onNavigate('/contact', t.affiliate.applyNowSubject);
                    }
                  }}
                  className="inline-flex min-h-[44px] w-full min-[400px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-center text-sm font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors min-[380px]:whitespace-nowrap"
                >
                  <span>{t.affiliate.applyNowCta}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
                <a
                  href="/contact"
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      onNavigate('/contact', t.affiliate.askQuestionSubject);
                    }
                  }}
                  className="inline-flex min-h-[44px] w-full min-[400px]:w-auto max-w-full items-center justify-center rounded-lg border border-[#2dd4bf]/35 bg-[#091210] px-5 py-2.5 text-center text-sm font-medium text-[#f5f4f0] hover:border-[#2dd4bf] transition-colors"
                >
                  <span>{t.affiliate.askQuestionCta}</span>
                </a>
              </div>
            </div>

            {/* Verified Programme Facts Ledger */}
            <div className="min-w-0 rounded-xl border border-[#2dd4bf]/25 bg-[#091210] p-5 sm:p-7 lg:col-span-5">
              <h2 className="font-display text-lg font-semibold text-[#f5f4f0] pb-3.5 border-b border-white/[0.1]">
                {t.affiliate.factsTitle}
              </h2>
              <dl className="divide-y divide-white/[0.08] text-sm">
                {t.affiliate.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex flex-col gap-1 py-3 min-[360px]:flex-row min-[360px]:items-baseline min-[360px]:justify-between min-[360px]:gap-4"
                  >
                    <dt className="text-[#b4c4c0]">{fact.label}</dt>
                    <dd className="font-semibold text-[#f5f4f0] min-[360px]:text-end">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Direct Clarification Banner */}
          <div className="mt-10 flex items-start gap-3.5 rounded-xl border border-[#eab308]/40 bg-[#091210] p-5 sm:p-6">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#eab308]" />
            <p className="text-sm leading-relaxed text-[#f5f4f0]">
              {t.affiliate.clarificationBanner}
            </p>
          </div>

          {/* Two Differentiated Sections: Section A (Learn) vs Section B (Become a BHD Affiliate) */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Section A — Educational Digital Product */}
            <article className="flex min-w-0 flex-col justify-between rounded-xl border border-[#eab308]/35 bg-[#12161f] p-6 sm:p-7 space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-semibold text-[#eab308]">
                  {t.affiliate.sectionA.kicker}
                </p>
                <div className="space-y-1">
                  <h2 className="font-display text-2xl font-semibold text-[#f5f4f0]">
                    {t.affiliate.sectionA.title}
                  </h2>
                  <p className="font-mono-tabular text-sm font-semibold text-[#eab308]">
                    {t.affiliate.sectionA.productName}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-[#b0b4be]">
                  {t.affiliate.sectionA.description}
                </p>
                <ul className="space-y-2.5 text-sm text-[#d4d4d8]">
                  {t.affiliate.sectionA.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#eab308]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-white/[0.08]">
                <a
                  href={SITE_CONFIG.selarStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg border border-[#eab308]/60 bg-[#0b0e14] px-5 py-2.5 text-center text-sm font-semibold text-[#eab308] hover:bg-[#eab308] hover:text-[#0b0c0f] transition-colors"
                >
                  <Store className="h-4 w-4 shrink-0" />
                  <span>{t.affiliate.sectionA.cta}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </article>

            {/* Section B — Official BHD Affiliate Programme */}
            <article className="flex min-w-0 flex-col justify-between rounded-xl border border-[#2dd4bf]/35 bg-[#091210] p-6 sm:p-7 space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-semibold text-[#2dd4bf]">
                  {t.affiliate.sectionB.kicker}
                </p>
                <div className="space-y-1">
                  <h2 className="font-display text-2xl font-semibold text-[#f5f4f0]">
                    {t.affiliate.sectionB.title}
                  </h2>
                  <p className="text-sm font-semibold text-[#2dd4bf]">
                    {t.affiliate.sectionB.programmeName}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-[#b4c4c0]">
                  {t.affiliate.sectionB.description}
                </p>
                <ul className="space-y-2.5 text-sm text-[#d4e0dd]">
                  {t.affiliate.sectionB.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2dd4bf]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-white/[0.08]">
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
                  <span>{t.affiliate.sectionB.cta}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </article>
          </div>


          {/* How the Programme Works (Editorial Step Strip) */}
          <div className="mt-14 border-t border-white/[0.1] pt-10 space-y-6">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#f5f4f0]">
              {t.affiliate.howItWorksTitle}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {t.affiliate.steps.map((step) => (
                <div
                  key={step.num}
                  className="min-w-0 rounded-xl border border-white/[0.1] bg-[#0a1412] p-5 sm:p-6 space-y-2.5"
                >
                  <div className="font-mono-tabular text-sm font-semibold text-[#eab308]">
                    {step.num}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#f5f4f0]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#b4c4c0]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Who Can Apply & Commissions */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="min-w-0 rounded-xl border border-white/[0.1] bg-[#091210] p-6 sm:p-7 space-y-4">
              <h2 className="font-display text-xl font-semibold text-[#f5f4f0]">
                {t.affiliate.whoCanApplyTitle}
              </h2>
              <ul className="space-y-3 text-sm text-[#b4c4c0]">
                {t.affiliate.whoCanApply.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2dd4bf]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 rounded-xl border border-white/[0.1] bg-[#091210] p-6 sm:p-7 space-y-4">
              <h2 className="font-display text-xl font-semibold text-[#f5f4f0]">
                {t.affiliate.commissionsTitle}
              </h2>
              <p className="text-sm leading-relaxed text-[#b4c4c0]">
                {t.affiliate.commissionsBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Transparency Disclosure (Warm Ivory Surface) */}
      <section className="border-t border-[#e5e0d3] bg-[#f6f3eb] text-[#111216]">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="rounded-xl border border-[#dfd9ca] bg-white p-6 sm:p-8 space-y-5">
            <h2 className="font-display text-xl font-semibold text-[#111216]">
              {t.affiliate.termsTitle}
            </h2>
            <ul className="space-y-2.5 text-sm text-[#3f3f46]">
              {t.affiliate.terms.map((term) => (
                <li key={term} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f766e]" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-start gap-3 rounded-lg border border-[#dfd9ca] bg-[#f8f7f3] p-4 text-xs leading-relaxed text-[#3f3f46]">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#9a6700]" />
              <span>{t.affiliate.transparencyNotice}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/contact"
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    onNavigate('/contact', t.affiliate.applyNowSubject);
                  }
                }}
                className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-[#111216] px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#232630] transition-colors min-[380px]:whitespace-nowrap"
              >
                <span>{t.affiliate.applyNowCta}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-[#eab308]" />
              </a>
              <a
                href={SITE_CONFIG.mailtoUrl}
                className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg border border-[#d6d3cb] bg-[#f8f7f3] px-4 py-2.5 text-center text-sm font-medium text-[#111216] hover:border-[#111216] transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#9a6700]" />
                <span>{t.contact.emailUsButton}</span>
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-[#eab308] px-4 py-2.5 text-center text-sm font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>{t.contact.whatsappUsButton}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
