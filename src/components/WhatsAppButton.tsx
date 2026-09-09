import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/servicesData';

interface WhatsAppButtonProps {
  serviceName?: string;
  label?: string;
  variant?: 'primary' | 'outline' | 'compact' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  serviceName,
  label,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}) => {
  const url = getWhatsAppUrl(serviceName);

  const displayLabel = label || (serviceName ? 'Get Service' : 'WhatsApp Us');

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 select-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
    md: 'px-4 py-2 text-sm rounded-lg gap-2',
    lg: 'px-6 py-3 text-base rounded-xl gap-2.5 shadow-sm',
  };

  const variantStyles = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow border border-emerald-700/20',
    outline: 'bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-400/80 hover:border-emerald-600 shadow-2xs',
    compact: 'bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-1 text-xs rounded-md gap-1',
    white: 'bg-white hover:bg-slate-50 text-emerald-700 border border-slate-200 shadow-xs hover:border-emerald-300',
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      title={`Chat on WhatsApp about ${serviceName || 'MySeva Online Services'}`}
    >
      <MessageCircle size={iconSizes[size]} className="shrink-0 text-current fill-current/10" />
      <span className="whitespace-nowrap font-medium">{displayLabel}</span>
    </a>
  );
};
