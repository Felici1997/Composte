"use client";
import React, { useState } from 'react';

const processes = [
  {
    title: "Qualification des agriculteurs",
    subtitle: "Qualification",
    content: "Avant toute intégration, le chargé client identifie les producteurs éligibles dans sa zone. Le critère principal : produire au minimum 1 tonne et disposer d'un process structuré (pesée, traçabilité de base). Les Chefs de Secteur Agricole (CSA) jouent un rôle clé d'apporteur et de prescripteur local.",
    image: "https://images.unsplash.com/photo-1595841696764-C96556777848?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Intégration & profilage",
    subtitle: "Onboarding",
    content: "L'agriculteur qualifié est enregistré sur la plateforme Composte. Ses données clés sont collectées : localisation, cultures, capacité de production estimée, période de récolte, coordonnées WhatsApp. Cette fiche produit est la base de toute mise en relation future.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Collecte des offres",
    subtitle: "Offres",
    content: "À chaque saison ou lors d'une récolte imminente, le chargé client recueille l'offre de l'agriculteur : produit, quantité disponible, délai de livraison, prix souhaité. Ces offres alimentent le catalogue interne de Composte consultable par les acheteurs référencés.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8de9c27d67?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Mise en relation acheteurs",
    subtitle: "Mise en relation",
    content: "Composte présente les offres disponibles aux acheteurs référencés transformateurs, grossistes, supermarchés via l'application ou un contact direct WhatsApp/appel. Composte joue un rôle de garant de la fiabilité de l'offre, filtrant les informations pour éviter les mauvaises surprises.",
    image: "https://images.unsplash.com/photo-1595841696764-C96556777848?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Coordination & suivi de transaction",
    subtitle: "Coordination",
    content: "Une fois l'accord trouvé, Composte coordonne la transaction : confirmation des quantités, date et lieu de livraison, conditions de paiement. Le chargé client reste point de contact unique pour les deux parties jusqu'à la livraison effective, réduisant les risques de rupture.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Fidélisation & données",
    subtitle: "Fidélisation",
    content: "Après chaque transaction, Composte collecte un retour des deux parties (qualité, délais, quantités réelles). Ces données enrichissent le profil de l'agriculteur et la réputation de l'acheteur. À terme, cet historique construit la confiance et ouvre la voie à des services à valeur ajoutée : analyse de récolte, détection de maladies, stockage en entrepôt.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8de9c27d67?auto=format&fit=crop&q=80&w=800"
  },
];

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="editorial-grid">
          <div className="col-span-12 lg:col-span-5 mb-16 lg:mb-0">
            <div className="sticky top-32">
               <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                 Ce que nous faisons
               </h2>
               <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                 Nous avons construit un pont opérationnel et technologique pour transformer le chaos des marchés locaux en un flux fluide, transparent et rentable.
               </p>
              <div className="h-px w-full bg-gray-200" />
              <div className="py-6 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <span>Processus Opérationnel</span>
                <span>01 / 06</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 space-y-12">
            {processes.map((process, index) => (
              <div 
                key={index} 
                onClick={() => setActiveTab(index)}
                className={`group cursor-pointer transition-all duration-500 ${activeTab === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="text-5xl font-serif font-bold text-primary/20 group-hover:text-primary transition-colors">
                    0{index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className={`text-2xl font-bold ${activeTab === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {process.title}
                      </h3>
                      <span className="text-xs font-bold uppercase tracking-tighter text-accent">{process.subtitle}</span>
                    </div>
                    {activeTab === index && (
                      <div className="animate-in fade-in slide-in-from-top-2 duration-500">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                          {process.content}
                        </p>
                        <div className="h-64 w-full rounded-2xl overflow-hidden shadow-xl">
                          <img src={process.image} alt={process.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {activeTab === index && <div className="h-px w-full bg-primary/20 mt-8" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
