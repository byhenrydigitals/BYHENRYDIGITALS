import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { FAQ_BUNDLES, FaqBundle } from './faq';
import { TRANSLATIONS, TranslationBundle } from './translations';
import {
  ACTIVE_LANGUAGE_CODES,
  ActiveLanguageCode,
  LANGUAGE_REGISTRY,
  LanguageDefinition,
} from './types';

interface LanguageContextValue {
  language: ActiveLanguageCode;
  setLanguage: (code: ActiveLanguageCode) => void;
  t: TranslationBundle;
  faq: FaqBundle;
  currentDefinition: LanguageDefinition;
  registry: LanguageDefinition[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<ActiveLanguageCode>(() => {
    try {
      const saved = window.localStorage.getItem('bhd_language');
      if (saved && ACTIVE_LANGUAGE_CODES.includes(saved as ActiveLanguageCode)) {
        return saved as ActiveLanguageCode;
      }
    } catch {
      // Ignore storage access errors in restricted environments
    }
    return 'en';
  });

  const currentDefinition =
    LANGUAGE_REGISTRY.find((item) => item.code === language) ||
    LANGUAGE_REGISTRY[0];

  useEffect(() => {
    document.documentElement.lang = currentDefinition.code;
    document.documentElement.dir = currentDefinition.dir;
    try {
      window.localStorage.setItem('bhd_language', language);
    } catch {
      // Ignore storage errors
    }
  }, [language, currentDefinition]);

  const setLanguage = (code: ActiveLanguageCode) => {
    setLanguageState(code);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: TRANSLATIONS[language],
        faq: FAQ_BUNDLES[language],
        currentDefinition,
        registry: LANGUAGE_REGISTRY,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
