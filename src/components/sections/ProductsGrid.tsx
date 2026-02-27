import React from 'react';
import { Card } from '@/components/ui/Card';
import productsData from '@/assets/data/products.json';
import type { Product } from '@/types';

export const ProductsGrid: React.FC = () => {
  const products = productsData as Product[];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade software solutions designed to solve complex business challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} type="product" data={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
