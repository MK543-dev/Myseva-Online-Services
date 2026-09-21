import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CategoryPage } from './pages/CategoryPage';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ContactPage } from './pages/ContactPage';
import { Service, PageRoute, RouteState } from './types';
import { CATEGORIES, SERVICES } from './data/servicesData';

export default function App() {
  const [route, setRoute] = useState<RouteState>({
    page: 'home',
  });

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Parse path on initial load & popstate
  useEffect(() => {
    function parseLocation() {
      const pathname = window.location.pathname.toLowerCase().replace(/\/$/, '');

      if (!pathname || pathname === '') {
        setRoute({ page: 'home' });
      } else if (pathname === '/services') {
        setRoute({ page: 'services' });
      } else if (pathname.startsWith('/services/')) {
        const parts = pathname.split('/').filter(Boolean);
        const catSlug = parts[1];
        const categoryExists = CATEGORIES.some((c) => c.slug === catSlug);
        if (categoryExists) {
          setRoute({ page: 'category', categorySlug: catSlug });
          // If there is also a service slug
          if (parts[2]) {
            const serv = SERVICES.find((s) => s.serviceSlug === parts[2]);
            if (serv) setSelectedService(serv);
          }
        } else {
          setRoute({ page: 'services' });
        }
      } else if (pathname === '/about' || pathname === '/about-us') {
        setRoute({ page: 'about' });
      } else if (pathname === '/how-it-works') {
        setRoute({ page: 'how-it-works' });
      } else if (pathname === '/contact' || pathname === '/contact-us') {
        setRoute({ page: 'contact' });
      } else {
        setRoute({ page: 'home' });
      }
    }

    parseLocation();
    window.addEventListener('popstate', parseLocation);
    return () => window.removeEventListener('popstate', parseLocation);
  }, []);

  // Central navigation handler
  const handleNavigate = (page: PageRoute, categorySlug?: string) => {
    let targetUrl = '/';

    if (page === 'home') {
      targetUrl = '/';
      setRoute({ page: 'home' });
    } else if (page === 'services') {
      targetUrl = '/services';
      setRoute({ page: 'services' });
    } else if (page === 'category' && categorySlug) {
      targetUrl = `/services/${categorySlug}`;
      setRoute({ page: 'category', categorySlug });
    } else if (page === 'about') {
      targetUrl = '/about';
      setRoute({ page: 'about' });
    } else if (page === 'how-it-works') {
      targetUrl = '/how-it-works';
      setRoute({ page: 'how-it-works' });
    } else if (page === 'contact') {
      targetUrl = '/contact';
      setRoute({ page: 'contact' });
    }

    try {
      window.history.pushState({}, '', targetUrl);
    } catch {
      // In restricted iframe environments, pushState can be ignored safely
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
  };

  const handleSelectCategory = (categorySlug: string) => {
    handleNavigate('category', categorySlug);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-orange-100 selection:text-orange-900">
      {/* Sticky Responsive Header */}
      <Header
        currentPage={route.page}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {route.page === 'home' && (
          <HomePage
            onSelectService={handleSelectService}
            onSelectCategory={handleSelectCategory}
            onNavigateToServices={() => handleNavigate('services')}
          />
        )}

        {route.page === 'services' && (
          <ServicesPage
            onSelectService={handleSelectService}
            onSelectCategory={handleSelectCategory}
            onNavigate={handleNavigate}
          />
        )}

        {route.page === 'category' && (
          <CategoryPage
            categorySlug={route.categorySlug || CATEGORIES[0].slug}
            onSelectService={handleSelectService}
            onSelectCategory={handleSelectCategory}
            onNavigate={handleNavigate}
          />
        )}

        {route.page === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {route.page === 'how-it-works' && (
          <HowItWorksPage onNavigate={handleNavigate} />
        )}

        {route.page === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Detail Modal for Selected Service */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Floating WhatsApp Quick Support Widget */}
      <FloatingWhatsApp />

      {/* Professional Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Vercel Analytics */}
      <Analytics />

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}
