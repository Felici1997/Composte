import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="flex-1 relative">
             <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1595841696764-C96556777848?auto=format&fit=crop&q=80&w=800" 
                    alt="Farmers" 
                    className="rounded-2xl shadow-2xl object-cover aspect-[3/4] w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                    <div className="text-primary font-bold text-xl">Vision 2030</div>
                    <div className="text-muted-foreground text-xs">Zéro faim en Afrique</div>
                  </div>
                </div>
                <div className="col-span-5 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" 
                    alt="Agriculture" 
                    className="rounded-2xl shadow-2xl object-cover aspect-square w-full mt-12"
                  />
                </div>
             </div>
          </div>
          
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-accent/20 text-accent font-bold uppercase text-xs tracking-widest rounded mb-6">
              Notre Identité
            </div>
             <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
               Une infrastructure <br />
               <span className="text-foreground">de confiance <span className="text-primary">et de données.</span></span>
             </h2>
             <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light">
               Le véritable problème de l'agriculture n'est pas la production, mais l'accès au marché. Composte résout l'opacité et l'insécurité des transactions en digitalisant l'offre et en coordonnant chaque étape, du champ à l'entrepôt.
             </p>
            <Link 
              href="/about" 
              className="inline-flex items-center bg-foreground text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary transition-all shadow-2xl group"
            >
              Découvrir notre histoire <span className="ml-2 group-hover:translate-x-1 transition-transform">&gt;&gt;&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
