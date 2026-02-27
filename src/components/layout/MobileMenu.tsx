import React from 'react';
import { useNavigation } from '@/context/NavigationContext';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';

export const MobileMenu: React.FC = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useNavigation();

  if (!mobileMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setMobileMenuOpen(false)}
      />
      
      {/* Menu Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700 hover:text-purple-600"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4">
            <Link
              to={ROUTES.HOME}
              className="block py-3 text-gray-700 hover:text-purple-600 border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to={ROUTES.SERVICES}
              className="block py-3 text-gray-700 hover:text-purple-600 border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to={ROUTES.ABOUT}
              className="block py-3 text-gray-700 hover:text-purple-600 border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to={ROUTES.CONTACT}
              className="block py-3 text-gray-700 hover:text-purple-600 border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="p-4 space-y-2">
            <Link
              to={ROUTES.CONTACT}
              className="block w-full py-3 text-center border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Sales
            </Link>
            <Link
              to={ROUTES.CONTACT}
              className="block w-full py-3 text-center bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
