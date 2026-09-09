import React from 'react';
import { POPULAR_SERVICES } from '../data/servicesData';
import { Service } from '../types';
import { ServiceCard } from './ServiceCard';
import { Sparkles, ArrowRight } from 'lucide-react';

interface PopularServicesProps {
  onSelectService: (service: Service) => void;
  onSelectCategory: (categorySlug: string) => void;
  onViewAllServices: () => void;
}

export const PopularServices: React.FC<PopularServicesProps> = ({
  onSelectService,
  onSelectCategory,
  onViewAllServices,
}) => {
  return (
    <section className="py-14 sm:py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles size={13} />
              <span>Most Requested</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Popular Online Services
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Frequently requested citizen and business documentation services ready for instant WhatsApp inquiry.
            </p>
          </div>

          <button
            onClick={onViewAllServices}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 cursor-pointer self-start md:self-auto group"
          >
            <span>View All 101 Services</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid of 10 Popular Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {POPULAR_SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
              onSelectCategory={onSelectCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
