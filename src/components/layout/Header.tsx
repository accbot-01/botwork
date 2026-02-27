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
  
  const textColorClass = transparent && !isScrolled
    ? 'text-white'
    : 'text-gray-700';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center group">
            <div className="relative">
              {/* Logo container with gradient background */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6B46C1] to-[#8B5CF6] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div className="flex flex-col">
                  <span className={`text-2xl font-bold bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] bg-clip-text text-transparent`}>
                    ACC
                  </span>
                  <span className={`text-xs ${transparent && !isScrolled ? 'text-purple-200' : 'text-gray-500'} -mt-1`}>
                    Applied Cloud Computing
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to={ROUTES.HOME} 
              className={`${textColorClass} hover:text-purple-600 transition-colors font-medium`}
            >
              Home
            </Link>
            <Link 
              to={ROUTES.SERVICES} 
              className={`${textColorClass} hover:text-purple-600 transition-colors font-medium`}
            >
              Services
            </Link>
            <Link 
              to={ROUTES.ABOUT} 
              className={`${textColorClass} hover:text-purple-600 transition-colors font-medium`}
            >
              About
            </Link>
            <Link 
              to={ROUTES.CONTACT} 
              className={`${textColorClass} hover:text-purple-600 transition-colors font-medium`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {transparent && !isScrolled ? (
              <>
                <Button variant="secondary" size="sm" href={ROUTES.CONTACT} className="!border-white !text-white hover:!bg-white hover:!text-purple-700">
                  Contact Sales
                </Button>
                <Button variant="primary" size="sm" href={ROUTES.CONTACT} className="!bg-white !text-purple-700 hover:!bg-purple-50">
                  Get Started
                </Button>
              </>
            ) : (
              <>
                <Button variant="secondary" size="sm" href={ROUTES.CONTACT}>
                  Contact Sales
                </Button>
                <Button variant="primary" size="sm" href={ROUTES.CONTACT}>
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 ${textColorClass} hover:text-purple-600 transition-colors`}
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
