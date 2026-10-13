import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { BUSINESS_INFO } from '@/lib/contact';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export function HeroSection() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <section className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center justify-center bg-[#171717] text-white overflow-hidden">
      {/* Background Hero Photograph with subtle depth */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AppImage
          src="/images/projects/hero.jpg"
          alt="Ocean Kitchen & Interior - Interior Design & Furniture in Dhayari Pune"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          sizes="100vw"
        />
        {/* Architectural Charcoal Vignette & Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/65 to-[#171717]/75 backdrop-blur-[1px]" />
      </div>

      {/* Layered Content Floating Card with 3D Depth */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Subtle Frosted Layer Behind Content for Luxury Studio Feel */}
        <div className="relative bg-[#171717]/45 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
          {/* Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#C46A3A]/20 text-[#E8DED0] border border-[#C46A3A]/40 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C46A3A]" />
              {BUSINESS_INFO.experience.years} {BUSINESS_INFO.experience.label}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium bg-black/40 text-[#E8DED0] border border-white/10 shadow-sm">
              <svg className="w-3.5 h-3.5 text-[#C46A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {BUSINESS_INFO.location.fullAddress}
            </span>
          </div>

          {/* Business Label */}
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#C46A3A] uppercase mb-3.5">
            {BUSINESS_INFO.name}
          </p>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#F7F3EC] max-w-3xl mx-auto leading-tight sm:leading-tight">
            Transforming Spaces. Bringing Your Ideas to Life.
          </h1>

          {/* Supporting text */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-[#E8DED0]/90 max-w-2xl mx-auto leading-relaxed font-light">
            Complete interior solutions, furniture and custom work backed by {BUSINESS_INFO.experience.years} of experience.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
            <Link
              href="/projects"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#F7F3EC] hover:bg-white text-[#171717] font-semibold text-sm transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 text-center active:scale-95"
            >
              View Our Projects
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#C46A3A] hover:bg-[#A8552B] text-white font-semibold text-sm button-elevation text-center active:scale-95"
            >
              <span>WhatsApp Us</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
