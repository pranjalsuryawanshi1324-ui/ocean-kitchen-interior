import { BUSINESS_INFO } from './contact';

/**
 * Standard pre-filled WhatsApp messages for different enquiries.
 */
export const WHATSAPP_MESSAGES = {
  general:
    'Hi, I am interested in interior work. I would like to discuss my requirements with Ocean Kitchen & Interior.',
  discussSpace:
    'Hi, I would like to discuss my space requirements with Ocean Kitchen & Interior.',
  completeHome:
    'Hi, I am interested in complete home interior work. I would like to discuss my requirements with Ocean Kitchen & Interior.',
  kitchen:
    'Hi, I am interested in modular kitchen work. I would like to discuss my requirements with Ocean Kitchen & Interior.',
  bedroom:
    'Hi, I am interested in bedroom interior work. I would like to discuss my requirements with Ocean Kitchen & Interior.',
  livingRoom:
    'Hi, I am interested in hall / living room interior work. I would like to discuss my requirements with Ocean Kitchen & Interior.',
  bathroom:
    'Hi, I am interested in bathroom interior work. I would like to discuss my requirements with Ocean Kitchen & Interior.',
  furniture:
    'Hi, I am interested in furniture work. I would like to discuss my requirements with Ocean Kitchen & Interior.',
  popCeiling:
    'Hi, I am interested in POP & ceiling work. I would like to discuss my requirements with Ocean Kitchen & Interior.',
  customInterior:
    'Hi, I am interested in custom interior work. I would like to discuss my requirements with Ocean Kitchen & Interior.',
} as const;

/**
 * Generates a direct WhatsApp URL with proper URL encoding.
 * @param message Optional message to pre-fill. Defaults to general enquiry.
 * @returns Direct wa.me URL
 */
export function getWhatsAppUrl(message?: string): string {
  const text = message?.trim() || WHATSAPP_MESSAGES.general;
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${BUSINESS_INFO.whatsapp.number}?text=${encoded}`;
}
