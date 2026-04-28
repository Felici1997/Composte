import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="text-2xl font-bold text-white mb-6 block">
              Composte
            </Link>
            <p className="text-gray-400 mb-6">
              Bâtir le plus grand réseau d'agriculteurs africains rentables pour assurer la sécurité alimentaire.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Entreprise</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-white transition-colors">À propos de nous</Link></li>
              <li><Link href="/our-work" className="hover:text-white transition-colors">Notre Travail</Link></li>
              <li><Link href="/impact" className="hover:text-white transition-colors">Notre Impact</Link></li>
              <li><Link href="/join" className="hover:text-white transition-colors">Rejoignez la Famille</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Nos ressources</h4>
            <ul className="space-y-4">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog Hectare</Link></li>
              <li><Link href="/reports" className="hover:text-white transition-colors">Rapports</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Galerie</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>Abuja, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <span>✉️</span>
                <span>info@composte.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span>📞</span>
                <span>+234 (0) 816 716 4014</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Composte. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <Link href="/terms" className="hover:text-white transition-colors">Conditions d'utilisation</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Politique de cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

import Link from 'next/link';

export default Footer;
