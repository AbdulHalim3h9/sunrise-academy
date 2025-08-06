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
                className={`flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 ${isScrolled ? '' : 'w-full h-full'} ${
                  openDropdown === link.label
                    ? 'bg-emerald-600 text-white'
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
                  className="dropdown-menu absolute left-0 mt-0 pt-1 w-56 rounded-b-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  style={{
                    // Position the dropdown right below the parent item with no gap
                    transform: 'translateY(-1px)'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.ul 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="py-1"
                  >
                    {link.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link 
                          href={subItem.href}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors duration-200 focus:outline-none"
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
              className={`flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 ${isScrolled ? '' : 'w-full h-full'} ${
                pathname === link.href 
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-800'
              }`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
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