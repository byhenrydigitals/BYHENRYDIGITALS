import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  HelpCircle,
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

interface VanessaFaqBubbleProps {
  isOpen: boolean;
  onToggle: (open: boolean) => void;
  onNavigate: (route: PageRoute, preselectedSubject?: string) => void;
}

export function VanessaFaqBubble({
  isOpen,
  onToggle,
  onNavigate,
}: VanessaFaqBubbleProps) {
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

  useEffect(() => {
    if (!isOpen) return;
    const focusTimer = window.setTimeout(() => {
      searchInputRef.current?.focus();
    }, 60);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onToggle(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onToggle]);

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

  const handleNavigateAndClose = (route: PageRoute, subject?: string) => {
    onToggle(false);
    onNavigate(route, subject);
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
            : 'border-white/[0.09] bg-[#111111] hover:border-white/[0.18]'
        }`}
      >
        <button
          type="button"
          onClick={() => toggleEntry(entry.id)}
          aria-expanded={expanded}
          className="flex w-full items-start justify-between gap-3 px-4 py-3.5 text-start cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308] rounded-xl"
        >
          <div className="min-w-0 space-y-1">
            {showCategoryTag && (
              <div className="text-[11px] font-medium text-[#eab308]">
                {faq.categories[entry.categoryId].title}
              </div>
            )}
            <h3 className="font-display text-sm font-semibold leading-snug text-[#f5f5f4]">
              {entry.question}
            </h3>
          </div>
          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.1] bg-[#0b0b0b] text-[#eab308]">
            {expanded ? (
              <ChevronUp className="h-3.5 w-3.5" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5" />
            )}
          </span>
        </button>

        {expanded && (
          <div className="border-t border-white/[0.08] px-4 pb-4 pt-3 space-y-3">
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

            <div className="space-y-2.5 text-xs sm:text-[13px] leading-relaxed text-[#d4d4d8]">
              {entry.answer.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {entry.actionLabel && (entry.actionRoute || entry.actionExternalUrl) && (
              <div className="pt-0.5">
                {entry.actionExternalUrl ? (
                  <a
                    href={entry.actionExternalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] max-w-full items-center gap-1.5 rounded-lg bg-[#eab308] px-3.5 py-2 text-xs font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors"
                  >
                    <span>{entry.actionLabel}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                  </a>
                ) : entry.actionRoute ? (
                  <a
                    href={entry.actionRoute}
                    onClick={(e) => {
                      if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        handleNavigateAndClose(entry.actionRoute!);
                      }
                    }}
                    className="inline-flex min-h-[40px] max-w-full items-center gap-1.5 rounded-lg bg-[#eab308] px-3.5 py-2 text-xs font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors"
                  >
                    <span>{entry.actionLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                  </a>
                ) : null}
              </div>
            )}

            {relatedEntries.length > 0 && (
              <div className="border-t border-white/[0.08] pt-3 space-y-2">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#a1a1aa]">
                  {faq.relatedQuestionsLabel}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {relatedEntries.map((rel) => (
                    <button
                      key={rel.id}
                      type="button"
                      onClick={() => handleJumpRelated(rel.id)}
                      className="inline-flex min-h-[34px] items-center gap-1 rounded-lg border border-white/[0.12] bg-[#0b0b0b] px-2.5 py-1 text-start text-[11px] text-[#e4e4e7] hover:border-[#eab308]/60 hover:text-[#eab308] transition-colors cursor-pointer"
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
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => onToggle(true)}
          aria-label={`${faq.heading} — ${faq.bubbleLabel}`}
          aria-haspopup="dialog"
          aria-expanded={false}
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] end-[max(1rem,env(safe-area-inset-right))] sm:bottom-6 sm:end-6 z-40 inline-flex min-h-[48px] max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full border border-[#eab308]/80 bg-[#141414]/95 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#f5f5f4] shadow-2xl backdrop-blur-md hover:border-[#eab308] hover:bg-[#1a1a1a] hover:scale-[1.02] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
        >
          <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#eab308] shrink-0" />
          <span className="truncate">{faq.bubbleLabel}</span>
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end sm:p-6 bg-black/60 backdrop-blur-[2px]"
          onClick={() => onToggle(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="vanessa-faq-title"
            onClick={(e) => e.stopPropagation()}
            className="flex h-[100dvh] w-full flex-col overflow-hidden bg-[#0b0b0b] text-[#f5f5f4] sm:h-[min(690px,calc(100dvh-3rem))] sm:w-[min(540px,calc(100vw-3rem))] sm:rounded-2xl sm:border sm:border-white/[0.16] shadow-2xl"
          >
            {/* Panel Header */}
            <header className="flex shrink-0 items-start justify-between gap-3 border-b border-white/[0.1] bg-[#111111] px-4 py-3.5 pt-[max(0.875rem,env(safe-area-inset-top))] sm:px-5 sm:pt-3.5">
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#eab308]">
                  <BookOpen className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{faq.kicker}</span>
                </div>
                <h2
                  id="vanessa-faq-title"
                  className="font-display text-base font-semibold tracking-tight text-[#f5f5f4] sm:text-lg"
                >
                  {faq.heading}
                </h2>
                <p className="text-xs text-[#a1a1aa]">{faq.subheading}</p>
              </div>
              <button
                type="button"
                onClick={() => onToggle(false)}
                aria-label={faq.closeAriaLabel}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.14] bg-[#0b0b0b] text-[#e4e4e7] hover:border-[#eab308] hover:text-[#eab308] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            {/* Non-AI Clarity + Search Input + Category Filter Strip */}
            <div className="shrink-0 space-y-3 border-b border-white/[0.08] bg-[#0b0b0b] px-4 py-3 sm:px-5">
              <div className="flex items-start gap-2 rounded-lg border border-white/[0.08] bg-[#141414] px-3 py-2 text-[11px] leading-snug text-[#d4d4d8]">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#eab308]" />
                <span>{faq.nonAiNotice}</span>
              </div>

              <div className="relative">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#eab308]"
                />
                <input
                  ref={searchInputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={faq.searchPlaceholder}
                  aria-label={faq.searchAriaLabel}
                  className="min-h-[46px] min-w-0 w-full rounded-xl border border-white/[0.16] bg-[#141414] ps-10 pe-24 text-sm text-[#f5f5f4] placeholder:text-[#71717a] focus:border-[#eab308] focus:outline-none"
                />
                {query.trim().length > 0 && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="absolute end-2 top-1/2 inline-flex min-h-[34px] -translate-y-1/2 items-center gap-1 rounded-lg border border-white/[0.12] bg-[#0b0b0b] px-2.5 text-[11px] font-medium text-[#d4d4d8] hover:border-[#eab308] hover:text-[#eab308] transition-colors cursor-pointer"
                  >
                    <X className="h-3 w-3" />
                    <span>{faq.clearSearchLabel}</span>
                  </button>
                )}
              </div>

              {/* Popular Example Searches */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-medium text-[#a1a1aa]">
                  {faq.exampleQueriesTitle}
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  {faq.exampleQueries.map((example) => {
                    const isSelected =
                      query.trim().toLowerCase() === example.toLowerCase();
                    return (
                      <button
                        key={example}
                        type="button"
                        onClick={() => handleSelectExample(example)}
                        className={`shrink-0 whitespace-nowrap rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer ${
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

              {/* Horizontal Category Selector (All + A–J) */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors cursor-pointer ${
                    selectedCategory === 'all'
                      ? 'border-[#eab308] bg-[#eab308] text-[#0b0b0b] font-semibold'
                      : 'border-white/[0.1] bg-[#141414] text-[#e4e4e7] hover:border-white/[0.25]'
                  }`}
                >
                  <span>{faq.allCategoriesLabel}</span>
                  <span className="font-mono-tabular opacity-80">
                    {publishedEntries.length}
                  </span>
                </button>

                {FAQ_CATEGORY_ORDER.map((catId) => {
                  const active = selectedCategory === catId;
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
                        resultsScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors cursor-pointer ${
                        active
                          ? 'border-[#eab308] bg-[#eab308] text-[#0b0b0b] font-semibold'
                          : 'border-white/[0.1] bg-[#141414] text-[#e4e4e7] hover:border-white/[0.25]'
                      }`}
                    >
                      <span>{faq.categories[catId].title}</span>
                      <span className="font-mono-tabular opacity-80">
                        {categoryCounts[catId]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Counts & Action Controls */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#a1a1aa]">
                <span>
                  <span className="font-mono-tabular font-semibold text-[#eab308]">
                    {matches.length}
                  </span>{' '}
                  {isSearching ? faq.resultsMatchingLabel : faq.allTopicsCountLabel}
                </span>

                <div className="flex items-center gap-3">
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
                      className="inline-flex items-center gap-1 font-medium text-[#eab308] hover:underline cursor-pointer"
                    >
                      <RotateCcw className="h-3 w-3" />
                      <span>{faq.resetFiltersLabel}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Scrollable FAQ Results List */}
            <div
              ref={resultsScrollRef}
              className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5 space-y-4"
            >
              {matches.length === 0 ? (
                <div className="rounded-xl border border-white/[0.12] bg-[#141414] p-5 space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-display text-base font-semibold text-[#f5f5f4]">
                      {faq.noResultsTitle}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#a1a1aa]">
                      {faq.noResultsBody}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#eab308] px-4 py-2 text-xs font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>{faq.resetFiltersLabel}</span>
                  </button>
                </div>
              ) : isSearching ? (
                <div className="space-y-2.5">
                  {matches.map(({ entry }) => renderEntryCard(entry, true))}
                </div>
              ) : (
                <div className="space-y-6">
                  {groupedCategories.map((group) => (
                    <div key={group.categoryId} className="space-y-2.5">
                      <div className="border-b border-white/[0.08] pb-2">
                        <div className="flex items-baseline justify-between gap-2">
                          <h3 className="font-display text-sm font-semibold text-[#f5f5f4]">
                            {group.meta.title}
                          </h3>
                          <span className="font-mono-tabular text-[11px] text-[#eab308]">
                            {group.entries.length}
                          </span>
                        </div>
                        <p className="mt-0.5 text-[11px] leading-relaxed text-[#a1a1aa]">
                          {group.meta.description}
                        </p>
                      </div>
                      <div className="space-y-2">
                        {group.entries.map((entry) => renderEntryCard(entry, false))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Persistent Bottom "Can't find your answer?" Support Bar */}
            <footer className="shrink-0 border-t border-white/[0.12] bg-[#141414] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-5 sm:pb-3.5">
              <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <div className="font-display text-xs font-semibold text-[#f5f5f4]">
                    {faq.escalationTitle}
                  </div>
                  <p className="truncate text-[11px] text-[#a1a1aa]">
                    {SITE_CONFIG.contactEmail} · {SITE_CONFIG.whatsappNumberDisplay}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <a
                    href={SITE_CONFIG.mailtoUrl}
                    aria-label={`${faq.emailButtonLabel} (${SITE_CONFIG.contactEmail})`}
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-white/[0.16] bg-[#0b0b0b] px-3 py-1.5 text-xs font-semibold text-[#f5f5f4] hover:border-[#eab308] hover:text-[#eab308] transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0 text-[#eab308]" />
                    <span>{faq.emailButtonLabel}</span>
                  </a>

                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${faq.whatsappButtonLabel} (${SITE_CONFIG.whatsappNumberDisplay})`}
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#eab308] px-3 py-1.5 text-xs font-semibold text-[#0b0b0b] hover:bg-[#facc15] transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{faq.whatsappButtonLabel}</span>
                    <ArrowUpRight className="h-3 w-3 shrink-0" />
                  </a>

                  <a
                    href="/contact"
                    onClick={(e) => {
                      if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        handleNavigateAndClose('/contact');
                      }
                    }}
                    className="inline-flex min-h-[40px] items-center gap-1 rounded-lg border border-white/[0.12] px-2.5 py-1.5 text-[11px] font-medium text-[#d4d4d8] hover:border-[#eab308]/50 hover:text-[#eab308] transition-colors"
                  >
                    <span>{faq.contactPageButtonLabel}</span>
                  </a>
                </div>
              </div>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}
