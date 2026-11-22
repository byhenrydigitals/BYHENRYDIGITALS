import { PageRoute } from '../../config/siteConfig';
import { ActiveLanguageCode } from '../types';

export type FaqCategoryId =
  | 'about-bhd'
  | 'products-resources'
  | 'affiliate-programme'
  | 'web-services'
  | 'entrepreneurship-monetisation'
  | 'ai-technology'
  | 'languages-learning'
  | 'payments-purchases'
  | 'navigation-social'
  | 'vanessa-faq';

export const FAQ_CATEGORY_ORDER: FaqCategoryId[] = [
  'about-bhd',
  'products-resources',
  'affiliate-programme',
  'web-services',
  'entrepreneurship-monetisation',
  'ai-technology',
  'languages-learning',
  'payments-purchases',
  'navigation-social',
  'vanessa-faq',
];

export type FaqPublishStatus = 'published' | 'draft' | 'needs_review';

export interface FaqRecordMeta {
  id: string;
  categoryId: FaqCategoryId;
  status: FaqPublishStatus;
  verified: boolean;
  lastUpdated: string;
  relatedIds: string[];
  canonicalKeywords: string[];
  actionRoute?: PageRoute;
  actionExternalUrl?: string;
}

export interface FaqLocalizedRecord {
  question: string;
  answer: string[];
  extraKeywords?: string[];
  actionLabel?: string;
}

export interface FaqEntry extends FaqRecordMeta {
  language: ActiveLanguageCode;
  question: string;
  answer: string[];
  keywords: string[];
  actionLabel?: string;
}

export interface FaqCategoryMeta {
  title: string;
  description: string;
}

export interface FaqBundle {
  language: ActiveLanguageCode;
  bubbleLabel: string;
  closeAriaLabel: string;
  kicker: string;
  heading: string;
  subheading: string;
  nonAiNotice: string;
  searchPlaceholder: string;
  searchAriaLabel: string;
  clearSearchLabel: string;
  allCategoriesLabel: string;
  categoriesHeading: string;
  exampleQueriesTitle: string;
  exampleQueries: string[];
  resultsMatchingLabel: string;
  allTopicsCountLabel: string;
  verifiedStatusLabel: string;
  relatedQuestionsLabel: string;
  noResultsTitle: string;
  noResultsBody: string;
  resetFiltersLabel: string;
  escalationTitle: string;
  escalationBody: string;
  emailButtonLabel: string;
  whatsappButtonLabel: string;
  contactPageButtonLabel: string;
  expandAllLabel: string;
  collapseAllLabel: string;
  categories: Record<FaqCategoryId, FaqCategoryMeta>;
  entries: FaqEntry[];
}
