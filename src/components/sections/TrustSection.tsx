import React from 'react';
import { BUSINESS_INFO } from '@/lib/contact';

export function TrustSection() {
  const PILLARS = [
    {
      title: 'Complete Interior Solutions',
      description:
        'From turnkey home executions to individual space improvements, everything is planned and coordinated under one roof.',
      icon: (
        <svg className="w-6 h-6 text-[#C46A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
    {
      title: 'Customized to Your Ideas',
      description:
        'We tailor every dimension, shutter finish, and storage compartment around your personal daily habits and taste.',
      icon: (
        <svg className="w-6 h-6 text-[#C46A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.14 6.342a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
    },
    {
      title: 'Furniture & Interior Work',
      description:
        'Sturdy, on-site or custom woodwork crafted by experienced carpenters using premium materials and hardware.',
      icon: (
        <svg className="w-6 h-6 text-[#C46A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233l2.802-2.801a2.828 2.828 0 10-4-4l-2.8 2.8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#E8DED0]/40 text-[#171717] border-b border-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 items-stretch">
          {/* Main Stat Card in Deep Charcoal with Terracotta accent */}
          <div className="lg:col-span-1 bg-[#171717] text-[#F7F3EC] rounded-3xl p-8 sm:p-9 flex flex-col justify-center shadow-[0_18px_40px_rgba(23,23,23,0.18)] border border-white/5 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C46A3A]/10 rounded-full blur-2xl pointer-events-none" />
            
            <span className="text-5xl sm:text-6xl font-serif font-bold text-[#C46A3A] tracking-tight">
              {BUSINESS_INFO.experience.years}
            </span>
            <span className="text-lg sm:text-xl font-medium text-[#F7F3EC] mt-2">
              {BUSINESS_INFO.experience.label}
            </span>
            <p className="text-xs text-[#E8DED0]/70 mt-3 leading-relaxed font-light">
              Serving homeowners across Dhayari &amp; Pune with steadfast dedication.
            </p>
          </div>

          {/* Pillars in Elevated White Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PILLARS.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#E8DED0] rounded-3xl p-7 card-elevation flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F7F3EC] border border-[#E8DED0] flex items-center justify-center mb-5 shadow-xs">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[#171717] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#171717]/70 mt-2.5 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
