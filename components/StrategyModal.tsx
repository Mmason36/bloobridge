import React, { useState } from 'react';
import { X, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { generateGrowthStrategy } from '../services/geminiService';
import { GrowthStrategy } from '../types';

interface StrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StrategyModal: React.FC<StrategyModalProps> = ({ isOpen, onClose }) => {
  const [brandName, setBrandName] = useState('');
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<GrowthStrategy | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStrategy(null);
    try {
      const result = await generateGrowthStrategy(brandName, niche);
      setStrategy(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-[#161229] border border-white/10 w-full max-w-md rounded-2xl shadow-2xl p-6 overflow-hidden">
        
        {/* Decorative Gradients */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />

        <div className="flex justify-between items-center mb-6 relative z-10">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            AI Strategy Generator
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!strategy ? (
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <p className="text-gray-300 text-sm mb-4">
              Get a custom growth plan instantly using our Gemini-powered engine.
            </p>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Brand Name</label>
              <input 
                type="text" 
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="w-full bg-[#1c1630] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="e.g. Boostly"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Niche / Industry</label>
              <input 
                type="text" 
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full bg-[#1c1630] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="e.g. Digital Marketing"
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-3 rounded-lg shadow-lg shadow-purple-900/20 flex items-center justify-center gap-2 transition-all"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Generate Strategy'}
            </button>
          </form>
        ) : (
          <div className="space-y-4 relative z-10 animate-fade-in">
             <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-xs text-purple-300 font-semibold uppercase tracking-wider mb-1">Recommended Platform</div>
                <div className="text-white font-medium text-lg">{strategy.focusPlatform}</div>
             </div>
             
             <div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Content Ideas for {strategy.brandName}</div>
                <ul className="space-y-3">
                    {strategy.ideas.map((idea, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                             <div className="mt-1 min-w-[20px] h-[20px] rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                                {idx + 1}
                             </div>
                             <span>{idea}</span>
                        </li>
                    ))}
                </ul>
             </div>

             <button 
               onClick={() => setStrategy(null)}
               className="w-full mt-4 text-sm text-gray-400 hover:text-white flex items-center justify-center gap-1 transition-colors"
             >
                Try Another <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StrategyModal;