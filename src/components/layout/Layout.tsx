import React, { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileMenu } from './MobileMenu';

interface LayoutProps {
  children: ReactNode;
  transparentHeader?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, transparentHeader = false }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={transparentHeader} />
      <MobileMenu />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
