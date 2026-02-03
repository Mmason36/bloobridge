import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ChevronDown, CheckCircle2, Phone, MessageSquare, Database, Clock, Bot, Globe, Target, FileText, Zap, Star, Mail, Users, Settings, RefreshCw, Calendar, Share2 } from 'lucide-react';
import { getServiceBySlug } from '../lib/data/services';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-blue-400 hover:text-blue-300">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  // Custom content for specific services
  const isMissedCallService = slug === 'missed-call-text-back-system';
  const isAIChatbotService = slug === 'ai-website-chatbot';
  const isLeadGenFunnelsService = slug === 'lead-generation-funnels';
  const isReviewGrowthService = slug === 'review-growth-system';
  const isContractorCRMService = slug === 'contractor-crm-setup';
  const isAutomatedFollowUpService = slug === 'automated-follow-up-sequences';
  const isLeadReactivationService = slug === 'lead-re-activation-campaigns';
  const isAppointmentBookingService = slug === 'appointment-booking-systems';
  const isSocialMediaFunnelsService = slug === 'social-media-lead-funnels';
  const isSalesAutomationService = slug === 'sales-automation-system';
  const isAIVoiceAssistantService = slug === 'ai-voice-assistant';
  const isClientPortalService = slug === 'client-portal-system';
  const isWhiteLabeledCRMService = slug === 'white-labeled-contractor-crm';

  if (isMissedCallService) {
    const faqs = [
      {
        question: 'Does it work with my existing phone number?',
        answer: 'Yes. We can set up call forwarding or use a tracking number that forwards to your existing number. The system detects missed calls and sends the text-back automatically.'
      },
      {
        question: 'Can I customize the messages?',
        answer: 'Yes. We create custom SMS templates for different scenarios: after-hours, busy signals, weekends, and specific service types. Messages are personalized and professional.'
      },
      {
        question: 'What happens after-hours?',
        answer: 'The system works 24/7. When a call is missed after hours, it sends an instant text-back, qualifies the lead, and routes it to your pipeline. Your team gets notified and can follow up the next business day.'
      },
      {
        question: 'Can it route leads by service type?',
        answer: 'Yes. Based on the text conversation or initial qualification, leads can be automatically tagged and routed to the right pipeline stage or team member based on service type.'
      },
      {
        question: 'Will it spam my customers?',
        answer: 'No. The system only texts when a call is missed, and includes opt-out instructions. We also include basic spam filtering and guardrails to prevent abuse.'
      },
      {
        question: 'How long does setup take?',
        answer: 'Setup typically takes 1-2 weeks. This includes configuring call detection, creating SMS templates, setting up routing rules, testing workflows, and go-live verification.'
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
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* HERO */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Missed Call Text-Back System
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Never lose another inbound call. Instant SMS response + lead routing when you miss a call.
              </p>
              
              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Instant response
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Lead captured
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Pipeline routed
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Built for contractors • Works for any local service business
              </p>
            </div>

            {/* THE PROBLEM */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                The Problem
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Missed calls = lost revenue. Customers call the next company.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Slow follow-up makes leads go cold.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>No visibility: missed calls aren't tracked or routed consistently.</span>
                </li>
              </ul>
            </div>

            {/* HOW IT WORKS */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Detect missed call', icon: Phone },
                  { step: '2', title: 'Send instant personalized SMS', icon: MessageSquare },
                  { step: '3', title: 'Qualify lead with a quick question', icon: MessageSquare },
                  { step: '4', title: 'Create/update contact + opportunity in pipeline', icon: Database },
                  { step: '5', title: 'Notify your team + schedule follow-up', icon: Clock }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#0066FF]">Step {item.step}</span>
                        </div>
                        <p className="text-gray-300">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                What's Included
              </h2>
              <ul className="space-y-3">
                {[
                  'Missed-call detection + routing rules',
                  'Custom SMS templates (after-hours, busy, weekends)',
                  'Lead capture + contact creation',
                  'Pipeline stage automation',
                  'Notifications (SMS/email/app) to your team',
                  'Basic spam filtering / guardrails',
                  'Optional: call recording + tracking numbers (if supported)',
                  'Launch testing + go-live checklist'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTCOMES */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: 'Recover missed leads', value: 'Automatically', example: true },
                  { label: 'Faster response time', value: 'Under 60 seconds', example: true },
                  { label: 'More booked estimates', value: 'Without extra staff', example: true }
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 text-center"
                  >
                    <div className="text-xl font-bold text-[#0066FF] mb-2">{outcome.value}</div>
                    <div className="text-sm text-gray-300 mb-1">{outcome.label}</div>
                    {outcome.example && (
                      <div className="text-xs text-gray-500">(example)</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* BEST FOR */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Best For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ideal for:</h3>
                  <ul className="space-y-2">
                    {[
                      'High inbound call volume businesses',
                      'Small teams that miss calls during jobs',
                      'After-hours lead capture'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Not ideal for:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500" />
                      </div>
                      <span>Businesses with almost no inbound calls (needs call volume)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
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

            {/* CTA BLOCK */}
            <div className="text-center bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to install the Missed Call Text-Back System?
              </h2>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto mb-4"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500">
                Setup fee equals your monthly price. Ad spend not included.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Modal */}
      </div>
    );
  }

  // Custom content for AI Website Chatbot
  if (isAIChatbotService) {
    const faqs = [
      {
        question: 'Can it answer questions about my services and pricing?',
        answer: 'Yes. We customize the chatbot with your service information, pricing ranges, service areas, hours, and common FAQs. It can answer questions about what you do, when you\'re available, and how to get started.'
      },
      {
        question: 'Does it integrate with my CRM/pipeline?',
        answer: 'Yes. When a lead is captured, the chatbot automatically creates or updates a contact in your CRM and creates an opportunity in your pipeline. Your team gets notified immediately.'
      },
      {
        question: 'Can it collect photos or job details?',
        answer: 'Yes. The chatbot can ask for photos, job descriptions, service type, location, timeline, and other details that help pre-qualify leads before your team calls.'
      },
      {
        question: 'What happens if someone asks something weird/off-topic?',
        answer: 'The chatbot is trained on your services and common questions. For off-topic questions, it politely redirects to relevant information or offers to connect them with your team. We include guardrails to prevent abuse.'
      },
      {
        question: 'Will it work on mobile?',
        answer: 'Yes. The chatbot is fully responsive and works on desktop, tablet, and mobile devices. It adapts to screen size and provides the same functionality across all devices.'
      },
      {
        question: 'How long does setup take?',
        answer: 'Setup typically takes 1-2 weeks. This includes installing the chatbot, customizing conversation flows, adding your service information, integrating with your CRM, testing workflows, and go-live verification.'
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
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* HERO */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                AI Website Chatbot
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Convert more website visitors into booked estimates with 24/7 answers, lead capture, and automatic pipeline routing.
              </p>
              
              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  24/7 lead capture
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Instant answers
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Pipeline routed
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Built for contractors • Works for any local service business
              </p>
            </div>

            {/* THE PROBLEM */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                The Problem
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Visitors bounce when they can't get quick answers (price, timing, service area).</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>After-hours traffic goes unconverted.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Leads get lost when forms aren't followed up fast.</span>
                </li>
              </ul>
            </div>

            {/* HOW IT WORKS */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Chatbot greets visitors and answers common questions', icon: Bot },
                  { step: '2', title: 'Collects job details (service type, location, timeline)', icon: MessageSquare },
                  { step: '3', title: 'Captures contact info (name, phone, email)', icon: Database },
                  { step: '4', title: 'Creates/updates contact + opportunity in your pipeline', icon: Database },
                  { step: '5', title: 'Notifies your team and triggers follow-up sequences', icon: Clock }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#0066FF]">Step {item.step}</span>
                        </div>
                        <p className="text-gray-300">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                What's Included
              </h2>
              <ul className="space-y-3">
                {[
                  'Chatbot installed on website (desktop + mobile)',
                  'Custom conversation flow (contractor/service business aligned)',
                  'FAQ + service prompts (hours, service area, financing, etc.)',
                  'Lead capture (name/phone/email) + job details',
                  'Pipeline routing + notifications to your team',
                  'Optional: booking handoff (send link / request preferred times)',
                  'Basic spam/abuse guardrails',
                  'Launch testing + go-live checklist'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTCOMES */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: 'More leads from the same website traffic', value: 'Higher conversion', example: true },
                  { label: 'Higher conversion rate on service pages', value: 'Better engagement', example: true },
                  { label: 'Fewer missed after-hours opportunities', value: '24/7 capture', example: true }
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 text-center"
                  >
                    <div className="text-xl font-bold text-[#0066FF] mb-2">{outcome.value}</div>
                    <div className="text-sm text-gray-300 mb-1">{outcome.label}</div>
                    {outcome.example && (
                      <div className="text-xs text-gray-500">(example)</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* BEST FOR */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Best For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ideal for:</h3>
                  <ul className="space-y-2">
                    {[
                      'Service businesses getting website traffic but low conversion',
                      'Contractors missing leads after-hours',
                      'Teams that want to pre-qualify leads before calling'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Not ideal for:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500" />
                      </div>
                      <span>Businesses without meaningful website traffic (start with lead gen first)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
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

            {/* CTA BLOCK */}
            <div className="text-center bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to install the AI Website Chatbot?
              </h2>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto mb-4"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500">
                Setup fee equals your monthly price. Ad spend not included.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Modal */}
      </div>
    );
  }

  // Custom content for Lead Generation Funnels
  if (isLeadGenFunnelsService) {
    const faqs = [
      {
        question: 'Do you build funnels for each service (roofing, fencing, etc.)?',
        answer: 'Yes. We build focused funnels for each service type or offer. Each funnel has a clear offer, single call-to-action, and is optimized for that specific service. This increases conversion compared to generic pages.'
      },
      {
        question: 'Can this work with my existing website?',
        answer: 'Yes. Funnels are standalone landing pages that can be hosted on your domain or a subdomain. They work alongside your existing website and can link back to it. We can also integrate tracking across both.'
      },
      {
        question: 'Do you write the copy?',
        answer: 'Yes. We write conversion-focused copy based on your service, offer, and target audience. Copy is optimized for clarity, urgency, and action—not generic marketing speak.'
      },
      {
        question: 'How do you track calls and form leads?',
        answer: 'We set up call tracking numbers, form tracking, and UTM parameters so you can see exactly which traffic sources, ads, or campaigns are driving leads. All leads are tagged and routed into your pipeline with source attribution.'
      },
      {
        question: 'Can the funnel connect to my pipeline automatically?',
        answer: 'Yes. When a lead submits a form or calls, they\'re automatically created in your CRM, routed to the right pipeline stage, and trigger follow-up sequences. No manual entry required.'
      },
      {
        question: 'How fast can we launch a funnel?',
        answer: 'Typically 2-3 weeks from strategy to launch. This includes defining the offer, building the page, setting up tracking and routing, testing workflows, and go-live verification.'
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
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* HERO */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Lead Generation Funnels
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Purpose-built funnels that convert traffic into qualified leads, then route and follow up automatically so you book more estimates.
              </p>
              
              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Higher conversion
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Tracking + routing
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Automated follow-up
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Built for contractors • Works for any local service business
              </p>
            </div>

            {/* THE PROBLEM */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                The Problem
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Most websites are "brochure sites" that don't convert.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Leads leak when pages aren't focused (too many options, weak CTA).</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>No tracking means you can't tell what's working.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Even good leads go cold without immediate follow-up.</span>
                </li>
              </ul>
            </div>

            {/* HOW IT WORKS */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Define the offer (service + incentive + next step)', icon: Target },
                  { step: '2', title: 'Build a focused landing page (mobile-first)', icon: FileText },
                  { step: '3', title: 'Add lead capture + tracking (forms, calls, UTMs)', icon: Database },
                  { step: '4', title: 'Route leads into pipeline automatically', icon: Zap },
                  { step: '5', title: 'Trigger instant follow-up sequences + booking handoff', icon: Clock }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#0066FF]">Step {item.step}</span>
                        </div>
                        <p className="text-gray-300">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                What's Included
              </h2>
              <ul className="space-y-3">
                {[
                  'Funnel strategy (offer + CTA + page outline)',
                  'High-converting landing page build (mobile-first)',
                  'Form + call tracking setup',
                  'Thank-you page / next-step flow',
                  'Lead routing into your CRM/pipeline',
                  'Automated follow-up trigger (SMS/email) on submission',
                  'Basic conversion tracking baseline',
                  'Launch testing + go-live checklist'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTCOMES */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Higher landing page conversion rate', value: 'Better performance', example: true },
                  { label: 'More qualified leads per same traffic', value: 'Increased volume', example: true },
                  { label: 'Faster speed-to-lead with automated follow-up', value: 'Instant response', example: true },
                  { label: 'Cleaner reporting on what\'s driving leads', value: 'Clear attribution', example: true }
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 text-center"
                  >
                    <div className="text-xl font-bold text-[#0066FF] mb-2">{outcome.value}</div>
                    <div className="text-sm text-gray-300 mb-1">{outcome.label}</div>
                    {outcome.example && (
                      <div className="text-xs text-gray-500">(example)</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* BEST FOR */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Best For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ideal for:</h3>
                  <ul className="space-y-2">
                    {[
                      'Contractors running ads or getting traffic but not converting',
                      'Businesses that want "one page → one action"',
                      'Companies wanting cleaner lead tracking + routing'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Not ideal for:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500" />
                      </div>
                      <span>Businesses with zero traffic and no intent to generate it (start with visibility first)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
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

            {/* CTA BLOCK */}
            <div className="text-center bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to install Lead Generation Funnels?
              </h2>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto mb-4"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500">
                Setup fee equals your monthly price. Ad spend not included.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Modal */}
      </div>
    );
  }

  // Custom content for Review Growth System
  if (isReviewGrowthService) {
    const faqs = [
      {
        question: 'Does this work with Google only or other platforms?',
        answer: 'Primarily Google, but we can set up review requests for other platforms like Facebook, Yelp, or industry-specific sites. Google is the focus because it has the biggest impact on local search visibility.'
      },
      {
        question: 'Can we customize the message tone?',
        answer: 'Yes. We customize SMS and email templates to match your brand tone—professional, friendly, casual, or whatever fits your business. The goal is authentic requests that don\'t feel automated.'
      },
      {
        question: 'How often are reminders sent?',
        answer: 'Typically one follow-up reminder if there\'s no response within 3-5 days. We keep it respectful and don\'t spam customers. The system tracks who has already left a review to avoid duplicate requests.'
      },
      {
        question: 'What if a customer leaves negative feedback?',
        answer: 'The system first captures negative feedback privately through a feedback form before directing to Google. This gives you a chance to resolve issues before they become public reviews. You get notified immediately.'
      },
      {
        question: 'Does this help with Google ranking?',
        answer: 'Yes. More positive reviews improve your Google Business Profile ranking, local search visibility, and click-through rates. Google favors businesses with recent, consistent reviews.'
      },
      {
        question: 'How long does setup take?',
        answer: 'Setup typically takes 1-2 weeks. This includes configuring the workflow, customizing templates, setting up Google review links, testing the automation, and go-live verification.'
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
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* HERO */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Review Growth System
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Automatically request, track, and grow 5-star reviews after every completed job, without manual follow-up.
              </p>
              
              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Automated requests
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Google optimization
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Reputation growth
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Built for contractors • Works for any local service business
              </p>
            </div>

            {/* THE PROBLEM */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                The Problem
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Happy customers forget to leave reviews.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Review requests are inconsistent.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Competitors with more reviews rank higher.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Negative reviews hurt when not monitored.</span>
                </li>
              </ul>
            </div>

            {/* HOW IT WORKS */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Job marked complete in your system', icon: CheckCircle2 },
                  { step: '2', title: 'Automated SMS/email review request is sent', icon: Mail },
                  { step: '3', title: 'Customer clicks direct Google review link', icon: Star },
                  { step: '4', title: 'System tracks response + reminders if needed', icon: Database },
                  { step: '5', title: 'Negative feedback is captured privately first', icon: MessageSquare }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#0066FF]">Step {item.step}</span>
                        </div>
                        <p className="text-gray-300">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                What's Included
              </h2>
              <ul className="space-y-3">
                {[
                  'Automated review request workflow',
                  'SMS + email templates (customized to your brand tone)',
                  'Direct Google review linking',
                  'Follow-up reminders (if no response)',
                  'Basic negative feedback routing',
                  'Review tracking dashboard visibility',
                  'Launch testing + go-live checklist'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTCOMES */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'More consistent review volume', value: 'Automated requests' },
                  { label: 'Improved Google credibility', value: 'Stronger presence' },
                  { label: 'Increased trust from prospects', value: 'Social proof' },
                  { label: 'Stronger local search visibility', value: 'Better ranking' }
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 text-center"
                  >
                    <div className="text-xl font-bold text-[#0066FF] mb-2">{outcome.value}</div>
                    <div className="text-sm text-gray-300">{outcome.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BEST FOR */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Best For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ideal for:</h3>
                  <ul className="space-y-2">
                    {[
                      'Contractors wanting more Google reviews',
                      'Businesses with inconsistent review requests',
                      'Companies competing in crowded markets'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Not ideal for:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500" />
                      </div>
                      <span>Businesses unwilling to ask customers for feedback</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
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

            {/* CTA BLOCK */}
            <div className="text-center bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to install the Review Growth System?
              </h2>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto mb-4"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500">
                Setup fee equals your monthly price. Ad spend not included.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Modal */}
      </div>
    );
  }

  // Custom content for Contractor CRM Setup
  if (isContractorCRMService) {
    const faqs = [
      {
        question: 'Can this replace my current CRM?',
        answer: 'Yes. We can migrate your existing data and set up a contractor-specific CRM that replaces your current system. Or, if you prefer, we can enhance your existing CRM with contractor-focused pipeline stages and automation.'
      },
      {
        question: 'Will it work with my website and forms?',
        answer: 'Yes. We connect your website forms, landing pages, chatbots, and call tracking to automatically create leads in the CRM. Every lead source is tracked and routed to the right pipeline stage.'
      },
      {
        question: 'Can I customize pipeline stages?',
        answer: 'Yes. We build custom pipeline stages based on your actual workflow—New Lead, Estimate Sent, Estimate Accepted, Scheduled, In Progress, Complete, etc. Stages match how you actually work.'
      },
      {
        question: 'Does it work on mobile?',
        answer: 'Yes. The CRM is fully mobile-responsive and works on phones and tablets. Your team can update leads, add notes, and move jobs through stages from anywhere.'
      },
      {
        question: 'Can it assign leads automatically?',
        answer: 'Yes. We set up routing rules based on lead source, service type, location, or other criteria. Leads are automatically assigned to the right team member or pipeline stage.'
      },
      {
        question: 'How long does setup take?',
        answer: 'Setup typically takes 2-3 weeks. This includes mapping your workflow, building the pipeline, configuring automation, connecting lead sources, training your team, testing, and go-live verification.'
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
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* HERO */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Contractor CRM Setup
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                We install and configure a contractor-specific CRM pipeline so every lead is tracked, routed, and followed up automatically.
              </p>
              
              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Pipeline visibility
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Automated stages
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Lead accountability
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Built for contractors • Works for any local service business
              </p>
            </div>

            {/* THE PROBLEM */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                The Problem
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Leads live in texts, emails, and sticky notes.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>No clear stage tracking (estimate sent? waiting? closed?).</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Follow-ups are manual and inconsistent.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Revenue forecasting is unclear.</span>
                </li>
              </ul>
            </div>

            {/* HOW IT WORKS */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Map your real-world job stages (New Lead → Estimate → Won → Complete)', icon: Settings },
                  { step: '2', title: 'Build a custom pipeline inside the CRM', icon: Database },
                  { step: '3', title: 'Add automation triggers per stage', icon: Zap },
                  { step: '4', title: 'Connect forms, calls, and chatbots to auto-create leads', icon: Phone },
                  { step: '5', title: 'Train your team on daily usage + visibility', icon: Users }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#0066FF]">Step {item.step}</span>
                        </div>
                        <p className="text-gray-300">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                What's Included
              </h2>
              <ul className="space-y-3">
                {[
                  'Custom pipeline stage configuration',
                  'Lead source tracking setup',
                  'Stage-based automation rules',
                  'Notifications + assignment logic',
                  'Basic reporting dashboard',
                  'Mobile access setup',
                  'User permissions (if needed)',
                  'Launch testing + go-live checklist'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTCOMES */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Full visibility of active opportunities', value: 'Clear pipeline' },
                  { label: 'Fewer dropped leads', value: 'Better tracking' },
                  { label: 'Faster follow-up consistency', value: 'Automated actions' },
                  { label: 'Cleaner reporting on jobs in progress', value: 'Real-time data' }
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 text-center"
                  >
                    <div className="text-xl font-bold text-[#0066FF] mb-2">{outcome.value}</div>
                    <div className="text-sm text-gray-300">{outcome.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BEST FOR */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Best For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ideal for:</h3>
                  <ul className="space-y-2">
                    {[
                      'Contractors managing multiple estimates weekly',
                      'Teams with multiple sales reps',
                      'Businesses wanting structured lead handling'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Not ideal for:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500" />
                      </div>
                      <span>Solo operators who prefer manual tracking (until growth increases)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
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

            {/* CTA BLOCK */}
            <div className="text-center bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to install a Contractor CRM Setup?
              </h2>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto mb-4"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500">
                Setup fee equals your monthly price. Ad spend not included.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Modal */}
      </div>
    );
  }

  // Custom content for Automated Follow-Up Sequences
  if (isAutomatedFollowUpService) {
    const faqs = [
      {
        question: 'How fast does the first message send?',
        answer: 'The first message sends instantly—within seconds of a lead entering your system. This could be from a form submission, missed call, chatbot conversation, or any other lead source you connect.'
      },
      {
        question: 'Can messages be customized?',
        answer: 'Yes. We customize SMS and email templates to match your brand voice and service type. Messages can include personalization fields like name, service type, and location. We write copy that feels authentic, not robotic.'
      },
      {
        question: 'Does it integrate with my CRM?',
        answer: 'Yes. Sequences trigger based on CRM pipeline stages (new lead, estimate sent, etc.) and update lead status automatically. All follow-up activity is logged in your CRM so you have full visibility.'
      },
      {
        question: 'Can we stop sequences once someone responds?',
        answer: 'Yes. Sequences automatically pause or stop when a lead responds, books an appointment, or moves to a different pipeline stage. This prevents over-messaging and ensures your team takes over at the right time.'
      },
      {
        question: 'Does it work for estimates and re-quotes?',
        answer: 'Yes. We can set up sequences for different scenarios: new leads, estimate follow-ups, re-quotes, no-show reminders, and re-engagement campaigns. Each sequence is tailored to the specific stage and goal.'
      },
      {
        question: 'How long does setup take?',
        answer: 'Setup typically takes 1-2 weeks. This includes writing and customizing message templates, configuring timing and triggers, setting up stage-based automation, testing sequences, and go-live verification.'
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
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* HERO */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Automated Follow-Up Sequences
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                We install SMS and email follow-up workflows that trigger automatically when a lead comes in, so no opportunity goes cold.
              </p>
              
              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Instant response
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Multi-step sequences
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Pipeline triggers
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Built for contractors • Works for any local service business
              </p>
            </div>

            {/* THE PROBLEM */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                The Problem
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Leads go cold when response time is slow.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Manual follow-up is inconsistent.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Sales reps forget to re-contact unresponsive prospects.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Money is lost after the first touch.</span>
                </li>
              </ul>
            </div>

            {/* HOW IT WORKS */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Lead enters system (form, call, chatbot, funnel)', icon: Database },
                  { step: '2', title: 'Instant SMS/email confirmation is sent', icon: Zap },
                  { step: '3', title: 'Multi-step follow-up sequence triggers automatically', icon: Mail },
                  { step: '4', title: 'Reminders notify your team if no response', icon: Clock },
                  { step: '5', title: 'Sequence stops once booked or marked closed', icon: CheckCircle2 }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#0066FF]">Step {item.step}</span>
                        </div>
                        <p className="text-gray-300">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                What's Included
              </h2>
              <ul className="space-y-3">
                {[
                  'Custom SMS + email sequence build',
                  'Timing + trigger logic configuration',
                  'Stage-based automation (new lead, estimate sent, etc.)',
                  'Re-engagement follow-ups for unresponsive leads',
                  'Team notification rules',
                  'Basic personalization fields',
                  'Launch testing + go-live checklist'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTCOMES */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Faster speed-to-lead', value: 'Instant response' },
                  { label: 'More conversations started', value: 'Higher contact rates' },
                  { label: 'Improved consistency across your team', value: 'Automated actions' },
                  { label: 'Fewer unresponsive leads', value: 'Better follow-up' }
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 text-center"
                  >
                    <div className="text-xl font-bold text-[#0066FF] mb-2">{outcome.value}</div>
                    <div className="text-sm text-gray-300">{outcome.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BEST FOR */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Best For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ideal for:</h3>
                  <ul className="space-y-2">
                    {[
                      'Contractors missing follow-ups',
                      'Teams with multiple incoming leads per week',
                      'Businesses wanting structured sales communication'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Not ideal for:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500" />
                      </div>
                      <span>Businesses with extremely low lead volume</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
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

            {/* CTA BLOCK */}
            <div className="text-center bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to install Automated Follow-Up Sequences?
              </h2>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto mb-4"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500">
                Setup fee equals your monthly price. Ad spend not included.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Modal */}
      </div>
    );
  }

  // Custom content for Lead Reactivation Campaigns
  if (isLeadReactivationService) {
    const faqs = [
      {
        question: 'How old can leads be for reactivation?',
        answer: 'Leads can be any age—from a few months to several years old. We typically see the best results with leads from the past 6-24 months, but even older leads can convert if the timing is right.'
      },
      {
        question: 'Will this annoy past prospects?',
        answer: 'No. Messages are professional, value-focused, and include clear opt-out options. We space out campaigns and only contact leads who haven\'t explicitly opted out. Most people appreciate a follow-up if it\'s relevant and not pushy.'
      },
      {
        question: 'Can we segment by service type?',
        answer: 'Yes. We segment leads by service type, location, timeline, estimate amount, or any other criteria in your database. This allows us to send targeted messages that are relevant to each segment.'
      },
      {
        question: 'How do replies get routed?',
        answer: 'When someone replies to a reactivation message, they\'re automatically routed back into your active pipeline, tagged with the campaign source, and assigned to your team for immediate follow-up.'
      },
      {
        question: 'Can it book appointments automatically?',
        answer: 'Yes. If someone responds positively, the system can send booking links or request preferred times. We can also route them to your booking system or trigger a sales follow-up sequence.'
      },
      {
        question: 'How long does setup take?',
        answer: 'Setup typically takes 1-2 weeks. This includes analyzing your database, segmenting leads, creating reactivation message sequences, setting up routing and automation, testing campaigns, and go-live verification.'
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
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* HERO */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Lead Reactivation Campaigns
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                We launch structured outreach campaigns to past leads and estimates, turning dormant opportunities into booked work.
              </p>
              
              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Reactivate cold leads
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Automated outreach
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Database monetization
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Built for contractors • Works for any local service business
              </p>
            </div>

            {/* THE PROBLEM */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                The Problem
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Thousands of past leads sit untouched.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Old estimates are never followed up.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Past marketing spend goes underutilized.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Teams focus only on new leads, not existing ones.</span>
                </li>
              </ul>
            </div>

            {/* HOW IT WORKS */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Identify past leads or estimates in your database', icon: Database },
                  { step: '2', title: 'Segment by service type or timeline', icon: Target },
                  { step: '3', title: 'Launch SMS/email reactivation sequence', icon: Mail },
                  { step: '4', title: 'Route responses into pipeline automatically', icon: Zap },
                  { step: '5', title: 'Trigger booking or sales follow-up', icon: RefreshCw }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#0066FF]">Step {item.step}</span>
                        </div>
                        <p className="text-gray-300">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                What's Included
              </h2>
              <ul className="space-y-3">
                {[
                  'Database segmentation setup',
                  'Custom reactivation message sequences',
                  'SMS + email automation',
                  'Response routing into CRM',
                  'Booking link integration (if needed)',
                  'Campaign timing + throttle controls',
                  'Launch testing + go-live checklist'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTCOMES */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'New jobs from old opportunities', value: 'Revenue from database' },
                  { label: 'Increased ROI on existing database', value: 'Better utilization' },
                  { label: 'Higher close rates from warm leads', value: 'Warm prospects' },
                  { label: 'More consistent job flow', value: 'Steady pipeline' }
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 text-center"
                  >
                    <div className="text-xl font-bold text-[#0066FF] mb-2">{outcome.value}</div>
                    <div className="text-sm text-gray-300">{outcome.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BEST FOR */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Best For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ideal for:</h3>
                  <ul className="space-y-2">
                    {[
                      'Contractors with past estimate history',
                      'Businesses running for multiple years',
                      'Companies wanting revenue without more ad spend'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Not ideal for:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500" />
                      </div>
                      <span>Brand new businesses with no lead database</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
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

            {/* CTA BLOCK */}
            <div className="text-center bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to install Lead Reactivation Campaigns?
              </h2>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto mb-4"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500">
                Setup fee equals your monthly price. Ad spend not included.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Modal */}
      </div>
    );
  }

  // Custom content for Appointment Booking System
  if (isAppointmentBookingService) {
    const faqs = [
      {
        question: 'Can it sync with my existing calendar?',
        answer: 'Yes. We integrate with Google Calendar, Outlook, and most calendar systems. When someone books, it automatically blocks time in your calendar and prevents double bookings.'
      },
      {
        question: 'Can I control available time slots?',
        answer: 'Yes. You set available time windows, buffer times between appointments, blackout dates, and service-specific availability. The system only shows times you\'re actually available.'
      },
      {
        question: 'Will it send reminders automatically?',
        answer: 'Yes. The system sends automated confirmation messages immediately after booking, plus reminder messages (SMS/email) 24 hours and 2 hours before the appointment to reduce no-shows.'
      },
      {
        question: 'Can customers reschedule?',
        answer: 'Yes. Customers can reschedule or cancel through the booking link. The system updates your calendar automatically and sends confirmation messages for the new time.'
      },
      {
        question: 'Does it integrate with the CRM?',
        answer: 'Yes. When someone books, it creates or updates the lead in your CRM, moves them to a "Booked" pipeline stage, and logs all booking activity. Your team gets notified immediately.'
      },
      {
        question: 'How long does setup take?',
        answer: 'Setup typically takes 1-2 weeks. This includes configuring the booking page, setting up calendar integration, defining time-slot rules, creating confirmation and reminder messages, testing workflows, and go-live verification.'
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
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* HERO */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Appointment Booking System
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Install a structured booking system that lets leads schedule estimates automatically while syncing directly to your team's calendar.
              </p>
              
              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Instant booking
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Calendar sync
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Automated reminders
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Built for contractors • Works for any local service business
              </p>
            </div>

            {/* THE PROBLEM */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                The Problem
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Leads wait for callbacks just to schedule.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Back-and-forth texting delays appointments.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Double bookings or missed appointments happen.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Manual scheduling wastes admin time.</span>
                </li>
              </ul>
            </div>

            {/* HOW IT WORKS */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Lead receives booking link automatically', icon: Mail },
                  { step: '2', title: 'Prospect selects available time slot', icon: Calendar },
                  { step: '3', title: 'Appointment syncs to your calendar', icon: Database },
                  { step: '4', title: 'Confirmation + reminder messages send automatically', icon: Zap },
                  { step: '5', title: 'Pipeline stage updates to "Booked"', icon: CheckCircle2 }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#0066FF]">Step {item.step}</span>
                        </div>
                        <p className="text-gray-300">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                What's Included
              </h2>
              <ul className="space-y-3">
                {[
                  'Custom booking page setup',
                  'Calendar integration (Google/Outlook if supported)',
                  'Time-slot rules + buffer logic',
                  'Automated confirmation messages',
                  'Reminder sequences (SMS/email)',
                  'Pipeline stage automation',
                  'Basic cancellation/reschedule flow',
                  'Launch testing + go-live checklist'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTCOMES */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Faster estimate scheduling', value: 'Instant booking' },
                  { label: 'Reduced no-shows', value: 'Automated reminders' },
                  { label: 'Improved response time perception', value: 'Immediate action' },
                  { label: 'Less manual admin work', value: 'Time saved' }
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 text-center"
                  >
                    <div className="text-xl font-bold text-[#0066FF] mb-2">{outcome.value}</div>
                    <div className="text-sm text-gray-300">{outcome.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BEST FOR */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Best For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ideal for:</h3>
                  <ul className="space-y-2">
                    {[
                      'Contractors booking multiple estimates per week',
                      'Teams with structured availability windows',
                      'Businesses wanting instant scheduling'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Not ideal for:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500" />
                      </div>
                      <span>Businesses that require complex in-person quoting coordination only</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
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

            {/* CTA BLOCK */}
            <div className="text-center bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to install the Appointment Booking System?
              </h2>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto mb-4"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500">
                Setup fee equals your monthly price. Ad spend not included.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Modal */}
      </div>
    );
  }

  // Custom content for Social Media Lead Funnels
  if (isSocialMediaFunnelsService) {
    const faqs = [
      {
        question: 'Do you manage the ad spend?',
        answer: 'No. We install the funnel infrastructure and tracking. You manage and fund your ad spend directly through Facebook/Instagram Ads Manager. We set up tracking so you can see which campaigns drive leads and ROI.'
      },
      {
        question: 'Can this integrate with Facebook Lead Forms?',
        answer: 'Yes. We can integrate with Facebook Lead Forms, Instagram Lead Forms, or build custom landing pages that capture leads from social traffic. All leads route into your CRM automatically.'
      },
      {
        question: 'Will leads automatically enter the pipeline?',
        answer: 'Yes. When someone submits a form or clicks through from a social ad, they\'re automatically created in your CRM, routed to the right pipeline stage, and trigger immediate follow-up sequences.'
      },
      {
        question: 'How fast does follow-up trigger?',
        answer: 'Follow-up triggers instantly—within seconds of a lead submission. This includes confirmation messages, qualification sequences, and routing to your team for immediate response.'
      },
      {
        question: 'Can we track ROI?',
        answer: 'Yes. We set up tracking so you can see which social campaigns, ad sets, and creative drive leads and booked estimates. This helps you optimize ad spend and focus on what works.'
      },
      {
        question: 'How long does setup take?',
        answer: 'Setup typically takes 1-2 weeks. This includes creating the funnel strategy, building landing pages or integrating forms, setting up CRM routing, configuring tracking, testing workflows, and go-live verification.'
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
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* HERO */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Social Media Lead Funnels
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                We build structured social media funnels that capture, qualify, and route leads directly into your system.
              </p>
              
              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Social lead capture
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Automated routing
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Funnel tracking
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Built for contractors • Works for any local service business
              </p>
            </div>

            {/* THE PROBLEM */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                The Problem
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Social media ads generate clicks but not structured leads.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Leads sit in Facebook inboxes without tracking.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>No clear follow-up automation.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Ad spend feels unpredictable without tracking.</span>
                </li>
              </ul>
            </div>

            {/* HOW IT WORKS */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Create structured social funnel offer', icon: Target },
                  { step: '2', title: 'Build landing page or lead form integration', icon: FileText },
                  { step: '3', title: 'Route social leads into CRM pipeline', icon: Database },
                  { step: '4', title: 'Trigger automated follow-up immediately', icon: Zap },
                  { step: '5', title: 'Track performance and optimize flow', icon: Share2 }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#0066FF]">Step {item.step}</span>
                        </div>
                        <p className="text-gray-300">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                What's Included
              </h2>
              <ul className="space-y-3">
                {[
                  'Funnel strategy for social campaigns',
                  'Landing page or form integration setup',
                  'Lead routing into CRM',
                  'Automated SMS/email follow-up triggers',
                  'Basic tracking configuration',
                  'Launch testing + go-live checklist'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTCOMES */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'More structured leads from social traffic', value: 'Better capture' },
                  { label: 'Faster response to paid traffic', value: 'Instant routing' },
                  { label: 'Cleaner tracking of campaign performance', value: 'Clear attribution' },
                  { label: 'Better pipeline visibility for ad leads', value: 'Full visibility' }
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 text-center"
                  >
                    <div className="text-xl font-bold text-[#0066FF] mb-2">{outcome.value}</div>
                    <div className="text-sm text-gray-300">{outcome.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BEST FOR */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Best For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ideal for:</h3>
                  <ul className="space-y-2">
                    {[
                      'Contractors running Facebook or Instagram ads',
                      'Businesses wanting structured tracking for social leads',
                      'Companies investing in paid social traffic'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Not ideal for:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500" />
                      </div>
                      <span>Businesses not running social media traffic</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
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

            {/* CTA BLOCK */}
            <div className="text-center bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to install Social Media Lead Funnels?
              </h2>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto mb-4"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500">
                Setup fee equals your monthly price. Ad spend not included.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Modal */}
      </div>
    );
  }

  // Custom content for Sales Automation System
  if (isSalesAutomationService) {
    const faqs = [
      {
        question: 'Can this work with my current sales team?',
        answer: 'Yes. We configure the system to work with your existing sales team structure. Automation handles follow-up and reminders, while your team handles conversations and closing. It supports multiple reps and can assign leads automatically.'
      },
      {
        question: 'Will it automate estimate follow-up?',
        answer: 'Yes. When an estimate is sent, the system automatically triggers follow-up sequences at defined intervals (e.g., 2 days, 1 week, 2 weeks). This ensures no estimate goes without follow-up, even if a rep forgets.'
      },
      {
        question: 'Can it assign tasks automatically?',
        answer: 'Yes. Based on pipeline stage, lead source, or other criteria, the system can automatically assign tasks and reminders to specific sales reps. This keeps everyone accountable and nothing gets missed.'
      },
      {
        question: 'Does it integrate with booking and CRM?',
        answer: 'Yes. The system integrates with your CRM and booking systems. When someone books or moves stages, automation triggers accordingly. All activity is logged and visible in your pipeline.'
      },
      {
        question: 'Can we customize stages?',
        answer: 'Yes. We build custom sales stages based on your actual process—New Lead, Estimate Sent, Estimate Follow-Up, Negotiation, Won, Lost, etc. Stages match how you actually sell.'
      },
      {
        question: 'How long does setup take?',
        answer: 'Setup typically takes 2-3 weeks. This includes mapping your sales process, configuring stages and automation, creating follow-up sequences, setting up task reminders, testing workflows, training your team, and go-live verification.'
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
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* HERO */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Sales Automation System
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                We install structured sales workflows that automate follow-up, reminders, and pipeline movement, so nothing slips through the cracks.
              </p>
              
              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Stage-based automation
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Close-rate optimization
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Sales visibility
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Built for contractors • Works for any local service business
              </p>
            </div>

            {/* THE PROBLEM */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                The Problem
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Sales reps follow different processes.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Follow-ups are inconsistent after estimates.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>No structured reminders or automation.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Deals stall without visibility.</span>
                </li>
              </ul>
            </div>

            {/* HOW IT WORKS */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Map your real-world sales stages', icon: Settings },
                  { step: '2', title: 'Install automation triggers per stage', icon: Zap },
                  { step: '3', title: 'Create structured follow-up sequences', icon: Mail },
                  { step: '4', title: 'Add task reminders + notifications', icon: Clock },
                  { step: '5', title: 'Track pipeline movement and close status', icon: Database }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#0066FF]">Step {item.step}</span>
                        </div>
                        <p className="text-gray-300">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                What's Included
              </h2>
              <ul className="space-y-3">
                {[
                  'Custom sales stage configuration',
                  'Stage-based automation logic',
                  'Follow-up sequences after estimate delivery',
                  'Reminder notifications for sales reps',
                  'Basic reporting visibility',
                  'Workflow optimization guidance',
                  'Launch testing + go-live checklist'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTCOMES */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Improved follow-up consistency', value: 'Structured process' },
                  { label: 'Higher estimate-to-close conversion', value: 'Better close rates' },
                  { label: 'Reduced stalled opportunities', value: 'Active pipeline' },
                  { label: 'More predictable revenue tracking', value: 'Clear visibility' }
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 text-center"
                  >
                    <div className="text-xl font-bold text-[#0066FF] mb-2">{outcome.value}</div>
                    <div className="text-sm text-gray-300">{outcome.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BEST FOR */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Best For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ideal for:</h3>
                  <ul className="space-y-2">
                    {[
                      'Contractors with active sales reps',
                      'Businesses sending multiple estimates weekly',
                      'Companies wanting structured closing processes'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Not ideal for:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500" />
                      </div>
                      <span>Businesses with extremely low sales volume</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
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

            {/* CTA BLOCK */}
            <div className="text-center bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to install the Sales Automation System?
              </h2>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto mb-4"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500">
                Setup fee equals your monthly price. Ad spend not included.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Modal */}
      </div>
    );
  }

  if (isAIVoiceAssistantService) {
    const faqs = [
      {
        question: 'Does it sound robotic?',
        answer: 'No. Modern AI voice assistants use natural language processing and voice synthesis that sounds human-like. We configure the voice tone, pace, and language to match your brand and sound professional and conversational.'
      },
      {
        question: 'Can it transfer calls to a live person?',
        answer: 'Yes. The AI can transfer calls to a live person at any time during the conversation. You can set up rules for when to transfer (e.g., complex questions, urgent requests, or when the caller specifically asks to speak to someone).'
      },
      {
        question: 'Can it handle after-hours calls only?',
        answer: 'Yes. You can configure the system to only answer calls during specific hours (e.g., after-hours, weekends) and let your team handle calls during business hours. Or it can handle all calls 24/7 with overflow logic.'
      },
      {
        question: 'Will it integrate with my CRM?',
        answer: 'Yes. The AI Voice Assistant integrates with your CRM to automatically create contacts, capture lead information, and route opportunities into your pipeline. We set up the integration during the initial configuration.'
      },
      {
        question: 'Can it capture job details?',
        answer: 'Yes. The AI asks structured questions to capture key job information including service type, location, urgency, timeline, and any specific requirements. All this information is automatically logged in your CRM.'
      },
      {
        question: 'How long does setup take?',
        answer: 'Setup typically takes 2-3 weeks. This includes configuring the AI voice system, creating custom scripts and qualification flows, setting up CRM integration and routing rules, testing call flows, and go-live verification.'
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
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* HERO */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                AI Voice Assistant
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Install an intelligent voice system that answers inbound calls, captures job details, and routes qualified leads automatically.
              </p>
              
              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  24/7 answering
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Lead qualification
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Instant routing
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Built for contractors • Works for any local service business
              </p>
            </div>

            {/* THE PROBLEM */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                The Problem
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Missed calls turn into lost revenue</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>After-hours calls go unanswered</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Staff can't always answer during jobs</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Voicemail rarely converts into callbacks</span>
                </li>
              </ul>
            </div>

            {/* HOW IT WORKS */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'AI answers inbound calls instantly', icon: Phone },
                  { step: '2', title: 'Gathers key job information (service type, location, urgency)', icon: MessageSquare },
                  { step: '3', title: 'Captures contact details automatically', icon: Database },
                  { step: '4', title: 'Routes lead into CRM pipeline', icon: Target },
                  { step: '5', title: 'Notifies your team for follow-up or booking', icon: Clock }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#0066FF]">Step {item.step}</span>
                        </div>
                        <p className="text-gray-300">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                What's Included
              </h2>
              <ul className="space-y-3">
                {[
                  'AI voice configuration customized to your services',
                  'Script + qualification flow setup',
                  'Lead capture integration with CRM',
                  'Routing rules (sales rep, service type, location)',
                  'After-hours and overflow logic',
                  'Basic call logging visibility',
                  'Launch testing + go-live checklist'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTCOMES */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Fewer missed calls', value: '24/7 coverage' },
                  { label: 'More captured inbound opportunities', value: 'Higher lead volume' },
                  { label: 'Faster response experience for customers', value: 'Instant answering' },
                  { label: 'Better lead data before callback', value: 'Qualified information' }
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 text-center"
                  >
                    <div className="text-xl font-bold text-[#0066FF] mb-2">{outcome.value}</div>
                    <div className="text-sm text-gray-300">{outcome.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BEST FOR */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Best For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ideal for:</h3>
                  <ul className="space-y-2">
                    {[
                      'Contractors with high call volume',
                      'Businesses missing after-hours calls',
                      'Teams wanting structured qualification'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Not ideal for:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500" />
                      </div>
                      <span>Businesses with extremely low inbound call traffic</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
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

            {/* CTA BLOCK */}
            <div className="text-center bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to install the AI Voice Assistant?
              </h2>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto mb-4"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500">
                Setup fee equals your monthly price. Ad spend not included.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Modal */}
      </div>
    );
  }

  if (isClientPortalService) {
    const faqs = [
      {
        question: 'Is the portal secure?',
        answer: 'Yes. The client portal uses secure authentication, encrypted connections, and role-based access controls. Each client gets their own secure login credentials, and you control what information they can access.'
      },
      {
        question: 'Can clients upload documents?',
        answer: 'Yes. Clients can upload documents, photos, approvals, and other files directly through the portal. These uploads are automatically organized by job and can be synced to your CRM for easy access.'
      },
      {
        question: 'Does it sync with the CRM?',
        answer: 'Yes. The portal syncs with your CRM in real-time. Job status updates, stage changes, and document uploads automatically reflect in both the portal and your CRM system, keeping everything in sync.'
      },
      {
        question: 'Can I control what clients see?',
        answer: 'Yes. You have full control over what information clients can view. You can customize visibility settings for job stages, documents, invoices, and other information based on your preferences and client needs.'
      },
      {
        question: 'Will clients get notifications?',
        answer: 'Yes. Clients receive email or SMS notifications when there are updates to their jobs, new documents are uploaded, invoices are ready, or when important milestones are reached. You can customize notification preferences.'
      },
      {
        question: 'How long does setup take?',
        answer: 'Setup typically takes 2-3 weeks. This includes configuring the portal structure, setting up secure logins, integrating with your CRM, configuring notification triggers, testing the client experience, and go-live verification.'
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
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* HERO */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Client Portal System
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Install a secure client portal where customers can view job status, documents, invoices, and updates—without calling your office.
              </p>
              
              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Project visibility
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Secure access
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Professional experience
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Built for contractors • Works for any local service business
              </p>
            </div>

            {/* THE PROBLEM */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                The Problem
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Clients constantly ask for job updates</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Important documents get lost in email threads</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Invoices and approvals aren't centralized</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Communication feels scattered and reactive</span>
                </li>
              </ul>
            </div>

            {/* HOW IT WORKS */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Client receives secure portal login', icon: Users },
                  { step: '2', title: 'Job stage and updates sync from CRM', icon: Database },
                  { step: '3', title: 'Documents and invoices are uploaded', icon: FileText },
                  { step: '4', title: 'Client can view status anytime', icon: Globe },
                  { step: '5', title: 'Notifications alert clients to updates', icon: Mail }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#0066FF]">Step {item.step}</span>
                        </div>
                        <p className="text-gray-300">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                What's Included
              </h2>
              <ul className="space-y-3">
                {[
                  'Secure client login setup',
                  'Job stage visibility integration',
                  'Document + invoice upload structure',
                  'Notification triggers for updates',
                  'Basic permissions and role controls',
                  'Mobile-friendly access',
                  'Launch testing + go-live checklist'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTCOMES */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Fewer status update calls', value: 'Reduced interruptions' },
                  { label: 'Cleaner communication', value: 'Centralized updates' },
                  { label: 'More professional customer experience', value: 'Premium service' },
                  { label: 'Centralized job documentation', value: 'Organized files' }
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 text-center"
                  >
                    <div className="text-xl font-bold text-[#0066FF] mb-2">{outcome.value}</div>
                    <div className="text-sm text-gray-300">{outcome.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BEST FOR */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Best For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ideal for:</h3>
                  <ul className="space-y-2">
                    {[
                      'Contractors managing multi-stage projects',
                      'Teams with frequent client communication',
                      'Businesses wanting a more premium customer experience'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Not ideal for:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500" />
                      </div>
                      <span>One-day service businesses with minimal ongoing communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
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

            {/* CTA BLOCK */}
            <div className="text-center bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to install the Client Portal System?
              </h2>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto mb-4"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500">
                Setup fee equals your monthly price. Ad spend not included.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Modal */}
      </div>
    );
  }

  if (isWhiteLabeledCRMService) {
    const faqs = [
      {
        question: 'Is this replacing my current CRM?',
        answer: 'Yes. The White-Labeled Contractor CRM is a complete CRM system built specifically for contractors. It replaces generic CRMs with a contractor-focused platform that includes pipeline management, automation, lead tracking, and all the tools your team needs—all under your brand.'
      },
      {
        question: 'Can it be fully branded?',
        answer: 'Yes. The system can be fully branded with your logo, company colors, and visual identity. If supported, you can even use your own domain. The entire platform will look and feel like it was built specifically for your company.'
      },
      {
        question: 'Does it include automation?',
        answer: 'Yes. The system includes full automation capabilities including automated follow-ups, lead routing, stage transitions, notifications, and workflow triggers. We configure all automation during setup to match your business processes.'
      },
      {
        question: 'Can multiple team members use it?',
        answer: 'Yes. The system supports multiple users with role-based permissions. You can set up different access levels for sales reps, managers, admins, and other team members. Each user gets their own login and can see what\'s relevant to their role.'
      },
      {
        question: 'Does it integrate with funnels and chatbots?',
        answer: 'Yes. The White-Labeled CRM integrates with lead generation funnels, chatbots, and other marketing tools. Leads captured from any source automatically flow into your CRM pipeline, keeping everything centralized and organized.'
      },
      {
        question: 'How long does setup take?',
        answer: 'Setup typically takes 3-4 weeks. This includes configuring your custom pipeline, applying your branding, setting up automation and workflows, configuring user roles and permissions, integrating with your existing tools, training your team, and go-live verification.'
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
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* HERO */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                White-Labeled Contractor CRM
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Deploy a fully branded CRM platform customized for contractors—so your team operates inside a structured, professional system under your brand.
              </p>
              
              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Your brand
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Custom pipeline
                </span>
                <span className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-sm text-[#0066FF] font-medium">
                  Full automation control
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Built for contractors • Works for any local service business
              </p>
            </div>

            {/* THE PROBLEM */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                The Problem
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Generic CRMs aren't built for contractor workflows</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Teams juggle multiple disconnected tools</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>No brand ownership over internal systems</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span>Growth becomes chaotic without structure</span>
                </li>
              </ul>
            </div>

            {/* HOW IT WORKS */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Configure contractor-specific pipeline stages', icon: Settings },
                  { step: '2', title: 'Apply your branding (logo, colors, domain if supported)', icon: Target },
                  { step: '3', title: 'Install automation + routing systems', icon: Zap },
                  { step: '4', title: 'Add booking, follow-up, and lead tracking', icon: Calendar },
                  { step: '5', title: 'Train your team on usage + daily process', icon: Users }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#0066FF]">Step {item.step}</span>
                        </div>
                        <p className="text-gray-300">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                What's Included
              </h2>
              <ul className="space-y-3">
                {[
                  'Custom contractor pipeline setup',
                  'Brand configuration (logo + visual alignment)',
                  'Automation + workflow installation',
                  'Lead routing + stage logic',
                  'User role + permission setup',
                  'Basic reporting dashboard',
                  'Launch testing + go-live checklist'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUTCOMES */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Full visibility of leads and jobs', value: 'Complete oversight' },
                  { label: 'Branded internal system for professionalism', value: 'Your brand' },
                  { label: 'Structured sales + follow-up process', value: 'Systemized workflow' },
                  { label: 'Scalable foundation for growth', value: 'Growth ready' }
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 text-center"
                  >
                    <div className="text-xl font-bold text-[#0066FF] mb-2">{outcome.value}</div>
                    <div className="text-sm text-gray-300">{outcome.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BEST FOR */}
            <div className="mb-16 pb-12 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Best For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ideal for:</h3>
                  <ul className="space-y-2">
                    {[
                      'Contractors wanting full system ownership',
                      'Multi-rep sales teams',
                      'Growing service businesses needing structured operations'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Not ideal for:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500" />
                      </div>
                      <span>Very small businesses not ready for structured CRM usage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
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

            {/* CTA BLOCK */}
            <div className="text-center bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to deploy your White-Labeled Contractor CRM?
              </h2>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto mb-4"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-500">
                Setup fee equals your monthly price. Ad spend not included.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Modal */}
      </div>
    );
  }

  // Default service detail page for other services
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
          {/* Back Link */}
          <Link
            to="/services"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>

          {/* Position Statement */}
          <div className="text-2xl md:text-3xl font-semibold text-[#0066FF] mb-8">
            {service.position}
          </div>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            {service.description}
          </p>

          {/* Includes Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Includes:</h2>
            <ul className="space-y-3">
              {service.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="px-8 py-4 rounded-lg bg-[#0066FF] text-white font-semibold shadow-lg shadow-blue-900/40 hover:scale-105 hover:shadow-blue-700/50 transition-all duration-300 flex items-center gap-2">
              Schedule a Free Consultation
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
