import React, { useState } from 'react';

interface MySevaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark' | 'badge';
  onClick?: () => void;
}

export const MySevaLogo: React.FC<MySevaLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  onClick,
}) => {
  const [imgError, setImgError] = useState(false);

  // Dimensions based on size
  const sizeMap = {
    sm: { mark: 38, text: 'text-base', sub: 'text-[9px]', badge: 'w-24 h-24' },
    md: { mark: 48, text: 'text-xl', sub: 'text-[10px]', badge: 'w-32 h-32' },
    lg: { mark: 64, text: 'text-2xl', sub: 'text-xs', badge: 'w-40 h-40' },
    xl: { mark: 84, text: 'text-3xl', sub: 'text-sm', badge: 'w-52 h-52' },
  };

  const currentSize = sizeMap[size];

  // SVG Fallback replicating the exact badge design
  const SvgFallback = (
    <svg
      width={currentSize.mark}
      height={currentSize.mark}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-md rounded-full"
      aria-hidden="true"
    >
      {/* Dark Circular Background matching uploaded logo */}
      <circle cx="80" cy="80" r="78" fill="#0A0F1D" />
      
      {/* Outer Glow Ring */}
      <circle cx="80" cy="80" r="76" stroke="#EA580C" strokeWidth="4" />
      <circle cx="80" cy="80" r="72" stroke="#F97316" strokeWidth="1" strokeOpacity="0.6" />

      {/* Top Arc (Vibrant Orange Swoosh) */}
      <path
        d="M 32 60 A 52 52 0 0 1 128 60"
        stroke="#EA580C"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bottom Arc (Emerald Green Swoosh) */}
      <path
        d="M 32 96 A 52 52 0 0 0 128 96"
        stroke="#16A34A"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Left Hand Sleeve (Forest Green) */}
      <path d="M 32 76 L 52 64 L 64 82 L 44 94 Z" fill="#16A34A" />
      <line x1="52" y1="64" x2="64" y2="82" stroke="#4ADE80" strokeWidth="2" />
      <circle cx="47" cy="78" r="2.5" fill="#FEF08A" />

      {/* Right Hand Sleeve (Warm Orange) */}
      <path d="M 128 76 L 108 64 L 96 82 L 116 94 Z" fill="#EA580C" />
      <line x1="108" y1="64" x2="96" y2="82" stroke="#FDBA74" strokeWidth="2" />
      <circle cx="113" cy="78" r="2.5" fill="#FEF08A" />

      {/* Hands Clasp */}
      <path
        d="M 64 80 C 68 74, 78 72, 86 75 C 93 78, 98 83, 102 85 C 99 90, 93 92, 87 90 C 82 88, 77 92, 72 90 C 67 88, 64 84, 64 80 Z"
        fill="#FFEDD5"
        stroke="#9A3412"
        strokeWidth="2"
      />
      <path
        d="M 75 87 C 80 94, 88 95, 93 91 C 97 88, 99 83, 98 80"
        stroke="#166534"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Text inside emblem for larger renders */}
      <text x="80" y="122" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FACC15" fontFamily="sans-serif">
        My<tspan fill="#FB923C">Seva</tspan>
      </text>
      <text x="80" y="136" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#FFFFFF" letterSpacing="0.8" fontFamily="sans-serif">
        ONLINE SERVICES
      </text>
    </svg>
  );

  // Logo Image
  const LogoImage = !imgError ? (
    <img
      src="/myseva-logo.png"
      alt="MySeva Online Services"
      width={currentSize.mark}
      height={currentSize.mark}
      onError={() => setImgError(true)}
      className="shrink-0 rounded-full object-cover shadow-sm ring-2 ring-orange-500/50 transition-transform duration-300 group-hover:scale-105"
      style={{ width: `${currentSize.mark}px`, height: `${currentSize.mark}px` }}
      referrerPolicy="no-referrer"
    />
  ) : (
    SvgFallback
  );

  if (variant === 'mark') {
    return (
      <div
        className={`inline-flex items-center justify-center cursor-pointer group ${className}`}
        onClick={onClick}
        title="MySeva Online Services"
      >
        {LogoImage}
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div
        className={`relative inline-flex flex-col items-center justify-center p-4 rounded-3xl bg-white border border-orange-200 shadow-sm cursor-pointer group hover:shadow-md transition-all ${className}`}
        onClick={onClick}
      >
        <div className="relative">
          <img
            src="/myseva-logo.png"
            alt="MySeva Online Services Logo"
            onError={() => setImgError(true)}
            className="w-36 h-36 rounded-full object-cover shadow-md ring-4 ring-orange-500/20 group-hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="mt-3 text-center">
          <div className="flex items-center justify-center gap-1">
            <span className="font-extrabold text-xl text-slate-900 tracking-tight">
              My<span className="text-orange-600">Seva</span>
            </span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-orange-100 text-orange-800">
              Online
            </span>
          </div>
          <span className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mt-0.5">
            Services
          </span>
        </div>
      </div>
    );
  }

  // Default 'full' variant: logo mark + crisp typography
  return (
    <div
      className={`inline-flex items-center gap-3 cursor-pointer group select-none ${className}`}
      onClick={onClick}
      role="banner"
      title="MySeva Online Services"
    >
      {LogoImage}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-bold tracking-tight text-slate-900 ${currentSize.text}`}>
            My<span className="text-orange-600">Seva</span>
          </span>
          <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200">
            Online
          </span>
        </div>
        <span className={`font-medium text-slate-500 tracking-wider uppercase mt-1 ${currentSize.sub}`}>
          Online Services
        </span>
      </div>
    </div>
  );
};
