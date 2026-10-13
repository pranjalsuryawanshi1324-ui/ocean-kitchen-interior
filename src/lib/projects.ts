/**
 * Centralized project catalog for Ocean Kitchen & Interior.
 *
 * IMPORTANT RULES:
 * 1. REAL PHOTOGRAPHS ONLY: Projects must represent authentic completed work.
 *    NEVER use AI-generated or stock interior photographs for projects.
 * 2. MULTIPLE PHOTOGRAPHS: Each project supports a primary `image` and an optional
 *    `additionalImages` array. When viewed in the lightbox, users can browse all
 *    photographs belonging to the project.
 * 3. EXTENSIBLE: To add a new project or extra photos, simply edit this file.
 *    No component modifications are required.
 */

export interface ProjectItem {
  id: string;
  title: string;
  /** Primary category name (e.g. 'Modular Kitchen', 'Bedroom Interior') */
  category: string;
  /** Backward-compatible alias for category */
  serviceCategory?: string;
  description: string;
  /** Primary showcase photograph (displayed on project cards) */
  image: string;
  /**
   * Optional additional real photographs of this completed project.
   * Browsable in the project lightbox viewer.
   */
  additionalImages?: string[];
  featured?: boolean;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

/**
 * Authentic completed project catalog for Ocean Kitchen & Interior.
 * All photographs are 100% real site and workshop images.
 */
export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-1',
    image: '/images/projects/project-1.jpg',
    additionalImages: [
      '/images/projects/about-banner.jpg',
    ],
    title: 'Modular Kitchen Execution',
    category: 'Modular Kitchen',
    serviceCategory: 'Modular Kitchen',
    description: 'Custom cabinetry, durable countertop alignment, and optimized storage.',
    featured: true,
    aspectRatio: 'landscape',
  },
  {
    id: 'project-2',
    image: '/images/projects/project-2.jpg',
    additionalImages: [],
    title: 'Living Room TV Unit & Partition',
    category: 'Hall / Living Room',
    serviceCategory: 'Hall / Living Room',
    description: 'Feature wall paneling, display shelving, and warm ambient lighting accents.',
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'project-3',
    image: '/images/projects/project-3.jpg',
    additionalImages: [],
    title: 'Master Bedroom Wardrobe & Storage',
    category: 'Bedroom Interior',
    serviceCategory: 'Bedroom Interior',
    description: 'Sliding wardrobe with integrated loft storage and calm finish.',
    featured: true,
    aspectRatio: 'landscape',
  },
  {
    id: 'project-4',
    image: '/images/projects/project-4.jpg',
    additionalImages: [
      '/images/projects/hero.jpg',
    ],
    title: 'Complete Home Interior Work',
    category: 'Complete Home Interior',
    serviceCategory: 'Complete Home Interior',
    description: 'Turnkey interior execution aligning living, kitchen, and private bedroom spaces.',
    featured: true,
    aspectRatio: 'landscape',
  },
  {
    id: 'project-5',
    image: '/images/projects/project-5.jpg',
    additionalImages: [],
    title: 'Bedroom Interior & Custom Panelling',
    category: 'Bedroom Interior',
    serviceCategory: 'Bedroom Interior',
    description: 'Custom bed unit with fluted arched wall paneling and integrated study desk.',
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'project-6',
    image: '/images/projects/project-6.jpg',
    additionalImages: [],
    title: 'False Ceiling & Architectural Lighting',
    category: 'POP & Ceiling Work',
    serviceCategory: 'POP & Ceiling Work',
    description: 'Clean geometric false ceiling drops with indirect cove illumination.',
    featured: true,
    aspectRatio: 'landscape',
  },
  {
    id: 'project-7',
    image: '/images/projects/project-7.jpg',
    additionalImages: [],
    title: 'Bathroom Vanity & Mirror Cabinet',
    category: 'Bathroom Interior',
    serviceCategory: 'Bathroom Interior',
    description: 'Moisture-resistant under-counter storage and illuminated mirror panel.',
    featured: false,
    aspectRatio: 'square',
  },
  {
    id: 'project-8',
    image: '/images/projects/project-8.jpg',
    additionalImages: [],
    title: 'Dining Storage & Display Cabinet',
    category: 'Furniture',
    serviceCategory: 'Furniture',
    description: 'Custom crockery console with clear glass shutters and warm interior spotlights.',
    featured: false,
    aspectRatio: 'landscape',
  },
  {
    id: 'project-9',
    image: '/images/projects/project-9.jpg',
    additionalImages: [],
    title: 'Mint Green Modular Kitchen & Island',
    category: 'Modular Kitchen',
    serviceCategory: 'Modular Kitchen',
    description: 'Contemporary kitchen featuring mint green lower cabinetry, black granite countertops, and an integrated breakfast bar island.',
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'project-10',
    image: '/images/projects/project-10.jpg',
    additionalImages: [],
    title: 'Luxury TV Feature Wall & Louver Partition',
    category: 'Hall / Living Room',
    serviceCategory: 'Hall / Living Room',
    description: 'Backlit Italian marble TV accent slab paired with golden fluted louvers and custom partition display shelving.',
    featured: true,
    aspectRatio: 'landscape',
  },
  {
    id: 'project-11',
    image: '/images/projects/project-11.jpg',
    additionalImages: [],
    title: 'Twin Bedroom with Arched Wall Niches',
    category: 'Bedroom Interior',
    serviceCategory: 'Bedroom Interior',
    description: 'Fluted wood wall panelling with twin illuminated arched alcoves featuring bespoke wall murals and matching headboards.',
    featured: true,
    aspectRatio: 'landscape',
  },
  {
    id: 'project-12',
    image: '/images/projects/project-12.jpg',
    additionalImages: [],
    title: 'Custom Dining Nook & Bench Seating',
    category: 'Furniture',
    serviceCategory: 'Furniture',
    description: 'Built-in banquette dining setup with custom upholstered bench seating, patterned wall backdrop, and glass-top table.',
    featured: false,
    aspectRatio: 'portrait',
  },
  {
    id: 'project-13',
    image: '/images/projects/project-13.jpg',
    additionalImages: [],
    title: 'Blush Acrylic Linear Modular Kitchen',
    category: 'Modular Kitchen',
    serviceCategory: 'Modular Kitchen',
    description: 'Streamlined parallel kitchen execution with high-gloss blush acrylic cabinetry, profile handles, and warm under-cabinet strip lighting.',
    featured: false,
    aspectRatio: 'portrait',
  },
  {
    id: 'project-14',
    image: '/images/projects/project-14.jpg',
    additionalImages: [],
    title: 'Dining Suite with Diamond-Mirror Console & Ceiling',
    category: 'Complete Home Interior',
    serviceCategory: 'Complete Home Interior',
    description: 'Complete dining space execution featuring geometric false ceiling drops, floral chandelier, and diamond-pattern mirror crockery console.',
    featured: false,
    aspectRatio: 'portrait',
  },
  {
    id: 'project-15',
    image: '/images/projects/project-15.jpg',
    additionalImages: [],
    title: 'Bespoke Mandir Unit with Laser-Cut Jali & Backlit Arch',
    category: 'Custom Interior Work',
    serviceCategory: 'Custom Interior Work',
    description: 'Sacred pooja mandir unit featuring folding jali fretwork doors, illuminated Sanskrit shloka arch, marble stepped altar, and brass bell detailing.',
    featured: true,
    aspectRatio: 'portrait',
  },
];

/**
 * Returns all active completed projects.
 */
export function getProjects(): ProjectItem[] {
  return PROJECTS;
}

/**
 * Returns projects highlighted for homepage showcase.
 */
export function getFeaturedProjects(): ProjectItem[] {
  return PROJECTS.filter((p) => p.featured);
}

/**
 * Find a project by its unique identifier.
 */
export function getProjectById(id: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.id === id);
}

/**
 * Returns all image paths belonging to a project:
 * primary `image` followed by all `additionalImages`.
 */
export function getProjectImages(project: ProjectItem): string[] {
  const images = [project.image];
  if (project.additionalImages && project.additionalImages.length > 0) {
    images.push(...project.additionalImages);
  }
  return images;
}
