import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { BUSINESS_INFO } from '@/lib/contact';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${BUSINESS_INFO.name} | Interior Design & Furniture | Dhayari, Pune`,
  description:
    'Ocean Kitchen & Interior provides complete interior solutions, modular kitchens, wardrobes, living room units, and custom furniture in Dhayari, Pune with 20+ years of experience.',
  keywords: [
    'Ocean Kitchen & Interior',
    'Interior Designer Dhayari Pune',
    'Modular Kitchen Pune',
    'Home Interior Dhayari',
    'Furniture Work Pune',
    'Wardrobe Design Pune',
    'POP False Ceiling Dhayari',
    'Turnkey Interior Pune',
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  openGraph: {
    title: `${BUSINESS_INFO.name} | Interior Design & Furniture | Dhayari, Pune`,
    description:
      'Complete home interior solutions, modular kitchens, and custom woodwork backed by 20+ years of experience in Dhayari, Pune.',
    url: 'https://oceankitcheninterior.com',
    siteName: BUSINESS_INFO.name,
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F3EC] text-[#171717] selection:bg-[#C46A3A] selection:text-white">
        <Navbar />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
