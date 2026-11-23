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
            ? 'border-[#eab308]/50 bg-[#141414]'
            : 'border-white/[0.08] bg-[#111111] hover:border-white/[0.18]'
        }`}
      >
        <button
          type="button"
          onClick={() => toggleEntry(entry.id)}
          aria-expanded={expanded}
          className="flex w-full items-start justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 text-start cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308] rounded-xl"
        >
          <div className="min-w-0 space-y-1">
            {showCategoryTag && (
              <div className="text-[11px] font-medium text-[#eab308]">
                {faq.categories[entry.categoryId].title}
              </div>
            )}
            <h3 className="font-display text-sm sm:text-base font-semibold leading-snug text-[#f5f5f4]">
              {entry.question}
            </h3>
          </div>
          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.1] bg-[#0b0b0b] text-[#eab308]">
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </span>
        </button>

        {expanded && (
          <div className="border-t border-white/[0.08] px-4 sm:px-6 pb-6 pt-4 space-y-4">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono-tabular text-[#a1a1aa]">
              {entry.verified && (
                <>
                  <span className="font-medium text-[#eab308]">
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
                    className="inline-flex min-h-[40px] max-w-full items-center gap-1.5 rounded-lg bg-[#eab308] px-4 py-2 text-xs sm:text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors"
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
                    className="inline-flex min-h-[40px] max-w-full items-center gap-1.5 rounded-lg bg-[#eab308] px-4 py-2 text-xs sm:text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors"
                  >
                    <span>{entry.actionLabel}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </a>
                ) : null}
              </div>
            )}

            {relatedEntries.length > 0 && (
              <div className="border-t border-white/[0.08] pt-4 space-y-2.5">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#a1a1aa]">
                  {faq.relatedQuestionsLabel}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {relatedEntries.map((rel) => (
                    <button
                      key={rel.id}
                      type="button"
                      onClick={() => handleJumpRelated(rel.id)}
                      className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-white/[0.12] bg-[#0b0b0b] px-3 py-1 text-start text-xs text-[#e4e4e7] hover:border-[#eab308]/60 hover:text-[#eab308] transition-colors cursor-pointer"
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
    <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Hero Banner */}
      <div className="mb-8 rounded-3xl border border-white/[0.12] bg-gradient-to-b from-[#141414] to-[#0b0b0b] p-6 sm:p-10 lg:p-12 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#eab308]/40 bg-[#eab308]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#eab308]">
            <BookOpen className="h-3.5 w-3.5 shrink-0" />
            <span>{faq.kicker}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#f5f5f4]">
            {faq.heading}
          </h1>
          <p className="text-sm sm:text-base text-[#a1a1aa]">
            {faq.subheading}
          </p>
        </div>

        {/* Search Bar + Notice */}
        <div className="mt-8 space-y-4 max-w-3xl">
          <div className="flex items-start gap-2.5 rounded-xl border border-white/[0.08] bg-[#141414] px-4 py-3 text-xs sm:text-sm leading-relaxed text-[#d4d4d8]">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#eab308]" />
            <span>{faq.nonAiNotice}</span>
          </div>

          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#eab308]"
            />
            <input
              ref={searchInputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={faq.searchPlaceholder}
              aria-label={faq.searchAriaLabel}
              className="min-h-[52px] min-w-0 w-full rounded-2xl border border-white/[0.16] bg-[#141414] ps-12 pe-28 text-sm sm:text-base text-[#f5f5f4] placeholder:text-[#71717a] focus:border-[#eab308] focus:outline-none shadow-lg"
            />
            {query.trim().length > 0 && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute end-3 top-1/2 inline-flex min-h-[38px] -translate-y-1/2 items-center gap-1.5 rounded-xl border border-white/[0.12] bg-[#0b0b0b] px-3 text-xs font-medium text-[#d4d4d8] hover:border-[#eab308] hover:text-[#eab308] transition-colors cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
                <span>{faq.clearSearchLabel}</span>
              </button>
            )}
          </div>

          {/* Popular Example Searches */}
          <div className="space-y-2">
            <div className="text-xs font-medium text-[#a1a1aa]">
              {faq.exampleQueriesTitle}
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {faq.exampleQueries.map((example) => {
                const isSelected =
                  query.trim().toLowerCase() === example.toLowerCase();
                return (
                  <button
                    key={example}
                    type="button"
                    onClick={() => handleSelectExample(example)}
                    className={`shrink-0 whitespace-nowrap rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? 'border-[#eab308] bg-[#eab308] text-[#0b0b0b] font-semibold'
                        : 'border-white/[0.1] bg-[#141414] text-[#d4d4d8] hover:border-[#eab308]/50 hover:text-[#f5f5f4]'
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
        {/* Left Sidebar Category Navigation */}
        <aside className="lg:col-span-4 xl:col-span-3 rounded-2xl border border-white/[0.1] bg-[#111111] p-4 sm:p-5 sticky top-24 shadow-xl">
          <div className="space-y-2">
            <div className="px-1 pb-2 text-xs font-semibold uppercase tracking-wider text-[#a1a1aa]">
              {faq.categoriesHeading}
            </div>

            <div className="space-y-1.5 overflow-x-auto lg:overflow-x-visible pb-1 lg:pb-0 flex lg:flex-col gap-1.5">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className={`flex shrink-0 lg:w-full items-center justify-between rounded-xl px-4 py-3 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#eab308] text-[#0b0b0b] font-semibold shadow-md'
                    : 'bg-[#141414] text-[#e4e4e7] hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2.5 truncate">
                  <Compass className="h-4 w-4 shrink-0 opacity-80" />
                  <span>{faq.allCategoriesLabel}</span>
                </span>
                <span className="font-mono-tabular text-xs opacity-80">
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
                    className={`flex shrink-0 lg:w-full items-center justify-between rounded-xl px-4 py-3 text-xs sm:text-sm font-medium transition-colors cursor-pointer text-start ${
                      active
                        ? 'bg-[#eab308] text-[#0b0b0b] font-semibold shadow-md'
                        : 'bg-[#141414] text-[#e4e4e7] hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    <span className="truncate pe-3">{catMeta.title}</span>
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
        <main ref={resultsScrollRef} className="lg:col-span-8 xl:col-span-9 space-y-6 min-w-0">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-[#111111] px-5 py-3.5 text-xs sm:text-sm text-[#a1a1aa]">
            <span>
              <span className="font-mono-tabular font-semibold text-[#eab308]">
                {matches.length}
              </span>{' '}
              {isSearching ? faq.resultsMatchingLabel : faq.allTopicsCountLabel}
            </span>

            <div className="flex items-center gap-4">
              {visibleIds.length > 1 && (
                <button
                  type="button"
                  onClick={handleToggleAllVisible}
                  className="font-medium text-[#e4e4e7] hover:text-[#eab308] transition-colors cursor-pointer"
                >
                  {allVisibleExpanded ? faq.collapseAllLabel : faq.expandAllLabel}
                </button>
              )}

              {(isSearching || selectedCategory !== 'all') && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 font-medium text-[#eab308] hover:underline cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>{faq.resetFiltersLabel}</span>
                </button>
              )}
            </div>
          </div>

          {/* FAQ Cards List */}
          {matches.length === 0 ? (
            <div className="rounded-2xl border border-white/[0.12] bg-[#141414] p-8 space-y-4 text-center">
              <div className="max-w-md mx-auto space-y-2">
                <h3 className="font-display text-lg font-semibold text-[#f5f5f4]">
                  {faq.noResultsTitle}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#a1a1aa]">
                  {faq.noResultsBody}
                </p>
              </div>

              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#eab308] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors cursor-pointer"
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
                  <div className="border-b border-white/[0.08] pb-3">
                    <div className="flex items-baseline justify-between gap-3">
                      <h2 className="font-display text-base sm:text-lg font-semibold text-[#f5f5f4]">
                        {group.meta.title}
                      </h2>
                      <span className="font-mono-tabular text-xs font-semibold text-[#eab308]">
                        {group.entries.length}
                      </span>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#a1a1aa]">
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
        </main>
      </div>

      {/* Dedicated Contact BHD Section */}
      <section className="mt-16 rounded-3xl border border-white/[0.12] bg-[#141414] p-6 sm:p-10 lg:p-12 shadow-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-2">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#f5f5f4]">
              {faq.escalationTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa]">
              {faq.escalationBody}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={SITE_CONFIG.mailtoUrl}
              aria-label={`${faq.emailButtonLabel} (${SITE_CONFIG.contactEmail})`}
              className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-white/[0.16] bg-[#0b0b0b] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#f5f5f4] hover:border-[#eab308] hover:text-[#eab308] transition-colors"
            >
              <Mail className="h-4 w-4 shrink-0 text-[#eab308]" />
              <span>{SITE_CONFIG.contactEmail}</span>
            </a>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${faq.whatsappButtonLabel} (${SITE_CONFIG.whatsappNumberDisplay})`}
              className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[#eab308] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              <span>WhatsApp (+234 708 208 8942)</span>
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
              className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-white/[0.12] bg-[#0b0b0b] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#e4e4e7] hover:border-[#eab308] hover:text-[#eab308] transition-colors"
            >
              <span>{faq.contactPageButtonLabel}</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
