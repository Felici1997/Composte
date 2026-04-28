import React from 'react';
import Image from 'next/image';

const products = [
  { name: 'Riz', image: 'https://images.unsplash.com/photo-1586201375761-838650017768?auto=format&fit=crop&q=80&w=400' },
  { name: 'Maïs', image: 'https://images.unsplash.com/photo-1551757179-7777B475688D?auto=format&fit=crop&q=80&w=400' },
  { name: 'Soja', image: 'https://images.unsplash.com/photo-1584432810646-751236393270?auto=format&fit=crop&q=80&w=400' },
  { name: 'Niébé', image: 'https://images.unsplash.com/photo-1587334274328-64698467316a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Arachide', image: 'https://images.unsplash.com/photo-1562256763-77445d1449ed?auto=format&fit=crop&q=80&w=400' },
  { name: 'Sorgho', image: 'https://images.unsplash.com/photo-1595841696764-C96556777848?auto=format&fit=crop&q=80&w=400' },
  { name: 'Anacardier', image: 'https://images.unsplash.com/photo-1536627217863-337933237266?auto=format&fit=crop&q=80&w=400' },
  { name: 'Patate douce', image: 'https://images.unsplash.com/photo-1596040033229-ed27de77ed75?auto=//format&fit=crop&q=80&w=400' },
];

const ProductGrid = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative aspect-square overflow-hidden rounded-3xl mb-6 shadow-lg">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">{product.name}</h3>
            <Link 
              href={`/order/${product.name.toLowerCase().replace(' ', '-')}`} 
              className="text-primary font-bold text-sm uppercase tracking-widest group-hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Commandez maintenant &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

import Link from 'next/link';

export default ProductGrid;
