'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';

import TopBar from './navigation/TopBar';
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
      {/* Scrolling Indicator - Placed above everything */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      {/* TopBar - Fixed at the top */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <TopBar />
      </div>
      
      {/* Main Navigation - Positioned below TopBar */}
      <div className="fixed top-10 left-0 right-0 z-40">
        <div className={`w-full bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
          <div className="w-full bg-white">
            <div className={`mx-auto px-0 sm:px-6 lg:px-0 transition-all duration-300 ${isMobile ? 'h-16' : (isScrolled ? 'h-16' : 'h-36')}`}>
              <div className="relative h-full">
                {isMobile ? (
                <div className="flex items-center justify-between h-full">
                  <Link href="/" className="flex items-center hover:opacity-90">
                    <img 
                      src="/images/square-kindergarten-logo.jpeg" 
                      alt="স্কয়ার কিন্ডারগার্টেন স্কুল"
                      className="h-10 w-10 rounded-full border-2 border-emerald-600 flex-shrink-0 mr-3"
                    />
                    <div className="text-left">
                      <span className="font-black text-gray-800 text-base block truncate">
                        স্কয়ার কিন্ডারগার্টেন
                      </span>
                      <p className="text-xs text-gray-600 font-siyam-rupali font-semibold whitespace-nowrap">
                        ইনস্টিটিউট কোড: ২০০৬৮ | EIIN: ১৩২৯১৩
                      </p>
                    </div>
                  </Link>
                  <div ref={buttonRef} className="ml-auto flex-shrink-0">
                    <button 
                      type="button"
                      className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition-colors"
                      onClick={() => toggleMenu()}
                      aria-expanded={isOpen}
                      aria-controls="mobile-menu"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <DesktopNav 
                  navLinks={navLinks}
                  pathname={pathname}
                  openDropdown={openDropdown}
                  toggleDropdown={toggleDropdown}
                  dropdownRefs={dropdownRefs}
                  isScrolled={isScrolled}
                />
              )}
              </div>
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
        </div>
      </div>
      <div className={`${isMobile ? 'h-28' : 'h-44'}`}></div>
    </>
  );
}