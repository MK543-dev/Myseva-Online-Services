import React from 'react';
import { X, CheckCircle2, MessageCircle, Mail, ArrowRight, Shield } from 'lucide-react';
import { Service } from '../types';
import { ServiceIcon } from './ServiceIcon';
import { WhatsAppButton } from './WhatsAppButton';
import { getEmailUrl, CONTACT_INFO } from '../data/servicesData';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onSelectCategory?: (categorySlug: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectCategory,
}) => {
  if (!service) return null;

  const formattedId = String(service.id).padStart(2, '0');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-slate-50/50 flex items-start justify-between gap-4">
          <div>
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 flex-wrap">
              <span className="hover:text-slate-800">Home</span>
              <span>/</span>
              <span className="hover:text-slate-800">Services</span>
              <span>/</span>
              <button
                onClick={() => {
                  if (onSelectCategory) onSelectCategory(service.categorySlug);
                  onClose();
                }}
                className="text-orange-600 hover:underline font-medium"
              >
                {service.category}
              </button>
              <span>/</span>
              <span className="text-slate-700 font-semibold">{service.name}</span>
            </nav>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-orange-100 text-orange-600 border border-orange-200">
                <ServiceIcon name={service.iconName} size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    Service #{formattedId}
                  </span>
                  {service.isPopular && (
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Popular Service
                    </span>
                  )}
                </div>
                <h2 id="service-modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {service.name}
                </h2>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-600">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Service Overview
            </h4>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              {service.description}
            </p>
          </div>

          {/* Assistance highlights */}
          <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-800">
              How MySeva Assists You
            </h4>
            <ul className="space-y-2 text-slate-700 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Document verification and requirement checklist guidance before submission.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Accurate online application form filling and digital upload of necessary credentials.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Appointment scheduling, challan payment assistance, and real-time status updates via WhatsApp.</span>
              </li>
            </ul>
          </div>

          {/* Important Information banner */}
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <Shield size={16} className="text-slate-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-700 block mb-0.5">Important Information:</strong>
              Contact MySeva for current requirements, applicable official fees, and documentation details. Our team will review your specifics via WhatsApp.
            </div>
          </div>
        </div>

        {/* Modal Footer / CTAs */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Direct WhatsApp Enquiry for: </span>
            <strong className="text-slate-800 font-semibold">{service.name}</strong>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={getEmailUrl(`Enquiry: ${service.name}`, `Hi MySeva Team,\n\nI would like to enquire about: ${service.name}. Please guide me with requirements.`)}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <Mail size={14} />
              <span>Email Us</span>
            </a>

            <WhatsAppButton
              serviceName={service.name}
              label="Get Service on WhatsApp"
              size="md"
              variant="primary"
              className="flex-1 sm:flex-initial"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
