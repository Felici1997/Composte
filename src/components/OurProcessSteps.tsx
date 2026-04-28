import React from 'react';
import Image from 'next/image';
import { Sprout, MapPin, Package, Leaf, Home, Users } from '@/components/icons';

const processSteps = [
  {
    number: '01',
    title: 'Intégration des Fermiers',
    description: 'Au début de chaque saison, nous identifions les communautés et collectons les données clés via notre AOS. Nous créons des clusters optimisés et assignons des leaders de groupe pour un suivi rigoureux.',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800',
    icon: Users,
    color: 'bg-primary'
  },
  {
    number: '02',
    title: 'Cartographie Précise',
    description: 'L\'agriculture de précision commence ici. Nous analysons les coordonnées, la taille des terres et la viabilité du sol via satellite pour adapter les stratégies de culture.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    icon: MapPin,
    color: 'bg-secondary'
  },
  {
    number: '03',
    title: 'Distribution d\'Intrants',
    description: 'Nous éliminons le risque financier en fournissant des semences hybrides et fertilisants de haute qualité, basés sur les besoins réels du sol et la solvabilité.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800',
    icon: Sprout,
    color: 'bg-accent'
  },
  {
    number: '04',
    title: 'Suivi et Monitoring',
    description: 'Une présence constante sur le terrain. Nos agents assurent un suivi rigoureux et apportent des conseils agronomiques en temps réel pour garantir des récoltes records.',
    image: 'https://images.unsplash.com/photo-1595841696764-C96556777848?auto=format&fit=crop&q=80&w=800',
    icon: Leaf,
    color: 'bg-primary'
  },
  {
    number: '05',
    title: 'Récolte Optimisée',
    description: 'L\'efficacité du dernier kilomètre. Nous gérons la collecte, la documentation et le transport vers nos centres de stockage pour maximiser la valeur du produit.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800',
    icon: Package,
    color: 'bg-secondary'
  },
  {
    number: '06',
    title: 'Gestion des Stocks',
    description: 'Lutter contre le gaspillage. Nos entrepôts intelligents préservent la qualité des denrées et permettent une vente stratégique au meilleur moment du marché.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8de9c27d67?auto=format&fit=crop&q=80&w=800',
    icon: Home,
    color: 'bg-accent'
  },
];

const OurProcessSteps = () => {
  return (
    <section id="steps" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro Section - Inspired by Image 2 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1 relative">
             <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-br-[100px] rounded-tl-[100px] shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800" alt="Process" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full opacity-50 blur-xl" />
          </div>
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              Nous avons <span className="text-primary">optimisé</span> <br />
              chaque étape.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              L'agriculture ne peut plus reposer sur le hasard. Nous avons instauré un cadre rigoureux où chaque action est guidée par la donnée et validée sur le terrain.
            </p>
            <div className="inline-block px-6 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all cursor-pointer">
              En savoir plus sur notre vision &rarr;
            </div>
          </div>
        </div>

        {/* Steps Journey - Inspired by Image 2 & 3 */}
        <div className="space-y-32">
          {processSteps.map((step, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              
              {/* Image side with curved edges */}
              <div className="flex-1 relative group">
                <div className={`relative w-full aspect-video overflow-hidden rounded-tl-[60px] rounded-br-[60px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                {/* Decorative accents */}
                <div className={`absolute -top-4 ${index % 2 === 0 ? '-left-4' : '-right-4'} w-8 h-8 rounded-full ${step.color} z-10`} />
              </div>

              {/* Text side */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${step.color}`}>
                    {step.number}
                  </div>
                  <div className="flex items-center gap-2 text-//primary font-bold uppercase tracking-widest text-xs">
                    <step.icon size={16} className="text-primary" />
                    <span>{step.title.split(' ')[0]}</span>
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-6 leading-tight">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary Grid - Inspired by Image 3 */}
        <div className="mt-40 pt-20 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Notre engagement inclus</h2>
            <p className="text-muted-foreground">L'ensemble de notre chaîne de valeur est conçu pour l'agriculteur.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Soutien Technique', 'Accès Finance', 'Marchés Premium', 'Sécurité Alimentaire'].map((item, i) => (
              <div key={i} className="card-premium p-8 text-center group hover:bg-primary hover:text-white transition-all duration-300">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-white group-hover:text-primary transition-colors">
                  <div className="w-6 h-6 rounded-full border-2 border-current" />
                </div>
                <h4 className="text-lg font-bold mb-2">{item}</h4>
                <p className="text-sm text-muted-foreground group-hover:text-white/80">Intégré nativement dans notre processus opérationnel.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSteps;
