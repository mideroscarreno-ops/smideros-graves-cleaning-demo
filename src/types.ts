export type RouteId =
  | 'home'
  | 'airbnb-turnover'
  | 'commercial-cleaning'
  | 'deep-cleaning'
  | 'move-out-cleaning'
  | 'property-managers'
  | 'our-standards'
  | 'photo-checklist'
  | 'service-areas'
  | 'reviews'
  | 'faqs'
  | 'quote'
  | 'contact'
  | 'about'
  | 'privacy';

export type CustomerType =
  | 'Airbnb / Short-Term Rental Host'
  | 'Property Manager'
  | 'Commercial Business'
  | 'Homeowner'
  | 'Other';

export type ServiceOption =
  | 'Airbnb Turnover Cleaning'
  | 'Commercial Cleaning'
  | 'Deep Cleaning'
  | 'Move-In / Move-Out Cleaning'
  | 'Property Management Partnership'
  | 'Recurring Home Cleaning — Confirm Availability'
  | 'Other Cleaning Inquiry';

export interface ServiceProfile {
  id: RouteId;
  slug: string;
  number: string;
  category: string;
  headline: string;
  shortTitle: string;
  summary: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  quoteCustomerType: CustomerType;
  quoteServiceOption: ServiceOption;
  highlights: string[];
  scopeGroups: {
    title: string;
    items: string[];
  }[];
  importantNotes: string[];
}

export interface ChecklistRoom {
  id: string;
  roomName: string;
  areaCode: string;
  image: string;
  imageAlt: string;
  summaryNote: string;
  items: {
    label: string;
    detail: string;
  }[];
}

export interface FAQItem {
  id: string;
  category: 'Airbnb & STR' | 'Commercial' | 'Policies & Quotes' | 'Service Areas';
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string;
  sourceLabel: string;
}

export interface QuoteFormState {
  customerType: CustomerType | '';
  service: ServiceOption | '';
  // Airbnb
  cityOrZip: string;
  bedrooms: string;
  bathrooms: string;
  propertyCount: string;
  turnoverFrequency: string;
  preferredScheduling: string;
  // Commercial
  facilityType: string;
  approxSqFt: string;
  commercialFrequency: string;
  preferredHours: string;
  // Property manager
  generalPropertyTypes: string;
  serviceLocations: string;
  estimatedTurnoverVolume: string;
  additionalRequirements: string;
  // Homeowner
  homeSize: string;
  cleaningPriorities: string;
  // Contact
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  additionalDetails: string;
}
