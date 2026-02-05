import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();

  const pageLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Process', path: '/process' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Missed Call Text-Back System', path: '/services/missed-call-text-back' },
    { label: 'AI Website Chatbot', path: '/services/ai-website-chatbot' },
    { label: 'Lead Generation Funnels', path: '/services/lead-generation-funnels' },
    { label: 'Review Growth System', path: '/services/review-growth-system' },
    { label: 'Contractor CRM Setup', path: '/services/contractor-crm-setup' },
    { label: 'Automated Follow-Up Sequences', path: '/services/automated-follow-up-sequences' },
    { label: 'Lead Reactivation Campaigns', path: '/services/lead-reactivation-campaigns' },
    { label: 'Appointment Booking System', path: '/services/appointment-booking-system' },
    { label: 'Social Media Lead Funnels', path: '/services/social-media-lead-funnels' },
    { label: 'Sales Automation System', path: '/services/sales-automation-system' },
    { label: 'AI Voice Assistant', path: '/services/ai-voice-assistant' },
    { label: 'Client Portal System', path: '/services/client-portal-system' },
    { label: 'White-Labeled Contractor CRM', path: '/services/white-labeled-contractor-crm' },
  ];

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 mt-auto relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 relative z-20">
        {/* Top Section: Brand + Positioning */}
        <div className="mb-12 md:mb-16">
          <div className="mb-4 flex justify-center">
            <img 
              src="/bloo-logo.webp" 
              alt="Bloo Logo" 
              className="h-20 md:h-24 w-auto"
            />
          </div>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto text-center">
            Automation & lead generation systems built for contractors and service businesses.
          </p>
        </div>

        {/* Link Columns - Desktop: Grid, Mobile: Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Column A: Pages */}
          <div className="text-center">
            {/* Mobile Accordion Header */}
            <button
              onClick={() => toggleAccordion('pages')}
              className="md:hidden w-full flex items-center justify-between py-3 text-left border-b border-white/10"
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Pages</h3>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  openAccordion === 'pages' ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <h3 className="hidden md:block text-sm font-semibold text-white uppercase tracking-wide mb-2">
              Pages
            </h3>
            <div className="hidden md:block w-12 h-0.5 bg-[#0066FF] mx-auto mb-4"></div>
            <nav
              className={`${
                openAccordion === 'pages' ? 'block' : 'hidden md:block'
              }`}
            >
              <ul className="space-y-3">
                {pageLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-[#0066FF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column B: Services */}
          <div className="text-center">
            {/* Mobile Accordion Header */}
            <button
              onClick={() => toggleAccordion('services')}
              className="md:hidden w-full flex items-center justify-between py-3 text-left border-b border-white/10"
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Services</h3>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  openAccordion === 'services' ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <h3 className="hidden md:block text-sm font-semibold text-white uppercase tracking-wide mb-2">
              Services
            </h3>
            <div className="hidden md:block w-12 h-0.5 bg-[#0066FF] mx-auto mb-4"></div>
            <nav
              className={`${
                openAccordion === 'services' ? 'block' : 'hidden md:block'
              }`}
            >
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-[#0066FF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column C: Contact / Actions */}
          <div className="text-center">
            {/* Mobile Accordion Header */}
            <button
              onClick={() => toggleAccordion('contact')}
              className="md:hidden w-full flex items-center justify-between py-3 text-left border-b border-white/10"
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Contact</h3>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  openAccordion === 'contact' ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <h3 className="hidden md:block text-sm font-semibold text-white uppercase tracking-wide mb-2">
              Contact
            </h3>
            <div className="hidden md:block w-12 h-0.5 bg-[#0066FF] mx-auto mb-4"></div>
            <nav
              className={`${
                openAccordion === 'contact' ? 'block' : 'hidden md:block'
              }`}
            >
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-gray-400 hover:text-[#0066FF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded"
                  >
                    Book a Call
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-sm text-gray-400 hover:text-[#0066FF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded"
                  >
                    Request Custom Plan
                  </Link>
                </li>
                <li>
                  <a
                    href="tel:6163342672"
                    className="text-sm text-gray-400 hover:text-[#0066FF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded"
                  >
                    (616) 334-2672
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@bloobridge.com"
                    className="text-sm text-gray-400 hover:text-[#0066FF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded"
                  >
                    info@bloobridge.com
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 text-center md:text-left">
              © {currentYear} BlooBridge. All rights reserved.
            </p>
            {/* Privacy Policy and Terms links omitted as routes don't exist */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

