import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RawMaterialsHero from '@/components/RawMaterialsHero';
import ProductGrid from '@/components/ProductGrid';

export default function RawMaterialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <RawMaterialsHero />
      <ProductGrid />
      <Footer />
    </main>
  );
}
