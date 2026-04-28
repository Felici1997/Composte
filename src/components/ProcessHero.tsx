import React from 'react';
import Link from 'next/link';

const ProcessHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-left z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-tight mb-8 tracking-tighter">
            L'ingénierie <br />
            <span className="text-primary relative inline-block">
              du processus
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
            <br />
            <span className="text-foreground">agricole.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg font-light">
            Nous avons déconstruit le cycle agricole pour en éliminer les frictions. Une approche millimétrée pour garantir la rentabilité de chaque hectare.
          </p>
          <Link 
            href="#steps" 
            className="inline-block px-8 py-4 bg-foreground text-white rounded-xl font-bold text-lg hover:bg-primary transition-all shadow-xl hover:scale-105"
          >
            Découvrir la méthode
          </Link>
        </div>

        {/* Right Image - Skewed Style from Image 1 */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-lg aspect-square overflow-hidden rounded-br-[100px] rounded-tl-[100px] rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" 
              alt="Process Illustration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
          {/* Decorative Dots from Image 1 */}
          <div className="absolute top-10 right-10 w-4 h-4 bg-accent rounded-full animate-bounce" />
          <div className="absolute bottom-20 left-10 w-3 h-3 bg-primary rounded-full animate-pulse" />
          <div className="absolute top-1/2 right-0 w-2 h-2 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;
