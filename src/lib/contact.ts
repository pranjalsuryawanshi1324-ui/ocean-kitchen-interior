/**
 * Centralized contact and business information for Ocean Kitchen & Interior.
 * All phone, location, and social media data must be sourced from here.
 */

export const BUSINESS_INFO = {
  name: 'Ocean Kitchen & Interior',
  shortName: 'Ocean Kitchen',
  tagline: 'Complete Interior Solutions & Furniture',
  location: {
    area: 'Dhayari',
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    fullAddress: 'Dhayari, Pune, Maharashtra',
  },
  phone: {
    display: '+91 97657 66765',
    raw: '9765766765',
    countryCode: '91',
    telLink: 'tel:+919765766765',
  },
  whatsapp: {
    number: '919765766765',
    display: '+91 97657 66765',
  },
  experience: {
    years: '20+',
    numericYears: 20,
    label: 'Years of Experience',
  },
  instagram: {
    handle: '@ocean_kitchen_and_interior',
    url: 'https://instagram.com/ocean_kitchen_and_interior',
  },
  description:
    'Ocean Kitchen & Interior provides complete interior solutions and furniture work in Dhayari, Pune. Backed by 20+ years of hardworking experience, we bring your ideas to life.',
  philosophy:
    'We believe every space is unique and should reflect the people who use it. With over 20 years of hands-on experience, we give 101% commitment to understand your ideas and fulfill your expectations through practical, beautiful spaces.',
} as const;
