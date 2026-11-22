import { ArrowRight, ArrowUpRight, CheckCircle2, Info, Mail, MessageCircle } from 'lucide-react';
import { PageRoute, SITE_CONFIG } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';

interface AffiliatePageProps {
  onNavigate: (route: PageRoute, subject?: string) => void;
}

export function AffiliatePage({ onNavigate }: AffiliatePageProps) {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 sm:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
        <div className="space-y-5 lg:col-span-7">
          <p className="text-xs font-medium text-[#eab308]">
            {t.affiliate.kicker}
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-balance text-[#f5f5f4] sm:text-4xl">
            {t.affiliate.title}
          </h1>
          <p className="text-base leading-relaxed text-[#a1a1aa]">
            {t.affiliate.intro}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() =>
                onNavigate('/contact', t.affiliate.applyNowSubject)
              }
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>{t.affiliate.applyNowCta}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                onNavigate('/contact', t.affiliate.askQuestionSubject)
              }
              className="inline-flex min-h-[44px] items-center rounded-lg border border-white/[0.14] px-5 py-2.5 text-sm font-medium text-[#f5f5f4] hover:bg-white/[0.06] transition-colors cursor-pointer"
            >
              <span>{t.affiliate.askQuestionCta}</span>
            </button>
          </div>
        </div>

        {/* Verified Programme Facts Table */}
        <div className="rounded-2xl border border-white/[0.1] bg-[#141414] p-6 sm:p-7 lg:col-span-5">
          <h2 className="font-display text-lg font-semibold text-[#f5f5f4] pb-4 border-b border-white/[0.08]">
            {t.affiliate.factsTitle}
          </h2>
          <dl className="divide-y divide-white/[0.08] text-sm">
            {t.affiliate.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 py-3.5"
              >
                <dt className="text-[#a1a1aa]">{fact.label}</dt>
                <dd className="text-end font-medium text-[#f5f5f4]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* How the Programme Works */}
      <div className="mt-16 space-y-6">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[#f5f5f4]">
          {t.affiliate.howItWorksTitle}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.affiliate.steps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-white/[0.09] bg-[#141414] p-6 space-y-3"
            >
              <div className="font-mono-tabular text-sm font-semibold text-[#eab308]">
                {step.num}
              </div>
              <h3 className="font-display text-lg font-semibold text-[#f5f5f4]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#a1a1aa]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Who Can Apply & Commissions */}
      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/[0.09] bg-[#101010] p-7 space-y-4">
          <h2 className="font-display text-xl font-semibold text-[#f5f5f4]">
            {t.affiliate.whoCanApplyTitle}
          </h2>
          <ul className="space-y-3 text-sm text-[#a1a1aa]">
            {t.affiliate.whoCanApply.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#eab308]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/[0.09] bg-[#101010] p-7 space-y-4">
          <h2 className="font-display text-xl font-semibold text-[#f5f5f4]">
            {t.affiliate.commissionsTitle}
          </h2>
          <p className="text-sm leading-relaxed text-[#a1a1aa]">
            {t.affiliate.commissionsBody}
          </p>
        </div>
      </div>

      {/* Terms & Transparency Disclosure */}
      <div className="mt-14 rounded-2xl border border-[#e4e4e7] bg-white p-7 text-[#0b0b0b] sm:p-8 space-y-5">
        <h2 className="font-display text-xl font-semibold text-[#0b0b0b]">
          {t.affiliate.termsTitle}
        </h2>
        <ul className="space-y-2.5 text-sm text-[#3f3f46]">
          {t.affiliate.terms.map((term) => (
            <li key={term} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a16207]" />
              <span>{term}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-start gap-3 rounded-xl border border-[#d4d4d8] bg-[#fafafa] p-4 text-xs leading-relaxed text-[#3f3f46]">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#a16207]" />
          <span>{t.affiliate.transparencyNotice}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => onNavigate('/contact', t.affiliate.applyNowSubject)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0b0b0b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#27272a] transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>{t.affiliate.applyNowCta}</span>
            <ArrowRight className="h-4 w-4 text-[#eab308]" />
          </button>
          <a
            href={SITE_CONFIG.mailtoUrl}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#d4d4d8] bg-white px-4 py-2.5 text-sm font-medium text-[#0b0b0b] hover:bg-[#f4f4f5] transition-colors whitespace-nowrap"
          >
            <Mail className="h-4 w-4 text-[#a16207]" />
            <span>{t.contact.emailUsButton}</span>
          </a>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#eab308] px-4 py-2.5 text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors whitespace-nowrap"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{t.contact.whatsappUsButton}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
