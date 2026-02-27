import React from 'react';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/utils/constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#6B46C1] via-[#7C3AED] to-[#8B5CF6] text-white py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold text-white">☁️ AWS Advanced Tier Services Partner</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Building Trustworthy AI
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-100">
                with the Power of Cloud
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
              Empowering businesses with cutting-edge cloud solutions, AI innovation, and enterprise-grade security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="primary" 
                size="lg" 
                href={ROUTES.CONTACT}
                className="!bg-white !text-purple-700 hover:!bg-purple-50 !shadow-xl hover:!shadow-2xl transition-all duration-300"
              >
                Get Started →
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                href={ROUTES.SERVICES} 
                className="!border-2 !border-white !text-white hover:!bg-white hover:!text-purple-700 !shadow-lg transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right column - 3D Globe Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-violet-400 opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-300 to-violet-300 opacity-30 blur-2xl animate-pulse animation-delay-1000"></div>
              
              {/* Main globe container */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-600/40 to-violet-600/40 backdrop-blur-sm border-4 border-white/30 shadow-2xl overflow-hidden">
                {/* Globe grid lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  {/* Horizontal lines */}
                  {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((y) => (
                    <ellipse
                      key={`h-${y}`}
                      cx="100"
                      cy="100"
                      rx={Math.abs(100 - y) * 0.8}
                      ry="5"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                      opacity="0.3"
                      className="animate-spin-slow"
                      style={{ transformOrigin: 'center', animationDuration: '20s' }}
                    />
                  ))}
                  
                  {/* Vertical lines */}
                  {[0, 30, 60, 90, 120, 150].map((angle) => (
                    <ellipse
                      key={`v-${angle}`}
                      cx="100"
                      cy="100"
                      rx="80"
                      ry="80"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                      opacity="0.3"
                      transform={`rotate(${angle} 100 100)`}
                    />
                  ))}
                </svg>

                {/* Orbiting particles */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full shadow-lg"
                      style={{
                        top: '50%',
                        left: '50%',
                        animation: `orbit ${4 + i * 0.5}s linear infinite`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Cloud icon in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-50 animate-float">☁️</div>
                </div>
              </div>

              {/* Floating icons around globe */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-lg shadow-xl flex items-center justify-center animate-float animation-delay-500">
                <span className="text-3xl">🔒</span>
              </div>
              <div className="absolute top-1/4 -left-6 w-14 h-14 bg-white rounded-lg shadow-xl flex items-center justify-center animate-float animation-delay-1000">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute bottom-1/4 -right-6 w-14 h-14 bg-white rounded-lg shadow-xl flex items-center justify-center animate-float animation-delay-1500">
                <span className="text-2xl">🤖</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};
