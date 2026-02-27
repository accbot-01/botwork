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
      
      {/* One-stop shop section with gradient */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-sm font-semibold text-purple-700">Complete Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your One-Stop Shop for Cloud Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              From strategy to implementation, we provide end-to-end cloud solutions 
              that transform your business and drive measurable results.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              href={ROUTES.CONTACT}
              className="!bg-gradient-to-r !from-[#6B46C1] !to-[#8B5CF6] hover:!from-[#7C3AED] hover:!to-[#9333ea] !shadow-xl hover:!shadow-2xl transition-all duration-300"
            >
              Start Your Journey →
            </Button>
          </div>
        </div>
      </section>

      <ProductsGrid />
      
      {/* AWS Competencies - Enhanced with gradient background */}
      <section className="py-24 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-sm font-semibold text-purple-700">AWS Partner</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AWS Competencies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized expertise across multiple AWS competency areas
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Migration', icon: '🚀' },
              { name: 'DevOps', icon: '⚙️' },
              { name: 'Data & Analytics', icon: '📊' },
              { name: 'Security', icon: '🔒' }
            ].map((competency) => (
              <div 
                key={competency.name} 
                className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#6B46C1] to-[#8B5CF6] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">{competency.icon}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-700 transition-colors">
                  {competency.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      
      {/* Leading Cloud Revolution - Purple gradient section */}
      <section className="py-24 bg-gradient-to-br from-[#6B46C1] via-[#7C3AED] to-[#8B5CF6] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold text-white">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Leading the Cloud Revolution
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
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
              <div 
                key={idx} 
                className="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-purple-100 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <ClientLogos />
      
      {/* CTA Section - Enhanced gradient */}
      <section className="py-24 bg-gradient-to-br from-[#6B46C1] via-[#7C3AED] to-[#8B5CF6] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-10 text-purple-100 leading-relaxed">
              Let's discuss how we can help you achieve your cloud goals and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg" 
                href={ROUTES.CONTACT} 
                className="!bg-white !text-purple-700 hover:!bg-purple-50 !shadow-xl hover:!shadow-2xl transition-all duration-300"
              >
                Contact Us →
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                href={ROUTES.SERVICES} 
                className="!border-2 !border-white !text-white hover:!bg-white hover:!text-purple-700 !shadow-lg transition-all duration-300"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
