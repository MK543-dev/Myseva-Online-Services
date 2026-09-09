import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { CONTACT_INFO, getWhatsAppUrl, getEmailUrl } from '../data/servicesData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceOfInterest, setServiceOfInterest] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent, via: 'whatsapp' | 'email') => {
    e.preventDefault();
    if (!name.trim()) return;

    const fullMessage = `Name: ${name}\nPhone: ${phone}\nEmail: ${email || 'N/A'}\nService: ${serviceOfInterest || 'General Enquiry'}\nMessage: ${message || 'Please provide information.'}`;

    if (via === 'whatsapp') {
      const waUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
        `Hi MySeva, I have an inquiry:\n${fullMessage}`
      )}`;
      window.open(waUrl, '_blank');
    } else {
      const mailUrl = getEmailUrl(
        `Enquiry from ${name} - MySeva`,
        fullMessage
      );
      window.location.href = mailUrl;
    }

    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info (No Address, No Maps!) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <MessageCircle size={13} />
                <span>Instant Support</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Connect with MySeva
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Have a question about document requirements, government schemes, or application procedures? Reach out directly via WhatsApp or Email.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <div className="p-5 rounded-xl bg-white border border-emerald-200 shadow-2xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      WhatsApp & Phone
                    </span>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <WhatsAppButton
                  label="Chat Now"
                  size="sm"
                  variant="primary"
                />
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100">
                    <Mail size={24} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={getEmailUrl()}
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-orange-600 transition-colors truncate block"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <a
                  href={getEmailUrl()}
                  className="shrink-0 px-3.5 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 space-y-1">
              <p className="font-semibold text-slate-700">Digital Service Helpline</p>
              <p>
                Our services operate digitally for swift assistance. Share your requirements and documents directly via WhatsApp for quick verification and guidance.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Pre-filled Enquiry Box */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Send a Direct Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Fill in your details below to send a pre-formatted message via WhatsApp or Email.
            </p>

            {submitted ? (
              <div className="p-6 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-3">
                <CheckCircle2 size={36} className="text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900">Thank You!</h4>
                <p className="text-xs text-emerald-800">
                  Your enquiry has been formatted and opened. If the window did not open, click the button below to reach us directly.
                </p>
                <div className="pt-2">
                  <WhatsAppButton label="Open WhatsApp Chat" size="sm" />
                </div>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={(e) => handleFormSubmit(e, 'whatsapp')}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name <span className="text-orange-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service of Interest
                    </label>
                    <input
                      type="text"
                      value={serviceOfInterest}
                      onChange={(e) => setServiceOfInterest(e.target.value)}
                      placeholder="e.g. PAN Card, GST, Income Certificate"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Requirements / Message
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what assistance or documents you need..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={(e) => handleFormSubmit(e, 'whatsapp')}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-xs hover:shadow transition-all cursor-pointer"
                  >
                    <MessageCircle size={17} />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleFormSubmit(e, 'email')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-all cursor-pointer"
                  >
                    <Mail size={17} />
                    <span>Send via Email</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
