'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import NewsTicker with no SSR to avoid window is not defined errors
const NewsTicker = dynamic(() => import('./NewsTicker'), { ssr: false });

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
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRefs = useRef({});
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0); // Show expanded nav only when at the very top (0px)
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener with passive for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll, { passive: true });
  }, []);

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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Navbar Container - Fixed at the top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm" style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <motion.div 
          className="w-full bg-white"
          initial={false}
        >
          <motion.div 
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 origin-left z-50"
            style={{ scaleX }}
          />
          
          <div className="max-w-7xl mx-auto px-4 h-full">
        {/* Expanded Layout - Shows when not scrolled */}
        <motion.div
          className="h-full"
          initial={false}
          animate={{
            opacity: isScrolled ? 0 : 1,
            display: isScrolled ? 'none' : 'flex',
          }}
          transition={{ duration: 0.3 }}
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* School Info Section - Top with matte background */}
          <div className="flex items-center justify-between py-2 px-2 sm:px-4 relative navbar-matte-bg">
            {/* School Info - Responsive layout */}
            <Link href="/" className="flex items-center justify-center w-full">
              <div className="flex items-center">
                {/* Left Logo - Always visible */}
                <div className="flex-shrink-0 mr-2 sm:mr-6 md:mr-10 lg:mr-16">
                  <img 
                    src="/images/square-kindergarten-logo.jpeg" 
                    alt="স্কয়ার কিন্ডারগার্টেন স্কুল"
                    className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full border-2 border-emerald-600"
                  />
                </div>
                
                {/* School Name and Info - Center */}
                <div className="text-center flex-1 px-2 sm:px-4 md:px-8 lg:px-16">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-600 leading-tight font-siyam-rupali">
                    স্কয়ার কিন্ডারগার্টেন স্কুল
                  </h1>
                  <div className="flex flex-wrap justify-center items-center gap-2 mt-1">
                    <span className="text-xs sm:text-sm text-gray-600 font-siyam-rupali">
                      ইনস্টিটিউট কোড: ২০০৬৮
                    </span>
                    <span className="hidden sm:inline text-gray-400">|</span>
                    <span className="text-xs sm:text-sm text-gray-600 font-siyam-rupali">
                      EIIN: ১৩২৯১৩
                    </span>
                  </div>
                </div>
                
                {/* Right Logo - Hidden on mobile, shown on md and up */}
                <div className="hidden md:block flex-shrink-0 ml-6 md:ml-10 lg:ml-16">
                  <img 
                    src="/images/square-kindergarten-logo.jpeg" 
                    alt="স্কয়ার কিন্ডারগার্টেন স্কুল"
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-emerald-600"
                  />
                </div>
              </div>
            </Link>
            
            {/* Mobile Menu Button - Only visible on mobile */}
            <div className="lg:hidden" ref={buttonRef}>
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

          {/* Navigation Links - Stretched across full width */}
          <div className="hidden lg:flex items-center justify-center p-0 bg-white">
            <ul className="flex items-center justify-center w-full">
              {navLinks.map((link, index) => (
                <li key={link.href || link.label} className="flex-1 relative">
                  {link.subItems ? (
                    <div className="relative text-center" ref={(el) => dropdownRefs.current[link.label] = el}>
                      <button 
                        type="button"
                        className="w-full flex items-center justify-center px-4 py-3 text-gray-800 hover:text-white hover:bg-emerald-600 hover:bg-opacity-90 font-bold transition-all duration-200"
                        onClick={() => toggleDropdown(link.label)}
                      >
                        {link.label}
                        <svg className="w-4 h-4 ml-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                             style={{ transform: openDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === link.label && (
                        <motion.ul 
                          className="absolute left-1/2 transform -translate-x-1/2 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg z-50"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.subItems.map((subItem) => (
                            <li key={subItem.label}>
                              <Link 
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-800 hover:text-white hover:bg-emerald-600 hover:bg-opacity-90 active:bg-emerald-700 transition-all duration-200"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={link.href}
                      className={`block w-full text-center px-3 py-3 font-bold transition-all duration-200 ${
                        pathname === link.href 
                          ? 'text-white bg-emerald-600' 
                          : 'text-gray-800 hover:text-white hover:bg-emerald-600 hover:bg-opacity-90 active:bg-emerald-700 rounded-none'
                      }`}
                      aria-current={pathname === link.href ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  )}
                  {/* No need for separator as we're using border-r */}
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button for expanded view */}
            <div className="lg:hidden absolute right-2 sm:right-4" ref={buttonRef}>
              <button 
                type="button"
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition-colors"
                onClick={() => toggleMenu()}
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
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
                </motion.div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Compact Layout - Shows when scrolled */}
        <motion.div
          className="h-full py-2 sm:py-0"
          initial={false}
          animate={{
            opacity: isScrolled ? 1 : 0,
            display: isScrolled ? 'flex' : 'none',
          }}
          transition={{ duration: 0.3 }}
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo and School Name - Left */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity duration-200">
            <img 
              src="/images/square-kindergarten-logo.jpeg" 
              alt="স্কয়ার কিন্ডারগার্টেন স্কুল"
              className="h-10 w-10 rounded-full border-2 border-emerald-600 mr-3 flex-shrink-0"
            />
            <div className="text-left overflow-hidden">
              <span className="font-black text-gray-800 text-base sm:text-lg truncate block">স্কয়ার কিন্ডারগার্টেন স্কুল</span>
              <p className="text-xs text-gray-600 font-siyam-rupali font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                ইনস্টিটিউট কোড: ২০০৬৮ | EIIN: ১৩২৯১৩
              </p>
            </div>
          </Link>

          {/* Navigation Links - Right */}
          <ul className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.href || link.label} className="relative">
                {link.subItems ? (
                  <div className="relative" ref={(el) => dropdownRefs.current[link.label] = el}>
                    <button 
                      type="button"
                      className={`flex items-center justify-center px-3 py-3 font-bold transition-all duration-200 ${
                        openDropdown === link.label
                          ? 'text-white bg-emerald-600' 
                          : 'text-gray-800 hover:text-white hover:bg-emerald-600 hover:bg-opacity-90 active:bg-emerald-700'
                      }`}
                      onClick={() => toggleDropdown(link.label)}
                    >
                      {link.label}
                      <svg className="w-4 h-4 ml-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                           style={{ transform: openDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <motion.ul 
                        className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.subItems.map((subItem) => (
                          <li key={subItem.label}>
                            <Link 
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-800 hover:text-white hover:bg-emerald-600 hover:bg-opacity-90 active:bg-emerald-700 transition-all duration-200"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={link.href}
                    className={`px-3 py-3 font-bold transition-all duration-200 ${
                      pathname === link.href 
                        ? 'text-white bg-emerald-600' 
                        : 'text-gray-800 hover:text-white hover:bg-emerald-600 hover:bg-opacity-90 active:bg-emerald-700'
                    }`}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button for compact view */}
          <div className="lg:hidden" ref={buttonRef}>
            <button 
              type="button"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition-colors"
              onClick={() => toggleMenu()}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
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
              </motion.div>
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
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
          <motion.div 
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl flex flex-col z-50"
            initial={{ x: '100%' }}
            animate={{ x: isOpen ? 0 : '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Header */}
            <div className="p-4  bg-emerald-600 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src="/images/square-kindergarten-logo.jpeg"
                    alt="Logo"
                    className="h-10 w-10 rounded-full mr-3"
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
                        <summary className="flex items-center justify-between w-full p-4 text-left text-gray-700 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
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
            <div className="p-4 bg-white">
              <p className="text-center text-sm text-gray-500">© {new Date().getFullYear()} স্কয়ার কিন্ডারগার্টেন</p>
            </div>
          </motion.div>
        </div>
          </div>
          
          {/* News Ticker - Always visible */}
          <div className="w-full">
            <NewsTicker />
          </div>
        </motion.div>
      </div>
      
      {/* Spacer div to push content below the navbar and NewsTicker */}
      <div className="h-36 sm:h-44 md:h-48">
        {/* This empty div creates space for the fixed navbar and NewsTicker */}
      </div>
    </>
  );
}