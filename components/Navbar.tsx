import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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

  return (
    <nav className="flex items-center justify-between py-6 px-4 max-w-7xl mx-auto w-full relative z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 cursor-pointer">
        <img 
          src="/bloo-logo.webp" 
          alt="Bloo Logo" 
          className="h-14 md:h-16 w-auto"
        />
      </Link>

      {/* Links - Desktop */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        {/* Services Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button className="flex items-center gap-1 hover:text-[#0066FF] transition-colors">
            Services
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`} />
          </button>
          {isServicesOpen && (
            <div className="absolute top-full left-0 pt-1 w-64 z-50">
              <div className="bg-[#0a0a0a] border border-white/10 rounded-lg shadow-xl py-2">
                <Link
                  to="/services"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-[#0066FF] transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  All Services
                </Link>
                <div className="border-t border-white/10 my-1"></div>
                <div className="max-h-96 overflow-y-auto">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-gray-400 hover:bg-white/5 hover:text-[#0066FF] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <Link to="/pricing" className="hover:text-[#0066FF] transition-colors">Pricing</Link>
        <Link to="/process" className="hover:text-[#0066FF] transition-colors">Process</Link>
        <Link to="/about" className="hover:text-[#0066FF] transition-colors">About</Link>
        <Link to="/contact" className="hover:text-[#0066FF] transition-colors">Contact</Link>
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex items-center">
        <Link
          to="/contact#form"
          className="text-sm font-medium bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-lg px-5 py-2 transition-all"
        >
          Book a Call
        </Link>
      </div>

      {/* Mobile Menu Icon (Placeholder) */}
      <div className="md:hidden text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;