'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/contact';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { SERVICES } from '@/lib/services';

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState('Complete Home Interior');
  const [customNotes, setCustomNotes] = useState('');

  const generateEnquiryUrl = () => {
    let msg = `Hi, I am interested in ${selectedService} work with Ocean Kitchen & Interior.`;
    if (customNotes.trim()) {
      msg += ` My requirement notes: ${customNotes.trim()}`;
    }
    return getWhatsAppUrl(msg);
  };

  return (
    <main className="bg-[#F7F3EC] text-[#171717] min-h-screen py-16 sm:py-24 selection:bg-[#C46A3A]/20 selection:text-[#171717]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#171717]/60 hover:text-[#C46A3A] transition-colors"
          >
            <span>&larr;</span>
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DED0]/60 border border-[#E8DED0] text-[11px] font-semibold tracking-wider uppercase text-[#C46A3A] mb-3">
            Direct Consultation
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#171717] tracking-tight">
            Contact Ocean Kitchen &amp; Interior
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#171717]/70 leading-relaxed">
            Ready to discuss your interior work, kitchen layout, or custom furniture? Reach out
            directly via phone, WhatsApp, or connect on Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Details & Actions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="bg-white border border-[#E8DED0] rounded-2xl p-6 sm:p-7 card-elevation hover:border-[#C46A3A]/40 transition-all">
              <div className="flex items-center gap-3.5 mb-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#C46A3A]/10 text-[#C46A3A] border border-[#C46A3A]/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#171717]/60">
                    Phone Call
                  </h3>
                  <p className="text-lg font-serif font-bold text-[#171717]">{BUSINESS_INFO.phone.display}</p>
                </div>
              </div>
              <p className="text-xs text-[#171717]/70 mb-5 leading-relaxed">
                Available for direct customer enquiries and site visits across Dhayari &amp; Pune.
              </p>
              <a
                href={BUSINESS_INFO.phone.telLink}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#171717] hover:bg-[#262626] text-[#F7F3EC] text-xs font-semibold button-elevation transition-colors"
              >
                <span>Call Now</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white border border-[#E8DED0] rounded-2xl p-6 sm:p-7 card-elevation hover:border-[#25D366]/40 transition-all">
              <div className="flex items-center gap-3.5 mb-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.761.854 2.796.854 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.767-5.768-5.767zm7.502 5.766c-.001 4.14-3.364 7.503-7.502 7.503-1.312 0-2.61-.345-3.754-.997l-4.277 1.121 1.143-4.162c-.722-1.205-1.103-2.593-1.103-4.005.001-4.14 3.364-7.503 7.502-7.503 4.141 0 7.502 3.363 7.502 7.503z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#171717]/60">
                    WhatsApp Chat
                  </h3>
                  <p className="text-lg font-serif font-bold text-[#171717]">{BUSINESS_INFO.phone.display}</p>
                </div>
              </div>
              <p className="text-xs text-[#171717]/70 mb-5 leading-relaxed">
                Send floor plans, photos of your space, or quick questions directly.
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#C46A3A] hover:bg-[#b05c30] text-white text-xs font-semibold button-elevation transition-colors"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Instagram Card */}
            <div className="bg-white border border-[#E8DED0] rounded-2xl p-6 sm:p-7 card-elevation hover:border-[#C46A3A]/40 transition-all">
              <div className="flex items-center gap-3.5 mb-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#C46A3A]/10 text-[#C46A3A] border border-[#C46A3A]/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth={1.5} />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#171717]/60">
                    Instagram
                  </h3>
                  <p className="text-base font-bold text-[#171717]">{BUSINESS_INFO.instagram.handle}</p>
                </div>
              </div>
              <p className="text-xs text-[#171717]/70 mb-5 leading-relaxed">
                Watch real site progress videos and recently completed interior installations.
              </p>
              <a
                href={BUSINESS_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#F7F3EC] hover:bg-[#E8DED0] text-[#171717] text-xs font-semibold border border-[#E8DED0] transition-colors"
              >
                <span>Open Instagram</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Location Address */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8DED0] text-xs text-[#171717]/70 card-elevation">
              <span className="font-serif font-bold text-[#171717] text-sm block mb-1.5">
                Service Area &amp; Workshop
              </span>
              <p className="leading-relaxed">{BUSINESS_INFO.location.fullAddress}</p>
              <p className="mt-2 text-[11px] text-[#C46A3A] font-medium">
                Serving Dhayari, Sinhagad Road, Warje, Kothrud, and greater Pune.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Enquiry Form + Location Map */}
          <div className="lg:col-span-7 space-y-8">
            {/* Quick Enquiry Box */}
            <div className="bg-white border border-[#E8DED0] rounded-3xl p-6 sm:p-8 card-elevation">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#171717] tracking-tight">
                Quick WhatsApp Enquiry
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#171717]/70 leading-relaxed">
                Select your service of interest and optional notes. This will format a ready-to-send
                WhatsApp message to Ocean Kitchen &amp; Interior.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#171717]/70 mb-2">
                    Select Interior Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-[#E8DED0] text-[#171717] text-sm focus:outline-none focus:border-[#C46A3A] focus:ring-1 focus:ring-[#C46A3A] transition-colors"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#171717]/70 mb-2">
                    Your Requirements / Room Dimensions (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    placeholder="e.g. 2BHK flat in Dhayari, looking for modular kitchen and master bedroom wardrobe..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-[#E8DED0] text-[#171717] text-sm placeholder-[#171717]/40 focus:outline-none focus:border-[#C46A3A] focus:ring-1 focus:ring-[#C46A3A] transition-colors"
                  />
                </div>

                <a
                  href={generateEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#C46A3A] hover:bg-[#b05c30] text-white font-semibold text-sm transition-all button-elevation active:scale-98"
                >
                  <span>Send Enquiry on WhatsApp</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Google Maps Location Section */}
            <div className="bg-white border border-[#E8DED0] rounded-3xl p-6 sm:p-8 card-elevation overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-serif font-bold text-[#171717] tracking-tight">
                    Business Location: Dhayari, Pune
                  </h2>
                  <p className="text-xs text-[#171717]/60 mt-0.5">
                    Operating locally in Dhayari, Pune, Maharashtra
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dhayari+Pune+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#C46A3A] hover:underline flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Map Embed Preview */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-[#E8DED0]/30 border border-[#E8DED0]">
                <iframe
                  title="Ocean Kitchen & Interior - Dhayari Pune Location"
                  src="https://maps.google.com/maps?q=Dhayari,%20Pune,%20Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
