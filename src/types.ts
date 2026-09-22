export type ProjectCategory = 
  | 'All'
  | 'HVAC'
  | 'Plumbing'
  | 'Electrical'
  | 'Fire Protection'
  | 'Residential'
  | 'Commercial'
  | 'Industrial'
  | 'Shop Drawings'
  | 'As-Built'
  | 'Revit/BIM'
  | 'MEP Coordination'
  | 'Mechanical Room';

export interface ProjectImage {
  id: number;
  pageUrl: string;       // e.g. https://ibb.co/1fpsZgN3
  directUrl: string;     // e.g. https://i.ibb.co/nsV3rGyT/IMG-2440.jpg
  category: ProjectCategory;
  title: string;
  description: string;
  isReference?: boolean;
  fallbackUrl?: string;
}

export interface ProjectVideo {
  id: string;            // Video identifier
  streamableUrl?: string;// Legacy URL if applicable
  youtubeUrl?: string;   // Working direct YouTube URL
  youtubeId?: string;    // YouTube ID (e.g. zWaknq4wNeE)
  title: string;
  description: string;
  category: string;
  embedUrl: string;      // Embeddable player URL
  duration?: string;     // e.g. "04:18" or "HD 1080p"
  thumbnailUrl?: string; // High-res poster image
}

export interface ServiceItem {
  id: string;
  numberStr: string;
  title: string;
  description: string;
  bullets?: string[];
  ctaText: string;
  category: ProjectCategory;
  telegramMessage: string;
  iconName: string;
  jurisdictionNote?: string;
}

export interface PackageItem {
  id: string;
  numberStr: string;
  name: string;
  startingPrice: number;
  suitableFor: string[];
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  telegramMessage: string;
}

export interface TestimonialItem {
  id: string;
  slotNumber: string;
  clientName: string;
  companyOrProjectType: string;
  testimonialText: string;
  profileImage?: string;
  rating?: number;
  location?: string;
  disciplineTag?: string;
  projectScope?: string;
}

export interface BusinessConfig {
  businessName: string;
  tagline: string;
  telegramUsername: string;
  telegramUrl: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  addressPlaceholder: string;
  registrationPlaceholder: string;
  packages: PackageItem[];
  testimonials: TestimonialItem[];
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phoneOrWhatsApp: string;
  company: string;
  projectType: 'Residential' | 'Commercial' | 'Industrial' | 'Other';
  serviceRequired: string;
  projectLocation: string;
  approximateProjectSize: string;
  requiredDrawingType: string;
  projectDescription: string;
  deadline: string;
  preferredContactMethod: 'Telegram' | 'Email' | 'WhatsApp' | 'Phone';
  files: { name: string; size: number }[];
}
