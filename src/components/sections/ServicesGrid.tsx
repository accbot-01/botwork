import React from 'react';
import { Card } from '@/components/ui/Card';
import servicesData from '@/assets/data/services.json';
import type { Service } from '@/types';

export const ServicesGrid: React.FC = () => {
  const services = servicesData as Service[];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
            <span className="text-sm font-semibold text-purple-700">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Cloud Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end cloud solutions designed to accelerate your digital transformation journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <Card key={service.id} type="service" data={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
