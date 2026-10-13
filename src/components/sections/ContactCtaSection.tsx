import React from 'react';
import { BUSINESS_INFO } from '@/lib/contact';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export function ContactCtaSection() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <section className="py-22 sm:py-32 bg-[#171717] text-white relative overflow-hidden">
      {/* Subtle terracotta background glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-[#C46A3A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#C46A3A] mb-3.5 inline-block">
          Get in Touch
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F7F3EC] tracking-tight">
          Let&apos;s Create Your Space Together
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#E8DED0]/85 max-w-xl mx-auto leading-relaxed font-light">
          Have an idea for your home or space? Let&apos;s discuss your requirements.
        </p>

        {/* Action Buttons with 3D Depth */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C46A3A] hover:bg-[#A8552B] text-white font-semibold text-sm button-elevation active:scale-95"
          >
            <span>WhatsApp Us</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href={BUSINESS_INFO.phone.telLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-[#F7F3EC] font-semibold text-sm border border-white/10 hover:border-white/20 transition-all duration-200 active:scale-95 shadow-sm"
          >
            <svg className="w-4 h-4 text-[#C46A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Call Now ({BUSINESS_INFO.phone.display})</span>
          </a>
        </div>

        <div className="mt-8 text-xs text-[#E8DED0]/60 font-light">
          <span>Location: {BUSINESS_INFO.location.fullAddress}</span>
        </div>
      </div>
    </section>
  );
}

export default ContactCtaSection;
