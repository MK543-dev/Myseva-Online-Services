import React from 'react';
import { ServiceCategory } from '../types';
import { ServiceIcon } from './ServiceIcon';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: ServiceCategory;
  onSelectCategory: (categorySlug: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onSelectCategory,
}) => {
  const formattedId = String(category.id).padStart(2, '0');

  return (
    <div
      onClick={() => onSelectCategory(category.slug)}
      className="group relative flex flex-col justify-between bg-white rounded-xl border border-slate-200 p-6 shadow-2xs hover:shadow-md hover:border-orange-500/70 transition-all duration-200 cursor-pointer"
    >
      <div>
        {/* Top Header with Category Number & Service Count Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 border border-orange-200/60 px-2.5 py-1 rounded-md">
            CAT {formattedId}
          </span>

          <span className="inline-flex items-center text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/60">
            {category.serviceCount} Services
          </span>
        </div>

        {/* Icon & Title */}
        <div className="flex items-center gap-3.5 mb-3">
          <div className="p-3 rounded-xl bg-orange-50 text-orange-600 border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-200 shrink-0">
            <ServiceIcon
              name={category.iconName}
              size={24}
              className="text-current transition-colors"
            />
          </div>

          <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
            {category.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4">
          {category.description}
        </p>
      </div>

      {/* Action Button */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-700 group-hover:text-orange-600 transition-colors">
        <span>View Services</span>
        <div className="p-1.5 rounded-md bg-slate-50 group-hover:bg-orange-50 text-slate-500 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all">
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};
