import React from 'react';
import { Layout } from '@/components/layout/Layout';
import officesData from '@/assets/data/offices.json';
import type { Office } from '@/types';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/utils/constants';

export const Contact: React.FC = () => {
  const offices = officesData as Office[];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Get in touch with our team to discuss your cloud transformation journey
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're looking to migrate to the cloud, modernize your applications, 
              or explore new digital opportunities, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 text-left">
              <div className="flex items-start">
                <span className="text-3xl mr-4">📧</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-purple-600 hover:text-purple-700">
                    {CONTACT_INFO.EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-3xl mr-4">📞</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <a href={`tel:${CONTACT_INFO.PHONE}`} className="text-purple-600 hover:text-purple-700">
                    {CONTACT_INFO.PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Offices</h2>
            <p className="text-xl text-gray-600">We have offices across major cities in India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="mb-6">
                  <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    <span className="text-6xl">📍</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start">
                    <span className="mr-2 mt-1">📍</span>
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    <a href={`tel:${office.phone}`} className="hover:text-purple-600">
                      {office.phone}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📧</span>
                    <a href={`mailto:${office.email}`} className="hover:text-purple-600">
                      {office.email}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Follow Us</h2>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with our latest news, insights, and success stories
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
