import React from 'react';
import { Heart, ThumbsUp, TrendingUp } from 'lucide-react';

export const FloatingLeft: React.FC = () => {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 hidden lg:block animate-float">
      <div className="relative">
         {/* Main Card */}
         <div className="w-48 h-48 bg-purple-500/20 backdrop-blur-xl border border-white/10 rounded-3xl p-3 flex items-center justify-center relative transform -rotate-6">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-transparent rounded-3xl" />
            
            {/* Inner Content - Image */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative z-10">
               <img src="https://picsum.photos/300/300?random=1" alt="User" className="w-full h-full object-cover opacity-80" />
            </div>

            {/* Top Floating Badge */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#a78bfa] rounded-2xl flex flex-col items-center justify-center shadow-xl z-20">
                <div className="relative w-10 h-10 mb-1">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path className="text-purple-300" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                        <path className="text-white" strokeDasharray="77, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">77%</span>
                </div>
                <span className="text-[10px] text-white/90">Rate</span>
            </div>

            {/* Left Reaction Bubble */}
             <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-2 shadow-lg z-20 animate-bounce-slow">
                 <Heart className="w-4 h-4 text-red-500 fill-red-500" />
             </div>
             
             {/* Bottom Reaction Bubble */}
             <div className="absolute -bottom-8 left-8 bg-white rounded-full p-2 shadow-lg z-20 animate-bounce-delayed">
                 <span className="text-xs">👋</span>
             </div>
         </div>
      </div>
    </div>
  );
};

export const FloatingRight: React.FC = () => {
  return (
    <div className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 hidden lg:block animate-float-delayed">
        <div className="relative">
             {/* Main Image Card */}
            <div className="w-44 h-44 rounded-3xl overflow-hidden border-4 border-[#161229] relative shadow-2xl transform rotate-3">
                 <img src="https://picsum.photos/300/300?random=2" alt="Influencer" className="w-full h-full object-cover" />
            </div>

            {/* Reaction Badge Top */}
            <div className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 shadow-lg z-20">
                 <span className="text-lg">🔥</span>
            </div>
            
            {/* Reaction Badge Left */}
            <div className="absolute top-1/2 -left-4 bg-white rounded-full p-1.5 shadow-lg z-20 animate-pulse">
                 <ThumbsUp className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 -right-10 bg-[#a78bfa] rounded-2xl p-3 shadow-2xl flex items-center gap-3 w-40 z-30 transform rotate-1">
                 <div className="w-8 h-8 rounded-lg bg-[#0b0a16] flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                 </div>
                 <div>
                    <div className="text-white font-bold text-lg leading-none">+88%</div>
                    <div className="text-white/80 text-[10px]">Increase rate</div>
                 </div>
            </div>
        </div>
    </div>
  );
};