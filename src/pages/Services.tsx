import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { ServicesGrid } from '@/components/sections/ServicesGrid';

export const Services: React.FC = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive cloud and digital transformation services tailored to your business needs
          </p>
        </div>
      </section>

      <ServicesGrid />

      {/* Why ACC Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ACC Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading expertise, proven methodologies, and commitment to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600">300+ successful projects delivered across industries</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with deep domain expertise</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600">Enterprise-grade security and compliance standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              A proven methodology for successful cloud transformation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Assessment', desc: 'Comprehensive evaluation of current infrastructure and requirements' },
              { step: '2', title: 'Strategy', desc: 'Develop customized roadmap aligned with business objectives' },
              { step: '3', title: 'Implementation', desc: 'Execute migration and transformation with minimal disruption' },
              { step: '4', title: 'Optimization', desc: 'Continuous improvement and cost optimization' },
              { step: '5', title: 'Support', desc: '24/7 managed services and ongoing support' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
