import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Target, Mail, Database, Phone, MessageSquare, Star, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';
import { services, getServicesByCategory } from '../lib/data/services';
import { pricingTiers, getServiceById } from '../lib/data/pricing';
import StrategyModal from '../components/StrategyModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const coreServices = getServicesByCategory('core').slice(0, 6);
  const processSteps = [
    { number: '01', title: 'Strategy & Audit', description: 'Review current systems and identify growth opportunities.' },
    { number: '02', title: 'System Architecture', description: 'Map workflows and design automation structure.' },
    { number: '03', title: 'Build & Integration', description: 'Configure CRM, install systems, connect tools.' },
    { number: '04', title: 'Launch & Calibration', description: 'Test workflows and verify everything works.' },
    { number: '05', title: 'Optimization & Expansion', description: 'Improve conversions and refine messaging.' },
    { number: '06', title: 'Scale & Leverage', description: 'Reactivate old leads and add new capabilities.' }
  ];

  const whatWeDo = [
    {
      icon: Target,
      title: 'Lead Capture',
      description: 'Funnels, forms, and chatbot systems that turn visitors into qualified leads.'
    },
    {
      icon: Mail,
      title: 'Follow-Up Automation',
      description: 'SMS and email sequences plus missed-call response that never let leads go cold.'
    },
    {
      icon: Database,
      title: 'Pipeline & Visibility',
      description: 'CRM stages, booking systems, and reporting that show you exactly what\'s happening.'
    }
  ];

  const proofMetrics = [
    { label: 'Faster response times', value: 'Under 30 seconds', example: true },
    { label: 'More booked estimates', value: '3-5x conversion', example: true },
    { label: 'Fewer missed leads', value: '85% recovery rate', example: true },
    { label: 'More reviews over time', value: '20+ in 90 days', example: true }
  ];

  const faqs = [
    {
      question: 'Do you run ads?',
      answer: 'We install growth infrastructure and optimize systems. If you want paid ads, we set up tracking and landing pages, but you fund the ad budget directly. Ad spend is not included in our pricing.'
    },
    {
      question: 'Why is there a setup fee?',
      answer: 'The setup fee covers system build, configuration, integrations, testing, and launch. It equals your monthly price and ensures everything is installed correctly before you go live.'
    },
    {
      question: 'How fast can we launch?',
      answer: 'Initial setup typically takes 2-4 weeks depending on system complexity. We provide a timeline during the Strategy & Audit phase based on your specific needs.'
    },
    {
      question: 'Can this work with my existing tools?',
      answer: 'Yes. We integrate with most CRMs, websites, and marketing tools. During setup, we connect everything to work together seamlessly.'
    },
    {
      question: 'Is this only for contractors?',
      answer: 'While built for contractors, our systems work for any local service business that needs lead generation, follow-up automation, and pipeline management.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      {/* Background Grid Pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/15 via-[#0a0a0a]/60 to-[#0a0a0a]" />
        
        {/* Blue Glow on Left Side */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[200px] md:-translate-x-[400px] w-[700px] h-[700px] bg-[#0066FF]/40 rounded-full blur-[150px] pointer-events-none" />
        
        {/* Blue Glow on Right Side */}
        <div className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-[200px] md:translate-x-[400px] w-[600px] h-[600px] bg-[#0066FF]/40 rounded-full blur-[150px] pointer-events-none" />
      </div>

      {/* Bridge Hero Image Background - Full Width */}
      <div className="fixed inset-0 w-full h-full z-0">
        <img 
          src="/bridge-hero.jpg" 
          alt="BlooBridge" 
          className="w-full h-full object-cover opacity-40"
          style={{ filter: 'brightness(0.5) saturate(1.3)', objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0066FF]/25 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 pt-24 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* 1. HERO SECTION */}
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Automation & <span className="text-[#0066FF]">Lead Generation</span> Systems for Service Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              We install growth infrastructure that captures leads, automates follow-up, and turns interest into booked jobs, without adding overhead.
            </p>
            <p className="text-sm text-gray-400 mb-8">
              Built for contractors • Proven for any local service business
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link 
                to="/services"
                className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                View Services
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 2. TRUST STRIP */}
          <div className="text-center mb-16 pb-8 border-b border-white/10">
            <p className="text-sm text-gray-400">
              <span className="text-gray-300 font-medium">Trusted by:</span>{' '}
              Roofing • HVAC • Fencing • Plumbing • Electrical • Concrete • and other service businesses
            </p>
          </div>

          {/* 3. WHAT WE DO */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              What We Install
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {whatWeDo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-6 hover:border-[#0066FF]/30 hover:shadow-lg hover:shadow-[#0066FF]/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#0066FF]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[#0066FF] hover:text-[#3399FF] font-semibold transition-colors"
              >
                Explore Services
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 4. FEATURED SERVICES */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              Core Systems
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {coreServices.map((service) => {
                const serviceData = services.find(s => s.id === service.id);
                if (!serviceData) return null;
                return (
                  <Link
                    key={service.id}
                    to={`/services/${serviceData.slug}`}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 hover:border-[#0066FF]/30 hover:shadow-lg hover:shadow-[#0066FF]/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="text-lg font-bold mb-2 text-white">{serviceData.title}</h3>
                    <p className="text-sm text-gray-300 mb-3 leading-relaxed">{serviceData.position}</p>
                    <ul className="space-y-1 mb-4">
                      {serviceData.includes.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                          <div className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-[#0066FF] text-xs font-semibold">
                      Learn more
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[#0066FF] hover:text-[#3399FF] font-semibold transition-colors"
              >
                View All Services
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 5. HOW IT WORKS */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              A Structured Process. Zero Guesswork.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center">
                      <span className="text-lg font-bold text-[#0066FF]">{step.number}</span>
                    </div>
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/process"
                className="inline-flex items-center gap-2 text-[#0066FF] hover:text-[#3399FF] font-semibold transition-colors"
              >
                See Full Process
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 6. PRICING PREVIEW */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              Structured Pricing. Built to Scale.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {pricingTiers.map((tier) => {
                const includedServices = tier.includes.slice(0, 3).map(id => getServiceById(id)).filter(Boolean);
                return (
                  <div
                    key={tier.id}
                    className={`relative bg-[#0a0a0a]/90 border rounded-lg p-5 ${tier.popular ? 'border-[#0066FF]/60' : 'border-white/10'}`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="px-3 py-1 rounded-full bg-white text-[#0066FF] text-xs font-bold border-2 border-[#0066FF]">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2 text-white">{tier.name}</h3>
                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-white">${tier.monthlyPrice}</span>
                        <span className="text-gray-400 text-sm">/month</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Setup fee equals monthly price</p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {includedServices.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                          <div className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
                          <span>{service?.name}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-2">
                      <Link
                        to="/pricing"
                        className="w-full px-4 py-2 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all text-center text-sm"
                      >
                        View Pricing
                      </Link>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full px-4 py-2 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors text-sm"
                      >
                        Book a Call
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-500 text-center">Ad spend not included.</p>
          </div>

          {/* 7. PROOF / RESULTS */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              What This System Improves
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {proofMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 text-center"
                >
                  <div className="text-2xl font-bold text-[#0066FF] mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-300 mb-1">{metric.label}</div>
                  {metric.example && (
                    <div className="text-xs text-gray-500">(example)</div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center">Case studies coming soon.</p>
          </div>

          {/* 8. FAQ */}
          <div className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
                  >
                    <span className="text-sm md:text-base font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-6 pt-2">
                      <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 9. FINAL CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Install the System?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We'll map the best plan for your business in a quick call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Modal */}
      <StrategyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
