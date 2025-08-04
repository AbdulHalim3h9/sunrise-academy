import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SchoolInfo({ isScrolled, toggleMenu, isOpen, buttonRef }) {
  return (
    <motion.div
      className="h-full w-full"
      initial={false}
      animate={{
        height: isScrolled ? '60px' : 'auto',
        opacity: 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={`flex items-center justify-between py-2 px-2 sm:px-4 relative ${!isScrolled ? 'navbar-matte-bg' : ''}`} style={{
        height: '100%',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}>
        <Link href="/" className="flex items-center justify-center w-full">
          <div className={`flex items-center ${isScrolled ? 'w-0 opacity-0' : 'w-full opacity-100'} transition-all duration-300`}>
            <div className="flex-shrink-0 mr-2 sm:mr-6 md:mr-10 lg:mr-16">
              <img 
                src="/images/square-kindergarten-logo.jpeg" 
                alt="স্কয়ার কিন্ডারগার্টেন স্কুল"
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full border-2 border-emerald-600"
              />
            </div>
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
            <div className="hidden md:block flex-shrink-0 ml-6 md:ml-10 lg:ml-16">
              <img 
                src="/images/square-kindergarten-logo.jpeg" 
                alt="স্কয়ার কিন্ডারগার্টেন স্কুল"
                className="h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-emerald-600"
              />
            </div>
          </div>
        </Link>
        <div className="lg:hidden flex-shrink-0" ref={buttonRef}>
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
    </motion.div>
  );
}