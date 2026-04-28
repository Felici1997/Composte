import React from 'react';

const AboutHero = () => {
  const gridItems = [
    { type: 'color', value: 'bg-primary' },
    { type: 'image', value: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=400' },
    { type: 'color', value: 'bg-secondary' },
    { type: 'image', value: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400' },
    { type: 'color', value: 'bg-foreground' },
    { type: 'color', value: 'bg-accent' },
    { type: 'color', value: 'bg-primary' },
    { type: 'color', value: 'bg-secondary' },
    { type: 'image', value: 'https://images.unsplash.com/photo-1595841696764-C96556777848?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: The Creative Grid */}
          <div className="flex-1 grid grid-cols-3 gap-4 w-full max-w-md mx-auto">
            {gridItems.map((item, index) => (
              <div 
                key={index} 
                className={`aspect-square rounded-full overflow-hidden shadow-sm relative transition-transform hover:scale-105 duration-500 ${
                  item.type === 'color' ? item.value : ''
                }`}
              >
                {item.type === 'image' && (
                  <img src={item.value} alt="About us" className="w-full h-full object-cover" />
                )}
              </div>
            ))}
          </div>

          {/* Right: Content */}
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-muted-foreground text-sm font-medium uppercase tracking-widest">Pourquoi nous choisir</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-10">
              Spécialistes de l'autonomisation <br />
              <span className="text-primary relative">
                financière
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
              des agriculteurs
            </h1>
            
            <div className="space-y-8">
              {[
                { 
                  title: "Processus optimisé", 
                  desc: "Nous spécialisons notre approche pour concevoir, bâtir et déployer des solutions agricoles avec une efficacité foudroyante.", 
                  icon: "🚀",
                  color: "bg-blue-100 text-blue-600"
                },
                { 
                  title: "Équipe dédiée", 
                  desc: "Une équipe d'experts agronomistes et technologues passionnés par la réussite de chaque exploitation.", 
                  icon: "👥",
                  color: "bg-purple-100 text-purple-600"
                },
                { 
                  title: "Support 24/7", 
                  desc: "Une assistance continue sur le terrain pour garantir que chaque semence devienne une récolte rentable.", 
                  icon: "🎧",
                  color: "bg-red-100 text-red-600"
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
