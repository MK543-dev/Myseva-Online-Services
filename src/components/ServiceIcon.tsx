import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({
  name,
  className = 'w-5 h-5 text-orange-600',
  size = 20,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons = LucideIcons as Record<string, any>;
  
  // Safe lookup with fallback
  const IconComponent: LucideIcon = icons[name] || icons.FileText || LucideIcons.FileText;

  return <IconComponent size={size} className={className} />;
};
