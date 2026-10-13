import React from 'react';
import { BUSINESS_INFO } from '@/lib/contact';

export function WhyChooseUsSection() {
  const STRENGTHS = [
    {
      title: '20+ Years of Experience',
      description:
        'Over two decades of hands-on interior and carpentry craftsmanship across Dhayari, Pune, ensuring experienced workmanship in every room.',
    },
    {
      title: '101% Commitment to Every Project',
      description:
        'We treat every home with utmost dedication, dedicating thorough attention to finishing, alignment, and durable installation.',
    },
    {
      title: 'Understanding Your Ideas & Requirements',
      description:
        'We never impose rigid cookie-cutter layouts. We listen carefully to how your family lives and tailor our work to your vision.',
    },
    {
      title: 'Complete Interior Solutions',
      description:
        'From turnkey home interior projects to individual rooms, we coordinate woodwork, false ceilings, lighting, and finishes seamlessly.',
    },
    {
      title: 'Furniture & Interior Work',
      description:
        'Custom furniture made to your exact room dimensions using reliable plywood, laminates, and dependable hardware.',
    },
    {
      title: 'Personal Attention to Detail',
      description:
        'Direct communication and attentive supervision on your project from discussion through to final handover.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#171717] text-white border-b border-white/10 relative overflow-hidden">
      {/* Subtle architectural ambient light */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C46A3A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C46A3A] mb-3 block">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F7F3EC] tracking-tight">
            Why Choose {BUSINESS_INFO.name}?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#E8DED0]/80 font-light">
            A hardworking local team focused on honest communication, reliable woodwork, and turning
            your ideas into practical, beautiful spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {STRENGTHS.map((strength, index) => (
            <div
              key={strength.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 sm:p-8 backdrop-blur-xs transition-all duration-300 hover:bg-white/10 hover:border-[#C46A3A]/40 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#C46A3A]/20 border border-[#C46A3A]/40 text-[#C46A3A] text-xs font-bold flex items-center justify-center">
                  0{index + 1}
                </span>
                <h3 className="text-base font-semibold text-[#F7F3EC] tracking-tight">
                  {strength.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#E8DED0]/75 leading-relaxed font-light">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
