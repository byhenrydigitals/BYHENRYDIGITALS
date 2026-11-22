import { useCallback, useEffect, useState } from 'react';
import { PageRoute, ROUTES, SITE_CONFIG } from './config/siteConfig';
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
import { VanessaFaqBubble } from './components/VanessaFaqBubble';

function isLegacyFaqPath(pathname: string): boolean {
  return pathname.replace(/\/+$/, '') === '/faq';
}

function resolveRouteFromPath(pathname: string): PageRoute {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const match = ROUTES.find((r) => r.route === normalized);
  return match ? match.route : '/';
}

function AppShell() {
  const { t } = useLanguage();
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() =>
    resolveRouteFromPath(window.location.pathname)
  );
  const [vanessaOpen, setVanessaOpen] = useState<boolean>(() =>
    isLegacyFaqPath(window.location.pathname)
  );
  const [contactSubject, setContactSubject] = useState('');

  const navigate = useCallback(
    (route: PageRoute, preselectedSubject?: string) => {
      if (preselectedSubject) {
        setContactSubject(preselectedSubject);
      }
      if (route !== currentRoute) {
        window.history.pushState({ route }, '', route);
        setCurrentRoute(route);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [currentRoute]
  );

  useEffect(() => {
    const onPopState = () => {
      setCurrentRoute(resolveRouteFromPath(window.location.pathname));
      if (isLegacyFaqPath(window.location.pathname)) {
        setVanessaOpen(true);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const titleSuffix = t.routeTitles[currentRoute] || t.footer.tagline;
    document.title = `${SITE_CONFIG.brandName} | ${titleSuffix}`;
  }, [currentRoute, t]);

  const renderPage = () => {
    switch (currentRoute) {
      case '/':
        return (
          <HomePage
            onNavigate={navigate}
            onOpenVanessa={() => setVanessaOpen(true)}
          />
        );
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
      default:
        return (
          <HomePage
            onNavigate={navigate}
            onOpenVanessa={() => setVanessaOpen(true)}
          />
        );
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0b0b0b] text-[#f5f5f4]">
      <SiteHeader currentRoute={currentRoute} onNavigate={navigate} />
      <main className="flex-1">{renderPage()}</main>
      <SiteFooter
        onNavigate={navigate}
        onOpenVanessa={() => setVanessaOpen(true)}
      />
      <VanessaFaqBubble
        isOpen={vanessaOpen}
        onToggle={setVanessaOpen}
        onNavigate={navigate}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}
