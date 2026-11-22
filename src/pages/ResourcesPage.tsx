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
    <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 sm:py-16">
      <div className="max-w-3xl space-y-4">
        <p className="text-xs font-medium text-[#eab308]">
          {t.resources.kicker}
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[#f5f5f4] sm:text-4xl text-balance">
          {t.resources.title}
        </h1>
        <p className="text-base leading-relaxed text-[#a1a1aa]">
          {t.resources.intro}
        </p>
      </div>

      {/* Editorial Scope Notice */}
      <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#eab308]/30 bg-[#141414] p-4 text-xs leading-relaxed text-[#d4d4d8]">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#eab308]" />
        <span>{t.resources.editorialNote}</span>
      </div>

      {/* Topic Filter Tabs */}
      <div
        role="tablist"
        aria-label={t.resources.allTopics}
        className="mt-8 flex flex-wrap gap-2"
      >
        <button
          type="button"
          role="tab"
          aria-selected={selectedTopic === 'all'}
          onClick={() => setSelectedTopic('all')}
          className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
            selectedTopic === 'all'
              ? 'bg-[#eab308] text-[#0b0b0b] font-semibold'
              : 'border border-white/[0.1] bg-[#141414] text-[#a1a1aa] hover:text-[#f5f5f4]'
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
              className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                active
                  ? 'bg-[#eab308] text-[#0b0b0b] font-semibold'
                  : 'border border-white/[0.1] bg-[#141414] text-[#a1a1aa] hover:text-[#f5f5f4]'
              }`}
            >
              {t.resources.topics[topicId]}
            </button>
          );
        })}
      </div>

      {/* Articles Grid */}
      {visibleArticles.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#141414] p-10 text-center space-y-2">
          <p className="font-display text-base font-semibold text-[#f5f5f4]">
            {t.resources.emptyTopicTitle}
            {selectedTopic !== 'all' ? ` — ${t.resources.topics[selectedTopic]}` : ''}
          </p>
          <p className="text-xs text-[#a1a1aa]">{t.resources.emptyTopicBody}</p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleArticles.map((article) => {
            const articleText = t.resources.articles[article.id];
            return (
              <article
                key={article.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#141414]"
              >
                <div className="aspect-[16/9] w-full overflow-hidden border-b border-white/[0.08]">
                  <ResilientImage
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    fallbackTitle={articleText.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#a1a1aa]">
                      <span className="text-[#eab308]">
                        {t.resources.topics[article.topicId]}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{articleText.publishedLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{articleText.readTime}</span>
                    </div>
                    <h2 className="font-display text-xl font-semibold text-[#f5f5f4]">
                      {articleText.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-[#a1a1aa]">
                      {articleText.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08]">
                    <button
                      type="button"
                      onClick={() => setActiveArticle(article)}
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-semibold text-[#eab308] hover:underline cursor-pointer"
                    >
                      <span>{t.resources.readArticle}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Article Reader Modal */}
      {activeArticle && activeArticleText && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-reader-title"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/[0.12] bg-[#141414] text-[#f5f5f4] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4">
              <div className="text-xs text-[#a1a1aa]">
                <span className="text-[#eab308]">
                  {t.resources.topics[activeArticle.topicId]}
                </span>
                <span aria-hidden="true" className="mx-2">·</span>
                <span>{activeArticleText.publishedLabel}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label={t.resources.closeArticle}
                className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg border border-white/[0.12] text-[#d4d4d8] hover:bg-white/[0.06] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <h2
                id="article-reader-title"
                className="font-display text-2xl font-semibold text-[#f5f5f4]"
              >
                {activeArticleText.title}
              </h2>
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/[0.08]">
                <ResilientImage
                  src={activeArticle.imageSrc}
                  alt={activeArticle.imageAlt}
                  fallbackTitle={activeArticleText.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#d4d4d8]">
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
