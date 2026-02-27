import React from 'react';
import { Link } from 'react-router-dom';
import type { Service, Product, Testimonial } from '@/types';

type CardProps = 
  | { type: 'service'; data: Service }
  | { type: 'product'; data: Product }
  | { type: 'testimonial'; data: Testimonial };

export const Card: React.FC<CardProps> = ({ type, data }) => {
  if (type === 'service') {
    const service = data as Service;
    
    // Enhanced icon mapping with gradients
    const iconMap: { [key: string]: string } = {
      'Cloud Migration': '☁️',
      'DevOps & Automation': '⚙️',
      'Security & Compliance': '🔒',
      'Data & Analytics': '📊',
      'AI & Machine Learning': '🤖',
      'Application Modernization': '🚀',
    };
    
    const icon = iconMap[service.title] || '☁️';
    
    return (
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
        {/* Gradient hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-violet-600/0 group-hover:from-purple-600/5 group-hover:to-violet-600/5 transition-all duration-500"></div>
        
        <div className="relative p-8">
          {/* Icon with gradient background */}
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#6B46C1] to-[#8B5CF6] shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
            <span className="text-3xl">{icon}</span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {service.description}
          </p>
          
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-gray-700">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-purple-600 mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link 
            to={service.link} 
            className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 group-hover:translate-x-2 transition-all duration-300"
          >
            Learn More 
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  if (type === 'product') {
    const product = data as Product;
    return (
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
        {/* Gradient hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-violet-600/0 group-hover:from-purple-600/5 group-hover:to-violet-600/5 transition-all duration-500"></div>
        
        <div className="relative p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
            {product.title}
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {product.features.map((feature, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {feature}
              </span>
            ))}
          </div>
          
          <Link 
            to={product.link} 
            className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 group-hover:translate-x-2 transition-all duration-300"
          >
            Learn More 
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  // Testimonial card
  const testimonial = data as Testimonial;
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      <div className="aspect-video bg-gray-100">
        <iframe
          src={`https://www.youtube.com/embed/${testimonial.videoId}`}
          title={testimonial.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="p-6">
        <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg">
            {testimonial.author.charAt(0)}
          </div>
          <div className="ml-4">
            <p className="font-bold text-gray-900">{testimonial.author}</p>
            <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
