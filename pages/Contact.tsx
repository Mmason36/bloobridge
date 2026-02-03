import React, { useState } from 'react';
import { ArrowUpRight, Phone, Mail } from 'lucide-react';
import StrategyModal from '../components/StrategyModal';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Background Grid Pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-[#0a0a0a]/50 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Get in <span className="text-[#0066FF]">Touch</span>
          </h1>
          <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Ready to grow your contractor business? Let's talk about how we can help you get more calls and booked estimates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <Phone className="w-8 h-8 text-[#0066FF] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400 mb-4">Speak directly with our team</p>
              <a href="tel:6163342672" className="text-[#0066FF] hover:text-[#3399FF] font-medium">
                (616) 334-2672
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <Mail className="w-8 h-8 text-[#0066FF] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400 mb-4">Send us a message anytime</p>
              <a href="mailto:info@bloobridge.com" className="text-[#0066FF] hover:text-[#3399FF] font-medium">
                info@bloobridge.com
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-6">
              Schedule a free consultation and let's discuss how we can help grow your contractor business.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-lg bg-[#0066FF] text-white font-semibold shadow-lg shadow-blue-900/40 hover:scale-105 hover:shadow-blue-700/50 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Schedule a Free Consultation
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <StrategyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

