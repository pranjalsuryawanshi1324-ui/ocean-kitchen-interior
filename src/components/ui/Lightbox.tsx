'use client';

import React, { useEffect, useState } from 'react';
import AppImage from './AppImage';

export interface LightboxItem {
  /** Current display photograph */
  image: string;
  /** Complete array of photographs belonging to this item / project */
  images?: string[];
  /** Active index within the `images` array */
  currentIndex?: number;
  title?: string;
  category?: string;
  description?: string;
}

interface LightboxProps {
  item: LightboxItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
  onSelectIndex?: (index: number) => void;
}

export function Lightbox({
  item,
  onClose,
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false,
  onSelectIndex,
}: LightboxProps) {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!item) return null;

  const photoList = item.images && item.images.length > 0 ? item.images : [item.image];
  const activeIdx = item.currentIndex !== undefined ? item.currentIndex : 0;
  const currentImageSrc = photoList[activeIdx] || item.image;
  const totalPhotos = photoList.length;
  const hasMultiple = totalPhotos > 1;

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 45 && hasNext && onNext) {
      onNext();
    } else if (diff < -45 && hasPrev && onPrev) {
      onPrev();
    }
    setTouchStartX(null);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title || 'Project image preview'}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#171717]/92 backdrop-blur-md p-3 sm:p-6 transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar with Counter & Close Button */}
      <div
        className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo Counter Pill (shown if item has multiple photos) */}
        {hasMultiple ? (
          <div className="pointer-events-auto px-3.5 py-1.5 rounded-full bg-[#171717]/85 border border-[#E8DED0]/20 text-[#F7F3EC] text-xs font-semibold shadow-md flex items-center gap-1.5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C46A3A]" />
            <span>
              Photo {activeIdx + 1} of {totalPhotos}
            </span>
          </div>
        ) : (
          <div />
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="pointer-events-auto p-2.5 rounded-full bg-[#171717]/85 text-[#F7F3EC] hover:bg-[#C46A3A] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C46A3A] transition-colors shadow-lg"
          aria-label="Close preview"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Prev button */}
      {hasPrev && onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#171717]/85 text-[#F7F3EC] hover:bg-[#C46A3A] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C46A3A] transition-colors shadow-xl"
          aria-label="Previous photograph"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next button */}
      {hasNext && onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#171717]/85 text-[#F7F3EC] hover:bg-[#C46A3A] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C46A3A] transition-colors shadow-xl"
          aria-label="Next photograph"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Main Container */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-[#171717] border border-[#E8DED0]/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main Image Frame - object-contain preserves natural aspect ratio */}
        <div className="relative w-full h-[55vh] sm:h-[68vh] bg-[#171717] flex items-center justify-center p-2">
          <AppImage
            src={currentImageSrc}
            alt={item.title || 'Ocean Kitchen & Interior work'}
            categoryLabel={item.category}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Multi-Photo Thumbnail Bar (if project has more than 1 photo) */}
        {hasMultiple && (
          <div className="w-full bg-[#171717] border-t border-[#E8DED0]/10 px-4 py-2.5 flex items-center justify-center gap-2 overflow-x-auto scrollbar-none">
            {photoList.map((photo, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => (onSelectIndex ? onSelectIndex(idx) : null)}
                className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                  idx === activeIdx
                    ? 'border-[#C46A3A] scale-105 shadow-md shadow-[#C46A3A]/30'
                    : 'border-transparent opacity-60 hover:opacity-100 hover:border-white/30'
                }`}
                aria-label={`View photo ${idx + 1}`}
              >
                <AppImage
                  src={photo}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </button>
            ))}
          </div>
        )}

        {/* Caption Bar */}
        {(item.title || item.description || item.category) && (
          <div className="w-full bg-[#171717] border-t border-[#E8DED0]/15 p-4 sm:p-5 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                {item.category && (
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C46A3A]">
                    {item.category}
                  </span>
                )}
                {hasMultiple && (
                  <span className="text-[11px] text-[#F7F3EC]/50">
                    &bull; Photo {activeIdx + 1} of {totalPhotos}
                  </span>
                )}
              </div>
              {item.title && (
                <h3 className="text-base sm:text-lg font-serif font-bold tracking-tight text-[#F7F3EC]">
                  {item.title}
                </h3>
              )}
              {item.description && (
                <p className="text-xs sm:text-sm text-[#F7F3EC]/70 mt-0.5 max-w-2xl font-light">
                  {item.description}
                </p>
              )}
            </div>
            <div className="text-xs text-[#F7F3EC]/50 flex-shrink-0 font-light">
              Ocean Kitchen &amp; Interior • Dhayari, Pune
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lightbox;
