'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BrandLogo from '@/components/ui/BrandLogo';
import { BUSINESS_INFO } from '@/lib/contact';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  const QUICK_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-[#171717] text-[#F7F3EC] border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-2 space-y-4">
            <BrandLogo variant="light" />
            <p className="text-sm text-[#E8DED0]/80 max-w-md leading-relaxed font-light">
              Complete interior solutions, furniture work, and custom woodwork in Dhayari, Pune.
              Bringing your ideas to life with 20+ years of dedicated, hardworking craftsmanship.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
              <span className="text-[#C46A3A] font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C46A3A] inline-block animate-pulse" />
                20+ Years of Craftsmanship • Dhayari, Pune
              </span>
              <span className="text-white/20 hidden sm:inline">•</span>
              <span className="text-[#E8DED0]/65 font-light">
                Owned by Sanjaykumar Suryawanshi
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F7F3EC] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#E8DED0]/80 hover:text-[#C46A3A] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Connect */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F7F3EC] mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3.5 text-sm font-light">
              <p className="text-[#E8DED0]/80">
                <span className="block text-xs uppercase tracking-wider text-[#E8DED0]/50 mb-0.5">Location</span>
                <span className="font-normal text-[#F7F3EC]">{BUSINESS_INFO.location.fullAddress}</span>
              </p>

              <div>
                <span className="block text-xs uppercase tracking-wider text-[#E8DED0]/50 mb-0.5">Phone / WhatsApp</span>
                <a
                  href={BUSINESS_INFO.phone.telLink}
                  className="font-normal text-[#F7F3EC] hover:text-[#C46A3A] transition-colors"
                >
                  {BUSINESS_INFO.phone.display}
                </a>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#F7F3EC] hover:text-[#25D366] transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#F7F3EC] hover:text-[#C46A3A] transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-pink-500" />
                  <span>Instagram: {BUSINESS_INFO.instagram.handle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8DED0]/60 gap-4">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p>Interior Design &amp; Furniture in Dhayari, Pune</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
