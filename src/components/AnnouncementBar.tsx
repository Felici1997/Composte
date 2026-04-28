import React from 'react';
import Link from 'next/link';

const AnnouncementBar = () => {
  return (
    <div className="bg-zinc-900 text-white py-3 px-4 text-center text-sm md:text-base">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-medium">
          Comment les pratiques climato-intelligentes redéfinissent l'avenir de l'agriculture au Nigéria
        </p>
        <Link 
          href="/resources" 
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-full text-xs font-bold transition-colors flex items-center gap-2"
        >
          En savoir plus <span className="text-xs">&gt;&gt;&gt;</span>
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementBar;
