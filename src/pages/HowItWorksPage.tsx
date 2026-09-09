import React from 'react';
import { HowItWorks } from '../components/HowItWorks';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { CONTACT_INFO } from '../data/servicesData';
import { PageRoute } from '../types';
import { HelpCircle, FileCheck, MessageCircle, Clock, Shield } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const faqs = [
    {
      q: 'How does the WhatsApp enquiry process work?',
      a: 'When you click "Get Service" on any service card, WhatsApp automatically opens with a pre-filled message identifying your chosen service. Simply hit send, and our support team will reply with the exact document checklist and procedure.',
    },
    {
      q: 'Do I need to create an account or password on MySeva?',
      a: 'No! MySeva is built for pure speed and simplicity. You do not need to register an account or remember passwords. All interactions occur directly between you and our verified executive on WhatsApp.',
    },
    {
      q: 'What documents should I keep ready?',
      a: 'Depending on the service, you typically need a valid Aadhaar card, mobile number linked with Aadhaar (for OTP verifications), relevant previous certificates (like marks memos or property deeds), and passport-size photographs.',
    },
    {
      q: 'How do I pay for official fees or service assistance?',
      a: 'Our executive will provide complete transparency regarding government challans, official portal fees, and assistance charges directly over WhatsApp before processing.',
    },
    {
      q: 'Can I ask for services not explicitly listed?',
      a: 'Yes. If you have a specific certificate or government application requirement not covered in the 101 listed services, message us on WhatsApp and we will advise if assistance is feasible.',
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-white min-h-[80vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Visual 5-Step Process */}
        <HowItWorks />

        {/* What to Prepare Section */}
        <section className="bg-slate-50/80 rounded-2xl border border-slate-200 p-8 sm:p-10 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Tips for Faster Processing
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Having these ready before initiating your WhatsApp enquiry helps us process your request smoothly:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                <FileCheck size={20} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Clear Digital Scans</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Take well-lit, non-blurry photos or PDF scans of your Aadhaar, Voter ID, or relevant certificates.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Active Aadhaar Phone</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Keep the mobile phone linked to your Aadhaar handy for prompt OTP authentication when requested.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Clock size={20} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Specific Requirements</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Mention any urgency or specific format requirements (e.g. state format vs central format certificates).
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <HelpCircle size={14} className="text-orange-600" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Common Questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-2xs">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold shadow-xs cursor-pointer"
            >
              Explore All 101 Services Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
