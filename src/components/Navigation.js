'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import SchoolLogo from './SchoolLogo';

const navLinks = [
  { href: "/", label: "হোম" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
  { 
    label: "Academics", 
    subItems: [
      { href: "#", label: "Syllabus" },
      { href: "#", label: "Class Routine" }
    ]
  },
  { href: "/academics", label: "শিক্ষা কার্যক্রম" },
  { href: "/teacher-staffs", label: "শিক্ষক ও কর্মচারী" },
  { href: "/admissions", label: "ভর্তি" },
  { href: "/contact", label: "যোগাযোগ" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu/dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mobile menu if open and click is outside
      if (isOpen && 
          !menuRef.current?.contains(event.target) &&
          !buttonRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
      
      // Close dropdown if open and click is outside
      if (openDropdown !== null) {
        const dropdownElement = dropdownRefs.current[openDropdown];
        if (dropdownElement && !dropdownElement.contains(event.target)) {
          setOpenDropdown(null);
        }
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isOpen) setIsOpen(false);
        if (openDropdown !== null) setOpenDropdown(null);
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, openDropdown]);
  
  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="navbar bg-emerald-50 text-emerald-900 shadow-md fixed top-0 z-50 px-4">
      {/* School logo and info */}
      <div className="flex-1">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img 
              src="/images/square-kindergarten-logo.jpeg" 
              alt="School Logo" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col px-4">
            <span className="text-xl font-bold">স্কয়ার কিন্ডারগার্টেন স্কুল</span>
            <span className="text-sm opacity-90">ইনস্টিটিউট কোড: ২০০৬৮ | EIIN: ১৩২৯১৩</span>
          </div>
        </div>
      </div>

      {/* Mobile menu button - moved to end */}
      <div className="flex-none lg:hidden" ref={buttonRef}>
        <button 
          type="button"
          className="btn btn-ghost btn-square"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
        style={{
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
      />
      
      {/* Mobile menu sidebar */}
      <div 
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-emerald-600 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <button 
            className="btn btn-ghost btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setIsOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="menu p-4 overflow-y-auto h-[calc(100vh-4rem)]">
            {navLinks.map((link) => (
              <li key={link.href || link.label} className="mb-2">
                {link.subItems ? (
                  <details>
                    <summary className="text-white hover:bg-emerald-700 rounded-lg">{link.label}</summary>
                    <ul className="bg-emerald-700 rounded-lg mt-1">
                      {link.subItems.map((subItem) => (
                        <li key={subItem.label}>
                          <Link 
                            href={subItem.href} 
                            className="text-white hover:bg-emerald-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link 
                    href={link.href} 
                    className="text-white hover:bg-emerald-700 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navLinks.map((link) => (
            <li key={link.href || link.label}>
              {link.subItems ? (
                <div 
                  className="relative p-0" 
                  ref={el => dropdownRefs.current[link.label] = el}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    onClick={() => toggleDropdown(link.label)}
                    className="text-emerald-900 hover:bg-emerald-100 rounded-lg px-4 py-2 text-left w-full flex justify-between items-center font-medium"
                    aria-expanded={openDropdown === link.label}
                  >
                    {link.label}
                    <svg className={`w-4 h-4 ml-2 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === link.label && (
                    <ul className="absolute left-0 top-full mt-1 p-2 bg-white border border-emerald-100 rounded-lg z-10 w-56 shadow-xl">
                      {link.subItems.map((subItem) => (
                        <li key={subItem.label}>
                          <Link 
                            href={subItem.href}
                            className="block px-4 py-2 text-emerald-800 hover:bg-emerald-50 rounded-md transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link 
                  href={link.href} 
                  className="text-emerald-900 hover:bg-emerald-100 rounded-lg px-4 py-2 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}