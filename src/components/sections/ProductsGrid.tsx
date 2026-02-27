import React from 'react';
import { Card } from '@/components/ui/Card';
import productsData from '@/assets/data/products.json';
import type { Product } from '@/types';

export const ProductsGrid: React.FC = () => {
  const products = productsData as Product[];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-100 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
            <span className="text-sm font-semibold text-purple-700">Innovation Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Innovative Cloud Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade software solutions designed to solve complex business challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} type="product" data={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
