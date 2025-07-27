import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';
import PrincipalMessageSection from './PrincipalMessageSection';

const WelcomeSection = () => {
  return (
    <motion.section 
      className="py-4  bg-gradient-to-b from-white to-emerald-50"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row gap-8"
          variants={staggerContainer}
        >
          <motion.div 
            className="lg:w-2/3"
            variants={fadeIn('right', 'tween', 0.2, 1)}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <motion.div variants={textVariant(0.1)}>
                <span className="inline-block px-4 py-1.5 text-sm font-medium text-emerald-700 bg-emerald-100/80 rounded-full mb-4">
                  আমাদের সম্পর্কে
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  সানরাইজ একাডেমিতে স্বাগতম
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full mb-6"></div>
              </motion.div>
              
              <motion.div 
                className="prose prose-lg text-gray-600 max-w-none"
                variants={staggerContainer}
              >
                <motion.p 
                  className="leading-relaxed mb-6 text-gray-700"
                  variants={fadeIn('up', 'tween', 0.2, 1)}
                >
                  ২০০০ সালে প্রতিষ্ঠিত, সানরাইজ একাডেমি একটি অগ্রগণ্য শিক্ষা প্রতিষ্ঠান যেখানে আমরা শিক্ষার্থীদের সৃজনশীলতা, নৈতিকতা এবং জ্ঞানের সমন্বয়ে গড়ে তুলি। আমাদের অভিজ্ঞ শিক্ষকমণ্ডলী এবং আধুনিক সুযোগ-সুবিধার মাধ্যমে আমরা শিক্ষার্থীদেরকে ভবিষ্যতের জন্য প্রস্তুত করি।
                </motion.p>
                <motion.p 
                  className="leading-relaxed text-gray-700"
                  variants={fadeIn('up', 'tween', 0.3, 1)}
                >
                  আমাদের লক্ষ্য হল এমন একটি পরিবেশ তৈরি করা যেখানে প্রতিটি শিক্ষার্থী তাদের পূর্ণ সম্ভাবনা বিকাশ করতে পারে। আমরা একাডেমিক শ্রেষ্ঠত্ব, চরিত্র গঠন এবং সামাজিক দায়বদ্ধতার উপর জোর দিয়ে থাকি।
                </motion.p>
                
                <motion.div 
                  className="mt-8 flex flex-wrap gap-4"
                  variants={fadeIn('up', 'tween', 0.4, 1)}
                >
                  <motion.a
                    href="/about"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full transition-colors duration-300 flex items-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    আমাদের সম্পর্কে আরও জানুন
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="/admissions"
                    className="px-6 py-3 bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium rounded-full transition-colors duration-300 flex items-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    ভর্তি প্রক্রিয়া
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/3"
            variants={fadeIn('left', 'tween', 0.3, 1)}
          >
            <PrincipalMessageSection />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WelcomeSection;
