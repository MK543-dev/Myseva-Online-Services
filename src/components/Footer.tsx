import React from 'react';
import { MySevaLogo } from './MySevaLogo';
import { WhatsAppButton } from './WhatsAppButton';
import { CATEGORIES, CONTACT_INFO, getEmailUrl } from '../data/servicesData';
import { PageRoute } from '../types';
import { MessageCircle, Mail, Phone, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute, categorySlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-xl p-2 inline-block">
              <MySevaLogo size="md" variant="full" onClick={() => onNavigate('home')} />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              MySeva Online Services is a dedicated digital citizen facilitation platform providing seamless access to 100+ documentation, business, tax, and government services.
            </p>

            <div className="pt-2">
              <WhatsAppButton
                size="sm"
                variant="primary"
                label="WhatsApp Enquiry: +91 863 929 0113"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Service Categories (All 8) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Service Categories
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('category', cat.slug)}
                    className="text-slate-400 hover:text-orange-400 transition-colors text-left truncate max-w-full cursor-pointer flex items-center gap-1 group"
                  >
                    <span className="truncate">{cat.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">({cat.serviceCount})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact (Strictly no address, no maps) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h3>
            <p className="text-xs text-slate-400">
              For new service requests, status inquiries, or documentation guidance:
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle size={16} className="text-emerald-500 shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </a>

              <a
                href={getEmailUrl()}
                className="flex items-center gap-2.5 text-slate-300 hover:text-orange-400 transition-colors truncate block"
              >
                <Mail size={16} className="text-orange-500 shrink-0 inline-block mr-2" />
                <span className="truncate">{CONTACT_INFO.email}</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-400">
              Assisted digital platform. All requests are routed through verified executive support.
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 MySeva Online Services. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('services')} className="hover:text-slate-400">
              101 Online Services
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('how-it-works')} className="hover:text-slate-400">
              Enquiry Guide
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-400">
              Contact MySeva
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
