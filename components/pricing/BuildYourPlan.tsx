import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { pricingServices } from '../../lib/data/pricing';
import { ArrowUpRight } from 'lucide-react';

export default function BuildYourPlan() {
  const [selectedServices, setSelectedServices] = useState<Set<number>>(new Set());

  const toggleService = (serviceId: number) => {
    const newSelected = new Set(selectedServices);
    if (newSelected.has(serviceId)) {
      newSelected.delete(serviceId);
    } else {
      newSelected.add(serviceId);
    }
    setSelectedServices(newSelected);
  };

  const calculateMonthlyTotal = () => {
    let total = 0;
    selectedServices.forEach(serviceId => {
      const service = pricingServices.find(s => s.id === serviceId);
      if (service) {
        total += service.monthlyPrice;
      }
    });
    return total;
  };

  const calculateSetupFee = () => {
    let total = 0;
    selectedServices.forEach(serviceId => {
      const service = pricingServices.find(s => s.id === serviceId);
      if (service) {
        // Use custom setupFee if provided, otherwise use monthlyPrice
        total += service.setupFee || service.monthlyPrice;
      }
    });
    return total;
  };

  const monthlyTotal = calculateMonthlyTotal();
  const setupFee = calculateSetupFee();
  const firstMonthTotal = monthlyTotal + setupFee;

  return (
    <div className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 md:p-6 backdrop-blur-sm">
      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
        Build Your Plan
      </h3>
      <p className="text-sm text-gray-400 mb-6">
        Need something specific? Select what you want and see an instant estimate.
      </p>

      <div className="space-y-2 mb-8">
        {pricingServices.map((service) => (
          <label
            key={service.id}
            className="flex items-center justify-between p-3 rounded-lg border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selectedServices.has(service.id)}
                onChange={() => toggleService(service.id)}
                className="w-4 h-4 rounded border-2 border-white/20 bg-transparent text-[#0066FF] focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] cursor-pointer checked:bg-[#0066FF] checked:border-[#0066FF] transition-colors"
              />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {service.name}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-semibold text-[#0066FF]">
                ${service.monthlyPrice}/mo
              </span>
              {service.setupFee && service.setupFee !== service.monthlyPrice && (
                <span className="text-xs text-gray-500">
                  ${service.setupFee} setup
                </span>
              )}
            </div>
          </label>
        ))}
      </div>

      {/* Pricing Summary */}
      <div className="border-t border-white/10 pt-6 mb-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-white/5">
            <span className="text-sm text-gray-400">Estimated Monthly Total</span>
            <span className="text-2xl md:text-3xl font-bold text-white">${monthlyTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-white/5">
            <span className="text-sm text-gray-400">One-Time Setup Fee</span>
            <span className="text-xl md:text-2xl font-bold text-gray-300">${setupFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm font-medium text-gray-300">Estimated First Month Total</span>
            <span className="text-2xl md:text-3xl font-bold text-[#0066FF]">${firstMonthTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <p className="text-xs text-gray-500 text-center">
          Ad spend not included (if running paid ads, you fund the ad budget directly).
        </p>
        <p className="text-xs text-gray-500 text-center">
          Estimates shown. Final pricing confirmed after a quick strategy call.
        </p>
      </div>

      <p className="text-xs text-gray-400 mb-4 text-center">
        Prefer a done-for-you recommendation? We'll map the best plan in 15 minutes.
      </p>

      <Link
        to="/contact#form"
        className="w-full px-4 py-2.5 rounded-lg bg-[#0066FF] text-white font-semibold text-sm hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
      >
        Request Custom Plan
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

