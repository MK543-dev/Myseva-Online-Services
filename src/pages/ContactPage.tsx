import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { CONTACT_INFO, getEmailUrl, getWhatsAppUrl } from '../data/servicesData';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { MessageCircle, Mail, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { PageRoute } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-10 sm:py-16 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-slate-900 transition-colors"
          >
            Home
          </button>
          <ChevronRight size={14} />
          <span className="text-orange-600 font-semibold">Contact Us</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageCircle size={13} />
            <span>Customer Support</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch with MySeva
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Reach out via WhatsApp or Email for assistance with any of our 101 online documentation and government portal services.
          </p>
        </div>

        {/* Primary Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Primary Card */}
          <div className="bg-white rounded-2xl border-2 border-emerald-500/40 p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                <MessageCircle size={30} />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                Fastest Response
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                WhatsApp Chat
              </h2>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Connect directly with our service executive. Send your queries and document photos for instant guidance.
              </p>

              <div className="text-lg font-bold text-emerald-700 font-mono mb-6">
                {CONTACT_INFO.phone}
              </div>
            </div>

            <WhatsAppButton
              size="lg"
              variant="primary"
              label="WhatsApp Us Now"
              className="w-full"
            />
          </div>

          {/* Email Primary Card */}
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-5 border border-orange-100">
                <Mail size={30} />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-orange-800 block mb-1">
                Written Inquiries
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Email Us
              </h2>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Prefer email? Send your requirements and details to our official mailbox and we will revert promptly.
              </p>

              <div className="text-sm sm:text-base font-bold text-slate-800 font-mono truncate mb-6">
                {CONTACT_INFO.email}
              </div>
            </div>

            <a
              href={getEmailUrl()}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm transition-all"
            >
              <Mail size={16} />
              <span>Email Us Now</span>
            </a>
          </div>
        </div>

        {/* Interactive Enquiry Form Section */}
        <div className="pt-6">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};
