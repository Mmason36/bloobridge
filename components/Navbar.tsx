import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { services } from '../lib/data/services';

const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 px-4 max-w-7xl mx-auto w-full relative z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center cursor-pointer">
        <img 
          src="/bloo-logo.webp" 
          alt="BlooBridge Marketing" 
          className="h-16 md:h-20 w-auto"
        />
      </Link>

      {/* Links - Desktop */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
        {/* Services Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <Link 
            to="/services" 
            className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-300 after:opacity-0 hover:after:opacity-100 after:transition-opacity pb-1 flex items-center gap-1"
          >
            Services
            <ChevronDown className="w-4 h-4" />
          </Link>
          
          {/* Dropdown Menu */}
          {isServicesOpen && (
            <div className="absolute top-full left-0 w-80 z-50">
              {/* Invisible bridge to prevent gap */}
              <div className="h-2 w-full"></div>
              <div className="bg-[#0a0a0a] border border-white/10 rounded-lg shadow-2xl overflow-hidden -mt-2">
                <div className="max-h-[600px] overflow-y-auto">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="block px-4 py-3 hover:bg-blue-500/10 hover:text-white transition-colors border-b border-white/5 last:border-b-0"
                    >
                      <div className="text-sm font-medium text-white">{service.title}</div>
                      <div className="text-xs text-gray-400 mt-1">{service.position}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        <Link to="/pricing" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-300 after:opacity-0 hover:after:opacity-100 after:transition-opacity pb-1">Pricing</Link>
        <Link to="/process" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-300 after:opacity-0 hover:after:opacity-100 after:transition-opacity pb-1">Process</Link>
        <Link to="/about" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-300 after:opacity-0 hover:after:opacity-100 after:transition-opacity pb-1">About</Link>
        <Link to="/contact" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-300 after:opacity-0 hover:after:opacity-100 after:transition-opacity pb-1">Contact</Link>
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex items-center gap-4">
        <button className="text-sm font-medium bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border border-blue-500/30 rounded-full px-5 py-2 transition-all">
          Free Consultation
        </button>
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