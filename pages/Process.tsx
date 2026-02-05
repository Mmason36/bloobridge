import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown, Clock, FileText, MessageSquare, CheckCircle2, TrendingUp, Headphones, ChevronDown } from 'lucide-react';

export default function Process() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToSteps = () => {
    const element = document.getElementById('process-steps');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const steps = [
    {
      number: '01',
      title: 'Strategy & Audit',
      bullets: [
        'Review current lead sources and conversions',
        'Identify follow-up gaps and missed opportunities',
        'Assess website/contact flow and tracking'
      ],
      deliverable: 'A documented growth blueprint'
    },
    {
      number: '02',
      title: 'System Architecture',
      bullets: [
        'Map your CRM pipeline stages and routing rules',
        'Design automation workflows and timing',
        'Plan funnel structure and lead capture points'
      ],
      deliverable: 'System map + workflow plan'
    },
    {
      number: '03',
      title: 'Build & Integration',
      bullets: [
        'Configure CRM, automations, and lead routing',
        'Install chatbot and missed-call response logic',
        'Connect forms, booking, and notifications'
      ],
      deliverable: 'Installed, integrated system'
    },
    {
      number: '04',
      title: 'Launch & Calibration',
      bullets: [
        'Run test leads through every workflow',
        'Verify routing, notifications, and response timing',
        'Confirm tracking + reporting baseline'
      ],
      deliverable: 'Go-live checklist + verified launch'
    },
    {
      number: '05',
      title: 'Optimization & Expansion',
      bullets: [
        'Improve conversions and reduce lead drop-off',
        'Refine follow-up messaging and timing',
        'Add improvements based on real lead behavior'
      ],
      deliverable: 'Monthly system improvements'
    },
    {
      number: '06',
      title: 'Scale & Leverage',
      bullets: [
        'Reactivate old leads and win back missed deals',
        'Add new funnels/services/locations as you grow',
        'Introduce advanced automation once stable'
      ],
      deliverable: 'Scale plan + growth extensions'
    }
  ];

  const expectations = [
    { icon: Clock, text: 'Clear timelines' },
    { icon: FileText, text: 'Defined deliverables' },
    { icon: MessageSquare, text: 'Transparent communication' },
    { icon: CheckCircle2, text: 'System testing before launch' },
    { icon: TrendingUp, text: 'Ongoing optimization' },
    { icon: Headphones, text: 'Support and training' }
  ];

  const faqs = [
    {
      question: 'How long does setup take?',
      answer: 'Initial setup typically takes 2-4 weeks, depending on system complexity. We provide a timeline during the Strategy & Audit phase based on your specific needs.'
    },
    {
      question: 'Do you need access to my current tools?',
      answer: 'Yes, we need access to your CRM, website, and any existing marketing tools to integrate systems properly. All access is secure and temporary—we only need it during setup and optimization phases.'
    },
    {
      question: 'Do you run ads?',
      answer: 'We focus on building and optimizing your marketing infrastructure (funnels, automation, CRM). If you want paid ads, we can set up the tracking and landing pages, but you fund the ad budget directly. Ad spend is not included in our pricing.'
    },
    {
      question: 'What happens after launch?',
      answer: 'After launch, we monitor performance, optimize workflows, and make improvements based on real lead behavior. You get monthly system improvements and ongoing support to ensure everything keeps performing.'
    },
    {
      question: 'Can this work for non-contractors?',
      answer: 'Yes. While built for contractors, our systems work for any local service business that needs lead generation, follow-up automation, and pipeline management. The core infrastructure adapts to your industry.'
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
      </div>

      <div className="relative z-10 pt-24 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              A Structured Process. <span className="text-[#0066FF]">Zero Guesswork.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              We don't "try marketing." We install and optimize growth systems with clear phases, defined outcomes, and measurable performance.
            </p>
            <p className="text-sm text-gray-400 mb-8">
              Built for contractors • Works for any local service business
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2">
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToSteps}
                className="px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                See What's Included
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Process Steps */}
          <div id="process-steps" className="mb-20">
            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Desktop: Left number rail */}
                  <div className="hidden md:flex gap-8">
                    <div className="flex-shrink-0 w-24">
                      <div className="sticky top-24">
                        <div className="w-16 h-16 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center">
                          <span className="text-2xl font-bold text-[#0066FF]">{step.number}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-6 md:p-8 hover:border-[#0066FF]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#0066FF]/10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                          {step.title}
                        </h3>
                        <ul className="space-y-2 mb-6">
                          {step.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start gap-3 text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4 border-t border-white/5">
                          <span className="text-xs font-semibold text-[#0066FF] uppercase tracking-wide">Deliverable:</span>
                          <p className="text-sm font-bold text-white mt-1">{step.deliverable}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile: Stacked layout */}
                  <div className="md:hidden">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center">
                        <span className="text-xl font-bold text-[#0066FF]">{step.number}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <div className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5">
                      <ul className="space-y-2 mb-6">
                        {step.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-3 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-white/5">
                        <span className="text-xs font-semibold text-[#0066FF] uppercase tracking-wide">Deliverable:</span>
                        <p className="text-sm font-bold text-white mt-1">{step.deliverable}</p>
                      </div>
                    </div>
                  </div>

                  {/* Divider between steps (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-12 top-24 w-0.5 h-full bg-gradient-to-b from-[#0066FF]/20 via-[#0066FF]/10 to-transparent -z-10" style={{ height: 'calc(100% + 3rem)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* What You Can Expect */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              What You Can Expect
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {expectations.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-4 text-center hover:border-[#0066FF]/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-[#0066FF]" />
                    </div>
                    <p className="text-xs text-gray-300 font-medium">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
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
                    <div className="px-5 pb-8 pt-2">
                      <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[#0066FF]/10 border border-[#0066FF]/20 rounded-lg">
              <p className="text-xs text-gray-400 text-center">
                <span className="font-semibold text-gray-300">Note:</span> Ad spend not included. If running paid ads, client funds the ad budget directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
