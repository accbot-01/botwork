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
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <span className="text-2xl">☁️</span>
          </div>
          <h3 className="ml-4 text-xl font-bold text-gray-900">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-700">
              <span className="text-purple-600 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <Link 
          to={service.link} 
          className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center"
        >
          Learn More →
        </Link>
      </div>
    );
  }

  if (type === 'product') {
    const product = data as Product;
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{product.title}</h3>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.map((feature, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
            >
              {feature}
            </span>
          ))}
        </div>
        <Link 
          to={product.link} 
          className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center"
        >
          Learn More →
        </Link>
      </div>
    );
  }

  // Testimonial card
  const testimonial = data as Testimonial;
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${testimonial.videoId}`}
          title={testimonial.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="p-6">
        <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
        <div className="flex items-center">
          <div className="ml-4">
            <p className="font-bold text-gray-900">{testimonial.author}</p>
            <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
