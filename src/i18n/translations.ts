import { ActiveLanguageCode } from './types';
import { TranslationBundle } from './schema';
import { en } from './locales/en';
import { ig } from './locales/ig';
import { yo } from './locales/yo';
import { ha } from './locales/ha';
import { fr } from './locales/fr';

export type { TranslationBundle } from './schema';

export const TRANSLATIONS: Record<ActiveLanguageCode, TranslationBundle> = {
  en,
  ig,
  yo,
  ha,
  fr,
};
