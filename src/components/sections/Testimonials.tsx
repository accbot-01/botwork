import React from 'react';
import { Card } from '@/components/ui/Card';
import testimonialsData from '@/assets/data/testimonials.json';
import type { Testimonial } from '@/types';

export const Testimonials: React.FC = () => {
  const testimonials = testimonialsData as Testimonial[];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from industry leaders about their transformation journey with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} type="testimonial" data={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
