import React from 'react';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/utils/constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform rotate-45 -left-24 -top-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute transform -rotate-45 -right-24 -bottom-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">
              Cloud Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Leading cloud transformation partner delivering innovative solutions for enterprise success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href={ROUTES.CONTACT}>
              Get Started
            </Button>
            <Button variant="secondary" size="lg" href={ROUTES.SERVICES} className="!border-white !text-white hover:!bg-white hover:!text-purple-700">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
