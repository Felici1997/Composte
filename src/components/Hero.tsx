import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-6">
      {/* Background Decorative Blobs - Agency Style */}
      <div className="blob w-96 h-96 bg-primary top-[-10%] left-[-10%] opacity-20" />
      <div className="blob w-[500px] h-[500px] bg-secondary bottom-[-10%] right-[-10%] opacity-30" />
      <div className="blob w-64 h-64 bg-accent top-1/2 left-1/3 opacity-20" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            L'avenir de l'agriculture
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-8 text-foreground">
            Créer un réseau <br />
            <span className="text-primary relative">
              rentable
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
            L'innovation technologique au service des petits exploitants. Nous connectons la terre au marché pour une sécurité alimentaire durable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/our-work" 
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:scale-105"
            >
              Découvrir nos solutions
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-4 bg-white text-foreground border border-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-sm"
            >
              Notre Vision
            </Link>
          </div>
        </div>

        {/* Creative Imagery / Grid from Pixology */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4 rotate-3 hover:rotate-0 transition-transform duration-700">
            <div className="aspect-square bg-primary rounded-3xl overflow-hidden shadow-xl">
               <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-80" alt="Farmer" />
            </div>
            <div className="aspect-square bg-secondary rounded-3xl overflow-hidden shadow-xl translate-y-8">
               <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-80" alt="Field" />
            </div>
            <div className="aspect-square bg-accent rounded-3xl overflow-hidden shadow-xl -translate-y-4">
               <img src="https://images.unsplash.com/photo-1595841696764-C96556777848?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-80" alt="Tech" />
            </div>
            <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-primary">
               <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-80" alt="Harvest" />
            </div>
          </div>
          {/* Floating Label */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 animate-bounce duration-1000">
            <div className="text-primary font-bold text-2xl">1M+</div>
            <div className="text-muted-foreground text-xs uppercase tracking-widest">Agriculteurs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
