import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service } from '../../lib/data/services';

interface ServiceCardProps {
  service: Service;
  icon?: React.ComponentType<{ className?: string }>;
  outcomes?: string[];
  featured?: boolean;
}

export default function ServiceCard({ service, icon: Icon, outcomes, featured = false }: ServiceCardProps) {
  const defaultOutcomes = outcomes || [
    'Increase qualified leads',
    'Reduce manual follow-up time',
    'Improve conversion rates'
  ];

  return (
    <Link
      to={`/services/${service.slug}`}
      className={`
        group relative bg-[#0a0a0a]/90 border rounded-lg p-4 md:p-5 backdrop-blur-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0066FF]/15
        focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]
        ${featured 
          ? 'border-[#0066FF]/50 bg-[#0a0a0a]/95 hover:border-[#0066FF] hover:shadow-[#0066FF]/20' 
          : 'border-white/10 hover:border-[#0066FF]/60 hover:bg-[#0a0a0a]/95'
        }
      `}
    >
      {/* Icon */}
      {Icon && (
        <div className="mb-3">
          <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center group-hover:bg-[#0066FF]/20 group-hover:border-[#0066FF]/40 transition-all duration-300">
            <Icon className="w-5 h-5 text-[#0066FF] group-hover:text-[#3399FF] transition-colors duration-300" />
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-[#0066FF] transition-colors duration-300">
        {service.title}
      </h3>

      {/* Position Statement */}
      <p className="text-gray-300 mb-3 leading-relaxed text-sm">
        {service.position}
      </p>

      {/* Description */}
      <p className="text-xs text-gray-400 mb-4 leading-relaxed">
        {service.description}
      </p>

      {/* Outcomes */}
      {defaultOutcomes && defaultOutcomes.length > 0 && (
        <ul className="space-y-2 mb-5">
          {defaultOutcomes.slice(0, 3).map((outcome, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed">
              <div className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <div className="flex items-center text-[#0066FF] text-xs font-semibold group-hover:gap-2 transition-all duration-300">
        Learn more
        <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-300" />
      </div>
    </Link>
  );
}

