export type PageRoute =
  | '/'
  | '/about'
  | '/products'
  | '/affiliate-programme'
  | '/services'
  | '/resources'
  | '/contact'
  | '/faq';

const WHATSAPP_PREFILL_TEXT =
  'Hello BYHENRYDIGITALS, I visited your website and would like to make an enquiry.';

export const SITE_CONFIG = {
  brandName: 'BYHENRYDIGITALS',
  shortName: 'BHD',
  primaryTagline: 'Digital Solutions. Global Impact.',
  secondaryTagline: 'We Build Digital Value That Sells.',
  selarStoreUrl: 'https://selar.com/m/BYHENRYDIGITALS',
  contactEmail: 'byhenrydigitals@gmail.com',
  mailtoUrl: 'mailto:byhenrydigitals@gmail.com',
  whatsappNumberDisplay: '+234 708 208 8942',
  whatsappBaseUrl: 'https://wa.me/2347082088942',
  whatsappPrefillText: WHATSAPP_PREFILL_TEXT,
  whatsappUrl: `https://wa.me/2347082088942?text=${encodeURIComponent(
    WHATSAPP_PREFILL_TEXT
  )}`,
  affiliateCommissionRate: '35%',
  affiliateStarterKitPrice: '₦8,000',
  founderName: 'Henry (Coach Henry)',
  vanessaSiteUrl: 'https://vanessabhd.my.canva.site/',
  matrixCommunityUrl:
    'https://matrix.to/#/!8-sfVgIoBPymduIB9mxpswI0Ei35N-qOUq1azWWia0w?via=matrix.org',
  locationLabel: 'Operating digitally for a global audience',
} as const;

export type SocialPlatformId = 'instagram' | 'tiktok' | 'x' | 'facebook';

export interface SocialLinkItem {
  id: SocialPlatformId;
  name: string;
  handle: string;
  url: string;
}

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@byhenrydigitals',
    url: 'https://www.instagram.com/byhenrydigitals/',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@byhenrydigitals',
    url: 'https://www.tiktok.com/@byhenrydigitals',
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    handle: '@BYHENRYDIGITALS',
    url: 'https://x.com/BYHENRYDIGITALS',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'BYHENRYDIGITALS',
    url: 'https://www.facebook.com/share/1A8GpCyCt3/',
  },
];

export const ROUTES: { route: PageRoute; navKey: keyof NavLabels; titleSuffix: string }[] = [
  { route: '/', navKey: 'home', titleSuffix: 'Digital Solutions. Global Impact.' },
  { route: '/products', navKey: 'products', titleSuffix: 'BHD Academy — Digital Products & Learning' },
  { route: '/services', navKey: 'services', titleSuffix: 'BHD Services — Practical Digital Solutions' },
  { route: '/affiliate-programme', navKey: 'affiliate', titleSuffix: 'Affiliate Programme' },
  { route: '/resources', navKey: 'resources', titleSuffix: 'Resources & Blog' },
  { route: '/about', navKey: 'about', titleSuffix: 'About BYHENRYDIGITALS' },
  { route: '/contact', navKey: 'contact', titleSuffix: 'Contact BHD' },
  { route: '/faq', navKey: 'faq', titleSuffix: 'Vanessa FAQ & Information Centre' },
];

export const PRIMARY_NAV_ROUTES = ROUTES.filter((item) => item.route !== '/faq');

export type ResourceTopicId =
  | 'digital-education'
  | 'online-opportunities'
  | 'digital-tools'
  | 'entrepreneurship'
  | 'website-development'
  | 'ai-technology'
  | 'practical-guides';

export const RESOURCE_TOPIC_IDS: ResourceTopicId[] = [
  'digital-education',
  'online-opportunities',
  'digital-tools',
  'entrepreneurship',
  'website-development',
  'ai-technology',
  'practical-guides',
];

export interface NavLabels {
  home: string;
  about: string;
  products: string;
  affiliate: string;
  services: string;
  resources: string;
  faq: string;
  contact: string;
}
