import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImpactMetrics from '@/components/ImpactMetrics';
import WhatWeDo from '@/components/WhatWeDo';
import HowWeHelp from '@/components/HowWeHelp';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <ImpactMetrics />
      <WhatWeDo />
      <HowWeHelp />
      <Testimonials />
      <Partners />
      <Footer />
    </main>
  );
}
