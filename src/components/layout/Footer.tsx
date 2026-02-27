import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, SOCIAL_LINKS, CONTACT_INFO } from '@/utils/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Applied Cloud Computing</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for cloud transformation, digital innovation, and enterprise solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.LINKEDIN} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href={SOCIAL_LINKS.YOUTUBE} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a 
                href={SOCIAL_LINKS.FACEBOOK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to={ROUTES.SERVICES} className="hover:text-purple-500 transition-colors">Cloud</Link></li>
              <li><Link to={ROUTES.SERVICES} className="hover:text-purple-500 transition-colors">Digital Transformation</Link></li>
              <li><Link to={ROUTES.SERVICES} className="hover:text-purple-500 transition-colors">Data & Analytics</Link></li>
              <li><Link to={ROUTES.SERVICES} className="hover:text-purple-500 transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to={ROUTES.ABOUT} className="hover:text-purple-500 transition-colors">About Us</Link></li>
              <li><Link to={ROUTES.CONTACT} className="hover:text-purple-500 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm">{CONTACT_INFO.EMAIL}</li>
              <li className="text-sm">{CONTACT_INFO.PHONE}</li>
              <li className="text-sm">{CONTACT_INFO.ADDRESS}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Applied Cloud Computing. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-purple-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-purple-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm hover:text-purple-500 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
