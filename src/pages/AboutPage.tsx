import React from 'react';
import { MySevaLogo } from '../components/MySevaLogo';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { CONTACT_INFO } from '../data/servicesData';
import { PageRoute } from '../types';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Users,
  MessageCircle,
  Clock,
  Layers,
  Sparkles,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute, categorySlug?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-10 sm:py-16 bg-white min-h-[80vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: About MySeva */}
        <section className="text-center space-y-4">
          <div className="flex justify-center mb-2">
            <MySevaLogo size="lg" variant="badge" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-semibold uppercase tracking-wider">
            <span>About Us</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About MySeva Online Services
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            MySeva Online Services is dedicated to providing customers and citizens with convenient, assisted access to online documentation, certificates, tax filings, legal papers, and business registrations.
          </p>
        </section>

        {/* Section 2: What We Do */}
        <section className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-8 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
            <FileText size={16} />
            <span>Core Mission</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 leading-relaxed">
            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600" />
                <span>Assisted Digital Applications</span>
              </h3>
              <p>
                We simplify the process of navigating complex government portals, university registries, and revenue departments. Our team ensures that your forms are filled accurately, eliminating common rejection errors.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600" />
                <span>Checklist & Requirements Guidance</span>
              </h3>
              <p>
                Before submitting any application, we guide you on the necessary affidavits, supporting IDs, photographs, or notary attestations required for approval by the respective authorities.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600" />
                <span>WhatsApp-First Convenience</span>
              </h3>
              <p>
                Citizens can enquire and transmit required details securely via WhatsApp (+91 863 929 0113). You receive personal executive attention without having to stand in lengthy queues.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600" />
                <span>Transparent Information</span>
              </h3>
              <p>
                We provide factual procedural guidance without hidden gimmicks, ensuring you are aware of legitimate official requirements and steps at every stage.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Our Services Overview */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
              <Layers size={16} />
              <span>Catalog Coverage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our 8 Service Verticals
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              101 specialized services structured to meet your personal, educational, commercial, and legal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Personal Documents', desc: 'PAN cards, Aadhaar changes, voter IDs, passports, driving licences, civil certificates.' },
              { title: 'Academic Services', desc: 'Scholarships, provisional & original degrees, transcripts, CET registrations & counseling.' },
              { title: 'Business Registration', desc: 'GST, MSME/Udyam, trade & labour licenses, FSSAI food licenses, firm formations.' },
              { title: 'Tax & Legal Services', desc: 'Income tax returns, GST filings, affidavits, rental agreements, notary attestations.' },
              { title: 'Property Services', desc: 'Encumbrance certificates (EC), certified deed copies (CC), mutation, land records.' },
              { title: 'MeeSeva Services', desc: 'Income, caste, residence, EWS, minority, and local administrative revenue certificates.' },
              { title: 'NGO Services', desc: 'Society registration, non-profit NGO trusts, NITI Aayog DARPAN, and 80G filings.' },
              { title: 'Government & Other', desc: 'PM welfare schemes, Jeevan Pramaan life certificates, EPFO PF claims and nominations.' },
            ].map((item, idx) => (
              <div key={item.title} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-orange-300 transition-colors">
                <span className="text-[11px] font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                  0{idx + 1}
                </span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Explore All 101 Services</span>
            </button>
          </div>
        </section>

        {/* Section 4: Why Choose MySeva */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            Why Choose MySeva
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-white text-orange-600 mx-auto flex items-center justify-center border border-slate-200 shadow-2xs">
                <Layers size={22} />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Comprehensive</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                One platform covering 101 documentation, revenue, tax, and registration services.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-white text-emerald-600 mx-auto flex items-center justify-center border border-slate-200 shadow-2xs">
                <MessageCircle size={22} />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Responsive Support</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct WhatsApp connectivity on +91 863 929 0113 for instant assistance.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-white text-blue-600 mx-auto flex items-center justify-center border border-slate-200 shadow-2xs">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Accurate Guidance</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Step-by-step checklists to ensure your paperwork complies with official criteria.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 text-center sm:text-left">
              Contact MySeva directly for current requirements and processing details.
            </span>
            <WhatsAppButton size="md" variant="primary" label="Message on WhatsApp" />
          </div>
        </section>
      </div>
    </div>
  );
};
