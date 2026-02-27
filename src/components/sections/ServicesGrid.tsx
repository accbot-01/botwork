import React from 'react';
import { Card } from '@/components/ui/Card';
import servicesData from '@/assets/data/services.json';
import type { Service } from '@/types';

export const ServicesGrid: React.FC = () => {
  const services = servicesData as Service[];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cloud and digital transformation services to accelerate your business growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} type="service" data={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
