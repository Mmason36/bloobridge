import React, { useEffect, useRef, useState } from 'react';
import { 
  Target, 
  Phone, 
  Star, 
  Database, 
  MessageSquare, 
  Mail,
  RefreshCw,
  Calendar,
  Share2,
  TrendingUp,
  Mic,
  Users,
  Briefcase,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getServicesByCategory, categoryLabels } from '../lib/data/services';
import ServicesSectionHeading from '../components/services/ServicesSectionHeading';
import ServiceCard from '../components/services/ServiceCard';
import Badge from '../components/services/Badge';

// Icon mapping for each service
const serviceIcons: Record<number, React.ComponentType<{ className?: string }>> = {
  1: Target,      // Lead Generation Funnels
  2: Phone,       // Missed Call Text-Back
  3: Star,        // Review Growth System
  4: Database,    // Contractor CRM Setup
  5: MessageSquare, // AI Website Chatbot
  6: Mail,        // Automated Follow-Up
  7: RefreshCw,   // Lead Re-Activation
  8: Calendar,    // Appointment Booking
  9: Share2,      // Social Media Lead Funnels
  10: TrendingUp, // Sales Automation
  11: Mic,        // AI Voice Assistant
  12: Users,      // Client Portal
  13: Briefcase,  // White-Labeled CRM
  14: Zap         // Full Marketing Suite
};

// Outcomes mapping for each service
const serviceOutcomes: Record<number, string[]> = {
  1: ['Convert 3-5x more visitors', 'Reduce cost per lead by 40%', 'Book estimates 24/7'],
  2: ['Recover 85% of missed calls', 'Respond in under 30 seconds', 'Increase booking rate by 25%'],
  3: ['Get 20+ reviews in 90 days', 'Improve local search ranking', 'Build trust with prospects'],
  4: ['Track every lead automatically', 'Reduce follow-up time by 60%', 'Close 30% more jobs'],
  5: ['Qualify leads 24/7', 'Book appointments automatically', 'Reduce response time to zero'],
  6: ['Convert 40% more cold leads', 'Reduce no-shows by 50%', 'Close jobs 2x faster'],
  7: ['Reactivate 30% of old leads', 'Generate revenue from past contacts', 'Fill gaps in schedule'],
  8: ['Reduce no-shows by 60%', 'Book appointments 3x faster', 'Eliminate phone tag'],
  9: ['Lower cost per lead by 50%', 'Scale ad spend efficiently', 'Track ROI in real-time'],
  10: ['Close 35% more estimates', 'Follow up automatically', 'Reduce manual sales work'],
  11: ['Answer 100% of calls', 'Qualify leads after hours', 'Book appointments 24/7'],
  12: ['Improve client satisfaction', 'Reduce support calls by 40%', 'Build premium brand'],
  13: ['Own your customer data', 'Customize to your workflow', 'Scale without limits'],
  14: ['Complete growth system', 'Dedicated support team', 'Priority feature access']
};

export default function Services() {
  const coreServices = getServicesByCategory('core');
  const growthServices = getServicesByCategory('growth');
  const advancedServices = getServicesByCategory('advanced');

  // Featured services (Missed Call Text-Back and AI Website Chatbot)
  const featuredServices = coreServices.filter(s => s.id === 2 || s.id === 5);
  const otherCoreServices = coreServices.filter(s => s.id !== 2 && s.id !== 5);

  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, -rect.top) / (rect.height - window.innerHeight);
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="services-bg min-h-screen text-white relative">
      {/* Bridge Background - Parallax effect, edge-to-edge at top */}
      <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden pointer-events-none left-0 right-0">
        <div 
          className="absolute left-0 right-0 w-screen h-[150%] -top-[25%]"
          style={{
            transform: `translateY(${scrollY * 30}%)`,
            willChange: 'transform'
          }}
        >
          <img 
            src="/bridge-hero.jpg" 
            alt="BlooBridge" 
            className="w-screen h-full opacity-40"
            style={{ 
              filter: 'brightness(0.5) saturate(1.3)', 
              objectFit: 'cover',
              objectPosition: 'center top',
              width: '100vw',
              minWidth: '100vw'
            }}
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]" />
        {/* Blue glow overlay to enhance the bridge's blue light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0066FF]/25 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 pt-32 pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
              <span className="text-[#0066FF]">Automation</span> & <span className="text-[#0066FF]">Lead Generation</span> Services
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-2 font-medium">
              Complete marketing and automation systems built for contractors — and proven for any local service business.
            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
              Turn more visitors into booked estimates, automate follow-ups, and scale without adding overhead.
            </p>
            
            {/* Trust Strip */}
            <div className="flex justify-center pt-3 border-t border-white/5">
              <div className="bg-gray-800/50 border border-[#0066FF]/50 rounded-lg px-4 py-1.5 backdrop-blur-sm">
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs font-semibold text-gray-300">
                  <span className="text-gray-200 font-bold">Trusted by:</span>
                  <span className="font-medium">Roofing</span>
                  <span className="text-gray-500">•</span>
                  <span className="font-medium">HVAC</span>
                  <span className="text-gray-500">•</span>
                  <span className="font-medium">Plumbing</span>
                  <span className="text-gray-500">•</span>
                  <span className="font-medium">Electrical</span>
                  <span className="text-gray-500">•</span>
                  <span className="font-medium">Concrete</span>
                  <span className="text-gray-500">•</span>
                  <span className="font-medium">and other local service businesses</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Services Section */}
          <div className="mb-16 relative">
            {/* Section Background Overlay */}
            <div className="absolute inset-0 -mx-4 md:-mx-6 bg-gradient-to-b from-white/2 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            
            <div className="relative">
              <ServicesSectionHeading 
                title={categoryLabels.core}
                subtitle="Essential systems that drive immediate results"
              />

            {/* Featured Services */}
            {featuredServices.length > 0 && (
              <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {featuredServices.map((featuredService) => (
                  <div key={featuredService.id} className="relative">
                    <div className="absolute -top-3 -right-3 z-10">
                      <Badge variant="popular">Most Popular</Badge>
                    </div>
                    <Link
                      to={`/services/${featuredService.slug}`}
                      className="block group relative bg-gradient-to-br from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95 border-2 border-[#0066FF]/60 rounded-lg p-4 md:p-5 hover:border-[#0066FF] hover:shadow-2xl hover:shadow-[#0066FF]/25 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] backdrop-blur-sm"
                      style={{
                        boxShadow: '0 0 0 1px rgba(0, 102, 255, 0.1), 0 8px 32px rgba(0, 102, 255, 0.08)'
                      }}
                    >
                      {serviceIcons[featuredService.id] && (
                        <div className="mb-3">
                          <div className="w-10 h-10 rounded-lg bg-[#0066FF]/20 border border-[#0066FF]/40 flex items-center justify-center group-hover:bg-[#0066FF]/30 group-hover:border-[#0066FF]/60 transition-colors">
                            {React.createElement(serviceIcons[featuredService.id], { className: "w-5 h-5 text-[#0066FF]" })}
                          </div>
                        </div>
                      )}
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-[#0066FF] transition-colors">
                        {featuredService.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-2 leading-relaxed">
                        {featuredService.position}
                      </p>
                      <p className="text-xs text-gray-400 mb-3 leading-relaxed">
                        {featuredService.description}
                      </p>
                      {serviceOutcomes[featuredService.id] && (
                        <ul className="space-y-1.5 mb-4">
                          {serviceOutcomes[featuredService.id].slice(0, 3).map((outcome, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs text-gray-300">
                              <div className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex items-center text-[#0066FF] text-xs font-semibold group-hover:gap-2 transition-all mb-3">
                        Learn more
                        <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                      {/* Proof line */}
                      <div className="pt-3 border-t border-white/10">
                        <p className="text-xs text-gray-500">
                          <span className="text-gray-400">Example result:</span>{' '}
                          {featuredService.id === 2 ? (
                            <>Average client <span className="text-[#0066FF] font-semibold">recovers 85% of missed calls</span> and increases booking rate by 25%</>
                          ) : (
                            <>Average client sees <span className="text-[#0066FF] font-semibold">24/7 lead qualification</span> with zero response time</>
                          )}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {/* Other Core Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {otherCoreServices.map((service) => {
                  const Icon = serviceIcons[service.id];
                  return (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      icon={Icon}
                      outcomes={serviceOutcomes[service.id]}
                    />
                  );
                })}
              </div>
            </div>
            
            {/* Section Divider */}
            <div className="mt-12 pt-12 border-t border-white/5"></div>
          </div>

          {/* Growth & Expansion Section */}
          <div className="mb-16 relative">
            {/* Section Background Overlay */}
            <div className="absolute inset-0 -mx-4 md:-mx-6 bg-gradient-to-b from-white/2 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            
            <div className="relative">
              <ServicesSectionHeading 
                title={categoryLabels.growth}
                subtitle="Scale your business with advanced automation"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {growthServices.map((service) => {
                  const Icon = serviceIcons[service.id];
                  return (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      icon={Icon}
                      outcomes={serviceOutcomes[service.id]}
                    />
                  );
                })}
              </div>
            </div>
            
            {/* Section Divider */}
            <div className="mt-12 pt-12 border-t border-white/5"></div>
          </div>

          {/* Advanced / Premium Section */}
          <div className="mb-24 relative">
            {/* Section Background Overlay */}
            <div className="absolute inset-0 -mx-4 md:-mx-6 bg-gradient-to-b from-white/2 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            
            <div className="relative">
              <ServicesSectionHeading 
                title={categoryLabels.advanced}
                subtitle="Enterprise-level solutions for established contractors"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advancedServices.map((service) => {
                  const Icon = serviceIcons[service.id];
                  return (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      icon={Icon}
                      outcomes={serviceOutcomes[service.id]}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
