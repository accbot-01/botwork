import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { ROUTES } from '@/utils/constants';
import { Button } from '@/components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <Layout>
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-9xl font-bold text-purple-600 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href={ROUTES.HOME}>
              Go Home
            </Button>
            <Button variant="secondary" size="lg" href={ROUTES.CONTACT}>
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
