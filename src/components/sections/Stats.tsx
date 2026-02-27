import React from 'react';
import statsData from '@/assets/data/stats.json';
import type { Stat } from '@/types';

export const Stats: React.FC = () => {
  const stats = statsData as Stat[];

  return (
    <section className="py-24 bg-gradient-to-br from-[#6B46C1] via-[#7C3AED] to-[#8B5CF6] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-semibold text-white">Track Record</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AWS Certified Excellence
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Industry-leading credentials and proven results
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-purple-100 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
