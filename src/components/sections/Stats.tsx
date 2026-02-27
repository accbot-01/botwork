import React from 'react';
import statsData from '@/assets/data/stats.json';
import type { Stat } from '@/types';

export const Stats: React.FC = () => {
  const stats = statsData as Stat[];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-700 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-purple-200 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
