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
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] end-[max(1rem,env(safe-area-inset-right))] sm:bottom-6 sm:end-6 z-40 inline-flex min-h-[48px] max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full border border-[#eab308]/80 bg-[#141414]/95 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#f5f5f4] shadow-2xl backdrop-blur-md hover:border-[#eab308] hover:bg-[#1a1a1a] hover:scale-[1.02] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab308]"
    >
      <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#eab308] shrink-0" />
      <span className="truncate">{faq.bubbleLabel}</span>
    </a>
  );
}
