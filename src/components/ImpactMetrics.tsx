import React from 'react';
import { Sprout, Users, MapPin, Leaf, Briefcase, Package, Home } from '@/components/icons';

const metrics = [
  { value: '1.7M+', label: 'Céréales produites', sub: 'Tons commercialisées', icon: Sprout },
  { value: '1M+', label: 'Agriculteurs', sub: 'Intégrés au réseau', icon: Users },
  { value: '2 700', label: 'Communautés', sub: 'Soutenues', icon: MapPin },
  { value: '420k', label: 'Hectares', sub: 'Cultivés durablement', icon: Leaf },
  { value: '9 000', label: 'Emplois', sub: 'Créés en milieu rural', icon: Briefcase },
  { value: '225k T', label: 'Stockage', sub: 'Espace acquis', icon: Package },
  { value: '470', label: 'Entrepôts', sub: 'Stratégiquement placés', icon: Home },
];

const ImpactMetrics = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="blob w-96 h-96 bg-secondary top-0 right-0 opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            L'impact <span className="text-primary">mesurable.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nous transformons la réalité du terrain par des résultats concrets et vérifiables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="card-premium p-8 group hover:bg-primary hover:text-white transition-all duration-300">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-colors mb-6">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <div className="text-4xl font-bold mb-2 group-hover:text-white transition-colors">
                  {metric.value}
                </div>
                <div className="text-lg font-bold mb-1">{metric.label}</div>
                <div className="text-sm opacity-70">{metric.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
