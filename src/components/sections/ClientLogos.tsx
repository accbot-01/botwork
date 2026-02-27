import React from 'react';
import clientsData from '@/assets/data/clients.json';
import type { Client } from '@/types';

export const ClientLogos: React.FC = () => {
  const clients = clientsData as Client[];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powering digital transformation for leading enterprises across industries
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <span className="text-gray-600 font-semibold text-lg">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
