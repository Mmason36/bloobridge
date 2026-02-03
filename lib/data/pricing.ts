export interface PricingService {
  id: number;
  name: string;
  monthlyPrice: number;
  category: 'core' | 'growth' | 'advanced';
  setupFee?: number; // Optional custom setup fee (defaults to monthlyPrice if not provided)
}

export const pricingServices: PricingService[] = [
  // CORE
  { id: 2, name: 'Missed Call Text-Back System', monthlyPrice: 49, category: 'core' },
  { id: 5, name: 'AI Website Chatbot', monthlyPrice: 249, category: 'core' },
  { id: 1, name: 'Lead Gen Funnels', monthlyPrice: 299, category: 'core' },
  { id: 3, name: 'Review Growth System', monthlyPrice: 299, category: 'core' },
  { id: 4, name: 'Contractor CRM Setup', monthlyPrice: 399, category: 'core' },
  { id: 6, name: 'Automated Follow-Up Sequences', monthlyPrice: 199, category: 'core' },
  
  // GROWTH
  { id: 7, name: 'Lead Reactivation Campaigns', monthlyPrice: 149, category: 'growth' },
  { id: 8, name: 'Appointment Booking System', monthlyPrice: 149, category: 'growth' },
  { id: 9, name: 'Social Media Lead Funnels', monthlyPrice: 399, category: 'growth' },
  { id: 10, name: 'Sales Automation System', monthlyPrice: 199, category: 'growth' },
  
  // ADVANCED
  { id: 11, name: 'AI Voice Assistant', monthlyPrice: 499, category: 'advanced' },
  { id: 12, name: 'Client Portal System', monthlyPrice: 249, category: 'advanced' },
  { id: 13, name: 'White-Labeled Contractor CRM', monthlyPrice: 599, category: 'advanced' }
];

export interface PricingTier {
  id: string;
  name: string;
  monthlyPrice: number;
  setupFee: number;
  description: string;
  growthInfrastructure: string; // 1-2 sentence framing as growth infrastructure
  outcomes: string[]; // 3 outcome bullets
  includes: number[]; // Service IDs
  popular?: boolean;
  bestFor?: string; // Optional "Best for" line for premium tiers
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'foundation',
    name: 'Foundation System',
    monthlyPrice: 399,
    setupFee: 399,
    description: 'Essential automation to never miss a lead and qualify 24/7.',
    growthInfrastructure: 'Your foundation for capturing and qualifying leads automatically, even when you\'re on a job site.',
    outcomes: [
      'Capture leads 24/7 (even after hours)',
      'Instant follow-up so leads don\'t go cold',
      'Systemized pipeline visibility'
    ],
    includes: [2, 5, 6], // Missed Call Text-Back, AI Website Chatbot, Automated Follow-Up Sequences
    popular: false
  },
  {
    id: 'growth',
    name: 'Growth System',
    monthlyPrice: 999,
    setupFee: 999,
    description: 'Complete lead generation and conversion system for scaling contractors.',
    growthInfrastructure: 'The complete growth infrastructure that turns website visitors into booked estimates and builds your reputation automatically.',
    outcomes: [
      'Turn website traffic into booked estimates',
      'Build 20+ 5-star reviews automatically',
      'Reduce no-shows with automated reminders'
    ],
    includes: [2, 5, 6, 1, 3, 8], // Foundation + Lead Gen Funnels, Review Growth System, Appointment Booking System
    popular: true
  },
  {
    id: 'scale',
    name: 'Scale System',
    monthlyPrice: 1799,
    setupFee: 1799,
    description: 'Enterprise-level automation for established contractors ready to dominate.',
    growthInfrastructure: 'Enterprise-grade growth infrastructure that handles high lead volume, reactivates old leads, and delivers premium client experiences.',
    outcomes: [
      'Handle high lead volume without adding staff',
      'Reactivate old leads for fast revenue',
      'Deliver premium client experience at scale'
    ],
    includes: [2, 5, 6, 1, 3, 8, 10, 7, 12, 13], // Growth + Sales Automation, Lead Reactivation, Client Portal, White-Labeled CRM
    popular: false,
    bestFor: 'Best for multi-crew operations or high lead volume.'
  }
];

export const getServiceById = (id: number): PricingService | undefined => {
  return pricingServices.find(service => service.id === id);
};

export const getServicesByCategory = (category: 'core' | 'growth' | 'advanced'): PricingService[] => {
  return pricingServices.filter(service => service.category === category);
};

