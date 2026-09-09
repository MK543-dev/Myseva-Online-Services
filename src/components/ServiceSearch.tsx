import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, X, ArrowRight, MessageCircle } from 'lucide-react';
import { Service } from '../types';
import { SERVICES } from '../data/servicesData';
import { ServiceIcon } from './ServiceIcon';
import { WhatsAppButton } from './WhatsAppButton';

interface ServiceSearchProps {
  onSelectService?: (service: Service) => void;
  onSelectCategory?: (categorySlug: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export const ServiceSearch: React.FC<ServiceSearchProps> = ({
  onSelectService,
  onSelectCategory,
  placeholder = 'Search 100+ services (e.g. PAN, Aadhaar, Passport, GST, Income Certificate...)',
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter across all 101 services
  const filteredServices = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    return SERVICES.filter((service) => {
      const nameMatch = service.name.toLowerCase().includes(trimmed);
      const categoryMatch = service.category.toLowerCase().includes(trimmed);
      const descMatch = service.description.toLowerCase().includes(trimmed);
      const tagMatch = service.tags.some((t) => t.toLowerCase().includes(trimmed));
      const idMatch = `#${service.id}`.includes(trimmed);

      return nameMatch || categoryMatch || descMatch || tagMatch || idMatch;
    }).slice(0, 8); // Top 8 results in dropdown
  }, [query]);

  // Click outside listener to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sampleSearches = [
    'PAN Card',
    'Aadhaar',
    'Passport',
    'GST Registration',
    'Income Certificate',
    'Caste Certificate',
  ];

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto">
      {/* Search Input Box */}
      <div className="relative flex items-center bg-white rounded-2xl border-2 border-slate-200/90 shadow-sm focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100 transition-all duration-200">
        <div className="pl-4 pr-2 text-slate-400">
          <Search size={22} className="text-orange-600" />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full py-3.5 pr-10 text-slate-900 placeholder:text-slate-400 bg-transparent text-sm md:text-base outline-none font-normal"
          aria-label="Search all 101 services"
        />

        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="p-2 mr-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            title="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Suggested Search Pills */}
      {!query && (
        <div className="flex flex-wrap items-center gap-1.5 mt-3 text-xs text-slate-500">
          <span className="font-semibold text-slate-600">Quick Search:</span>
          {sampleSearches.map((pill) => (
            <button
              key={pill}
              type="button"
              onClick={() => {
                setQuery(pill);
                setIsOpen(true);
              }}
              className="px-2.5 py-1 rounded-full bg-white hover:bg-orange-50 text-slate-600 hover:text-orange-700 border border-slate-200/80 hover:border-orange-300 transition-colors text-xs font-medium cursor-pointer shadow-2xs"
            >
              {pill}
            </button>
          ))}
        </div>
      )}

      {/* Dropdown Live Results */}
      {isOpen && query.trim() !== '' && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>
              Found <strong>{filteredServices.length}</strong> matching {filteredServices.length === 1 ? 'service' : 'services'} for &ldquo;{query}&rdquo;
            </span>
            <span className="text-[11px] text-slate-400">Click &apos;Get Service&apos; to open WhatsApp</span>
          </div>

          {filteredServices.length > 0 ? (
            <div className="divide-y divide-slate-100 max-h-[380px] overflow-y-auto">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between p-3.5 hover:bg-orange-50/40 transition-colors group"
                >
                  <div
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(service);
                        setIsOpen(false);
                      }
                    }}
                    className="flex items-start gap-3 cursor-pointer flex-1 pr-3 min-w-0"
                  >
                    <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-orange-100 text-orange-600 transition-colors shrink-0 mt-0.5">
                      <ServiceIcon name={service.iconName} size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-400">
                          #{String(service.id).padStart(2, '0')}
                        </span>
                        <h4 className="text-sm font-semibold text-slate-900 group-hover:text-orange-600 transition-colors truncate">
                          {service.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 truncate mt-0.5">
                        {service.category} • {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (onSelectService) {
                          onSelectService(service);
                          setIsOpen(false);
                        }
                      }}
                      className="hidden sm:inline-flex text-xs font-medium text-slate-500 hover:text-slate-800 px-2 py-1 rounded hover:bg-slate-100"
                    >
                      View
                    </button>
                    <WhatsAppButton
                      serviceName={service.name}
                      label="Get Service"
                      size="sm"
                      variant="primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-sm text-slate-600 font-medium">No direct service found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for keywords like &ldquo;PAN&rdquo;, &ldquo;Aadhaar&rdquo;, &ldquo;GST&rdquo;, or &ldquo;Certificate&rdquo;.
              </p>
              <div className="mt-4">
                <WhatsAppButton
                  label="Enquire on WhatsApp Directly"
                  variant="outline"
                  size="sm"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
