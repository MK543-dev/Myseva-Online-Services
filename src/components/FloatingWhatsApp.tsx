import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, CONTACT_INFO } from '../data/servicesData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Subtle floating hint */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-medium px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Quick Assistance on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 ml-1"
            aria-label="Dismiss hint"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 border border-emerald-500/30 group"
        aria-label={`Chat with MySeva on WhatsApp at ${CONTACT_INFO.phone}`}
      >
        <MessageCircle size={22} className="fill-white/20" />
        <span className="font-semibold text-sm pr-1 hidden md:inline">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};
