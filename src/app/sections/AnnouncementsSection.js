import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../../utils/motion';

const AnnouncementCard = ({ title, date, description, isNew = false, index }) => {
  return (
    <motion.div 
      className="group relative h-full bg-white/80 hover:bg-white transition-all duration-300 overflow-hidden border border-gray-200 hover:border-emerald-200 shadow-sm hover:shadow-md rounded-lg"
      variants={fadeInUp}
    >
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-500 to-emerald-700"></div>
      
      <div className="p-4 h-full flex flex-col">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <FaBullhorn className="w-4 h-4 text-emerald-600" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-800 leading-tight mb-1 line-clamp-2" style={{ fontFamily: 'var(--font-siyam-rupali)' }}>
              {title}
            </h3>
            
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <FaCalendarAlt className="w-3 h-3 mr-1 text-emerald-500 flex-shrink-0" />
              <span className="truncate">{date}</span>
              
              {isNew && (
                <span className="ml-2 px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-medium rounded">
                  নতুন
                </span>
              )}
            </div>
            
            <p className="text-xs text-gray-600 mt-1.5 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AnnouncementsSection = ({ announcements }) => {
  return (
    <section className="py-4">
      <motion.div 
        className="container mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 text-sm font-medium text-emerald-700 bg-emerald-100/80 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            গুরুত্বপূর্ণ তথ্য
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            সর্বশেষ ঘোষণা
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 max-w-4xl mx-auto"
          variants={staggerContainer}
        >
          {announcements.map((announcement, index) => (
            <AnnouncementCard
              key={index}
              index={index}
              title={announcement.title}
              date={announcement.date}
              description={announcement.description}
              isNew={index < 2} // Mark first two announcements as new
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full hover:from-emerald-700 hover:to-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            সমস্ত ঘোষণা দেখুন
            <FaArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AnnouncementsSection;
