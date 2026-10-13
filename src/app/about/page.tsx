import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/contact';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import AppImage from '@/components/ui/AppImage';

export const metadata: Metadata = {
  title: 'About Us | Ocean Kitchen & Interior Dhayari, Pune',
  description:
    'Learn about Ocean Kitchen & Interior. With 20+ years of experience in Dhayari, Pune, we provide complete interior solutions, modular kitchens, and custom woodwork built around your ideas.',
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.discussSpace);

  return (
    <main className="bg-[#F7F3EC] text-[#171717] min-h-screen py-18 sm:py-26">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#171717]/60 hover:text-[#C46A3A] transition-colors">
            &larr; Back to Home
          </Link>
        </div>

        <span className="text-xs font-semibold tracking-widest uppercase text-[#C46A3A] mb-3 block">
          Our Story &amp; Values
        </span>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#171717] tracking-tight">
          About Ocean Kitchen &amp; Interior
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-[#171717]/75 max-w-2xl leading-relaxed font-light">
          Crafting spaces tailored to your everyday lifestyle with {BUSINESS_INFO.experience.years} of
          dependable interior and furniture experience in Dhayari, Pune.
        </p>

        {/* Hero Visual Banner with Subtle 3D Layered Frame */}
        <div className="relative w-full h-72 sm:h-[28rem] rounded-3xl overflow-hidden my-12 border border-[#E8DED0] bg-[#171717] shadow-[0_20px_50px_rgba(23,23,23,0.12)]">
          <AppImage
            src="/images/projects/about-banner.jpg"
            alt="Ocean Kitchen & Interior - Craftsmanship in Dhayari Pune"
            categoryLabel="Our Craftsmanship"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {/* Editorial Narrative with Tactile White Card */}
        <div className="space-y-9 text-[#171717]/80 text-base sm:text-lg leading-relaxed bg-white border border-[#E8DED0] rounded-3xl p-8 sm:p-12 shadow-[0_12px_36px_rgba(23,23,23,0.05)] font-light">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171717] tracking-tight mb-3.5">
              Designed Around Your Ideas
            </h2>
            <p>
              Ocean Kitchen &amp; Interior believes that every home and space is unique and should reflect
              the people who live in it. We do not believe in forcing one-size-fits-all designs. Instead,
              we take the time to listen, understand your exact requirements, and design furniture and
              interiors that fit your daily habits.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E8DED0]/60">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171717] tracking-tight mb-3.5">
              Hardworking Craftsmanship with 101% Effort
            </h2>
            <p>
              With more than <strong className="text-[#171717] font-semibold">20 years of experience</strong> working on
              residential interiors across Pune, our team approaches every single project with dedication.
              We give 101% effort to make sure the joinery is precise, the laminates and fittings are
              durable, and the final handover brings genuine happiness to the customer.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E8DED0]/60">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171717] tracking-tight mb-3.5">
              Practical, Beautiful Spaces
            </h2>
            <p>
              Interior work must not only look appealing on day one—it must function smoothly for years.
              From smart modular kitchens and spacious wardrobe layouts to elegant false ceiling details,
              our focus is always on practical utility combined with clean, modern aesthetics.
            </p>
          </div>
        </div>

        {/* Core Business Highlights with 3D Card Elevation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
          <div className="bg-white border border-[#E8DED0] rounded-3xl p-7 card-elevation">
            <span className="text-4xl font-serif font-bold text-[#C46A3A] block mb-1.5">20+</span>
            <span className="text-sm font-semibold text-[#171717] block">Years Experience</span>
            <p className="text-xs text-[#171717]/65 mt-2 font-light">
              Proven track record in Dhayari and Pune interiors.
            </p>
          </div>

          <div className="bg-white border border-[#E8DED0] rounded-3xl p-7 card-elevation">
            <span className="text-4xl font-serif font-bold text-[#C46A3A] block mb-1.5">101%</span>
            <span className="text-sm font-semibold text-[#171717] block">Project Commitment</span>
            <p className="text-xs text-[#171717]/65 mt-2 font-light">
              Thorough personal attention to each customer&apos;s requirements.
            </p>
          </div>

          <div className="bg-white border border-[#E8DED0] rounded-3xl p-7 card-elevation">
            <span className="text-4xl font-serif font-bold text-[#C46A3A] block mb-1.5">Local</span>
            <span className="text-sm font-semibold text-[#171717] block">Dhayari, Pune</span>
            <p className="text-xs text-[#171717]/65 mt-2 font-light">
              Accessible local team ready to discuss your space in person.
            </p>
          </div>
        </div>

        {/* Layered CTA Card */}
        <div className="bg-[#171717] text-[#F7F3EC] border border-white/10 rounded-3xl p-9 sm:p-14 text-center shadow-[0_20px_50px_rgba(23,23,23,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C46A3A]/10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F7F3EC] tracking-tight">
            Ready to Discuss Your Home Interior?
          </h3>
          <p className="text-sm sm:text-base text-[#E8DED0]/80 mt-3 max-w-md mx-auto font-light">
            Contact us directly on WhatsApp or phone to talk about your ideas and requirements.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C46A3A] hover:bg-[#A8552B] text-white font-semibold text-sm button-elevation"
            >
              WhatsApp Us
            </a>

            <a
              href={BUSINESS_INFO.phone.telLink}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-[#F7F3EC] border border-white/10 text-sm font-semibold transition-colors"
            >
              Call: {BUSINESS_INFO.phone.display}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
