import { WHATSAPP_MESSAGES, getWhatsAppUrl } from './whatsapp';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  /**
   * Distinction between real project photographs and realistic AI service visuals.
   * AI images are strictly restricted to the Services section only.
   */
  imageType?: 'real' | 'ai';
  whatsAppMessage: string;
  highlights: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'complete-home',
    slug: 'complete-home-interior',
    title: 'Complete Home Interior',
    shortDescription:
      'End-to-end interior execution for entire homes, tailored to your lifestyle and practical daily needs.',
    fullDescription:
      'Transform your entire residence into a cohesive, comfortable home. From space planning and woodwork to ceilings, finishes, and detailing, we bring together your ideas with 20+ years of craftsmanship.',
    image: '/images/services/complete-home.jpg',
    imageType: 'ai',
    whatsAppMessage: WHATSAPP_MESSAGES.completeHome,
    highlights: [
      'Comprehensive space planning',
      'End-to-end project coordination',
      'Custom woodwork & storage solutions',
      'Quality materials & hardware',
    ],
  },
  {
    id: 'modular-kitchen',
    slug: 'modular-kitchen',
    title: 'Modular Kitchen',
    shortDescription:
      'Ergonomic, durable, and customized kitchen layouts optimized for everyday cooking and storage.',
    fullDescription:
      'The kitchen is the heart of every home. We design and build modular kitchens tailored to your cooking habits, storage requirements, and spatial layout, using reliable hardware and moisture-resistant materials.',
    image: '/images/services/modular-kitchen.jpg',
    imageType: 'ai',
    whatsAppMessage: WHATSAPP_MESSAGES.kitchen,
    highlights: [
      'L-shaped, U-shaped, parallel & straight layouts',
      'Optimized pull-outs, baskets & corner storage',
      'Durable, moisture-resistant cabinetry',
      'Seamless countertop & chimney alignment',
    ],
  },
  {
    id: 'bedroom',
    slug: 'bedroom-interior',
    title: 'Bedroom Interior',
    shortDescription:
      'Peaceful, organized bedroom spaces with custom wardrobes, bed units, and ambient lighting.',
    fullDescription:
      'A sanctuary designed for rest and organized storage. We build customized wardrobes (sliding or hinged), master bed backdrops, dressers, and study nooks according to your room dimensions and personal taste.',
    image: '/images/services/bedroom-interior.jpg',
    imageType: 'ai',
    whatsAppMessage: WHATSAPP_MESSAGES.bedroom,
    highlights: [
      'Custom wardrobes & loft storage',
      'Integrated bed designs & headboards',
      'Dresser & dressing unit solutions',
      'Calm, uncluttered spatial planning',
    ],
  },
  {
    id: 'living-room',
    slug: 'hall-living-room',
    title: 'Hall / Living Room',
    shortDescription:
      'Welcoming living spaces featuring elegant TV units, partition accents, and display cabinets.',
    fullDescription:
      'Your living room is where your family gathers and guests are received. We craft bespoke TV console units, elegant foyer partitions, display storage, and seating backdrops that balance warmth and sophistication.',
    image: '/images/services/living-room.jpg',
    imageType: 'ai',
    whatsAppMessage: WHATSAPP_MESSAGES.livingRoom,
    highlights: [
      'Feature TV wall units & consoles',
      'Decorative room partitions & jali work',
      'Shoe cabinets & entryway consoles',
      'Warm ambient lighting integration',
    ],
  },
  {
    id: 'bathroom',
    slug: 'bathroom-interior',
    title: 'Bathroom Interior',
    shortDescription:
      'Practical vanity counters, mirror cabinets, and moisture-resistant storage for modern bathrooms.',
    fullDescription:
      'Functional bathroom interiors crafted with water-resistant materials, smart under-sink vanities, LED mirror cabinets, and clean storage to keep daily essentials neat and accessible.',
    image: '/images/services/bathroom-interior.jpg',
    imageType: 'ai',
    whatsAppMessage: WHATSAPP_MESSAGES.bathroom,
    highlights: [
      'Waterproof vanity units & cabinets',
      'Smart mirror storage & LED backlighting',
      'Compact, efficient space utilization',
      'Clean hardware and fitting alignment',
    ],
  },
  {
    id: 'furniture',
    slug: 'furniture',
    title: 'Furniture',
    shortDescription:
      'Handcrafted, durable custom furniture built on-site or customized to fit your exact dimensions.',
    fullDescription:
      'Custom-built furniture designed specifically for your space. We craft sturdy dining tables, sofa frameworks, accent chairs, study desks, and crockery units built to last for decades.',
    image: '/images/services/furniture.jpg',
    imageType: 'ai',
    whatsAppMessage: WHATSAPP_MESSAGES.furniture,
    highlights: [
      'Solid joinery & durable construction',
      'Bespoke dining tables & study units',
      'Tailored dimensions for exact fit',
      'High-grade laminate & veneer finishes',
    ],
  },
  {
    id: 'pop-ceiling',
    slug: 'pop-ceiling-work',
    title: 'POP & Ceiling Work',
    shortDescription:
      'Clean false ceiling designs, cove lighting channels, and seamless plaster finishes.',
    fullDescription:
      'Enhance the volume and ambiance of any room with precision false ceilings. We execute subtle perimeter drops, modern cove lighting profiles, and durable plaster of Paris (POP) finishes without overcomplicating the aesthetic.',
    image: '/images/services/pop-ceiling.jpg',
    imageType: 'ai',
    whatsAppMessage: WHATSAPP_MESSAGES.popCeiling,
    highlights: [
      'Modern minimal false ceiling designs',
      'Concealed ambient & cove lighting',
      'Clean electrical conduit integration',
      'Smooth, durable surface finishing',
    ],
  },
  {
    id: 'custom-interior',
    slug: 'custom-interior-work',
    title: 'Custom Interior Work',
    shortDescription:
      'Specialized carpentry, temple/mandir units, wall paneling, and unique architectural requirements.',
    fullDescription:
      'Every customer has distinct ideas that do not fit into rigid packages. From dedicated pooja room units and fluted wall paneling to awkward nook conversions, we customize our carpentry and finishes to your exact vision.',
    image: '/images/services/custom-interior.jpg',
    imageType: 'ai',
    whatsAppMessage: WHATSAPP_MESSAGES.customInterior,
    highlights: [
      'Custom pooja/mandir units with intricate detailing',
      'Fluted paneling & accent walls',
      'Under-stairway & architectural nook storage',
      '101% commitment to custom specifications',
    ],
  },
];

export function getServiceById(id: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.id === id);
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceWhatsAppUrl(service: ServiceItem): string {
  return getWhatsAppUrl(service.whatsAppMessage);
}
