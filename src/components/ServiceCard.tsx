import React from 'react';
import { Service } from '../types';
import { ServiceIcon } from './ServiceIcon';
import { WhatsAppButton } from './WhatsAppButton';
import { ArrowUpRight, Info } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onSelectService?: (service: Service) => void;
  onSelectCategory?: (categorySlug: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  onSelectCategory,
}) => {
  const formattedId = String(service.id).padStart(2, '0');

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md hover:border-orange-400 transition-all duration-200">
      <div>
        {/* Top Header with Service ID and Category Badge */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/60">
              #{formattedId}
            </span>
            {service.isPopular && (
              <span className="inline-flex items-center text-[10px] font-semibold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200/60">
                Popular
              </span>
            )}
          </div>

          <button
            onClick={() => onSelectCategory && onSelectCategory(service.categorySlug)}
            className="text-[11px] font-medium text-slate-500 hover:text-orange-600 truncate max-w-[150px] transition-colors"
            title={`View all in ${service.category}`}
          >
            {service.category}
          </button>
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-3.5 mb-2.5">
          <div className="p-2.5 rounded-lg bg-orange-50/80 border border-orange-100 text-orange-600 shrink-0 group-hover:bg-orange-100/70 group-hover:border-orange-200 transition-colors">
            <ServiceIcon name={service.iconName} size={20} className="text-orange-600" />
          </div>

          <div className="min-w-0 flex-1">
            <h3
              onClick={() => onSelectService && onSelectService(service)}
              className="text-base font-semibold text-slate-900 group-hover:text-orange-600 transition-colors cursor-pointer leading-snug line-clamp-1"
              title={service.name}
            >
              {service.name}
            </h3>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3.5 mt-2 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelectService && onSelectService(service)}
          className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors py-1.5 px-2 rounded-md hover:bg-slate-100"
          title="View Service Details & Requirements"
        >
          <Info size={14} />
          <span>Details</span>
        </button>

        <WhatsAppButton
          serviceName={service.name}
          label="Get Service"
          size="sm"
          variant="primary"
          className="w-auto"
        />
      </div>
    </div>
  );
};
