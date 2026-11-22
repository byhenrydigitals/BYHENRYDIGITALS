import { ActiveLanguageCode } from '../types';
import { faqEn } from './en';
import { faqFr } from './fr';
import { faqHa } from './ha';
import { faqIg } from './ig';
import { FaqBundle } from './types';
import { faqYo } from './yo';

export const FAQ_BUNDLES: Record<ActiveLanguageCode, FaqBundle> = {
  en: faqEn,
  ig: faqIg,
  yo: faqYo,
  ha: faqHa,
  fr: faqFr,
};

export type {
  FaqBundle,
  FaqCategoryId,
  FaqEntry,
  FaqPublishStatus,
  FaqRecordMeta,
} from './types';
export { FAQ_CATEGORY_ORDER } from './types';
export { FAQ_RECORDS_META } from './recordsMeta';
export { getPublishedEntries, searchFaqEntries } from './search';
