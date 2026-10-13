import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, getServiceWhatsAppUrl } from '@/lib/services';
import AppImage from '@/components/ui/AppImage';

export const metadata: Metadata = {
  title: 'Our Services | Ocean Kitchen & Interior Dhayari, Pune',
  description:
    'Comprehensive interior services by Ocean Kitchen & Interior: Complete Home Interior, Modular Kitchens, Bedroom Wardrobes, Living Room TV Units, Bathroom Vanities, Furniture, and POP Ceilings in Dhayari, Pune.',
};

export default function ServicesPage() {
  return (
    <main className="bg-[#F7F3EC] text-[#171717] min-h-screen py-18 sm:py-26">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#171717]/60 hover:text-[#C46A3A] transition-colors">
            &larr; Back to Home
          </Link>
        </div>

        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C46A3A] mb-3 block">
            Comprehensive Interior Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#171717] tracking-tight">
            Our Interior &amp; Furniture Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#171717]/75 leading-relaxed font-light">
            From single-room carpentry and modular kitchens to complete home turnkey interiors, we
            craft high-quality spaces tailored directly to your ideas.
          </p>
        </div>

        {/* 8 Services Comprehensive List */}
        <div className="space-y-12 sm:space-y-16">
          {SERVICES.map((service, index) => {
            const serviceWaUrl = getServiceWhatsAppUrl(service);
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } bg-white border border-[#E8DED0] rounded-3xl overflow-hidden card-elevation gap-8 lg:gap-12 p-6 sm:p-9 lg:p-11`}
              >
                {/* Visual Image Frame */}
                <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-[#171717] flex-shrink-0 shadow-inner">
                  <AppImage
                    src={service.image}
                    alt={`${service.title} - Ocean Kitchen & Interior Dhayari Pune`}
                    categoryLabel={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-xs font-bold text-[#C46A3A] tracking-widest uppercase">
                        Service 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#171717] tracking-tight">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-[#171717]/75 leading-relaxed font-light">
                      {service.fullDescription}
                    </p>

                    {/* Service Highlights */}
                    <div className="mt-7">
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-[#171717]/60 mb-3.5">
                        What We Provide:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#171717]/80">
                        {service.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2.5">
                            <span className="text-[#C46A3A] font-bold mt-0.5">•</span>
                            <span className="font-light">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Contextual WhatsApp CTA */}
                  <div className="mt-8 pt-6 border-t border-[#E8DED0]/70 flex flex-wrap items-center gap-4">
                    <a
                      href={serviceWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C46A3A] hover:bg-[#A8552B] text-white font-semibold text-xs sm:text-sm button-elevation"
                    >
                      <span>Enquire About {service.title}</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>

                    <span className="text-xs text-[#171717]/60 font-light">
                      Direct WhatsApp discussion
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
