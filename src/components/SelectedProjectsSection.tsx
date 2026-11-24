import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Expand,
  FolderKanban,
  ShieldCheck,
  X,
} from 'lucide-react';
import { PageRoute } from '../config/siteConfig';
import { SELECTED_PROJECTS, SelectedProject } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import { ResilientImage } from './ResilientImage';

interface SelectedProjectsSectionProps {
  onNavigate: (route: PageRoute, preselectedSubject?: string) => void;
  showServicesLink?: boolean;
  variant?: 'white' | 'ivory';
}

interface ProjectShowcaseCardProps {
  project: SelectedProject;
  onInspectImage: (image: { src: string; alt: string; title: string; category: string }) => void;
  onEnquireSimilar: (projectName: string) => void;
}

function ProjectShowcaseCard({
  project,
  onInspectImage,
  onEnquireSimilar,
}: ProjectShowcaseCardProps) {
  const { t } = useLanguage();

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#dfd9ca] bg-[#f8f7f3]">
      {project.previewImage && (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#e5e0d3] bg-[#0b0c0f]">
          <ResilientImage
            src={project.previewImage.src}
            alt={project.previewImage.alt}
            fallbackTitle={project.name}
            className="h-full w-full object-cover"
          />
          <button
            type="button"
            onClick={() =>
              onInspectImage({
                src: project.previewImage!.src,
                alt: project.previewImage!.alt,
                title: project.name,
                category: project.category,
              })
            }
            aria-label={`${t.portfolio.labels.previewZoom}: ${project.name}`}
            className="absolute bottom-3 end-3 inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-white/20 bg-[#0b0c0f]/85 px-3 py-1.5 text-xs font-medium text-[#f5f4f0] backdrop-blur-sm hover:border-[#eab308]/60 hover:text-[#eab308] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
          >
            <Expand className="h-3.5 w-3.5 shrink-0" />
            <span>{t.portfolio.labels.previewZoom}</span>
          </button>
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-7 space-y-5">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#4b4e57]">
              <span className="font-mono-tabular font-semibold text-[#9a6700]">
                {project.index}
              </span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-[#111216] sm:text-2xl">
              {project.name}
            </h3>
          </div>

          <div className="space-y-3 border-t border-[#e5e0d3] pt-4">
            <div className="space-y-1">
              <h4 className="text-xs font-semibold text-[#9a6700]">
                {t.portfolio.labels.requirement}
              </h4>
              <p className="text-sm leading-relaxed text-[#3f3f46]">
                {project.originalRequirement}
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-xs font-semibold text-[#0f766e]">
                {t.portfolio.labels.solution}
              </h4>
              <p className="text-sm leading-relaxed text-[#3f3f46]">
                {project.solutionDeveloped}
              </p>
            </div>

            {project.technologies && project.technologies.length > 0 && (
              <div className="space-y-1 pt-1">
                <h4 className="text-xs font-semibold text-[#111216]">
                  {t.portfolio.labels.technologies}
                </h4>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#4b4e57]">
                  {project.technologies.join(' · ')}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#e5e0d3] pt-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#111216] px-4 py-2 text-xs font-semibold text-[#f5f4f0] hover:bg-[#232630] transition-colors"
            >
              <span>{project.liveLabel ?? t.portfolio.labels.liveLink}</span>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[#eab308]" />
            </a>
          ) : (
            <span className="text-xs font-medium text-[#6b707c]">
              {project.category}
            </span>
          )}

          <a
            href="/contact"
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onEnquireSimilar(project.name);
              }
            }}
            className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-semibold text-[#111216] hover:text-[#9a6700] transition-colors"
          >
            <span>{t.portfolio.labels.similarProjectCta}</span>
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#9a6700]" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function SelectedProjectsSection({
  onNavigate,
  showServicesLink = false,
  variant = 'white',
}: SelectedProjectsSectionProps) {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    title: string;
    category: string;
  } | null>(null);

  useEffect(() => {
    if (!lightboxImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxImage]);

  const sectionBg =
    variant === 'ivory'
      ? 'border-t border-[#e5e0d3] bg-[#f6f3eb]'
      : 'border-t border-[#e5e0d3] bg-white';

  const cardSurface = variant === 'ivory' ? 'bg-white' : 'bg-[#f8f7f3]';

  return (
    <section
      id="selected-projects"
      className={`scroll-mt-20 ${sectionBg} text-[#111216]`}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl min-w-0 space-y-2">
            <p className="text-xs font-semibold text-[#9a6700]">
              {t.portfolio.kicker}
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#111216] sm:text-3xl text-balance">
              {t.portfolio.title}
            </h2>
            <p className="text-[15px] leading-relaxed text-[#4b4e57]">
              {t.portfolio.intro}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 self-start md:self-auto">
            <a
              href="/contact"
              onClick={(e) => {
                if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  onNavigate('/contact', t.portfolio.title);
                }
              }}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#111216] px-5 py-2.5 text-sm font-semibold text-[#f5f4f0] hover:bg-[#232630] transition-colors whitespace-nowrap"
            >
              <span>{t.portfolio.discussCta}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#eab308]" />
            </a>
          </div>
        </div>

        {SELECTED_PROJECTS.length > 0 ? (
          <div className="mt-9 grid grid-cols-1 gap-7 lg:grid-cols-2">
            {SELECTED_PROJECTS.map((project) => (
              <ProjectShowcaseCard
                key={project.id}
                project={project}
                onInspectImage={setLightboxImage}
                onEnquireSimilar={(projectName) =>
                  onNavigate('/contact', `${t.portfolio.title}: ${projectName}`)
                }
              />
            ))}
          </div>
        ) : (
          <div
            className={`mt-9 grid grid-cols-1 overflow-hidden rounded-xl border border-[#dfd9ca] ${cardSurface} lg:grid-cols-12`}
          >
            {/* Left Column: Honest Current Portfolio Status */}
            <div className="flex min-w-0 flex-col justify-between p-6 sm:p-8 lg:col-span-6 lg:border-e lg:border-[#e5e0d3] space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0f766e]">
                  <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.portfolio.kicker}</span>
                </div>

                <h3 className="font-display text-xl font-semibold text-[#111216] sm:text-2xl text-balance">
                  {t.portfolio.emptyStateTitle}
                </h3>

                <p className="text-sm sm:text-[15px] leading-relaxed text-[#3f3f46]">
                  {t.portfolio.emptyStateBody}
                </p>

                <p className="text-xs sm:text-[13px] leading-relaxed text-[#4b4e57]">
                  {t.portfolio.emptyStateNote}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 border-t border-[#e5e0d3] pt-5">
                <a
                  href="/contact"
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      onNavigate('/contact', t.portfolio.title);
                    }
                  }}
                  className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-[#eab308] px-5 py-2.5 text-center text-sm font-semibold text-[#0b0c0f] hover:bg-[#facc15] transition-colors"
                >
                  <span>{t.portfolio.discussCta}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>

                {showServicesLink && (
                  <a
                    href="/services"
                    onClick={(e) => {
                      if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        onNavigate('/services');
                      }
                    }}
                    className="inline-flex min-h-[44px] w-full min-[420px]:w-auto max-w-full items-center justify-center gap-2 rounded-lg border border-[#d6d3cb] bg-white px-5 py-2.5 text-center text-sm font-semibold text-[#111216] hover:border-[#111216] transition-colors"
                  >
                    <span>{t.portfolio.exploreServicesCta}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Standard Reusable Project Entry Structure */}
            <div className="min-w-0 border-t border-[#e5e0d3] p-6 sm:p-8 lg:col-span-6 lg:border-t-0 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#9a6700]">
                <FolderKanban className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.portfolio.formatHeading}</span>
              </div>

              <ol className="divide-y divide-[#e5e0d3] border-y border-[#e5e0d3]">
                {t.portfolio.formatItems.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3.5 py-3 text-sm text-[#3f3f46]"
                  >
                    <span className="font-mono-tabular text-xs font-semibold text-[#9a6700] shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>

      {/* Screenshot Lightbox Modal for Approved Projects */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.title}
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-white/15 bg-[#0b0c0f] text-[#f5f4f0] shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
              <div className="min-w-0">
                <p className="text-xs font-medium text-[#eab308] truncate">
                  {lightboxImage.category}
                </p>
                <p className="font-display text-sm sm:text-base font-semibold text-[#f5f4f0] truncate">
                  {lightboxImage.title}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                aria-label={t.portfolio.labels.closePreview}
                className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border border-white/15 bg-[#131720] text-[#f5f4f0] hover:border-[#eab308]/60 hover:text-[#eab308] transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[75vh] overflow-hidden bg-[#050608]">
              <ResilientImage
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fallbackTitle={lightboxImage.title}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
