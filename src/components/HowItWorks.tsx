import React from 'react';
import { ArrowDown, MessageSquareText, Search, FileText, CheckCheck, Send } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose a Service',
      desc: 'Browse our 8 categories or use the search bar to locate your specific service or document.',
      icon: Search,
    },
    {
      num: '02',
      title: 'View Service Details',
      desc: 'Inspect the service description, general scope of assistance, and initial documentation overview.',
      icon: FileText,
    },
    {
      num: '03',
      title: 'Click Get Service',
      desc: 'Tap the green "Get Service" or "Apply Now" button on any service card or detail modal.',
      icon: MessageSquareText,
    },
    {
      num: '04',
      title: 'WhatsApp Opens',
      desc: 'Your WhatsApp app opens directly with a pre-formatted message naming your selected service.',
      icon: Send,
    },
    {
      num: '05',
      title: 'Send Your Requirements',
      desc: 'Hit send! Our MySeva executive reviews your request, explains checklist needs, and guides you through completion.',
      icon: CheckCheck,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Simple 5-Step Process</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How MySeva Works
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            No complex signups or payment walls. Service discovery to instant WhatsApp inquiry in under a minute.
          </p>
        </div>

        {/* Steps display */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-orange-100 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="flex flex-col items-center text-center bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs hover:border-orange-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 text-orange-600 font-extrabold flex items-center justify-center text-sm font-mono mb-3.5 shadow-xs">
                    {step.num}
                  </div>

                  <div className="w-9 h-9 rounded-full bg-slate-50 text-slate-700 flex items-center justify-center mb-2.5">
                    <Icon size={18} className="text-orange-600" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick CTA */}
        <div className="mt-12 text-center">
          <WhatsAppButton
            label="Try It Now • Message MySeva"
            size="lg"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
};
