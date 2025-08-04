import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DesktopNav({ navLinks, pathname, openDropdown, toggleDropdown, dropdownRefs, isScrolled, toggleMenu, isOpen, buttonRef }) {
  return (
    <>
      <motion.div
        className="flex items-center justify-center p-0 bg-white"
        initial={false}
        animate={{
          opacity: isScrolled ? 0 : 1,
          display: isScrolled ? 'none' : 'flex',
        }}
        transition={{ duration: 0.3 }}
      >
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
                            onClick={() => toggleDropdown(null)}
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
            </li>
          ))}
        </ul>
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
      </motion.div>
      <motion.div
        className="h-full py заранее определённый sm:py-0"
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
                            onClick={() => toggleDropdown(null)}
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
    </>
  );
}