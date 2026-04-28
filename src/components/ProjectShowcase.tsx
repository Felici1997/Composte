import React, { useState } from 'react';

const categories = ['Website', 'Landing Page', 'iOS App', 'Branding Design'];
const projects = [
  { id: 1, title: 'Abstract Blue', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', size: 'large' },
  { id: 2, title: 'Geometric Red', img: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800', size: 'small' },
  { id: 3, title: 'Modern Arch', img: 'https://images.unsplash.com/photo-1618005182357-57ed678ec97c?auto=format&fit=crop&q=80&w=800', size: 'small' },
  { id: 4, title: 'Desert Monolith', img: 'https://images.unsplash.com/photo-1614850547103-a798bcda99ec?auto=format&fit=crop&q=80&w=800', size: 'small' },
  { id: 5, title: 'Cyan Loop', img: 'https://images.unsplash.com/photo-1618005182400-9a62f23efed6?auto=format&fit=crop&q=80&w=800', size: 'small' },
];

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState('Website');

  return (
    <section className="py-32 bg-secondary/30 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Projets</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Portfolio Composte <span className="text-primary">complet</span>
          </h2>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === cat 
                ? 'bg-white text-primary shadow-md scale-105' 
                : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid - Editorial Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          <div className="col-span-12 md:col-span-7 row-span-1 relative rounded-3xl overflow-hidden group">
            <Image src={projects[0].img} alt="Project" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div className="text-white font-bold text-2xl">{projects[0].title}</div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 row-span-1 relative rounded-3xl overflow-hidden group">
            <Image src={projects[1].img} alt="Project" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div className="text-white font-bold text-2xl">{projects[1].title}</div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1 relative rounded-3xl overflow-hidden group">
            <Image src={projects[2].img} alt="Project" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div className="text-white font-bold text-2xl">{projects[2].title}</div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1 relative rounded-3xl overflow-hidden group">
            <Image src={projects[3].img} alt="Project" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div className="text-white font-bold text-2xl">{projects[3].title}</div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1 relative rounded-3xl overflow-hidden group">
            <Image src={projects[4].img} alt="Project" fill className="object-//cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div className="text-white font-bold text-2xl">{projects[4].title}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import Image from 'next/image';

export default ProjectShowcase;
