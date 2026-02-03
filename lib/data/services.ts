export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  includes: string[];
  position: string;
  category: 'core' | 'growth' | 'advanced';
}

export const services: Service[] = [
  // Core Services
  {
    id: 1,
    title: 'Lead Generation Funnels',
    slug: 'lead-generation-funnels',
    description: 'Custom landing pages + high-converting estimate forms built for contractors.',
    includes: [
      'Custom funnel',
      'Mobile optimization',
      'Survey/estimate form',
      'CRM integration',
      'Tracking setup'
    ],
    position: 'Turn website visitors into booked estimates.',
    category: 'core'
  },
  {
    id: 2,
    title: 'Missed Call Text-Back System',
    slug: 'missed-call-text-back-system',
    description: 'Automatically texts every missed caller within seconds.',
    includes: [
      'Call tracking number',
      'Auto-response SMS',
      'Lead tagging',
      'Pipeline entry'
    ],
    position: 'Never lose another inbound call.',
    category: 'core'
  },
  {
    id: 3,
    title: 'Review Growth System',
    slug: 'review-growth-system',
    description: 'Automated review requests triggered at job completion.',
    includes: [
      'SMS + email review flows',
      'Google review link integration',
      'Follow-up reminders',
      'Reputation dashboard'
    ],
    position: 'Get 20+ 5-star reviews in 90 days.',
    category: 'core'
  },
  {
    id: 4,
    title: 'Contractor CRM Setup',
    slug: 'contractor-crm-setup',
    description: 'Full pipeline + automation buildout for your business.',
    includes: [
      'Custom pipeline stages',
      'Automated follow-ups',
      'Task reminders',
      'Estimate tracking',
      'Job status tracking'
    ],
    position: 'Your business, systemized.',
    category: 'core'
  },
  {
    id: 5,
    title: 'AI Website Chatbot',
    slug: 'ai-website-chatbot',
    description: '24/7 AI assistant that qualifies and books leads.',
    includes: [
      'AI chat install',
      'Lead qualification',
      'Appointment booking',
      'CRM sync'
    ],
    position: 'A 24/7 sales rep on your website.',
    category: 'core'
  },
  {
    id: 6,
    title: 'Automated Follow-Up Sequences',
    slug: 'automated-follow-up-sequences',
    description: 'Turn cold leads into booked jobs automatically.',
    includes: [
      'SMS sequences',
      'Email nurturing',
      'No-show reminders',
      'Re-engagement flows'
    ],
    position: 'Speed wins jobs.',
    category: 'core'
  },
  // Growth & Expansion Services
  {
    id: 7,
    title: 'Lead Re-Activation Campaigns',
    slug: 'lead-re-activation-campaigns',
    description: 'Text/email old leads and generate fast revenue.',
    includes: [
      'Lead database analysis',
      'Automated re-engagement',
      'Multi-channel campaigns',
      'Conversion tracking'
    ],
    position: 'Turn your old leads into new jobs.',
    category: 'growth'
  },
  {
    id: 8,
    title: 'Appointment Booking Systems',
    slug: 'appointment-booking-systems',
    description: 'Automated scheduling + confirmations + reminders.',
    includes: [
      'Online booking calendar',
      'Automated confirmations',
      'Reminder sequences',
      'Calendar sync'
    ],
    position: 'Reduce no-shows. Book faster.',
    category: 'growth'
  },
  {
    id: 9,
    title: 'Social Media Lead Funnels',
    slug: 'social-media-lead-funnels',
    description: 'Facebook/Instagram ad funnels connected directly to CRM.',
    includes: [
      'Ad campaign setup',
      'Landing page creation',
      'CRM integration',
      'Lead tracking'
    ],
    position: 'From ad click to booked estimate.',
    category: 'growth'
  },
  {
    id: 10,
    title: 'Sales Automation System',
    slug: 'sales-automation-system',
    description: 'Automated quote follow-ups + close sequences.',
    includes: [
      'Quote automation',
      'Follow-up sequences',
      'Close workflows',
      'Pipeline management'
    ],
    position: 'Close more estimates without chasing.',
    category: 'growth'
  },
  // Advanced / Premium Services
  {
    id: 11,
    title: 'AI Voice Assistant',
    slug: 'ai-voice-assistant',
    description: 'Answer every call instantly—even when your team can\'t.',
    includes: [
      'AI voice configuration customized to your services',
      'Script + qualification flow setup',
      'Lead capture integration with CRM',
      'Routing rules (sales rep, service type, location)',
      'After-hours and overflow logic',
      'Basic call logging visibility',
      'Launch testing + go-live checklist'
    ],
    position: 'Answer every call instantly—even when your team can\'t.',
    category: 'advanced'
  },
  {
    id: 12,
    title: 'Client Portal System',
    slug: 'client-portal-system',
    description: 'Give customers real-time visibility into their project—without endless calls and texts.',
    includes: [
      'Secure client login setup',
      'Job stage visibility integration',
      'Document + invoice upload structure',
      'Notification triggers for updates',
      'Basic permissions and role controls',
      'Mobile-friendly access',
      'Launch testing + go-live checklist'
    ],
    position: 'Give customers real-time visibility into their project—without endless calls and texts.',
    category: 'advanced'
  },
  {
    id: 13,
    title: 'White-Labeled Contractor CRM',
    slug: 'white-labeled-contractor-crm',
    description: 'Your own branded CRM system—built specifically for contractors.',
    includes: [
      'Custom contractor pipeline setup',
      'Brand configuration (logo + visual alignment)',
      'Automation + workflow installation',
      'Lead routing + stage logic',
      'User role + permission setup',
      'Basic reporting dashboard',
      'Launch testing + go-live checklist'
    ],
    position: 'Your own branded CRM system—built specifically for contractors.',
    category: 'advanced'
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: 'core' | 'growth' | 'advanced'): Service[] => {
  return services.filter(service => service.category === category);
};

export const categoryLabels = {
  core: 'Core Services',
  growth: 'Growth & Expansion',
  advanced: 'Advanced / Premium'
};

