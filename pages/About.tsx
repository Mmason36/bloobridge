import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function About() {
  const differentiators = [
    'Built from real service-industry experience',
    'Systems-first approach (not ad-first)',
    'Automation before expansion',
    'Structured process with defined deliverables',
    'Transparent pricing',
    'No long-term contracts'
  ];

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
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Built by <span className="text-[#0066FF]">Operators</span>. Not Marketers.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Our systems weren't created in a marketing lab. They were built inside a family-owned service business established in 1994, refined through real competition and real growth.
            </p>
            <button className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto">
              Book a Strategy Call
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Our Story Section */}
          <div className="mb-16 pb-12 border-b border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Where It Started
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                In 1994, a family-owned fence company was established. For years, it operated with traditional methods: word-of-mouth, local advertising, and manual follow-up. Then large franchise competitors began entering the market with aggressive marketing and structured systems.
              </p>
              <p>
                Traditional marketing felt inconsistent and reactive. Missed calls went unanswered. Follow-up was slow. Pipeline visibility was limited. These weren't theoretical problems. They were daily operational challenges that directly impacted revenue.
              </p>
              <p>
                To compete, systems were built internally. Automation replaced manual processes. Structured follow-up replaced reactive responses. Pipeline tracking replaced guesswork. Performance changed.
              </p>
              <p>
                Over time, those systems became repeatable infrastructure. What started as internal solutions evolved into structured growth systems. Today, those same systems are still actively running and being used in the business that built them.
              </p>
            </div>
          </div>

          {/* The Shift Section */}
          <div className="mb-16 pb-12 border-b border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              From Survival to Systemization
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                These systems were refined internally before ever being offered externally. Growth came from structure, not guesswork. Performance improved because processes were defined, automated, and measured.
              </p>
              <p>
                We don't sell ads. We install infrastructure. What worked internally, the automation, the structured follow-up, the pipeline systems, is now installed for other service businesses that need the same competitive advantage.
              </p>
            </div>
          </div>

          {/* What Makes Us Different Section */}
          <div className="mb-16 pb-12 border-b border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Why This Is Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="mb-16 pb-12 border-b border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Our Philosophy
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
              Growth isn't about running more ads. It's about installing infrastructure that turns demand into revenue.
            </p>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Install the System?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              If you're serious about structured growth, we'll show you exactly how it works.
            </p>
            <button className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2 mx-auto">
              Book a Call
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
