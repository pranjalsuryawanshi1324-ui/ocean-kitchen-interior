import React from 'react';
import Link from 'next/link';
import { SERVICES, getServiceWhatsAppUrl } from '@/lib/services';
import AppImage from '@/components/ui/AppImage';

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F3EC] text-[#171717] border-b border-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C46A3A] mb-2.5 block">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight">
              Our Services
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#171717]/75 font-light">
              From individual spaces to complete interiors, we bring your ideas into reality.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#C46A3A] hover:text-[#A8552B] transition-colors group"
          >
            <span>Explore All 8 Services</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* 8 Services Grid - Physical Interior Card Aesthetic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {SERVICES.map((service, index) => {
            const serviceWaUrl = getServiceWhatsAppUrl(service);

            return (
              <div
                key={service.id}
                className="group flex flex-col bg-white border border-[#E8DED0] rounded-3xl overflow-hidden card-elevation"
              >
                {/* Service Image Frame with Subtle Zoom */}
                <div className="relative w-full h-52 bg-[#E8DED0]/50 overflow-hidden">
                  <AppImage
                    src={service.image}
                    alt={`${service.title} - Ocean Kitchen & Interior`}
                    categoryLabel="Service"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Subtle top-light gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                  
                  {/* Service Number Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-sm text-[#171717] shadow-xs">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Content */}
                <div className="flex flex-col flex-1 p-6 justify-between bg-white">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#171717] tracking-tight group-hover:text-[#C46A3A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#171717]/70 leading-relaxed line-clamp-3 font-light">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-[#E8DED0]/70 flex items-center justify-between gap-3">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-[#171717] hover:text-[#C46A3A] transition-colors"
                    >
                      Details &rarr;
                    </Link>

                    <a
                      href={serviceWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#F7F3EC] hover:bg-[#C46A3A] text-[#171717] hover:text-white border border-[#E8DED0] hover:border-transparent transition-all duration-200 shadow-xs"
                    >
                      <span>Enquire</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
