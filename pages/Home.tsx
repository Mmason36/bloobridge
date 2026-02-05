import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Target, Mail, Database, Phone, MessageSquare, Star, TrendingUp, Clock, CheckCircle2, X, AlertCircle } from 'lucide-react';
import { services, getServicesByCategory } from '../lib/data/services';
import { pricingTiers, getServiceById } from '../lib/data/pricing';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const coreServices = getServicesByCategory('core').slice(0, 6);
  const processSteps = [
    { number: '01', title: 'Strategy & Audit', description: 'We review your current systems and identify where leads are slipping through.' },
    { number: '02', title: 'System Architecture', description: 'We map your workflows and design the automation structure.' },
    { number: '03', title: 'Build & Integration', description: 'We configure your CRM, install systems, and connect all your tools.' },
    { number: '04', title: 'Launch & Calibration', description: 'We test everything and verify it works before you go live.' },
    { number: '05', title: 'Optimization & Expansion', description: 'We improve conversions and refine messaging based on results.' },
    { number: '06', title: 'Scale & Leverage', description: 'We reactivate old leads and add new capabilities as you grow.' }
  ];

  const whatWeInstall = [
    {
      icon: Phone,
      title: 'Never Miss a Lead Again',
      description: 'Missed call text-back systems that automatically send SMS when calls go unanswered. Automated lead capture from website forms and chatbots.'
    },
    {
      icon: Mail,
      title: 'Follow-Up That Books Estimates',
      description: 'Automated SMS and email sequences for contractor lead follow-up. Reminder systems for estimates and appointments.'
    },
    {
      icon: Database,
      title: 'Know Exactly What\'s Happening',
      description: 'Pipeline tracking and CRM setup for service businesses. Visibility into lead status, job stages, and follow-up activity.'
    }
  ];

  const revenueLeaks = [
    'Missed calls go straight to voicemail',
    'Web forms sit unanswered for hours',
    'Follow-up happens too slowly',
    'No reminders for estimates sent',
    'Reviews never get requested',
    'Leads slip through the cracks'
  ];

  const beforeAfter = {
    before: [
      { label: 'Missed calls', icon: X },
      { label: 'Manual follow-up', icon: Clock },
      { label: 'Leads forgotten', icon: AlertCircle },
      { label: 'Few reviews', icon: Star }
    ],
    after: [
      { label: 'Instant text-back', icon: Phone },
      { label: 'Automated reminders', icon: Mail },
      { label: 'Organized pipeline', icon: Database },
      { label: 'Consistent review requests', icon: TrendingUp }
    ]
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
          alt="Contractor lead generation and automation systems" 
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
              Stop Missing Calls. Start Booking More Jobs <span className="text-[#0066FF]">Automatically.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              We install automated follow-up, missed-call text-back, pipeline tracking, and review systems that help contractors convert leads into booked jobs—without adding office staff.
            </p>
            <p className="text-sm text-gray-400 mb-8">
              Built for roofing, HVAC, fencing, plumbing, electrical, and concrete.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link 
                to="/contact#form"
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/services"
                className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                View Services
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stat Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              <div className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-4 text-center">
                <div className="text-xl md:text-2xl font-bold text-[#0066FF] mb-1">Faster response times</div>
                <div className="text-xs text-gray-400">Automated lead follow-up</div>
              </div>
              <div className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-4 text-center">
                <div className="text-xl md:text-2xl font-bold text-[#0066FF] mb-1">More leads contacted</div>
                <div className="text-xs text-gray-400">Consistent follow-up</div>
              </div>
              <div className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-4 text-center">
                <div className="text-xl md:text-2xl font-bold text-[#0066FF] mb-1">Consistent follow-up</div>
                <div className="text-xs text-gray-400">Automated sequences</div>
              </div>
              <div className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-4 text-center">
                <div className="text-xl md:text-2xl font-bold text-[#0066FF] mb-1">Review requests sent</div>
                <div className="text-xs text-gray-400">Automatically</div>
              </div>
            </div>
          </div>

          {/* 2. REVENUE LEAK SECTION */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              Where Contractors Lose Money (Without Realizing It)
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {revenueLeaks.map((leak, index) => (
                  <div key={index} className="flex items-start gap-3 bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-4">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">{leak}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-base text-gray-400 mb-4">
                These are response and follow-up problems—not branding problems.
              </p>
              <p className="text-center text-lg text-gray-300 font-medium">
                We install systems that close these leaks in days—not months.
              </p>
            </div>
          </div>

          {/* 3. WHAT WE INSTALL */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              What We Install
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {whatWeInstall.map((item, index) => {
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

          {/* 4. CORE SYSTEMS */}
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
                      {serviceData.includes.slice(0, 3).map((item, idx) => (
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

          {/* 5. PROCESS SECTION */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
              Structured Pricing. Built to Scale.
            </h2>
            <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
              One-time install + monthly optimization. Cancel anytime.
            </p>
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
                      <Link
                        to="/contact#form"
                        className="w-full px-4 py-2 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors text-sm text-center block"
                      >
                        Book a Call
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <CheckCircle2 className="w-5 h-5 text-[#0066FF] mx-auto mb-2" />
                  <p className="text-xs text-gray-400">No long-term contracts</p>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-5 h-5 text-[#0066FF] mx-auto mb-2" />
                  <p className="text-xs text-gray-400">You own your data</p>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-5 h-5 text-[#0066FF] mx-auto mb-2" />
                  <p className="text-xs text-gray-400">No revenue share</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center">Ad spend not included.</p>
          </div>

          {/* 7. BEFORE/AFTER SECTION */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              Before vs After
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Before */}
              <div className="bg-[#0a0a0a]/90 border border-red-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-red-400">Before</h3>
                <ul className="space-y-3">
                  {beforeAfter.before.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{item.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* After */}
              <div className="bg-[#0a0a0a]/90 border border-[#0066FF]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#0066FF]">After</h3>
                <ul className="space-y-3">
                  {beforeAfter.after.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
                        <span className="text-sm text-gray-300">{item.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* 8. IS THIS FOR YOU */}
          <div className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
              Is This For You?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* This is for you if */}
              <div className="bg-[#0a0a0a]/90 border border-[#0066FF]/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#0066FF]">This is for you if…</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">You're missing calls because you're on job sites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">Leads go cold while you're busy with jobs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">You want to systemize follow-up without hiring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">You need better pipeline visibility</span>
                  </li>
                </ul>
              </div>
              {/* Not ideal if */}
              <div className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-400">Not ideal if…</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-400">You're not ready to change your current process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-400">You prefer manual follow-up and don't want automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-400">You're looking for a marketing agency to run ads</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 9. SEO PARAGRAPH */}
          <div className="mb-20 max-w-3xl mx-auto">
            <div className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-8">
              <p className="text-base text-gray-300 leading-relaxed">
                We provide lead generation and automation for contractors across roofing, HVAC, fencing, plumbing, electrical, and concrete trades. Our service business automation includes missed call text-back systems that automatically respond when calls go unanswered, contractor lead follow-up sequences via SMS and email, pipeline tracking through CRM setup, and review request systems that send automated requests after job completion. These systems help contractors improve response times, maintain consistent follow-up, and convert more leads into booked jobs without adding office staff. If you're a contractor looking to tighten up lead handling and reduce missed opportunities, we install and configure these systems for your business.
              </p>
            </div>
          </div>

          {/* 10. FAQ */}
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

          {/* 11. FINAL CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Tighten Up Your Lead Handling?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We'll map your current lead flow and show where automation fits in a quick call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact#form"
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                View Services
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
