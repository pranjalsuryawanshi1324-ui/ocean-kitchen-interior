'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

export interface AppImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  categoryLabel?: string;
}

/**
 * Reusable Image component wrapping Next.js Image for local assets.
 * Handles graceful fallback with an elegant, architectural placeholder
 * if a real photograph has not yet been copied into the public folder.
 */
export function AppImage({
  src,
  alt,
  fallbackSrc,
  categoryLabel,
  className = '',
  onError,
  ...props
}: AppImageProps) {
  const [hasError, setHasError] = useState(false);

  // Normalize path if given without leading slash for local public assets
  const normalizedSrc =
    !src.startsWith('/') && !src.startsWith('http://') && !src.startsWith('https://')
      ? `/${src}`
      : src;

  if (hasError) {
    if (fallbackSrc) {
      return (
        <Image
          src={fallbackSrc}
          alt={alt}
          className={className}
          onError={onError}
          {...props}
        />
      );
    }

    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#171717] via-[#262626] to-[#171717] text-[#F7F3EC] p-6 text-center select-none overflow-hidden border border-[#E8DED0]/20 ${className}`}
        style={props.fill ? { width: '100%', height: '100%' } : { minHeight: '220px' }}
      >
        {/* Subtle geometric architectural pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Brand Accent Icon */}
        <div className="relative z-10 w-10 h-10 mb-3 rounded-full bg-[#C46A3A]/10 border border-[#C46A3A]/30 flex items-center justify-center text-[#C46A3A]">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </div>

        {/* Category badge */}
        {categoryLabel && (
          <span className="relative z-10 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#C46A3A]/15 text-[#C46A3A] border border-[#C46A3A]/20 mb-2">
            {categoryLabel}
          </span>
        )}

        {/* Title / Alt */}
        <p className="relative z-10 text-sm font-medium text-[#F7F3EC] line-clamp-2 max-w-xs">
          {alt || 'Ocean Kitchen & Interior'}
        </p>

        {/* Sub-label */}
        <span className="relative z-10 text-[11px] text-[#F7F3EC]/70 mt-1.5 tracking-wide">
          Ocean Kitchen &amp; Interior • Dhayari, Pune
        </span>
      </div>
    );
  }

  return (
    <Image
      src={normalizedSrc}
      alt={alt}
      className={className}
      onError={(e) => {
        setHasError(true);
        if (onError) onError(e);
      }}
      {...props}
    />
  );
}

export default AppImage;
