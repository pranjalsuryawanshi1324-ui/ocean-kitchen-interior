'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getGalleryItems, getGalleryCategories, GalleryItem } from '@/lib/gallery';
import AppImage from '@/components/ui/AppImage';
import Lightbox, { LightboxItem } from '@/components/ui/Lightbox';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export default function GalleryPage() {
  const allItems = getGalleryItems();
  const categories = getGalleryCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? allItems
      : allItems.filter((item) => item.category === selectedCategory);

  const currentItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  const currentLightboxItem: LightboxItem | null = currentItem
    ? {
        image: currentItem.image,
        title: currentItem.title,
        category: currentItem.category,
        description: currentItem.description,
      }
    : null;

  const handleNext = () => {
    if (activeLightboxIndex !== null && activeLightboxIndex < filteredItems.length - 1) {
      setActiveLightboxIndex(activeLightboxIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null && activeLightboxIndex > 0) {
      setActiveLightboxIndex(activeLightboxIndex - 1);
    }
  };

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <main className="bg-[#F7F3EC] text-[#171717] min-h-screen py-16 sm:py-24 selection:bg-[#C46A3A]/20 selection:text-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#171717]/60 hover:text-[#C46A3A] transition-colors"
          >
            <span>&larr;</span>
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DED0]/60 border border-[#E8DED0] text-[11px] font-semibold tracking-wider uppercase text-[#C46A3A] mb-3">
              Real Work Showcase
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#171717] tracking-tight">
              Project Photo Gallery
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#171717]/70 max-w-2xl">
              Browse actual interior execution, woodwork, modular kitchens, and custom fittings
              completed across Dhayari and Pune.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C46A3A] hover:bg-[#b05c30] text-white text-xs sm:text-sm font-semibold transition-all button-elevation self-start md:self-auto"
          >
            <span>Ask About Any Design</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-6 border-b border-[#E8DED0]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#C46A3A] text-white shadow-md shadow-[#C46A3A]/20 border border-[#C46A3A]'
                  : 'bg-white text-[#171717]/70 hover:text-[#171717] hover:border-[#C46A3A]/50 border border-[#E8DED0] card-elevation'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative cursor-pointer aspect-square bg-white rounded-2xl overflow-hidden border border-[#E8DED0] hover:border-[#C46A3A]/60 card-elevation transition-all duration-300"
            >
              <AppImage
                src={item.image}
                alt={item.title || 'Ocean Kitchen & Interior work'}
                categoryLabel={item.category}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Hover overlay with title & prompt */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-[#171717]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5">
                <span className="self-end p-2 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/25 transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </span>

                <div>
                  {item.category && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C46A3A] bg-white/95 px-2 py-0.5 rounded-md inline-block mb-1.5 shadow-sm">
                      {item.category}
                    </span>
                  )}
                  <h3 className="text-sm sm:text-base font-serif font-bold text-white drop-shadow">
                    {item.title || 'Ocean Kitchen & Interior'}
                  </h3>
                  <p className="text-[11px] text-white/80 mt-1 font-sans">
                    Click to view details
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={currentLightboxItem}
        onClose={() => setActiveLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={activeLightboxIndex !== null && activeLightboxIndex < filteredItems.length - 1}
        hasPrev={activeLightboxIndex !== null && activeLightboxIndex > 0}
      />
    </main>
  );
}
