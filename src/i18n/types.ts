export type ActiveLanguageCode = 'en' | 'ig' | 'yo' | 'ha' | 'fr' | 'pcm';

export type SupportedLanguageCode = ActiveLanguageCode;

export interface LanguageDefinition {
  code: SupportedLanguageCode;
  name: string;
  nativeName: string;
  flag?: string;
  dir: 'ltr' | 'rtl';
  status: 'ready';
}

export const LANGUAGE_REGISTRY: LanguageDefinition[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr', status: 'ready' },
  { code: 'ig', name: 'Igbo', nativeName: 'Igbo', dir: 'ltr', status: 'ready' },
  { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá', dir: 'ltr', status: 'ready' },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa', dir: 'ltr', status: 'ready' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr', status: 'ready' },
  { code: 'pcm', name: 'Nigerian Pidgin', nativeName: 'Nigerian Pidgin', dir: 'ltr', status: 'ready' },
];

export const ACTIVE_LANGUAGE_CODES: ActiveLanguageCode[] = ['en', 'ig', 'yo', 'ha', 'fr', 'pcm'];
