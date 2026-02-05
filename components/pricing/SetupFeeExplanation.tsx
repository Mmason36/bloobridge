import React from 'react';

export default function SetupFeeExplanation() {
  return (
    <div id="setup-fee-explanation" className="bg-[#0a0a0a]/90 border border-white/10 rounded-lg p-5 md:p-6 backdrop-blur-sm">
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
        Why is there a setup fee?
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-semibold text-[#0066FF] mb-3">Month 1 (Setup) includes:</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-xs text-gray-300">
              <div className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
              <span>System build + configuration</span>
            </li>
            <li className="flex items-start gap-2 text-xs text-gray-300">
              <div className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
              <span>Integrations + tracking</span>
            </li>
            <li className="flex items-start gap-2 text-xs text-gray-300">
              <div className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
              <span>Workflow testing</span>
            </li>
            <li className="flex items-start gap-2 text-xs text-gray-300">
              <div className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
              <span>Launch + onboarding</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-[#0066FF] mb-3">Ongoing monthly includes:</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-xs text-gray-300">
              <div className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
              <span>Management + optimization</span>
            </li>
            <li className="flex items-start gap-2 text-xs text-gray-300">
              <div className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
              <span>Monitoring + improvements</span>
            </li>
            <li className="flex items-start gap-2 text-xs text-gray-300">
              <div className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
              <span>Support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


