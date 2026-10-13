'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'auto';
  compact?: boolean;
  className?: string;
}

export function BrandLogo({ variant = 'auto', compact = false, className = '' }: BrandLogoProps) {
  const [imageFailed, setImageFailed] = useState(false);

  // Text color styling based on variant
  const titleClass =
    variant === 'light'
      ? 'text-white'
      : variant === 'dark'
      ? 'text-neutral-900'
      : 'text-neutral-900 dark:text-white';

  const subtitleClass =
    variant === 'light'
      ? 'text-[#E8DED0]'
      : variant === 'dark'
      ? 'text-[#171717]/70'
      : 'text-[#171717]/70';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C46A3A] rounded-md ${className}`}
      aria-label="Ocean Kitchen & Interior - Home"
    >
      {/* If a real logo image is provided at /images/logo/logo.png or logo.svg */}
      {!imageFailed ? (
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 bg-white rounded-lg p-0.5 overflow-hidden shadow-sm">
          <Image
            src="/images/logo/logo.png"
            alt="Ocean Kitchen & Interior Logo"
            width={40}
            height={40}
            className="w-full h-full object-contain"
            onError={() => setImageFailed(true)}
            priority
          />
        </div>
      ) : (
        /* Brand Monogram / Emblem fallback with brand Orange */
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:border-orange-500/50 transition-colors shadow-sm">
          <svg
            className="w-5 h-5 text-orange-500 transition-transform group-hover:scale-105"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            {/* Architectural house / kitchen monogram mark */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 10.5V20a1 1 0 01-1 1H6a1 1 0 01-1-1v-9.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 21v-6a1 1 0 011-1h4a1 1 0 011 1v6"
              className="text-white stroke-white"
            />
          </svg>
        </div>
      )}

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif text-base sm:text-lg font-bold tracking-tight leading-none ${titleClass}`}
        >
          OCEAN
        </span>
        <span
          className={`text-[9px] sm:text-[10px] uppercase font-semibold tracking-widest leading-tight mt-0.5 whitespace-nowrap ${subtitleClass}`}
        >
          {compact ? 'Kitchen & Interior' : <>Kitchen &amp; Interior<span className="hidden sm:inline"> • Dhayari</span></>}
        </span>
      </div>
    </Link>
  );
}

export default BrandLogo;
