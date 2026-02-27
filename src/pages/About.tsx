import React from 'react';
import { Layout } from '@/components/layout/Layout';
import officesData from '@/assets/data/offices.json';
import type { Office } from '@/types';

export const About: React.FC = () => {
  const offices = officesData as Office[];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Pioneering cloud transformation and digital innovation since 2010
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Applied Cloud Computing is a leading provider of cloud transformation, digital innovation, 
              and enterprise solutions. We partner with organizations to modernize their technology 
              infrastructure, accelerate digital initiatives, and unlock business value through cloud adoption.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              With over a decade of experience and 300+ successful projects, we combine deep technical 
              expertise with industry insights to deliver solutions that drive measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower enterprises with innovative cloud solutions that transform operations, 
                enhance customer experiences, and drive sustainable growth in the digital age.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the most trusted partner for cloud transformation, recognized for excellence 
                in innovation, delivery, and customer success across global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">Principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🎯', title: 'Customer First', desc: 'Your success is our priority' },
              { icon: '💡', title: 'Innovation', desc: 'Embracing cutting-edge technologies' },
              { icon: '🤝', title: 'Integrity', desc: 'Transparent and ethical practices' },
              { icon: '🌟', title: 'Excellence', desc: 'Uncompromising quality in delivery' },
            ].map((value, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">Serving clients across India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start">
                    <span className="mr-2">📍</span>
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    <span>{office.phone}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📧</span>
                    <span>{office.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
