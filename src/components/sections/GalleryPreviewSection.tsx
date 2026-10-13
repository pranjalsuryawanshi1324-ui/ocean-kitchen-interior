'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getGalleryItems, GalleryItem } from '@/lib/gallery';
import AppImage from '@/components/ui/AppImage';
import Lightbox, { LightboxItem } from '@/components/ui/Lightbox';

export function GalleryPreviewSection() {
  const items = getGalleryItems().slice(0, 6);
  const [activeLightboxItem, setActiveLightboxItem] = useState<LightboxItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setActiveLightboxItem({
      image: item.image,
      title: item.title,
      category: item.category,
      description: item.description,
    });
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F7F3EC] text-[#171717] border-b border-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C46A3A] mb-2.5 block">
              Visual Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight">
              Gallery Preview
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#171717]/75 font-light">
              Browse actual interior execution and woodwork photographs.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#C46A3A] hover:text-[#b05c30] transition-colors"
          >
            <span>View Full Gallery ({getGalleryItems().length}+ items)</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Gallery Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative cursor-pointer aspect-square bg-white rounded-3xl overflow-hidden border border-[#E8DED0] card-elevation hover:border-[#C46A3A]/40 transition-all duration-300"
            >
              <AppImage
                src={item.image}
                alt={item.title || 'Ocean Kitchen & Interior work'}
                categoryLabel={item.category}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 50vw, 33vw"
              />

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-[#171717]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-xs px-4 py-2 rounded-full border border-white/20 shadow-lg">
                  Enlarge Image
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#171717] hover:bg-[#C46A3A] text-white text-sm font-semibold transition-all duration-200 button-elevation active:scale-95"
          >
            <span>View Full Gallery</span>
            <svg className="w-4 h-4 text-[#F7F3EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      <Lightbox
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />
    </section>
  );
}

export default GalleryPreviewSection;
