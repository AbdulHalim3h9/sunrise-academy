'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Toggle mobile menu with scroll lock
  const toggleMenu = (open) => {
    const shouldOpen = open !== undefined ? open : !isOpen;
    setIsOpen(shouldOpen);
    
    // Toggle body scroll
    if (shouldOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  // Close menu/dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mobile menu if open and click is outside
      if (isOpen && 
          !menuRef.current?.contains(event.target) &&
          !buttonRef.current?.contains(event.target)) {
        toggleMenu(false);
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
        if (isOpen) toggleMenu(false);
        if (openDropdown !== null) setOpenDropdown(null);
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    // Clean up body class on unmount
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, openDropdown]);
  
  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and School Info */}
        <Link href="/" className="navbar-brand">
          <div className="flex items-center">
            <img 
              src="/images/square-kindergarten-logo.jpeg" 
              alt="স্কয়ার কিন্ডারগার্টেন স্কুল"
              className="navbar-logo"
            />
            <div className="school-info">
              <span className="school-name">স্কয়ার কিন্ডারগার্টেন স্কুল</span>
              <span className="school-details">ইনস্টিটিউট কোড: ২০০৬৮ | EIIN: ১৩২৯১৩</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="menu-horizontal">
          {navLinks.map((link) => (
            <li key={link.href || link.label}>
              {link.subItems ? (
                <div className="relative">
                  <button 
                    type="button"
                    className="flex items-center"
                    onClick={() => {}}
                  >
                    {link.label}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <ul className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-50">
                    {link.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link 
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-emerald-800 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link 
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - Moved to the end of the navbar container */}
        
        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          aria-hidden={!isOpen}
        >
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <div 
            ref={menuRef}
            className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl flex flex-col z-50 transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 bg-emerald-600 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src="/images/square-kindergarten-logo.jpeg"
                    alt="Logo"
                    className="h-10 w-10 rounded-full border-2 border-white mr-3"
                  />
                  <h2 className="text-lg font-bold">স্কয়ার কিন্ডারগার্টেন</h2>
                </div>
                <button 
                  className="p-2 rounded-full hover:bg-emerald-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-1 px-4">
                {navLinks.map((link) => (
                  <li key={link.href || link.label}>
                    {link.subItems ? (
                      <details>
                        <summary className="flex items-center justify-between w-full p-4 text-left text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="font-medium">{link.label}</span>
                          <svg 
                            className="w-5 h-5 text-gray-500 transition-transform transform" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <ul className="mt-1 pl-4 space-y-1">
                          {link.subItems.map((subItem) => (
                            <li key={subItem.label}>
                              <Link 
                                href={subItem.href}
                                className="block p-3 pl-6 text-gray-600 rounded-lg hover:bg-gray-100 hover:text-emerald-800 transition-colors"
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
                        className={`block p-4 rounded-lg transition-colors ${
                          pathname === link.href 
                            ? 'bg-emerald-50 text-emerald-800 font-semibold' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
                
                {/* Contact Info */}
                <li className="mt-8 px-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">যোগাযোগ</h3>
                    <p className="text-sm text-gray-600">ইমেইল: info@school.edu.bd</p>
                    <p className="text-sm text-gray-600">ফোন: +৮৮০ ১২৩৪ ৫৬৭৮৯</p>
                  </div>
                </li>
              </ul>
            </nav>
            
            {/* Footer */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <p className="text-center text-sm text-gray-500">© {new Date().getFullYear()} স্কয়ার কিন্ডারগার্টেন</p>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex-none lg:hidden" ref={buttonRef}>
          <button 
            type="button"
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            onClick={() => toggleMenu()}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}