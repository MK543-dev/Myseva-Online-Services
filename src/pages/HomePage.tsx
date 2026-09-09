import React from 'react';
import { Hero } from '../components/Hero';
import { CategoryGrid } from '../components/CategoryGrid';
import { PopularServices } from '../components/PopularServices';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { HowItWorks } from '../components/HowItWorks';
import { ContactSection } from '../components/ContactSection';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Service } from '../types';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';

interface HomePageProps {
  onSelectService: (service: Service) => void;
  onSelectCategory: (categorySlug: string) => void;
  onNavigateToServices: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectService,
  onSelectCategory,
  onNavigateToServices,
}) => {
  return (
    <div>
      {/* 2. Hero Section + Service Search */}
      <Hero
        onExploreServices={onNavigateToServices}
        onSelectService={onSelectService}
        onSelectCategory={onSelectCategory}
      />

      {/* 4. Service Categories */}
      <CategoryGrid onSelectCategory={onSelectCategory} />

      {/* 5. Popular Services */}
      <PopularServices
        onSelectService={onSelectService}
        onSelectCategory={onSelectCategory}
        onViewAllServices={onNavigateToServices}
      />

      {/* 6. Why Choose MySeva */}
      <WhyChooseUs />

      {/* 7. How It Works */}
      <HowItWorks />

      {/* 8. Dedicated WhatsApp Callout Banner */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MessageCircle size={28} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Instant Executive Support
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  Have a Question About Any Service?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Send a message directly to <strong>{CONTACT_INFO.phone}</strong> on WhatsApp.
                </p>
              </div>
            </div>

            <WhatsAppButton
              size="lg"
              variant="primary"
              label="Chat on WhatsApp"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </section>

      {/* 9. Contact Section */}
      <ContactSection />
    </div>
  );
};
