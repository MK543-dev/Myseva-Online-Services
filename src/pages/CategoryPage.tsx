import React, { useState, useMemo } from 'react';
import { CATEGORIES, SERVICES, getWhatsAppUrl } from '../data/servicesData';
import { Service, PageRoute } from '../types';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceIcon } from '../components/ServiceIcon';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Search, ChevronRight, ArrowLeft, MessageCircle } from 'lucide-react';

interface CategoryPageProps {
  categorySlug: string;
  onSelectService: (service: Service) => void;
  onSelectCategory: (categorySlug: string) => void;
  onNavigate: (page: PageRoute) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categorySlug,
  onSelectService,
  onSelectCategory,
  onNavigate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Find the active category
  const activeCategory = useMemo(() => {
    return CATEGORIES.find((c) => c.slug === categorySlug) || CATEGORIES[0];
  }, [categorySlug]);

  // IMPORTANT: Filter to ONLY services belonging to this category
  const categoryServices = useMemo(() => {
    return SERVICES.filter((s) => s.categorySlug === activeCategory.slug);
  }, [activeCategory]);

  // Filter within this category if user searches
  const displayedServices = useMemo(() => {
    if (!searchQuery.trim()) return categoryServices;
    const q = searchQuery.toLowerCase();
    return categoryServices.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [categoryServices, searchQuery]);

  return (
    <div className="py-8 sm:py-12 bg-white min-h-[75vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6 flex-wrap">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-slate-900 transition-colors"
          >
            Home
          </button>
          <ChevronRight size={14} />
          <button
            onClick={() => onNavigate('services')}
            className="hover:text-slate-900 transition-colors"
          >
            Services
          </button>
          <ChevronRight size={14} />
          <span className="text-orange-600 font-semibold">{activeCategory.name}</span>
        </nav>

        {/* Category Header Card */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 mb-10 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-orange-100 text-orange-600 border border-orange-200 shrink-0">
                <ServiceIcon name={activeCategory.iconName} size={32} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    Category {String(activeCategory.id).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                    {categoryServices.length} Services
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {activeCategory.name}
                </h1>
                <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                  {activeCategory.description}
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <WhatsAppButton
                label={`Enquire in ${activeCategory.name}`}
                size="md"
                variant="primary"
              />
            </div>
          </div>
        </div>

        {/* Category Quick Switcher Pills */}
        <div className="mb-8">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Browse Other Categories:
            </span>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-semibold text-orange-600 hover:underline"
            >
              View All 101 Services →
            </button>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = cat.slug === activeCategory.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSearchQuery('');
                    onSelectCategory(cat.slug);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-orange-600 text-white border-orange-600 shadow-2xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-orange-300 hover:bg-orange-50/50'
                  }`}
                >
                  {cat.name} ({cat.serviceCount})
                </button>
              );
            })}
          </div>
        </div>

        {/* Search within this category */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Filter in ${activeCategory.name}...`}
              className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
            />
          </div>

          <div className="text-xs text-slate-500 self-end sm:self-auto">
            Showing <strong>{displayedServices.length}</strong> of {categoryServices.length} services in this category
          </div>
        </div>

        {/* Services Grid (ONLY THIS CATEGORY) */}
        {displayedServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={onSelectService}
                onSelectCategory={onSelectCategory}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <p className="text-sm font-semibold text-slate-700">
              No service matching &ldquo;{searchQuery}&rdquo; in {activeCategory.name}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Try a different keyword or search across all 101 services.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-1.5 text-xs font-medium rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700"
            >
              Clear Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
