import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    trade: '',
    companyName: '',
    serviceArea: '',
    helpWith: '',
    contactMethod: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showBookingWidget, setShowBookingWidget] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // GoHighLevel webhook URLs
  const GHL_WEBHOOK_URL_CALL = 'https://services.leadconnectorhq.com/hooks/Rj4W03IdKKvwAF4wuY33/webhook-trigger/d4b97090-3476-4440-bc6e-45ca593390f0';
  const GHL_WEBHOOK_URL_CONSULTATION = 'https://services.leadconnectorhq.com/hooks/Rj4W03IdKKvwAF4wuY33/webhook-trigger/Zh5nkRd1TouULIN6cEbb';

  // Scroll to form if hash is present
  useEffect(() => {
    if (window.location.hash === '#form') {
      const formElement = document.getElementById('form');
      if (formElement) {
        setTimeout(() => {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  // Load booking widget script when widget is shown
  useEffect(() => {
    if (showBookingWidget) {
      const script = document.createElement('script');
      script.src = 'https://api.bloobridge.com/js/form_embed.js';
      script.type = 'text/javascript';
      script.async = true;
      
      // Check if script already exists
      if (!document.querySelector(`script[src="${script.src}"]`)) {
        document.body.appendChild(script);
      }

      // Listen for postMessage events from the booking widget
      const handleMessage = (event: MessageEvent) => {
        // Check if message is from bloobridge domain
        if (event.origin.includes('bloobridge.com') || event.origin.includes('api.bloobridge.com')) {
          // Handle iframe resize messages
          if (event.data?.type === 'resize' || event.data?.height) {
            const iframe = document.getElementById('YQDUp8wSDB2kpqrsiJ3S_1770259001137') as HTMLIFrameElement;
            if (iframe && event.data.height) {
              iframe.style.height = `${event.data.height}px`;
            }
          }
          
          // Common booking completion events
          if (event.data?.type === 'booking_complete' || 
              event.data?.event === 'booking_complete' ||
              event.data?.status === 'success' ||
              event.data?.bookingComplete) {
            navigate('/booking-confirmation');
          }
        }
      };

      window.addEventListener('message', handleMessage);

      // Also listen for iframe load to ensure it can expand
      const iframe = document.getElementById('YQDUp8wSDB2kpqrsiJ3S_1770259001137') as HTMLIFrameElement;
      if (iframe) {
        iframe.onload = () => {
          // Give iframe time to render, then try to get its content height
          setTimeout(() => {
            try {
              const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
              if (iframeDoc) {
                const height = Math.max(
                  iframeDoc.body.scrollHeight,
                  iframeDoc.body.offsetHeight,
                  iframeDoc.documentElement.clientHeight,
                  iframeDoc.documentElement.scrollHeight,
                  iframeDoc.documentElement.offsetHeight
                );
                iframe.style.height = `${height}px`;
              }
            } catch (e) {
              // Cross-origin restrictions - this is expected, rely on postMessage instead
              console.log('Iframe cross-origin - using postMessage for resize');
            }
          }, 1000);
        };
      }

      return () => {
        // Cleanup: remove script and event listener
        const existingScript = document.querySelector(`script[src="${script.src}"]`);
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
        window.removeEventListener('message', handleMessage);
      };
    }
  }, [showBookingWidget, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.trade) newErrors.trade = 'Trade is required';
    if (!formData.helpWith.trim()) newErrors.helpWith = 'Please describe what you need help with';
    if (!formData.contactMethod) newErrors.contactMethod = 'Please select a preferred contact method';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent, webhookUrl: string) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Format data for GoHighLevel webhook
      // GoHighLevel webhooks accept flat JSON structure
      const payload = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        phone: formData.phone.replace(/\D/g, ''), // Remove formatting, keep digits only
        email: formData.email.trim(),
        companyName: formData.companyName.trim() || '',
        // Custom fields - these will map to your GHL form fields
        trade: formData.trade,
        serviceArea: formData.serviceArea.trim() || '',
        helpWith: formData.helpWith.trim(),
        contactMethod: formData.contactMethod,
        source: 'Website Contact Form'
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          trade: '',
          companyName: '',
          serviceArea: '',
          helpWith: '',
          contactMethod: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Something went wrong. Please try again or call us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const nextSteps = [
    {
      number: '01',
      title: 'Review your current lead flow',
      description: 'We examine how leads come in and where they go.'
    },
    {
      number: '02',
      title: 'Identify response + follow-up gaps',
      description: 'We pinpoint where leads are getting lost or going cold.'
    },
    {
      number: '03',
      title: 'Outline a practical automation plan',
      description: 'We map out what systems fit your workflow and budget.'
    }
  ];

  const microFaqs = [
    {
      question: 'Do you run ads?',
      answer: 'We install growth infrastructure and optimize systems. If you want paid ads, we set up tracking and landing pages, but you fund the ad budget directly. Ad spend is not included in our pricing.'
    },
    {
      question: 'How fast can we launch?',
      answer: 'Initial setup typically takes 2-4 weeks depending on system complexity. We provide a timeline during the Strategy & Audit phase based on your specific needs.'
    },
    {
      question: 'Can this work with my existing tools?',
      answer: 'Yes. We integrate with most CRMs, websites, and marketing tools. During setup, we connect everything to work together seamlessly.'
    }
  ];

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

      <div className="relative z-10 pt-24 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* A. HERO */}
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Let's Tighten Up Your <span className="text-[#0066FF]">Lead Handling</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              Book a quick call and we'll review your current lead flow, identify follow-up gaps, and outline a practical plan to help you book more jobs.
            </p>
            <p className="text-sm text-gray-500">
              Built for roofing, HVAC, fencing, plumbing, electrical, and concrete.
            </p>
          </div>

          {/* B. CONTACT OPTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Call Card */}
            <div className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300 shadow-lg">
              <Phone className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Call</h3>
              <p className="text-sm text-gray-400 mb-4">Speak with a systems specialist.</p>
              <a 
                href="tel:6163342672" 
                className="text-lg text-white hover:text-[#0066FF] transition-colors duration-200 font-medium block mb-2"
              >
                (616) 334-2672
              </a>
              <p className="text-xs text-gray-500">Mon–Fri • 9am–5pm ET</p>
            </div>

            {/* Email Card */}
            <div className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300 shadow-lg">
              <Mail className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-sm text-gray-400 mb-4">Send details about your business and current setup.</p>
              <a 
                href="mailto:info@bloobridge.com" 
                className="text-lg text-white hover:text-[#0066FF] transition-colors duration-200 font-medium block mb-2 break-all"
              >
                info@bloobridge.com
              </a>
              <p className="text-xs text-gray-500">We respond within one business day.</p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div id="form" className="mb-8 scroll-mt-24">
            <div className="bg-[#0a0a0a]/90 border border-[#0066FF]/30 rounded-lg p-6 md:p-8">
              {showBookingWidget ? (
                <div className="w-full">
                  <button
                    onClick={() => setShowBookingWidget(false)}
                    className="mb-4 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    ← Back to form
                  </button>
                  <div className="w-full" style={{ minHeight: '800px', height: 'auto' }}>
                    <iframe
                      src={`https://api.bloobridge.com/widget/booking/YQDUp8wSDB2kpqrsiJ3S?redirect=${encodeURIComponent(window.location.origin + '/booking-confirmation')}`}
                      style={{ width: '100%', border: 'none', minHeight: '800px', height: '100%' }}
                      scrolling="yes"
                      id="YQDUp8wSDB2kpqrsiJ3S_1770259001137"
                      className="w-full"
                      title="Schedule a Free Consultation"
                      allow="clipboard-read; clipboard-write"
                    />
                  </div>
                </div>
              ) : isSubmitted ? (
                <div className="text-center">
                  <CheckCircle2 className="w-16 h-16 text-[#0066FF] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Thanks — we received your request.</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    We'll reach out with next steps.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200"
                  >
                    Submit Another Request
                  </button>
                </div>
            ) : (
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6" noValidate>
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Free Consultation</h2>
                  <p className="text-gray-400 mb-4 inline-block border-b-2 border-[#0066FF] pb-2">15 minutes, No pressure, Just clarity.</p>
                </div>
                  {/* First Name & Last Name - 50% width each */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold mb-2 text-white">
                        First Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        required
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all"
                      />
                      {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold mb-2 text-white">
                        Last Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        required
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all"
                      />
                      {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Phone & Preferred Contact Method - 50% width each */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-white">
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(###) ###-####"
                        required
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="contactMethod" className="block text-sm font-semibold mb-2 text-white">
                        Preferred Contact Method <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="contactMethod"
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 12px center',
                          backgroundSize: '12px',
                          paddingRight: '36px'
                        }}
                      >
                        <option value="">Select contact method</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Email">Email</option>
                      </select>
                      {errors.contactMethod && <p className="text-red-400 text-xs mt-1">{errors.contactMethod}</p>}
                    </div>
                  </div>

                  {/* Email & Trade - 50% width each */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="trade" className="block text-sm font-semibold mb-2 text-white">
                        Trade <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="trade"
                        name="trade"
                        value={formData.trade}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 12px center',
                          backgroundSize: '12px',
                          paddingRight: '36px'
                        }}
                      >
                        <option value="">Select your trade</option>
                        <option value="Roofing">Roofing</option>
                        <option value="HVAC">HVAC</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Fencing">Fencing</option>
                        <option value="Concrete">Concrete</option>
                        <option value="Landscaping">Landscaping</option>
                        <option value="Tree Service">Tree Service</option>
                        <option value="Pool & Spa">Pool & Spa</option>
                        <option value="Garage Doors">Garage Doors</option>
                        <option value="Windows & Siding">Windows & Siding</option>
                        <option value="Gutters">Gutters</option>
                        <option value="Painting">Painting</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.trade && <p className="text-red-400 text-xs mt-1">{errors.trade}</p>}
                    </div>
                  </div>

                  {/* Company Name & Service Area - 50% width each */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-semibold mb-2 text-white">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="serviceArea" className="block text-sm font-semibold mb-2 text-white">
                        Service Area / City
                      </label>
                      <input
                        type="text"
                        id="serviceArea"
                        name="serviceArea"
                        value={formData.serviceArea}
                        onChange={handleChange}
                        placeholder="City / Area"
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* What do you need help with */}
                  <div>
                    <label htmlFor="helpWith" className="block text-sm font-semibold mb-2 text-white">
                      What do you need help with? <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="helpWith"
                      name="helpWith"
                      value={formData.helpWith}
                      onChange={handleChange}
                      placeholder="Briefly describe what you want to improve (lead follow-up, missed calls, reviews, booking, pipeline, etc.)"
                      required
                      rows={4}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all resize-vertical"
                    />
                    {errors.helpWith && <p className="text-red-400 text-xs mt-1">{errors.helpWith}</p>}
                  </div>

                  {errors.submit && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-400 text-sm">{errors.submit}</p>
                    </div>
                  )}

                  {/* Submit Buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={(e) => handleSubmit(e, GHL_WEBHOOK_URL_CALL)}
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request a Call
                          <ArrowUpRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={async (e) => {
                        // Validate form before submitting and showing booking widget
                        if (!validateForm()) {
                          return;
                        }

                        setIsSubmitting(true);

                        try {
                          // Format data for GoHighLevel webhook
                          const payload = {
                            firstName: formData.firstName.trim(),
                            lastName: formData.lastName.trim(),
                            phone: formData.phone.replace(/\D/g, ''), // Remove formatting, keep digits only
                            email: formData.email.trim(),
                            companyName: formData.companyName.trim() || '',
                            trade: formData.trade,
                            serviceArea: formData.serviceArea.trim() || '',
                            helpWith: formData.helpWith.trim(),
                            contactMethod: formData.contactMethod,
                            source: 'Website Contact Form - Consultation Booking'
                          };

                          // Submit to webhook
                          const response = await fetch(GHL_WEBHOOK_URL_CONSULTATION, {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(payload),
                          });

                          if (response.ok) {
                            // Show booking widget after successful webhook submission
                            setShowBookingWidget(true);
                          } else {
                            throw new Error('Webhook submission failed');
                          }
                        } catch (error) {
                          console.error('Form submission error:', error);
                          setErrors({ submit: 'Something went wrong. Please try again or call us directly.' });
                        } finally {
                          setIsSubmitting(false);
                        }
                      }}
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 rounded-lg border-2 border-[#0066FF] text-[#0066FF] font-semibold hover:bg-[#0066FF] hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#0066FF]/30 border-t-[#0066FF] rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Schedule a Free Consultation
                          <ArrowUpRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-16"></div>

          {/* D. WHAT HAPPENS NEXT */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              What Happens Next
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nextSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border-2 border-[#0066FF]/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-[#0066FF]">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-16"></div>

          {/* E. MICRO-FAQ */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
              Common Questions
            </h2>
            <div className="space-y-3 max-w-2xl mx-auto">
              {microFaqs.map((faq, index) => (
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
        </div>
      </div>
    </div>
  );
}
