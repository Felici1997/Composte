import React from 'react';

const partners = [
  { name: 'TAI Bank', logo: 'https://via.placeholder.com/150x50?text=TAIBank' },
  { name: 'Providus Bank', logo: 'https://via.placeholder.com/150x50?text=ProvidusBank' },
  { name: 'AFEX', logo: 'https://via.placeholder.com/150x50?text=AFEX' },
  { name: 'Amo Byng', logo: 'https://via.placeholder.com/150x50?text=AmoByng' },
  { name: 'Federal Govt', logo: 'https://via.placeholder.com/150x50?text=NigeriaGov' },
  { name: 'Diageo', logo: 'https://via.placeholder.com/150x50?text=Diageo' },
];

const Partners = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Nos partenaires
        </h2>
        <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner, index) => (
            <img 
              key={index} 
              src={partner.logo} 
              alt={partner.name} 
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
