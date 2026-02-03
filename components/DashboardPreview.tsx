import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp, Users, MousePointer2 } from 'lucide-react';

const data = [
  { name: 'Mon', value: 2400 },
  { name: 'Tue', value: 1398 },
  { name: 'Wed', value: 9800 },
  { name: 'Thu', value: 3908 },
  { name: 'Fri', value: 4800 },
  { name: 'Sat', value: 3800 },
  { name: 'Sun', value: 4300 },
];

const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-16 bg-[#161229]/80 backdrop-blur-xl border border-white/5 rounded-t-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group">
      
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 relative z-10">
        <div>
          <h3 className="text-xl text-white font-semibold">Performance Over Time</h3>
          <p className="text-gray-400 text-sm">Real-time growth analytics</p>
        </div>
        <div className="flex gap-2">
           <button className="px-3 py-1.5 text-xs font-medium text-white bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
              Short
           </button>
           <button className="px-3 py-1.5 text-xs font-medium text-gray-400 bg-transparent rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
              Filter
           </button>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative z-10">
        {/* Stat 1 */}
        <div className="bg-[#1c1630] border border-white/5 rounded-xl p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Delivered</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-semibold text-white">42,642.1</span>
            <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">+12.59%</span>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bg-[#1c1630] border border-white/5 rounded-xl p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-gray-300">Opened</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-semibold text-white">26,843</span>
            <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded-full">+7.87%</span>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="bg-[#1c1630] border border-white/5 rounded-xl p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <MousePointer2 className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-gray-300">Clicked</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-semibold text-white">525,753</span>
            <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full">-0.02%</span>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-48 w-full relative z-10 opacity-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip 
                contentStyle={{ backgroundColor: '#1c1630', borderColor: '#333', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
            />
            <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorVal)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardPreview;