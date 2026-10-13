/**
 * Centralized photo gallery catalog for Ocean Kitchen & Interior.
 *
 * IMPORTANT RULES:
 * 1. REAL PHOTOGRAPHS ONLY: Gallery contains strictly genuine photographs
 *    of completed customer interiors, workshop carpentry, and installations.
 *    AI-generated images must NEVER appear in the Gallery.
 * 2. EASY EXPANSION: Adding a new real photograph only requires appending
 *    an entry to `GALLERY_ITEMS`.
 */

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

/**
 * Real project and site installation photographs.
 * Zero AI or stock images.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    image: '/images/projects/project-1.jpg',
    title: 'Modular Kitchen Execution',
    category: 'Modular Kitchen',
    description: 'Custom cabinetry, durable countertop alignment, and optimized storage.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-2',
    image: '/images/projects/project-2.jpg',
    title: 'Living Room TV Unit & Partition',
    category: 'Hall / Living Room',
    description: 'Feature wall paneling, display shelving, and warm ambient lighting accents.',
    aspectRatio: 'portrait',
  },
  {
    id: 'gallery-3',
    image: '/images/projects/project-3.jpg',
    title: 'Master Bedroom Wardrobe & Storage',
    category: 'Bedroom Interior',
    description: 'Sliding wardrobe with integrated loft storage and calm finish.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-4',
    image: '/images/projects/project-4.jpg',
    title: 'Turnkey Living & Dining Space',
    category: 'Complete Home Interior',
    description: 'Turnkey interior execution aligning living, kitchen, and private bedroom spaces.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-5',
    image: '/images/projects/project-5.jpg',
    title: 'Bedroom Interior & Custom Panelling',
    category: 'Bedroom Interior',
    description: 'Custom bed unit with fluted arched wall paneling and integrated study desk.',
    aspectRatio: 'portrait',
  },
  {
    id: 'gallery-6',
    image: '/images/projects/project-6.jpg',
    title: 'False Ceiling & Architectural Lighting',
    category: 'POP & Ceiling Work',
    description: 'Clean geometric false ceiling drops with indirect cove illumination.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-7',
    image: '/images/projects/project-7.jpg',
    title: 'Bathroom Vanity & Mirror Cabinet',
    category: 'Bathroom Interior',
    description: 'Moisture-resistant under-counter storage and illuminated mirror panel.',
    aspectRatio: 'square',
  },
  {
    id: 'gallery-8',
    image: '/images/projects/project-8.jpg',
    title: 'Dining Storage & Display Cabinet',
    category: 'Furniture',
    description: 'Custom crockery console with clear glass shutters and warm interior spotlights.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-9',
    image: '/images/projects/about-banner.jpg',
    title: 'Modern Modular Kitchen Fitting',
    category: 'Modular Kitchen',
    description: 'Ergonomic pull-out cabinetry and overhead finish in Dhayari residential flat.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-10',
    image: '/images/projects/hero.jpg',
    title: 'Completed Residence Living & Kitchen Layout',
    category: 'Complete Home Interior',
    description: 'Spacious residential layout with aligned false ceiling, TV console, and open kitchen.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-11',
    image: '/images/projects/project-9.jpg',
    title: 'Mint Green Modular Kitchen & Island',
    category: 'Modular Kitchen',
    description: 'Contemporary kitchen featuring mint green lower cabinetry, black granite countertops, and an integrated breakfast bar island.',
    aspectRatio: 'portrait',
  },
  {
    id: 'gallery-12',
    image: '/images/projects/project-10.jpg',
    title: 'Luxury TV Feature Wall & Louver Partition',
    category: 'Hall / Living Room',
    description: 'Backlit Italian marble TV accent slab paired with golden fluted louvers and custom partition display shelving.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-13',
    image: '/images/projects/project-11.jpg',
    title: 'Twin Bedroom with Arched Wall Niches',
    category: 'Bedroom Interior',
    description: 'Fluted wood wall panelling with twin illuminated arched alcoves featuring bespoke wall murals and matching headboards.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-14',
    image: '/images/projects/project-12.jpg',
    title: 'Custom Dining Nook & Bench Seating',
    category: 'Furniture',
    description: 'Built-in banquette dining setup with custom upholstered bench seating, patterned wall backdrop, and glass-top table.',
    aspectRatio: 'portrait',
  },
  {
    id: 'gallery-15',
    image: '/images/projects/project-13.jpg',
    title: 'Blush Acrylic Linear Modular Kitchen',
    category: 'Modular Kitchen',
    description: 'Streamlined parallel kitchen execution with high-gloss blush acrylic cabinetry, profile handles, and warm under-cabinet strip lighting.',
    aspectRatio: 'portrait',
  },
  {
    id: 'gallery-16',
    image: '/images/projects/project-14.jpg',
    title: 'Dining Suite with Diamond-Mirror Console & Ceiling',
    category: 'Complete Home Interior',
    description: 'Complete dining space execution featuring geometric false ceiling drops, floral chandelier, and diamond-pattern mirror crockery console.',
    aspectRatio: 'portrait',
  },
  {
    id: 'gallery-17',
    image: '/images/projects/project-15.jpg',
    title: 'Bespoke Mandir Unit with Laser-Cut Jali & Backlit Arch',
    category: 'Custom Interior Work',
    description: 'Sacred pooja mandir unit featuring folding jali fretwork doors, illuminated Sanskrit shloka arch, marble stepped altar, and brass bell detailing.',
    aspectRatio: 'portrait',
  },
];

/**
 * Returns all active real gallery photographs.
 */
export function getGalleryItems(): GalleryItem[] {
  return GALLERY_ITEMS;
}

/**
 * Returns unique gallery category names with 'All' as first entry.
 */
export function getGalleryCategories(): string[] {
  const unique = Array.from(new Set(GALLERY_ITEMS.map((item) => item.category)));
  return ['All', ...unique];
}
