'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import SchoolLogo from './SchoolLogo';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navLinks = [
    { href: "/", label: "হোম" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/academics", label: "শিক্ষা কার্যক্রম" },
    { href: "/admissions", label: "ভর্তি" },
    { href: "/contact", label: "যোগাযোগ" },
  ];

  return (
    <nav className={`bg-emerald-50 shadow-md fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-between items-center px-4 py-2 relative z-50">
        <div className="flex items-center space-x-2">
          <SchoolLogo className="h-12 w-auto" />
          <div className="flex flex-col">
            <div className="text-lg font-bold text-emerald-800 leading-tight">সানরাইজ একাডেমি</div>
            <div className="text-[10px] text-emerald-700 leading-tight">উজ্জ্বল ভবিষ্যতের সন্ধানে</div>
          </div>
        </div>
        <button 
          onClick={toggleMenu}
          className="text-emerald-800 hover:text-emerald-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      <div className="container mx-auto hidden md:block">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-3">
            <SchoolLogo />
            <div>
              <div className="text-xl font-bold text-emerald-800">সানরাইজ একাডেমি</div>
              <div className="text-xs text-emerald-700">উজ্জ্বল ভবিষ्यতের সন্ধানে</div>
            </div>
          </div>
          <div className="text-xs text-emerald-600 whitespace-nowrap">
            <span className="font-medium">ইনস্টিটিউট কোড:</span> ২০০৬৮ | <span className="font-medium">EIIN:</span> ১৩২৯১৩
          </div>
          <div className="flex space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="px-4 py-2 rounded-md text-emerald-900 hover:bg-emerald-100 hover:text-emerald-800 font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-4 opacity-0 invisible'
        }`}
        style={{ 
          top: '60px',
          height: 'calc(100vh - 60px)'
        }}
      >
        <div className="container mx-auto py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-lg font-medium text-emerald-900 hover:bg-emerald-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
