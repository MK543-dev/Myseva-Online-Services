import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { ServiceSearch } from './ServiceSearch';
import { Service } from '../types';
import { CONTACT_INFO } from '../data/servicesData';
import { MySevaLogo } from './MySevaLogo';

interface HeroProps {
  onExploreServices: () => void;
  onSelectService: (service: Service) => void;
  onSelectCategory: (categorySlug: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreServices,
  onSelectService,
  onSelectCategory,
}) => {
  return (
    <section className="relative bg-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-100 overflow-hidden">
      {/* Very subtle ambient grid pattern (light, neutral, non-intrusive) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo Badge with website orange ring */}
        <div className="flex justify-center mb-5">
          <div className="p-1 rounded-full bg-slate-950 ring-4 ring-orange-500/20 shadow-md inline-flex items-center justify-center">
            <MySevaLogo size="lg" variant="mark" />
          </div>
        </div>

        {/* Brand Pill matching website orange theme */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs sm:text-sm font-semibold mb-6 shadow-2xs">
          <span className="flex h-2 w-2 rounded-full bg-orange-500" />
          <span>100+ Online Services Available</span>
        </div>

        {/* Main Heading with website orange theme accent */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
          100+ Online Services at <span className="text-orange-600">Your Fingertips</span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
          Access documentation, government, academic, business, tax, property and other online services with convenient assistance from MySeva.
        </p>

        {/* Primary & Secondary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <button
            onClick={onExploreServices}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <span>Explore Services</span>
            <ArrowRight size={16} />
          </button>

          <WhatsAppButton
            size="lg"
            variant="outline"
            label="WhatsApp Us"
          />
        </div>

        {/* Prominent Search Component */}
        <div className="mt-6 mb-8">
          <ServiceSearch
            onSelectService={onSelectService}
            onSelectCategory={onSelectCategory}
          />
        </div>

        {/* Highlights / Trust Indicators */}
        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
            <span>101 Verified Services</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-orange-600 shrink-0" />
            <span>Assisted Form Filling</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} className="text-emerald-600 shrink-0" />
            <span>Fast WhatsApp Response</span>
          </div>
        </div>
      </div>
    </section>
  );
};
