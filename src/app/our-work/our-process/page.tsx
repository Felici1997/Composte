import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessHero from '@/components/ProcessHero';
import OurProcessSteps from '@/components/OurProcessSteps';

export default function OurProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ProcessHero />
      <OurProcessSteps />
      <Footer />
    </main>
  );
}
