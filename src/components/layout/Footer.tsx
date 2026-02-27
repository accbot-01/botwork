import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, SOCIAL_LINKS, CONTACT_INFO } from '@/utils/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6B46C1] to-[#8B5CF6] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#a855f7] bg-clip-text text-transparent">
                  ACC
                </span>
                <span className="text-xs text-gray-400 -mt-1">
                  Applied Cloud Computing
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Your trusted partner for cloud transformation, digital innovation, and enterprise solutions. Building the future with AI and cloud excellence.
            </p>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.LINKEDIN} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href={SOCIAL_LINKS.YOUTUBE} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a 
                href={SOCIAL_LINKS.FACEBOOK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              <li><Link to={ROUTES.SERVICES} className="hover:text-purple-400 transition-colors text-gray-400">Cloud Migration</Link></li>
              <li><Link to={ROUTES.SERVICES} className="hover:text-purple-400 transition-colors text-gray-400">DevOps</Link></li>
              <li><Link to={ROUTES.SERVICES} className="hover:text-purple-400 transition-colors text-gray-400">Data & Analytics</Link></li>
              <li><Link to={ROUTES.SERVICES} className="hover:text-purple-400 transition-colors text-gray-400">AI & ML</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3">
              <li><Link to={ROUTES.ABOUT} className="hover:text-purple-400 transition-colors text-gray-400">About Us</Link></li>
              <li><Link to={ROUTES.CONTACT} className="hover:text-purple-400 transition-colors text-gray-400">Contact</Link></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors text-gray-400">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="text-sm flex items-center">
                <svg className="w-4 h-4 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                {CONTACT_INFO.EMAIL}
              </li>
              <li className="text-sm flex items-center">
                <svg className="w-4 h-4 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                {CONTACT_INFO.PHONE}
              </li>
              <li className="text-sm flex items-start">
                <svg className="w-4 h-4 mr-2 mt-1 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>{CONTACT_INFO.ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Applied Cloud Computing. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
