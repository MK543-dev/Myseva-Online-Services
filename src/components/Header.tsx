import React, { useState } from 'react';
import { Menu, X, Phone, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import { MySevaLogo } from './MySevaLogo';
import { WhatsAppButton } from './WhatsAppButton';
import { CONTACT_INFO, getEmailUrl } from '../data/servicesData';
import { PageRoute } from '../types';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, categorySlug?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'About Us', page: 'about' },
    { label: 'How It Works', page: 'how-it-works' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* LEFT: MySeva Logo */}
          <MySevaLogo
            size="md"
            variant="full"
            onClick={() => handleNavClick('home')}
          />

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-orange-600 bg-orange-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* DESKTOP RIGHT CTAS */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct Email quick trigger */}
            <a
              href={getEmailUrl()}
              className="text-xs font-medium text-slate-500 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5"
              title={`Email us at ${CONTACT_INFO.email}`}
            >
              <Mail size={15} className="text-slate-400" />
              <span className="hidden xl:inline">{CONTACT_INFO.email}</span>
            </a>

            {/* Direct WhatsApp Callout */}
            <WhatsAppButton
              size="sm"
              variant="outline"
              label="+91 863 929 0113"
            />

            {/* Primary Explore button */}
            <button
              onClick={() => handleNavClick('services')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex items-center gap-2 md:hidden">
            <WhatsAppButton
              size="sm"
              variant="primary"
              label="WhatsApp"
              className="px-2.5 py-1.5 text-xs"
            />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center justify-between px-3.5 py-2.5 text-base font-medium rounded-lg text-left ${
                    isActive
                      ? 'text-orange-600 bg-orange-50 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">
              Direct Assistance
            </div>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg border border-emerald-200"
            >
              <MessageCircle size={18} />
              <span>WhatsApp: {CONTACT_INFO.phone}</span>
            </a>

            <a
              href={getEmailUrl()}
              className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-700 bg-slate-50 rounded-lg border border-slate-200"
            >
              <Mail size={18} className="text-slate-500" />
              <span className="truncate">{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
