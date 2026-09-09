import React from 'react';
import {
  Layers,
  Search,
  Users,
  MessageCircle,
  FolderKanban,
  Send,
  CheckCircle2,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Layers,
      title: '100+ Online Services',
      description:
        'A comprehensive single-window catalog spanning personal IDs, tax, business licenses, university degrees, and MeeSeva certificates.',
    },
    {
      icon: Search,
      title: 'Easy Service Discovery',
      description:
        'Fast keyword search and cleanly organized categories ensure you locate the exact service or certificate you need without confusion.',
    },
    {
      icon: Users,
      title: 'Convenient Assistance',
      description:
        'Avoid tedious portal navigation. We guide you on required documents, application procedures, and verification checklists.',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Support',
      description:
        'Direct communication over WhatsApp (+91 863 929 0113). Send documents digitally, ask queries, and receive prompt updates.',
    },
    {
      icon: FolderKanban,
      title: 'Multiple Service Categories',
      description:
        'Eight specialized categories covering personal, academic, business, tax, property, MeeSeva, NGO, and government portals.',
    },
    {
      icon: Send,
      title: 'Simple Enquiry Process',
      description:
        'No complicated signups, logins, or tedious multi-page account creation. Simply tap "Get Service" and message our team directly.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <CheckCircle2 size={13} />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose MySeva?
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Streamlining essential documentation and digital services through personalized, responsive support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-2xs hover:border-orange-400 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {pt.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
