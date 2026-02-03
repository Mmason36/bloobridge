import React from 'react';
import { pricingTiers } from '../lib/data/pricing';
import PricingTierCard from '../components/pricing/PricingTierCard';
import BuildYourPlan from '../components/pricing/BuildYourPlan';
import IncludedInEveryPlan from '../components/pricing/IncludedInEveryPlan';
import SetupFeeExplanation from '../components/pricing/SetupFeeExplanation';

export default function Pricing() {
  const scrollToSetupFee = () => {
    const element = document.getElementById('setup-fee-explanation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
              Built for <span className="text-[#0066FF]">Operators</span>, Priced for <span className="text-[#0066FF]">Scale</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Choose a bundled plan or build your own. Setup fee equals your monthly price.
            </p>
            <p className="text-sm text-gray-500 mt-3">
              <span className="text-gray-400">Note:</span> Ad spend is not included in pricing.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {pricingTiers.map((tier) => (
                <PricingTierCard
                  key={tier.id}
                  name={tier.name}
                  monthlyPrice={tier.monthlyPrice}
                  setupFee={tier.setupFee}
                  description={tier.description}
                  growthInfrastructure={tier.growthInfrastructure}
                  outcomes={tier.outcomes}
                  includes={tier.includes}
                  popular={tier.popular}
                  bestFor={tier.bestFor}
                  onSetupFeeClick={scrollToSetupFee}
                />
              ))}
            </div>
          </div>

          {/* Included in Every Plan */}
          <IncludedInEveryPlan />

          {/* Build Your Plan Section */}
          <div className="mb-12">
            <BuildYourPlan />
          </div>

          {/* Setup Fee Explanation */}
          <div className="mb-12">
            <SetupFeeExplanation />
          </div>
        </div>
      </div>
    </div>
  );
}
