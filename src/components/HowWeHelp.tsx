import React from 'react';
import { UserCheck, Landmark, Utensils } from '@/components/icons';

const categories = [
  {
    title: "Producteurs alimentaires",
    description: "Nous donnons aux petits exploitants agricoles les moyens d'obtenir des intrants de qualité pour atteindre des rendements optimaux.",
    icon: UserCheck,
    label: "Production"
  },
  {
    title: "Les financiers du secteur",
    description: "Nous offrons des canaux de financement crédibles pour atteindre l'objectif « faim zéro ».",
    icon: Landmark,
    label: "Investissement"
  },
  {
    title: "Transformateurs & Consommateurs",
    description: "Nous sommes un partenaire de choix fiable pour la livraison de produits frais et sains de qualité.",
    icon: Utensils,
    label: "Consommation"
  },
];

const HowWeHelp = () => {
  return (
    <section className="py-32 bg-muted relative overflow-hidden">
      <div className="blob w-80 h-80 bg-accent bottom-0 left-0 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Comment nous <br />
            <span className="text-primary">vous aidons.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            L'écosystème Composte dynamise l'ensemble de la chaîne de valeur agricole.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div key={index} className="card-premium p-12 group hover:bg-primary hover:text-white transition-all duration-300">
                <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-3xl bg-secondary text-primary group-hover:bg-white group-hover:text-primary transition-all duration-300 shadow-lg">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3 group-hover:text-secondary">
                  {cat.label}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/80 leading-relaxed text-lg transition-colors">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
