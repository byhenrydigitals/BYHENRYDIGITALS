import { ResourceTopicId, SITE_CONFIG } from '../config/siteConfig';

export type ProductId = 'clicks-to-cash' | 'global-monetisation' | 'remote-jobs-under-18';

export interface DigitalProduct {
  id: ProductId;
  index: string;
  title: string;
  selarUrl: string;
  imageSrc: string;
  imageAlt: string;
}

export type ServiceId =
  | 'web-design-dev'
  | 'landing-pages'
  | 'digital-presence'
  | 'nocode-ai-solutions'
  | 'digital-business-support';

export interface BhdService {
  id: ServiceId;
  index: string;
  imageSrc: string;
  imageAlt: string;
}

export type ArticleId =
  | 'functional-websites'
  | 'ethical-affiliate-basics'
  | 'practical-workflows'
  | 'digital-skills-foundation'
  | 'essential-digital-tools'
  | 'digital-entrepreneurship-value'
  | 'safe-online-learning-guide';

export interface ResourceArticle {
  id: ArticleId;
  slug: string;
  topicId: ResourceTopicId;
  imageSrc: string;
  imageAlt: string;
}

export const DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    id: 'clicks-to-cash',
    index: '01',
    title: 'Clicks-to-Cash',
    selarUrl: SITE_CONFIG.selarStoreUrl,
    imageSrc: '/src/assets/images/product_remote_creator_1795329937338.jpg',
    imageAlt: 'Creator working remotely with a laptop and notebook',
  },
  {
    id: 'global-monetisation',
    index: '02',
    title: 'Global Monetisation',
    selarUrl: SITE_CONFIG.selarStoreUrl,
    imageSrc: '/src/assets/images/product_global_commerce_1795329935936.jpg',
    imageAlt: 'World map composed of brass, gold, and silver coins on black slate',
  },
  {
    id: 'remote-jobs-under-18',
    index: '03',
    title: 'Remote Jobs for Under 18',
    selarUrl: SITE_CONFIG.selarStoreUrl,
    imageSrc: '/src/assets/images/product_simple_ecommerce_1795329936473.jpg',
    imageAlt: 'Young digital builder working on a laptop in a clean dark workspace',
  },
];

export const BHD_SERVICES: BhdService[] = [
  {
    id: 'web-design-dev',
    index: '01',
    imageSrc: '/src/assets/images/product_simple_ecommerce_1795329936473.jpg',
    imageAlt: 'Developer engineering a responsive storefront on a laptop',
  },
  {
    id: 'landing-pages',
    index: '02',
    imageSrc: '/src/assets/images/blog_affiliate_guide_1795329937253.jpg',
    imageAlt: 'Clean studio workspace displaying campaign analytics',
  },
  {
    id: 'digital-presence',
    index: '03',
    imageSrc: '/src/assets/images/product_advanced_ecommerce_1795329936570.jpg',
    imageAlt: 'Team aligning brand and digital growth strategy around laptops',
  },
  {
    id: 'nocode-ai-solutions',
    index: '04',
    imageSrc: '/src/assets/images/product_global_commerce_1795329935936.jpg',
    imageAlt: 'Global digital systems representation on dark slate',
  },
  {
    id: 'digital-business-support',
    index: '05',
    imageSrc: '/src/assets/images/product_remote_creator_1795329937338.jpg',
    imageAlt: 'Digital operator organizing business workflows remotely',
  },
];

export const BHD_ARTICLES: ResourceArticle[] = [
  {
    id: 'functional-websites',
    slug: 'why-functional-architecture-matters',
    topicId: 'website-development',
    imageSrc: '/src/assets/images/product_simple_ecommerce_1795329936473.jpg',
    imageAlt: 'Developer structuring a clean responsive website',
  },
  {
    id: 'ethical-affiliate-basics',
    slug: 'ethical-affiliate-recommendations',
    topicId: 'online-opportunities',
    imageSrc: '/src/assets/images/blog_affiliate_guide_1795329937253.jpg',
    imageAlt: 'Creative studio desk displaying digital marketing analytics',
  },
  {
    id: 'practical-workflows',
    slug: 'practical-no-code-and-ai-workflows',
    topicId: 'ai-technology',
    imageSrc: '/src/assets/images/product_advanced_ecommerce_1795329936570.jpg',
    imageAlt: 'Team discussing digital workflows and strategy',
  },
  {
    id: 'digital-skills-foundation',
    slug: 'building-practical-digital-skills',
    topicId: 'digital-education',
    imageSrc: '/src/assets/images/product_remote_creator_1795329937338.jpg',
    imageAlt: 'Remote learner taking notes alongside a laptop',
  },
  {
    id: 'essential-digital-tools',
    slug: 'choosing-reliable-digital-tools',
    topicId: 'digital-tools',
    imageSrc: '/src/assets/images/product_global_commerce_1795329935936.jpg',
    imageAlt: 'Digital storefront and cross-border workspace concept',
  },
  {
    id: 'digital-entrepreneurship-value',
    slug: 'packaging-digital-value-ethically',
    topicId: 'entrepreneurship',
    imageSrc: '/src/assets/images/product_advanced_ecommerce_1795329936570.jpg',
    imageAlt: 'Digital entrepreneurs reviewing product positioning strategy',
  },
  {
    id: 'safe-online-learning-guide',
    slug: 'navigating-digital-opportunities-safely',
    topicId: 'practical-guides',
    imageSrc: '/src/assets/images/product_remote_creator_1795329937338.jpg',
    imageAlt: 'Young learner studying practical digital skills safely on a laptop',
  },
];
