import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Info, X } from 'lucide-react';
import { RESOURCE_TOPIC_IDS, ResourceTopicId } from '../config/siteConfig';
import { ResourceArticle, BHD_ARTICLES } from '../data/catalog';
import { useLanguage } from '../i18n/LanguageContext';
import { ResilientImage } from '../components/ResilientImage';

export function ResourcesPage() {
  const { t } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState<'all' | ResourceTopicId>('all');
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(null);

  const visibleArticles = useMemo(() => {
    if (selectedTopic === 'all') return BHD_ARTICLES;
    return BHD_ARTICLES.filter((a) => a.topicId === selectedTopic);
  }, [selectedTopic]);

  useEffect(() => {
    if (!activeArticle) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveArticle(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeArticle]);

  const activeArticleText = activeArticle
    ? t.resources.articles[activeArticle.id]
    : null;

  return (
    <div className="min-w-0">
      {/* Header, Scope Note & Filter Bar (Slate-Navy Canvas) */}
      <section className="bg-[#0e121a] text-[#f5f4f0]">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold text-[#eab308]">
              {t.resources.kicker}
            </p>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-[#f5f4f0] sm:text-4xl text-balance">
              {t.resources.title}
            </h1>
            <p className="text-base leading-relaxed text-[#b0b4be]">
              {t.resources.intro}
            </p>
          </div>

          {/* Editorial Scope Notice */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#60a5fa]/30 bg-[#121824] p-4 text-xs leading-relaxed text-[#d4d4d8]">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#60a5fa]" />
            <span>{t.resources.editorialNote}</span>
          </div>

          {/* Topic Filter Tabs */}
          <div
            role="tablist"
            aria-label={t.resources.allTopics}
            className="mt-7 flex flex-wrap gap-2"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedTopic === 'all'}
              onClick={() => setSelectedTopic('all')}
              className={`min-h-[44px] max-w-full rounded-lg px-3.5 py-2 text-start sm:text-center text-xs font-medium transition-colors cursor-pointer ${
                selectedTopic === 'all'
                  ? 'bg-[#eab308] text-[#0b0c0f] font-semibold'
                  : 'border border-white/[0.12] bg-[#121824] text-[#d4d4d8] hover:border-[#eab308]/50 hover:text-white'
              }`}
            >
              {t.resources.allTopics}
            </button>

            {RESOURCE_TOPIC_IDS.map((topicId) => {
              const active = selectedTopic === topicId;
              return (
                <button
                  key={topicId}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedTopic(topicId)}
                  className={`min-h-[44px] max-w-full rounded-lg px-3.5 py-2 text-start sm:text-center text-xs font-medium transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#eab308] text-[#0b0c0f] font-semibold'
                      : 'border border-white/[0.12] bg-[#121824] text-[#d4d4d8] hover:border-[#eab308]/50 hover:text-white'
                  }`}
                >
                  {t.resources.topics[topicId]}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid on Warm Ivory Surface for Long-Form Readability */}
      <section className="border-t border-[#e5e0d3] bg-[#f6f3eb] text-[#111216]">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          {visibleArticles.length === 0 ? (
            <div className="rounded-xl border border-[#dfd9ca] bg-white p-8 sm:p-10 text-center space-y-2">
              <p className="font-display text-base font-semibold text-[#111216]">
                {t.resources.emptyTopicTitle}
                {selectedTopic !== 'all' ? ` — ${t.resources.topics[selectedTopic]}` : ''}
              </p>
              <p className="text-xs text-[#4b4e57]">{t.resources.emptyTopicBody}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {visibleArticles.map((article) => {
                const articleText = t.resources.articles[article.id];
                return (
                  <article
                    key={article.id}
                    className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#dfd9ca] bg-white"
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden border-b border-[#ece7da]">
                      <ResilientImage
                        src={article.imageSrc}
                        alt={article.imageAlt}
                        fallbackTitle={articleText.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 space-y-4">
                      <div className="space-y-2.5">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#4b4e57]">
                          <span className="font-semibold text-[#0f766e]">
                            {t.resources.topics[article.topicId]}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{articleText.publishedLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span>{articleText.readTime}</span>
                        </div>
                        <h2 className="font-display text-xl font-semibold text-[#111216]">
                          {articleText.title}
                        </h2>
                        <p className="text-sm leading-relaxed text-[#3f3f46]">
                          {articleText.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#ece7da]">
                        <button
                          type="button"
                          onClick={() => setActiveArticle(article)}
                          className="inline-flex min-h-[44px] items-center gap-1.5 text-xs font-semibold text-[#9a6700] hover:text-[#111216] hover:underline transition-colors cursor-pointer"
                        >
                          <span>{t.resources.readArticle}</span>
                          <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Article Reader Modal */}
      {activeArticle && activeArticleText && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-reader-title"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-xl border border-[#dfd9ca] bg-white text-[#111216] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-[#ece7da] px-4 py-3.5 sm:px-6">
              <div className="min-w-0 text-xs text-[#4b4e57] truncate">
                <span className="font-semibold text-[#0f766e]">
                  {t.resources.topics[activeArticle.topicId]}
                </span>
                <span aria-hidden="true" className="mx-2">·</span>
                <span>{activeArticleText.publishedLabel}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label={t.resources.closeArticle}
                className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg border border-[#dfd9ca] bg-[#f8f7f3] text-[#111216] hover:border-[#111216] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-4 sm:p-8 space-y-5">
              <h2
                id="article-reader-title"
                className="font-display text-xl sm:text-2xl font-semibold text-[#111216]"
              >
                {activeArticleText.title}
              </h2>
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#ece7da]">
                <ResilientImage
                  src={activeArticle.imageSrc}
                  alt={activeArticle.imageAlt}
                  fallbackTitle={activeArticleText.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#2e313a]">
                {activeArticleText.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
