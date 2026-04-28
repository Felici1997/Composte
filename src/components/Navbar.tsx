"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'À propos de nous', href: '/about' },
    { name: 'Notre Travail', href: '#', isDropdown: true },
    { name: 'Matières Premières', href: '/matieres-premieres' },
    { name: 'Contactez-nous', href: '/contact' },
  ];

  const workSubLinks = [
    { name: 'Notre Processus', href: '/our-work/our-process' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/assets/images/logo.png" 
                alt="Composte Logo" 
                className="h-24 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {link.isDropdown ? (
                  <>
                    <button 
                      onClick={() => setWorkDropdownOpen(!workDropdownOpen)}
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium"
                    >
                      {link.name}
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {workDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-2">
                        {workSubLinks.map((sublink) => (
                          <Link 
                            key={sublink.href} 
                            href={sublink.href} 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              href="/join" 
              className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-green-800 transition-colors"
            >
              Nous rejoindre
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => {
              if (link.isDropdown) {
                return (
                  <div key={index} className="relative mb-4">
                    <button 
                      onClick={() => setWorkDropdownOpen(!workDropdownOpen)}
                      className="w-full text-left px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md font-medium flex justify-between items-center"
                    >
                      <span>{link.name}</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {workDropdownOpen && (
                      <div className="mt-2 w-full pl-4 space-y-1">
                        {workSubLinks.map((sublink) => (
                          <Link 
                            key={sublink.href} 
                            href={sublink.href} 
                            className="block px-2 py-1 text-sm text-gray-700 hover:bg-primary hover:text-white"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link 
                  key={index} 
                  href={link.href} 
                  className="block px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              href="/join" 
              className="block px-3 py-2 bg-primary text-white rounded-md font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Nous rejoindre
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
