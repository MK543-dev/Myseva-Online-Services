import React, { useState, useMemo } from 'react';
import { CATEGORIES, SERVICES } from '../data/servicesData';
import { Service, PageRoute } from '../types';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceSearch } from '../components/ServiceSearch';
import { Search, Filter, Layers, ChevronRight, X } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { MySevaLogo } from '../components/MySevaLogo';

interface ServicesPageProps {
  onSelectService: (service: Service) => void;
  onSelectCategory: (categorySlug: string) => void;
  onNavigate: (page: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onSelectCategory,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchCategory =
        selectedCategory === 'all' || service.categorySlug === selectedCategory;

      if (!matchCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const nameMatch = service.name.toLowerCase().includes(q);
      const descMatch = service.description.toLowerCase().includes(q);
      const tagMatch = service.tags.some((t) => t.toLowerCase().includes(q));
      const idMatch = `#${service.id}`.includes(q);

      return nameMatch || descMatch || tagMatch || idMatch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-8 sm:py-12 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-slate-900 transition-colors"
          >
            Home
          </button>
          <ChevronRight size={14} />
          <span className="text-orange-600 font-semibold">Services</span>
        </nav>

        {/* Page Header with Image Content Text and Website Orange Theme */}
        <div className="text-center max-w-4xl mx-auto mb-10 pt-2">
          {/* Circular Logo Badge with website orange ring */}
          <div className="flex justify-center mb-5">
            <div className="p-1 rounded-full bg-slate-950 ring-4 ring-orange-500/20 shadow-md inline-flex items-center justify-center">
              <MySevaLogo size="lg" variant="mark" />
            </div>
          </div>

          {/* Pill Badge matching website orange theme */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200/80 text-xs sm:text-sm font-semibold mb-5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
            <span>100+ Online Services Available</span>
          </div>

          {/* Main Headline with website orange theme accent */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
            100+ Online Services at{' '}
            <span className="text-orange-600 block sm:inline">Your Fingertips</span>
          </h1>

          {/* Subheading matching image */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Access documentation, government, academic, business, tax, property and other online services with convenient assistance from MySeva.
          </p>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by service name, certificate type, or keyword (e.g. PAN, GST, MeeSeva)..."
              className="w-full pl-11 pr-10 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none text-sm text-slate-900 bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                selectedCategory === 'all'
                  ? 'bg-orange-600 text-white border-orange-600 shadow-2xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              All Services (101)
            </button>

            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-orange-600 text-white border-orange-600 shadow-2xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat.name} ({cat.serviceCount})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Metadata */}
        <div className="flex items-center justify-between gap-4 mb-6 text-xs text-slate-500 border-b border-slate-100 pb-3">
          <div>
            Showing <strong>{filteredServices.length}</strong> of 101 services
            {selectedCategory !== 'all' && (
              <span> in <strong>{CATEGORIES.find((c) => c.slug === selectedCategory)?.name}</strong></span>
            )}
            {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
          </div>

          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-orange-600 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={onSelectService}
                onSelectCategory={onSelectCategory}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 p-8 max-w-xl mx-auto">
            <h3 className="text-base font-bold text-slate-800">
              No services found matching your criteria
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              You can message us directly on WhatsApp to ask about custom or unlisted documentation assistance.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-medium bg-white border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700"
              >
                Clear Search & Filters
              </button>
              <WhatsAppButton label="Ask on WhatsApp" size="sm" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
