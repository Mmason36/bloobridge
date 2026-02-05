import React from 'react';

export default function IncludedInEveryPlan() {
  const items = [
    'Guided onboarding + launch',
    'System monitoring + optimization',
    'Support + training',
    'Mobile-friendly pipeline access',
    'Cancel anytime'
  ];

  return (
    <div className="mb-12">
      <h3 className="text-sm md:text-base font-medium text-gray-400 mb-3 text-center">
        Included in every plan
      </h3>
      <div className="bg-[#0a0a0a]/50 border border-white/5 rounded-lg p-3 md:p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center p-2 rounded border border-[#0066FF]/20 bg-transparent"
            >
              <p className="text-xs text-gray-400">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

