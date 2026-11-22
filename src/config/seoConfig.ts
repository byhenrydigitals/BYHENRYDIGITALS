import { PageRoute, SITE_CONFIG, SOCIAL_LINKS } from './siteConfig';
import { BHD_ARTICLES, DIGITAL_PRODUCTS } from '../data/catalog';
import { ActiveLanguageCode } from '../i18n/types';
import type { TranslationBundle } from '../i18n/schema';

export const DEFAULT_SITE_URL = 'https://byhenrydigitals.com';
export const SEO_IMAGE_PATH = '/src/assets/images/product_global_commerce_1795329935936.jpg';
export const SEO_IMAGE_ALT =
  'World map crafted from gold and silver coins on obsidian slate symbolizing BYHENRYDIGITALS global digital impact';

export interface RouteSeoMeta {
  title: string;
  description: string;
  changefreq: 'weekly' | 'monthly';
  priority: string;
  schemaType: 'WebPage' | 'AboutPage' | 'CollectionPage' | 'ContactPage';
}

export function normalizeSiteUrl(raw?: string): string {
  const candidate = (raw || '').trim();
  if (!candidate) return DEFAULT_SITE_URL;
  try {
    const parsed = new URL(candidate);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return DEFAULT_SITE_URL;
    }
    return parsed.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function getConfiguredSiteUrl(): string {
  const viteEnvUrl =
    typeof import.meta !== 'undefined' &&
    (import.meta as { env?: Record<string, string | undefined> }).env?.VITE_SITE_URL;
  const nodeEnvUrl =
    typeof process !== 'undefined' && process.env ? process.env.VITE_SITE_URL : undefined;
  return normalizeSiteUrl(viteEnvUrl || nodeEnvUrl || DEFAULT_SITE_URL);
}

export function getCanonicalUrl(route: PageRoute, baseUrl = getConfiguredSiteUrl()): string {
  const cleanBase = normalizeSiteUrl(baseUrl);
  return route === '/' ? `${cleanBase}/` : `${cleanBase}${route}`;
}

export const ROUTE_SEO: Record<PageRoute, RouteSeoMeta> = {
  '/': {
    title: 'BYHENRYDIGITALS | Digital Solutions & Practical Products',
    description:
      'Discover BYHENRYDIGITALS (BHD) for functional websites, practical digital products on Selar, and a transparent 35% affiliate programme built for global reach.',
    changefreq: 'weekly',
    priority: '1.0',
    schemaType: 'WebPage',
  },
  '/about': {
    title: 'About BYHENRYDIGITALS | Coach Henry & Digital Mission',
    description:
      'Learn about BYHENRYDIGITALS (BHD), founder Coach Henry, and our practical, trust-first mission to build digital solutions and accessible online education.',
    changefreq: 'monthly',
    priority: '0.8',
    schemaType: 'AboutPage',
  },
  '/products': {
    title: 'Digital Products | BYHENRYDIGITALS Official Selar Store',
    description:
      'Explore verified BHD digital resources on Selar, including Clicks-to-Cash, Global Monetisation, and Remote Jobs for Under 18 for practical skill building.',
    changefreq: 'weekly',
    priority: '0.9',
    schemaType: 'CollectionPage',
  },
  '/affiliate-programme': {
    title: 'BHD Affiliate Programme | Earn 35% Commission on Selar',
    description:
      'Join the transparent BYHENRYDIGITALS affiliate programme: free registration, no mandatory purchase, no MLM structure, and 35% commission on eligible sales.',
    changefreq: 'monthly',
    priority: '0.9',
    schemaType: 'WebPage',
  },
  '/services': {
    title: 'Web Design & Digital Services | BYHENRYDIGITALS (BHD)',
    description:
      'Work with BYHENRYDIGITALS for responsive websites, campaign landing pages, digital presence setups, no-code workflows, and structured business support.',
    changefreq: 'monthly',
    priority: '0.9',
    schemaType: 'WebPage',
  },
  '/resources': {
    title: 'Digital Resources & Guides | BYHENRYDIGITALS Blog',
    description:
      'Read practical BHD guides covering website architecture, ethical affiliate marketing, no-code AI workflows, digital skills, and safe online learning.',
    changefreq: 'weekly',
    priority: '0.8',
    schemaType: 'CollectionPage',
  },
  '/contact': {
    title: 'Contact BYHENRYDIGITALS | Email, WhatsApp & Enquiries',
    description:
      'Reach BYHENRYDIGITALS directly via our verified enquiry form, official email (byhenrydigitals@gmail.com), or WhatsApp (+234 708 208 8942) for real support.',
    changefreq: 'monthly',
    priority: '0.7',
    schemaType: 'ContactPage',
  },
};

function trimMetaDescription(text: string, maxLen = 158): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  const sliced = clean.slice(0, maxLen - 1);
  const lastSpace = sliced.lastIndexOf(' ');
  return `${lastSpace > 90 ? sliced.slice(0, lastSpace) : sliced}…`;
}

export function getLocalizedRouteSeo(
  route: PageRoute,
  lang: ActiveLanguageCode,
  bundle: TranslationBundle
): { title: string; description: string } {
  if (lang === 'en') {
    const base = ROUTE_SEO[route];
    return { title: base.title, description: base.description };
  }

  const pageTitle = bundle.routeTitles[route];
  const title =
    route === '/'
      ? `${SITE_CONFIG.brandName} | ${bundle.footer.tagline}`
      : `${pageTitle} | ${SITE_CONFIG.brandName}`;

  const rawDescriptionByRoute: Record<PageRoute, string> = {
    '/': bundle.home.heroSubtitle,
    '/about': bundle.about.intro,
    '/products': bundle.products.intro,
    '/affiliate-programme': bundle.affiliate.intro,
    '/services': bundle.services.intro,
    '/resources': bundle.resources.intro,
    '/contact': bundle.contact.intro,
  };

  return {
    title,
    description: trimMetaDescription(rawDescriptionByRoute[route]),
  };
}

export function buildStructuredDataGraph(
  route: PageRoute,
  baseUrl = getConfiguredSiteUrl(),
  lang: ActiveLanguageCode = 'en'
): Record<string, unknown> {
  const cleanBase = normalizeSiteUrl(baseUrl);
  const canonicalUrl = getCanonicalUrl(route, cleanBase);
  const meta = ROUTE_SEO[route];
  const orgId = `${cleanBase}/#organization`;
  const websiteId = `${cleanBase}/#website`;

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': orgId,
      name: SITE_CONFIG.brandName,
      alternateName: SITE_CONFIG.shortName,
      url: `${cleanBase}/`,
      email: SITE_CONFIG.contactEmail,
      description:
        'BYHENRYDIGITALS (BHD) is a digital solutions and education brand focused on functional web builds, practical digital products, and transparent affiliate opportunities.',
      founder: {
        '@type': 'Person',
        name: SITE_CONFIG.founderName,
      },
      sameAs: [
        ...SOCIAL_LINKS.map((link) => link.url),
        SITE_CONFIG.selarStoreUrl,
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: SITE_CONFIG.contactEmail,
          url: `${cleanBase}/contact`,
          availableLanguage: ['English', 'Igbo', 'Yoruba', 'Hausa', 'French'],
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: SITE_CONFIG.brandName,
      alternateName: SITE_CONFIG.shortName,
      url: `${cleanBase}/`,
      description: ROUTE_SEO['/'].description,
      publisher: { '@id': orgId },
      inLanguage: ['en', 'ig', 'yo', 'ha', 'fr'],
    },
    {
      '@type': meta.schemaType,
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: meta.title,
      description: meta.description,
      isPartOf: { '@id': websiteId },
      about: { '@id': orgId },
      inLanguage: lang,
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${cleanBase}${SEO_IMAGE_PATH}`,
      },
    },
  ];

  if (route !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${cleanBase}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: meta.title.split('|')[0].trim(),
          item: canonicalUrl,
        },
      ],
    });
  }

  if (route === '/products') {
    graph.push({
      '@type': 'ItemList',
      name: 'BYHENRYDIGITALS Verified Digital Products on Selar',
      url: canonicalUrl,
      numberOfItems: DIGITAL_PRODUCTS.length,
      itemListElement: DIGITAL_PRODUCTS.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.title,
        url: product.selarUrl,
      })),
    });
  }

  if (route === '/resources') {
    graph.push({
      '@type': 'ItemList',
      name: 'BYHENRYDIGITALS Digital Resources and Educational Guides',
      url: canonicalUrl,
      numberOfItems: BHD_ARTICLES.length,
      itemListElement: BHD_ARTICLES.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${cleanBase}/resources#${article.slug}`,
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
