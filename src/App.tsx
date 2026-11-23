import { useCallback, useEffect, useState } from 'react';
import { PageRoute, ROUTES, SITE_CONFIG } from './config/siteConfig';
import {
  buildStructuredDataGraph,
  getCanonicalUrl,
  getConfiguredSiteUrl,
  getLocalizedRouteSeo,
  SEO_IMAGE_ALT,
  SEO_IMAGE_PATH,
} from './config/seoConfig';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { AffiliatePage } from './pages/AffiliatePage';
import { ServicesPage } from './pages/ServicesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { VanessaFaqPage } from './pages/VanessaFaqPage';
import { VanessaFaqBubble } from './components/VanessaFaqBubble';


function getBrowserPathname(): string {
  return typeof window !== 'undefined' ? window.location.pathname : '/';
}

function isLegacyFaqPath(pathname: string): boolean {
  return pathname.replace(/\/+$/, '') === '/faq';
}

function resolveRouteFromPath(pathname: string): PageRoute {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const match = ROUTES.find((r) => r.route === normalized);
  return match ? match.route : '/';
}

function upsertMetaTag(
  selectorAttr: 'name' | 'property',
  attrValue: string,
  content: string
) {
  let tag = document.head.querySelector(
    `meta[${selectorAttr}="${attrValue}"]`
  ) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(selectorAttr, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonicalLink(href: string) {
  let link = document.head.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function upsertJsonLd(data: Record<string, unknown>) {
  let script = document.getElementById(
    'bhd-structured-data'
  ) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = 'bhd-structured-data';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

interface AppProps {
  initialRoute?: PageRoute;
}

function AppShell({ initialRoute }: AppProps) {
  const { t, language } = useLanguage();
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(
    () => initialRoute ?? resolveRouteFromPath(getBrowserPathname())
  );
  const [contactSubject, setContactSubject] = useState('');

  const navigate = useCallback(
    (route: PageRoute, preselectedSubject?: string) => {
      if (preselectedSubject) {
        setContactSubject(preselectedSubject);
      }
      if (route !== currentRoute) {
        if (typeof window !== 'undefined') {
          window.history.pushState({ route }, '', route);
        }
        setCurrentRoute(route);
      }
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [currentRoute]
  );

  useEffect(() => {
    const onPopState = () => {
      const path = getBrowserPathname();
      setCurrentRoute(resolveRouteFromPath(path));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const { title, description } = getLocalizedRouteSeo(currentRoute, language, t);
    const siteBaseUrl = getConfiguredSiteUrl();
    const canonicalUrl = getCanonicalUrl(currentRoute, siteBaseUrl);
    const ogImageUrl = `${siteBaseUrl}${SEO_IMAGE_PATH}`;
    const robotsValue = isLegacyFaqPath(getBrowserPathname())
      ? 'noindex, follow'
      : 'index, follow';

    document.title = title;
    upsertMetaTag('name', 'description', description);
    upsertMetaTag('name', 'robots', robotsValue);
    upsertCanonicalLink(canonicalUrl);

    upsertMetaTag('property', 'og:type', 'website');
    upsertMetaTag('property', 'og:site_name', SITE_CONFIG.brandName);
    upsertMetaTag('property', 'og:title', title);
    upsertMetaTag('property', 'og:description', description);
    upsertMetaTag('property', 'og:url', canonicalUrl);
    upsertMetaTag(
      'property',
      'og:locale',
      language === 'fr' ? 'fr_FR' : language === 'pcm' ? 'pcm_NG' : `${language}_NG`
    );
    upsertMetaTag('property', 'og:image', ogImageUrl);
    upsertMetaTag('property', 'og:image:alt', SEO_IMAGE_ALT);

    upsertMetaTag('name', 'twitter:card', 'summary_large_image');
    upsertMetaTag('name', 'twitter:title', title);
    upsertMetaTag('name', 'twitter:description', description);
    upsertMetaTag('name', 'twitter:image', ogImageUrl);
    upsertMetaTag('name', 'twitter:image:alt', SEO_IMAGE_ALT);

    upsertJsonLd(buildStructuredDataGraph(currentRoute, siteBaseUrl, language));
  }, [currentRoute, language, t]);

  const renderPage = () => {
    switch (currentRoute) {
      case '/':
        return <HomePage onNavigate={navigate} />;
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/products':
        return <ProductsPage />;
      case '/affiliate-programme':
        return <AffiliatePage onNavigate={navigate} />;
      case '/services':
        return <ServicesPage onNavigate={navigate} />;
      case '/resources':
        return <ResourcesPage />;
      case '/contact':
        return <ContactPage initialSubject={contactSubject} />;
      case '/faq':
        return <VanessaFaqPage onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex min-h-screen min-w-0 flex-col bg-[#0b0b0b] text-[#f5f5f4]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-50 focus:rounded-lg focus:bg-[#eab308] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-[#0b0b0b] focus:shadow-lg"
      >
        Skip to main content
      </a>
      <SiteHeader currentRoute={currentRoute} onNavigate={navigate} />
      <main id="main-content" className="min-w-0 flex-1">
        {renderPage()}
      </main>
      <SiteFooter onNavigate={navigate} />
      <VanessaFaqBubble onNavigate={navigate} />
    </div>
  );
}

export default function App({ initialRoute }: AppProps = {}) {
  return (
    <LanguageProvider>
      <AppShell initialRoute={initialRoute} />
    </LanguageProvider>
  );
}
