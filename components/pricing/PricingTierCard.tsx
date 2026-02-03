import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Badge from '../services/Badge';
import { getServiceById } from '../../lib/data/pricing';

interface PricingTierCardProps {
  name: string;
  monthlyPrice: number;
  setupFee: number;
  description: string;
  growthInfrastructure: string;
  outcomes: string[];
  includes: number[];
  popular?: boolean;
  bestFor?: string;
  onSetupFeeClick?: () => void;
}

export default function PricingTierCard({
  name,
  monthlyPrice,
  setupFee,
  description,
  growthInfrastructure,
  outcomes,
  includes,
  popular = false,
  bestFor,
  onSetupFeeClick
}: PricingTierCardProps) {
  const isScale = name === 'Scale System';
  
  return (
    <div className={`relative bg-[#0a0a0a]/90 border rounded-lg p-5 md:p-6 backdrop-blur-sm flex flex-col ${
      popular 
        ? 'border-[#0066FF]/60 bg-gradient-to-br from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95' 
        : 'border-white/10'
    }`}>
      {popular && (
        <div className="absolute -top-3 -right-3 z-10">
          <Badge variant="popular">Most Popular</Badge>
        </div>
      )}
      
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
        {name}
      </h3>
      
      <p className="text-xs text-gray-400 mb-4 leading-relaxed">
        {growthInfrastructure}
      </p>
      
      <div className="mb-4">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl md:text-4xl font-bold text-white">${monthlyPrice}</span>
          <span className="text-gray-400 text-sm">/month</span>
        </div>
        <div className="text-xs text-gray-500">
          Setup Fee: <span className="text-gray-300 font-semibold">${setupFee}</span> (one-time)
        </div>
        {onSetupFeeClick && (
          <button
            onClick={onSetupFeeClick}
            className="text-xs text-[#0066FF] hover:text-[#3399FF] underline mt-1 transition-colors"
          >
            Setup fee explained
          </button>
        )}
      </div>

      {/* Outcome Bullets */}
      <div className="mb-5">
        <ul className="space-y-2">
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-gray-300">
              <div className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Best For (Scale tier) */}
      {bestFor && (
        <div className="mb-4 p-2 rounded bg-[#0066FF]/10 border border-[#0066FF]/20">
          <p className="text-xs text-[#0066FF] font-medium">{bestFor}</p>
        </div>
      )}

      {/* Includes Section */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wide">Includes:</p>
        <ul className="space-y-2">
          {includes.map((serviceId) => {
            const service = getServiceById(serviceId);
            if (!service) return null;
            return (
              <li key={serviceId} className="flex items-start gap-2 text-xs text-gray-300">
                <div className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
                <span>{service.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      
      <button className="w-full mt-auto px-4 py-2.5 rounded-lg bg-[#0066FF] text-white font-semibold text-sm hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2">
        {name === 'Foundation System' ? 'Book Foundation Call' : 
         name === 'Growth System' ? 'Book Growth Call' : 
         name === 'Scale System' ? 'Book Scale Call' : 
         'Book Strategy Call'}
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
}

