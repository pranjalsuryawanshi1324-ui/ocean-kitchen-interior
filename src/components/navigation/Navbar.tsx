'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from '@/components/ui/BrandLogo';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { BUSINESS_INFO } from '@/lib/contact';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#171717]/95 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)]'
          : 'bg-[#171717] border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Official Brand Logo */}
          <div className="flex-shrink-0">
            <BrandLogo variant="light" compact={false} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-[#C46A3A] font-semibold bg-white/5'
                      : 'text-[#F7F3EC]/90 hover:text-[#C46A3A] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[#C46A3A] hover:bg-[#A8552B] text-white button-elevation transition-all duration-200"
            >
              <span>WhatsApp Us</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Right Action + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Ocean Kitchen"
              className="p-2.5 rounded-full bg-[#C46A3A] text-white hover:bg-[#A8552B] transition-colors shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.761.854 2.796.854 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.767-5.768-5.767zm7.502 5.766c-.001 4.14-3.364 7.503-7.502 7.503-1.312 0-2.61-.345-3.754-.997l-4.277 1.121 1.143-4.162c-.722-1.205-1.103-2.593-1.103-4.005.001-4.14 3.364-7.503 7.502-7.503 4.141 0 7.502 3.363 7.502 7.503zm-11.458 9.948l.261.155c1.1.652 2.375 1.002 3.695 1.002 4.041 0 7.329-3.287 7.33-7.328 0-1.958-.763-3.8-2.148-5.185s-3.228-2.149-5.187-2.149c-4.042 0-7.33 3.287-7.33 7.329 0 1.371.385 2.708 1.114 3.868l.17.272-.734 2.678 2.829-.742z" />
              </svg>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl text-[#F7F3EC] hover:text-[#C46A3A] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#C46A3A]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171717] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-xl text-base tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#C46A3A] bg-white/5 font-semibold'
                      : 'text-[#F7F3EC] hover:text-[#C46A3A] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 mt-2 border-t border-white/10 space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-center text-sm font-semibold bg-[#C46A3A] hover:bg-[#A8552B] text-white shadow-md transition-colors"
            >
              <span>WhatsApp Us: {BUSINESS_INFO.phone.display}</span>
            </a>

            <a
              href={BUSINESS_INFO.phone.telLink}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-center text-sm font-medium bg-white/10 hover:bg-white/15 text-[#F7F3EC] transition-colors"
            >
              <span>Direct Call</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
