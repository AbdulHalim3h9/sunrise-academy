import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';

const PrincipalMessageSection = () => {
  // State to control animation
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-full"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h3 
        className="text-xl font-bold text-emerald-800 mb-5 pb-3 border-b border-emerald-100"
        variants={item}
      >
        প্রিন্সিপালের বার্তা
      </motion.h3>
      
      <motion.div 
        className="flex flex-col sm:flex-row items-center sm:items-start gap-6"
        variants={container}
      >
        <motion.div 
          className="w-24 h-24 bg-emerald-50 rounded-full overflow-hidden flex-shrink-0 shadow-md border-4 border-emerald-100"
          variants={item}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="প্রিন্সিপাল"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23e5e7eb"><path d="M12 12a5 5 0 110-10 5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6zm9 11a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a9 9 0 0118 0v1z"/></svg>';
            }}
          />
        </motion.div>
        
        <motion.div 
          className="flex-1 text-center sm:text-left"
          variants={container}
        >
          <motion.div 
            className="mb-4"
            variants={item}
          >
            <h4 className="font-bold text-gray-900 text-lg">ড. মোহাম্মদ আলী</h4>
            <p className="text-sm text-emerald-600 font-medium mt-1">প্রিন্সিপাল, সানরাইজ একাডেমি</p>
          </motion.div>
          
          <motion.p 
            className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-3"
            variants={item}
          >
            সানরাইজ একাডেমিতে স্বাগতম। আমাদের লক্ষ্য হল শিক্ষার্থীদের প্রযুক্তিগত দক্ষতা এবং নৈতিক মূল্যবোধে সমৃদ্ধ করে গড়ে তোলা। আমরা বিশ্বাস করি যে প্রতিটি শিক্ষার্থীর মধ্যে অসীম সম্ভাবনা রয়েছে।
          </motion.p>
          
          <motion.div 
            className="flex justify-center sm:justify-start"
            variants={item}
          >
            <motion.a
              href="/about/principal-message"
              className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium py-2.5 px-6 rounded-full text-sm transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              aria-label="আরও পড়ুন"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>আরও পড়ুন</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-3.5 w-3.5 ml-2 transition-transform group-hover:translate-x-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="mt-6 pt-5 border-t border-gray-100 flex justify-center space-x-4"
        variants={item}
      >
        <a 
          href="#" 
          className="text-gray-400 hover:text-emerald-600 transition-colors"
          aria-label="Facebook"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </a>
        <a 
          href="#" 
          className="text-gray-400 hover:text-emerald-600 transition-colors"
          aria-label="Twitter"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a 
          href="#" 
          className="text-gray-400 hover:text-emerald-600 transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default PrincipalMessageSection;
