import { HelpCircle } from 'lucide-react';
import { PageRoute } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';

interface VanessaFaqBubbleProps {
  onNavigate: (route: PageRoute) => void;
}

export function VanessaFaqBubble({ onNavigate }: VanessaFaqBubbleProps) {
  const { faq } = useLanguage();

  return (
    <a
      href="/faq"
      onClick={(e) => {
        if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
          e.preventDefault();
          onNavigate('/faq');
        }
      }}
      aria-label={`${faq.heading} — ${faq.bubbleLabel}`}
      className="fixed bottom-[max(0.875rem,env(safe-area-inset-bottom))] end-[max(0.875rem,env(safe-area-inset-right))] sm:bottom-6 sm:end-6 z-40 inline-flex min-h-[44px] max-w-[calc(100vw-1.75rem)] items-center gap-2 rounded-xl border border-[#eab308]/75 bg-[#111621]/95 px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#f5f4f0] shadow-lg backdrop-blur-md hover:border-[#eab308] hover:bg-[#171e2c] transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
    >
      <HelpCircle className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-[#eab308] shrink-0" />
      <span className="truncate">{faq.bubbleLabel}</span>
    </a>
  );
}
