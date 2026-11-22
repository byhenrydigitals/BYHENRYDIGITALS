export type ActiveLanguageCode = 'en' | 'ig' | 'yo' | 'ha' | 'fr';

export type SupportedLanguageCode =
  | ActiveLanguageCode
  | 'pcm'
  | 'es'
  | 'pt'
  | 'de'
  | 'it'
  | 'nl'
  | 'ar'
  | 'ja'
  | 'zh'
  | 'ko'
  | 'hi'
  | 'ru'
  | 'tr'
  | 'id'
  | 'vi'
  | 'zu';

export interface LanguageDefinition {
  code: SupportedLanguageCode;
  name: string;
  nativeName: string;
  flag?: string;
  dir: 'ltr' | 'rtl';
  status: 'ready' | 'planned';
}

export const LANGUAGE_REGISTRY: LanguageDefinition[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr', status: 'ready' },
  { code: 'ig', name: 'Igbo', nativeName: 'Igbo', dir: 'ltr', status: 'ready' },
  { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá', dir: 'ltr', status: 'ready' },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa', dir: 'ltr', status: 'ready' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr', status: 'ready' },
  { code: 'pcm', name: 'Nigerian Pidgin', nativeName: 'Naijá Pidgin', dir: 'ltr', status: 'planned' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr', status: 'planned' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', dir: 'ltr', status: 'planned' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr', status: 'planned' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', dir: 'ltr', status: 'planned' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', dir: 'ltr', status: 'planned' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl', status: 'planned' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', dir: 'ltr', status: 'planned' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', dir: 'ltr', status: 'planned' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', dir: 'ltr', status: 'planned' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', dir: 'ltr', status: 'planned' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', dir: 'ltr', status: 'planned' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr', status: 'planned' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', dir: 'ltr', status: 'planned' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', dir: 'ltr', status: 'planned' },
  { code: 'zu', name: 'Zulu', nativeName: 'isiZulu', dir: 'ltr', status: 'planned' },
];

export const ACTIVE_LANGUAGE_CODES: ActiveLanguageCode[] = ['en', 'ig', 'yo', 'ha', 'fr'];
