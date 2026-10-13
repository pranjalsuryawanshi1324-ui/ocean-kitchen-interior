import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import TrustSection from '@/components/sections/TrustSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import GalleryPreviewSection from '@/components/sections/GalleryPreviewSection';
import ContactCtaSection from '@/components/sections/ContactCtaSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Introduction */}
      <IntroductionSection />

      {/* 3. Experience / Trust */}
      <TrustSection />

      {/* 4. Services */}
      <ServicesSection />

      {/* 5. Featured Projects */}
      <FeaturedProjectsSection />

      {/* 6. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 7. Gallery Preview */}
      <GalleryPreviewSection />

      {/* 8. Contact CTA */}
      <ContactCtaSection />
    </div>
  );
}
