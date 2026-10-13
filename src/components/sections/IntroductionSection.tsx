import React from 'react';
import { BUSINESS_INFO } from '@/lib/contact';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export function IntroductionSection() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.discussSpace);

  return (
    <section className="py-20 sm:py-28 bg-[#F7F3EC] text-[#171717] border-b border-[#E8DED0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section tag */}
        <span className="text-xs font-semibold tracking-widest uppercase text-[#C46A3A] mb-3 inline-block">
          Our Philosophy
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight">
          Designed Around Your Ideas
        </h2>

        {/* Layered Card with Subtle 3D Shadow */}
        <div className="mt-8 bg-white border border-[#E8DED0] rounded-3xl p-8 sm:p-12 shadow-[0_12px_36px_rgba(23,23,23,0.05)] transition-all duration-300 hover:shadow-[0_20px_48px_rgba(23,23,23,0.08)]">
          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed max-w-3xl mx-auto font-light">
            At Ocean Kitchen &amp; Interior, every project starts with listening to you. With over{' '}
            <strong className="text-[#171717] font-semibold">{BUSINESS_INFO.experience.years}</strong> of
            dedicated, hands-on experience in Dhayari, Pune, our team brings a hardworking work ethic and
            puts 101% commitment into every detail. We understand your ideas and requirements, turning
            them into practical, durable, and beautiful living spaces designed to bring long-lasting
            satisfaction.
          </p>

          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#171717] hover:bg-[#C46A3A] text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
              <span>Let&apos;s Discuss Your Space</span>
              <svg className="w-4 h-4 text-[#F7F3EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
