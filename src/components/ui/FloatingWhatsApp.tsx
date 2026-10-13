'use client';

import React from 'react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ocean Kitchen & Interior on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white pl-3.5 pr-4 py-3 rounded-full shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 active:scale-95"
      >
        {/* WhatsApp Icon */}
        <span className="w-5 h-5 flex-shrink-0" aria-hidden="true">
          <svg
            className="w-full h-full fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.761.854 2.796.854 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.767-5.768-5.767zm7.502 5.766c-.001 4.14-3.364 7.503-7.502 7.503-1.312 0-2.61-.345-3.754-.997l-4.277 1.121 1.143-4.162c-.722-1.205-1.103-2.593-1.103-4.005.001-4.14 3.364-7.503 7.502-7.503 4.141 0 7.502 3.363 7.502 7.503zm-11.458 9.948l.261.155c1.1.652 2.375 1.002 3.695 1.002 4.041 0 7.329-3.287 7.33-7.328 0-1.958-.763-3.8-2.148-5.185s-3.228-2.149-5.187-2.149c-4.042 0-7.33 3.287-7.33 7.329 0 1.371.385 2.708 1.114 3.868l.17.272-.734 2.678 2.829-.742z" />
          </svg>
        </span>

        {/* Text visible on screens */}
        <span className="text-xs sm:text-sm font-semibold tracking-wide">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
}

export default FloatingWhatsApp;
