import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DesktopNav({ navLinks, pathname, openDropdown, toggleDropdown, dropdownRefs, isScrolled, toggleMenu, isOpen, buttonRef }) {
  const navItems = (
                <ul className={`flex items-center ${isScrolled ? 'space-x-4' : 'w-full justify-between h-full'}`}>
      {navLinks.map((link) => (
        <li key={link.href || link.label} className={`relative ${isScrolled ? '' : 'flex-grow h-full'}`}>
          <div className={`${isScrolled ? '' : 'text-center h-full'}`}>
          {link.subItems ? (
            <div 
                className="relative h-full group"
                onMouseEnter={() => toggleDropdown(link.label)}
              >
              <button 
                type="button"
                className={`flex items-center justify-center px-4 py-2.5 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 ${
                  isScrolled ? 'mx-1' : 'w-full h-full'
                } ${
                  openDropdown === link.label || pathname === link.href
                    ? 'bg-emerald-600 text-white font-semibold'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-800'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(openDropdown === link.label ? null : link.label);
                }}
              >
                {link.label}
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    openDropdown === link.label ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className={`${openDropdown === link.label ? 'block' : 'hidden'} group-hover:block`}>
                <div 
                  ref={el => dropdownRefs.current[link.label] = el}
                  className="dropdown-menu absolute left-1/2 -translate-x-1/2 mt-0 w-64 rounded-b-lg shadow-xl bg-white border border-gray-100 focus:outline-none z-50 overflow-hidden"
                  style={{
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.ul 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="py-2"
                  >
                    {link.subItems.map((subItem) => (
                      <li key={subItem.label} className="first:mt-1 last:mb-1">
                        <Link 
                          href={subItem.href}
                          className={`block w-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                            pathname === subItem.href 
                              ? 'bg-emerald-50 text-emerald-800 font-semibold' 
                              : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-800'
                          }`}
                          onClick={() => toggleDropdown(null)}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          ) : (
            <Link 
              href={link.href}
              target={link.target || '_self'}
              rel={link.target === '_blank' ? 'noopener noreferrer' : ''}
              className={`flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 ${isScrolled ? '' : 'w-full h-full'} ${
                pathname === link.href 
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-800'
              }`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
              {link.target === '_blank' && (
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </Link>
          )}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full h-full">
      {isScrolled ? (
        // Compact (Scrolled) View
        <div className="hidden lg:flex items-center justify-between h-full px-8">
          <Link href="/" className="flex items-center hover:opacity-90">
            <img 
              src="/images/square-kindergarten-logo.jpeg" 
              alt="স্কয়ার কিন্ডারগার্টেন স্কুল"
              className="h-10 w-10 rounded-full border-2 border-emerald-600 mr-3"
            />
            <div>
              <span className="font-black text-gray-800 text-base block">স্কয়ার কিন্ডারগার্টেন স্কুল</span>
              <p className="text-xs text-gray-600 font-siyam-rupali font-semibold">ইনস্টিটিউট কোড: ২০০৬৮ | EIIN: ১৩২৯১৩</p>
            </div>
          </Link>
          <nav>{navItems}</nav>
        </div>
      ) : (
        // Expanded (Unscrolled) View
        <div className="hidden lg:block h-full">
          <div className="relative flex items-center justify-center h-2/3 bg-emerald-100 py-4">
            <Link href="/" className="flex-shrink-0">
              <img 
                src="/images/square-kindergarten-logo.jpeg" 
                alt="স্কয়ার কিন্ডারগার্টেন স্কুল"
                className="h-20 w-20 rounded-full border-2 border-emerald-600"
              />
            </Link>
            <div className="text-center mx-8">
              <h1 className="font-black text-gray-800 text-4xl font-siyam-rupali pt-4">স্কয়ার কিন্ডারগার্টেন স্কুল</h1>
              <p className="text-gray-600 font-siyam-rupali text-lg mt-1">শিক্ষা | শক্তি | উন্নতি</p>
            </div>
            <div className="absolute top-2 left-4 text-sm text-white font-siyam-rupali font-semibold bg-emerald-600 px-2 py-1 rounded-md">EIIN: 132913</div>
            <div className="absolute top-2 right-4 text-sm text-white font-siyam-rupali font-semibold bg-emerald-600 px-2 py-1 rounded-md">ইনস্টিটিউট কোড: ২০০৬৮</div>
            <Link href="/" className="flex-shrink-0">
              <img 
                src="/images/square-kindergarten-logo.jpeg" 
                alt="স্কয়ার কিন্ডারগার্টেন স্কুল"
                className="h-20 w-20 rounded-full border-2 border-emerald-600"
              />
            </Link>
          </div>
          <nav className="flex items-center justify-center">{navItems}</nav>
        </div>
      )}

      {/* Mobile Hamburger Menu Button (always visible on small screens) */}
      <div className="lg:hidden ml-auto" ref={buttonRef}>
        <button 
          type="button"
          className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition-colors"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>
  );
}