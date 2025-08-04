'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';
import SchoolInfo from './navigation/SchoolInfo';
import DesktopNav from './navigation/DesktopNav';
import MobileNav from './navigation/MobileNav';
import { navLinks } from './navigation/NavLinks';
import './navigation/styles.css';

// Dynamically import NewsTicker with no SSR
const NewsTicker = dynamic(() => import('./NewsTicker'), { ssr: false });

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRefs = useRef({});
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint in Tailwind
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50); // Changed from 0 to 50 to make the compact nav appear after scrolling a bit
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll, { passive: true });
  }, []);

  // Toggle mobile menu with scroll lock
  const toggleMenu = (open) => {
    const shouldOpen = open !== undefined ? open : !isOpen;
    setIsOpen(shouldOpen);
    if (shouldOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  // Close menu/dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && 
          !menuRef.current?.contains(event.target) &&
          !buttonRef.current?.contains(event.target)) {
        toggleMenu(false);
      }
      
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

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, openDropdown]);
  
  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Main Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <motion.div className="w-full bg-white" initial={false}>
          <motion.div 
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 origin-left z-50"
            style={{ scaleX }}
          />
          <div className="max-w-7xl mx-auto px-4">
            {/* Regular Header */}
            <div className={isScrolled ? 'hidden' : 'block'}>
              <SchoolInfo isScrolled={isScrolled} toggleMenu={toggleMenu} isOpen={isOpen} buttonRef={buttonRef} />
            </div>
            
            {/* Compact Mobile Header (shown when scrolled) */}
            <div className={`lg:hidden ${isScrolled ? 'flex items-center justify-between h-16' : 'hidden'}`}>
              <a href="/" className="flex items-center">
                <img 
                  src="/images/square-kindergarten-logo.jpeg"
                  alt="Logo"
                  className="h-10 w-10 rounded-full mr-3"
                />
                <span className="font-bold text-gray-800">স্কয়ার কিন্ডারগার্টেন</span>
              </a>
              <div className="flex items-center">
                <button 
                  type="button"
                  className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                  onClick={() => toggleMenu()}
                  aria-expanded={isOpen}
                  aria-label="Toggle menu"
                  ref={buttonRef}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <DesktopNav 
                navLinks={navLinks}
                pathname={pathname}
                openDropdown={openDropdown}
                toggleDropdown={toggleDropdown}
                dropdownRefs={dropdownRefs}
                isScrolled={isScrolled}
                toggleMenu={toggleMenu}
                isOpen={isOpen}
                buttonRef={buttonRef}
              />
            </div>
            
            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <MobileNav 
                navLinks={navLinks}
                pathname={pathname}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                menuRef={menuRef}
              />
            </div>
            
            <div className="w-full">
              <NewsTicker />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="h-36 sm:h-44 md:h-48"></div>
    </>
  );
}