import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useNavigation } from '@/context/NavigationContext';
import { ROUTES } from '@/utils/constants';
import { Button } from '@/components/ui/Button';

export const Header: React.FC<{ transparent?: boolean }> = ({ transparent = false }) => {
  const { scrollY } = useScrollPosition();
  const { mobileMenuOpen, setMobileMenuOpen } = useNavigation();
  
  const isScrolled = scrollY > 50;
  const bgClass = transparent && !isScrolled 
    ? 'bg-transparent' 
    : 'bg-white shadow-md';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center">
            <span className="text-2xl font-bold text-purple-600">ACC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to={ROUTES.HOME} className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link to={ROUTES.SERVICES} className="text-gray-700 hover:text-purple-600 transition-colors">
              Services
            </Link>
            <Link to={ROUTES.ABOUT} className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link to={ROUTES.CONTACT} className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="secondary" size="sm" href={ROUTES.CONTACT}>
              Contact Sales
            </Button>
            <Button variant="primary" size="sm" href={ROUTES.CONTACT}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-purple-600"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
