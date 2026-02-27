import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ProductsGrid } from '@/components/sections/ProductsGrid';
import { Stats } from '@/components/sections/Stats';
import { Testimonials } from '@/components/sections/Testimonials';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/utils/constants';

export const Home: React.FC = () => {
  return (
    <Layout transparentHeader>
      <Hero />
      <ServicesGrid />
      
      {/* One-stop shop section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your One-Stop Shop for Cloud Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              From strategy to implementation, we provide end-to-end cloud solutions 
              that transform your business and drive measurable results.
            </p>
            <Button variant="primary" size="lg" href={ROUTES.CONTACT}>
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      <ProductsGrid />
      
      {/* AWS Competencies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AWS Competencies</h2>
            <p className="text-xl text-gray-600">
              Recognized expertise across multiple AWS competency areas
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {['Migration', 'DevOps', 'Data & Analytics', 'Security'].map((competency) => (
              <div key={competency} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-bold text-gray-900">{competency}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      
      {/* Leading Cloud Revolution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leading the Cloud Revolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovation, expertise, and commitment to excellence drive everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🚀', title: 'Innovation First', desc: 'Cutting-edge solutions for modern challenges' },
              { icon: '👥', title: 'Expert Team', desc: 'Certified professionals with deep expertise' },
              { icon: '⚡', title: 'Rapid Deployment', desc: 'Fast time-to-value with proven methodologies' },
              { icon: '🛡️', title: 'Enterprise Security', desc: 'Bank-grade security and compliance' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <ClientLogos />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Let's discuss how we can help you achieve your cloud goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href={ROUTES.CONTACT} className="!bg-white !text-purple-700 hover:!bg-gray-100">
              Contact Us
            </Button>
            <Button variant="secondary" size="lg" href={ROUTES.SERVICES} className="!border-white !text-white hover:!bg-white hover:!text-purple-700">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
