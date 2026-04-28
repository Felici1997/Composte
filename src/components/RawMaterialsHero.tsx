import React from 'react';

const RawMaterialsHero = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-[1.1] tracking-tighter mb-12">
          Achetez des matières <br />
          <span className="text-primary relative">
            premières
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
            </svg>
          </span> <br />
          avec <span className="text-foreground">Composte</span>
        </h1>
      </div>
    </section>
  );
};

export default RawMaterialsHero;
