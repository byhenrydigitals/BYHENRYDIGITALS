import { useState, useRef, useMemo, useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Compass,
  Info,
  Mail,
  MessageCircle,
  RotateCcw,
  Search,
  X,
} from 'lucide-react';
import { PageRoute, SITE_CONFIG } from '../config/siteConfig';
import {
  FAQ_BUNDLES,
  FAQ_CATEGORY_ORDER,
  FaqCategoryId,
  FaqEntry,
  getPublishedEntries,
  searchFaqEntries,
} from '../i18n/faq';
import { useLanguage } from '../i18n/LanguageContext';

interface VanessaFaqPageProps {
  onNavigate: (route: PageRoute, preselectedSubject?: string) => void;
}

export function VanessaFaqPage({ onNavigate }: VanessaFaqPageProps) {
  const { faq } = useLanguage();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | FaqCategoryId>('all');
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const resultsScrollRef = useRef<HTMLDivElement | null>(null);

  const publishedEntries = useMemo(() => getPublishedEntries(faq), [faq]);

  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => {
    const firstId = publishedEntries[0]?.id;
    return firstId ? new Set([firstId]) : new Set();
  });

  const entryMap = useMemo(
    () => new Map(publishedEntries.map((item) => [item.id, item])),
    [publishedEntries]
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<FaqCategoryId, number> = {
      'about-bhd': 0,
      'products-resources': 0,
      'affiliate-programme': 0,
      'web-services': 0,
      'entrepreneurship-monetisation': 0,
      'ai-technology': 0,
      'languages-learning': 0,
      'payments-purchases': 0,
      'navigation-social': 0,
      'vanessa-faq': 0,
    };
    for (const entry of publishedEntries) {
      counts[entry.categoryId] += 1;
    }
    return counts;
  }, [publishedEntries]);

  const matches = useMemo(
    () =>
      searchFaqEntries(
        faq,
        FAQ_BUNDLES.en.entries,
        query,
        selectedCategory
      ),
    [faq, query, selectedCategory]
  );

  const isSearching = query.trim().length > 0;

  useEffect(() => {
    if (matches.length > 0 && isSearching) {
      setExpandedIds(new Set([matches[0].entry.id]));
    }
  }, [matches, isSearching]);

  const groupedCategories = useMemo(() => {
    const map = new Map<FaqCategoryId, FaqEntry[]>();
    for (const catId of FAQ_CATEGORY_ORDER) {
      map.set(catId, []);
    }
    for (const match of matches) {
      map.get(match.entry.categoryId)?.push(match.entry);
    }
    return FAQ_CATEGORY_ORDER.filter((catId) => (map.get(catId)?.length ?? 0) > 0).map(
      (catId) => ({
        categoryId: catId,
        meta: faq.categories[catId],
        entries: map.get(catId) ?? [],
      })
    );
  }, [faq.categories, matches]);

  const visibleIds = useMemo(() => matches.map((m) => m.entry.id), [matches]);
  const allVisibleExpanded =
    visibleIds.length > 0 && visibleIds.every((id) => expandedIds.has(id));

  const toggleEntry = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleToggleAllVisible = () => {
    if (allVisibleExpanded) {
      setExpandedIds(new Set());
    } else {
      setExpandedIds(new Set(visibleIds));
    }
  };

  const handleSelectExample = (example: string) => {
    setSelectedCategory('all');
    setQuery(example);
    resultsScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    setQuery('');
    setSelectedCategory('all');
    const firstId = publishedEntries[0]?.id;
    setExpandedIds(firstId ? new Set([firstId]) : new Set());
    resultsScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJumpRelated = (targetId: string) => {
    const target = entryMap.get(targetId);
    if (!target) return;
    setQuery('');
    setSelectedCategory(target.categoryId);
    setExpandedIds(new Set([target.id]));
    resultsScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderEntryCard = (entry: FaqEntry, showCategoryTag: boolean) => {
    const expanded = expandedIds.has(entry.id);
    const relatedEntries = entry.relatedIds
      .map((id) => entryMap.get(id))
      .filter((item): item is FaqEntry => Boolean(item));

    return (
      <article
        key={entry.id}
        className={`rounded-xl border transition-colors ${
          expanded
            ? 'border-[#eab308]/55 bg-[#131926]'
            : 'border-white/[0.1] bg-[#11151f] hover:border-white/[0.2]'
        }`}
      >
        <button
          type="button"
          onClick={() => toggleEntry(entry.id)}
          aria-expanded={expanded}
          className="flex w-full items-start justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-start cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308] rounded-xl"
        >
          <div className="min-w-0 space-y-1">
            {showCategoryTag && (
              <div className="text-[11px] font-semibold text-[#eab308]">
                {faq.categories[entry.categoryId].title}
              </div>
            )}
            <h3 className="font-display text-sm sm:text-base font-semibold leading-snug text-[#f5f4f0]">
              {entry.question}
            </h3>
          </div>
          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.12] bg-[#0b0c0f] text-[#eab308]">
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </span>
        </button>

        {expanded && (
          <div className="border-t border-white/[0.08] px-4 sm:px-6 pb-6 pt-4 space-y-4">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono-tabular text-[#b0b4be]">
              {entry.verified && (
                <>
                  <span className="font-medium text-[#2dd4bf]">
                    {faq.verifiedStatusLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                </>
              )}
              <span>{entry.language.toUpperCase()}</span>
              <span aria-hidden="true">·</span>
              <span>{entry.lastUpdated}</span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-[#d4d4d8]">
              {entry.answer.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {entry.actionLabel && (entry.actionRoute || entry.actionExternalUrl) && (
              <div className="pt-1">
                {entry.actionExternalUrl ? (
                  <a
                    href={entry.actionExternalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] max-w-full items-center gap-1.5 rounded-lg bg-[#eab308] px-4 py-2 text-xs sm:text-sm font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors"
                  >
                    <span>{entry.actionLabel}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </a>
                ) : entry.actionRoute ? (
                  <a
                    href={entry.actionRoute}
                    onClick={(e) => {
                      if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        onNavigate(entry.actionRoute!);
                      }
                    }}
                    className="inline-flex min-h-[44px] max-w-full items-center gap-1.5 rounded-lg bg-[#eab308] px-4 py-2 text-xs sm:text-sm font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors"
                  >
                    <span>{entry.actionLabel}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </a>
                ) : null}
              </div>
            )}

            {relatedEntries.length > 0 && (
              <div className="border-t border-white/[0.08] pt-4 space-y-2.5">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#b0b4be]">
                  {faq.relatedQuestionsLabel}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {relatedEntries.map((rel) => (
                    <button
                      key={rel.id}
                      type="button"
                      onClick={() => handleJumpRelated(rel.id)}
                      className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-white/[0.12] bg-[#0b0c0f] px-3 py-1.5 text-start text-xs text-[#e4e4e7] hover:border-[#eab308]/60 hover:text-[#eab308] transition-colors cursor-pointer"
                    >
                      <span>{rel.question}</span>
                      <ArrowRight className="h-3 w-3 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </article>
    );
  };

  return (
    <section className="min-w-0 bg-[#0e121a] text-[#f5f4f0]">
      <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Editorial Hero & Search Panel */}
        <div className="mb-8 rounded-xl border border-[#eab308]/25 bg-[#121824] p-5 sm:p-8 lg:p-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#eab308]">
              <BookOpen className="h-4 w-4 shrink-0" />
              <span>{faq.kicker}</span>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-balance text-[#f5f4f0]">
              {faq.heading}
            </h1>
            <p className="text-sm sm:text-base text-[#b0b4be]">
              {faq.subheading}
            </p>
          </div>

          {/* Search Bar + Notice */}
          <div className="mt-7 space-y-4 max-w-3xl">
            <div className="flex items-start gap-2.5 rounded-xl border border-[#60a5fa]/30 bg-[#0d131d] px-4 py-3 text-xs sm:text-sm leading-relaxed text-[#d4d4d8]">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#60a5fa]" />
              <span>{faq.nonAiNotice}</span>
            </div>

            <div className="relative">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute start-3.5 sm:start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#eab308]"
              />
              <input
                ref={searchInputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={faq.searchPlaceholder}
                aria-label={faq.searchAriaLabel}
                className={`min-h-[50px] min-w-0 w-full rounded-xl border border-white/[0.16] bg-[#0b0c0f] ps-11 sm:ps-12 text-sm sm:text-base text-[#f5f4f0] placeholder:text-[#8c92a0] focus:border-[#eab308] focus:outline-none ${
                  query.trim().length > 0 ? 'pe-24 sm:pe-28' : 'pe-4'
                }`}
              />
              {query.trim().length > 0 && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute end-2.5 sm:end-3 top-1/2 inline-flex min-h-[36px] -translate-y-1/2 items-center gap-1 rounded-lg border border-white/[0.14] bg-[#121824] px-2.5 sm:px-3 text-xs font-medium text-[#d4d4d8] hover:border-[#eab308] hover:text-[#eab308] transition-colors cursor-pointer"
                >
                  <X className="h-3.5 w-3.5" />
                  <span>{faq.clearSearchLabel}</span>
                </button>
              )}
            </div>

            {/* Popular Example Searches — Responsive Wrapping Strip */}
            <div className="space-y-2">
              <div className="text-xs font-medium text-[#b0b4be]">
                {faq.exampleQueriesTitle}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {faq.exampleQueries.map((example) => {
                  const isSelected =
                    query.trim().toLowerCase() === example.toLowerCase();
                  return (
                    <button
                      key={example}
                      type="button"
                      onClick={() => handleSelectExample(example)}
                      className={`min-h-[38px] max-w-full rounded-lg border px-3 py-1.5 text-start text-xs font-medium transition-colors cursor-pointer ${
                        isSelected
                          ? 'border-[#eab308] bg-[#eab308] text-[#0b0c0f] font-semibold'
                          : 'border-white/[0.12] bg-[#0d131d] text-[#d4d4d8] hover:border-[#eab308]/50 hover:text-white'
                      }`}
                    >
                      {example}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout: Desktop 2-Column Split Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar Category Navigation (Responsive Grid on Mobile/Tablet, Sticky List on Desktop) */}
          <aside className="lg:col-span-4 xl:col-span-3 rounded-xl border border-white/[0.1] bg-[#11151f] p-4 sm:p-5 lg:sticky lg:top-24 min-w-0">
            <div className="space-y-2.5">
              <div className="px-1 pb-1 text-xs font-semibold uppercase tracking-wider text-[#b0b4be]">
                {faq.categoriesHeading}
              </div>

              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:flex lg:flex-col gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className={`flex min-h-[44px] min-w-0 w-full items-center justify-between gap-2 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer text-start ${
                    selectedCategory === 'all'
                      ? 'bg-[#eab308] text-[#0b0c0f] font-semibold'
                      : 'bg-[#171c29] text-[#e4e4e7] hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <Compass className="h-4 w-4 shrink-0 opacity-85" />
                    <span className="truncate">{faq.allCategoriesLabel}</span>
                  </span>
                  <span className="font-mono-tabular text-xs opacity-80 shrink-0">
                    {publishedEntries.length}
                  </span>
                </button>

                {FAQ_CATEGORY_ORDER.map((catId) => {
                  const active = selectedCategory === catId;
                  const catMeta = faq.categories[catId];
                  return (
                    <button
                      key={catId}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(catId);
                        const firstInCat = publishedEntries.find(
                          (e) => e.categoryId === catId
                        );
                        if (firstInCat) setExpandedIds(new Set([firstInCat.id]));
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className={`flex min-h-[44px] min-w-0 w-full items-center justify-between gap-2 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer text-start ${
                        active
                          ? 'bg-[#eab308] text-[#0b0c0f] font-semibold'
                          : 'bg-[#171c29] text-[#e4e4e7] hover:bg-white/[0.08] hover:text-white'
                      }`}
                    >
                      <span className="truncate">{catMeta.title}</span>
                      <span className="font-mono-tabular text-xs opacity-80 shrink-0">
                        {categoryCounts[catId]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Right Main Results Pane */}
          <div ref={resultsScrollRef} className="lg:col-span-8 xl:col-span-9 space-y-6 min-w-0">
            {/* Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/[0.1] bg-[#11151f] px-4 sm:px-5 py-3.5 text-xs sm:text-sm text-[#b0b4be]">
              <span>
                <span className="font-mono-tabular font-semibold text-[#eab308]">
                  {matches.length}
                </span>{' '}
                {isSearching ? faq.resultsMatchingLabel : faq.allTopicsCountLabel}
              </span>

              <div className="flex flex-wrap items-center gap-4">
                {visibleIds.length > 1 && (
                  <button
                    type="button"
                    onClick={handleToggleAllVisible}
                    className="min-h-[36px] font-medium text-[#e4e4e7] hover:text-[#eab308] transition-colors cursor-pointer"
                  >
                    {allVisibleExpanded ? faq.collapseAllLabel : faq.expandAllLabel}
                  </button>
                )}

                {(isSearching || selectedCategory !== 'all') && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="inline-flex min-h-[36px] items-center gap-1.5 font-medium text-[#eab308] hover:underline cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>{faq.resetFiltersLabel}</span>
                  </button>
                )}
              </div>
            </div>

            {/* FAQ Cards List */}
            {matches.length === 0 ? (
              <div className="rounded-xl border border-white/[0.12] bg-[#121824] p-6 sm:p-8 space-y-4 text-center">
                <div className="max-w-md mx-auto space-y-2">
                  <h3 className="font-display text-lg font-semibold text-[#f5f4f0]">
                    {faq.noResultsTitle}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#b0b4be]">
                    {faq.noResultsBody}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>{faq.resetFiltersLabel}</span>
                </button>
              </div>
            ) : isSearching ? (
              <div className="space-y-4">
                {matches.map(({ entry }) => renderEntryCard(entry, true))}
              </div>
            ) : (
              <div className="space-y-10">
                {groupedCategories.map((group) => (
                  <div key={group.categoryId} className="space-y-4">
                    <div className="border-b border-white/[0.1] pb-3">
                      <div className="flex items-baseline justify-between gap-3">
                        <h2 className="font-display text-base sm:text-lg font-semibold text-[#f5f4f0]">
                          {group.meta.title}
                        </h2>
                        <span className="font-mono-tabular text-xs font-semibold text-[#eab308] shrink-0">
                          {group.entries.length}
                        </span>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#b0b4be]">
                        {group.meta.description}
                      </p>
                    </div>
                    <div className="space-y-3.5">
                      {group.entries.map((entry) => renderEntryCard(entry, false))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dedicated Contact BHD Escalation Section */}
        <div className="mt-14 rounded-xl border border-white/[0.12] bg-[#121824] p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-2">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#f5f4f0]">
                {faq.escalationTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#b0b4be]">
                {faq.escalationBody}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={SITE_CONFIG.mailtoUrl}
                aria-label={`${faq.emailButtonLabel} (${SITE_CONFIG.contactEmail})`}
                className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg border border-white/[0.16] bg-[#0b0c0f] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#f5f4f0] hover:border-[#eab308] hover:text-[#eab308] transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#eab308]" />
                <span className="truncate">{SITE_CONFIG.contactEmail}</span>
              </a>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${faq.whatsappButtonLabel} (${SITE_CONFIG.whatsappNumberDisplay})`}
                className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-[#2dd4bf] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#06211d] hover:bg-[#5eead4] transition-colors"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>WhatsApp ({SITE_CONFIG.whatsappNumberDisplay})</span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
              </a>

              <a
                href="/contact"
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    onNavigate('/contact');
                  }
                }}
                className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-[#eab308] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors"
              >
                <span>{faq.contactPageButtonLabel}</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
