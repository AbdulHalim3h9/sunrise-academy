import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MobileNav({ navLinks, pathname, isOpen, setIsOpen, menuRef }) {
  return (
    <div 
      className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      aria-hidden={!isOpen}
    >
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      <motion.div 
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl flex flex-col z-50"
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="p-4 bg-emerald-600 text-white">
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
                      {link.subItems.map((subItem) => {
                        const handleClick = (e) => {
                          e.stopPropagation();
                          setIsOpen(false);
                        };
                        
                        return (
                          <li key={subItem.label}>
                            <Link 
                              href={subItem.href}
                              className="block p-3 pl-6 text-gray-600 rounded-lg hover:bg-gray-100 hover:text-emerald-800 transition-colors"
                              onClick={handleClick}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        );
                      })}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="mt-8 px-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">যোগাযোগ</h3>
                <p className="text-sm text-gray-600">ইমেইল: info@school.edu.bd</p>
                <p className="text-sm text-gray-600">ফোন: +৮৮০ ১২৩৪ ৫৬৭৮৯</p>
              </div>
            </li>
          </ul>
        </nav>
        <div className="p-4 bg-white">
          <p className="text-center text-sm text-gray-500">© {new Date().getFullYear()} স্কয়ার কিন্ডারগার্টেন</p>
        </div>
      </motion.div>
    </div>
  );
}