import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../../utils/motion';

const AnnouncementCard = ({ title, date, description, isNew = false, index }) => {
  return (
    <motion.div 
      className="group relative h-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
      variants={fadeInUp}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-700"></div>
      
      {isNew && (
        <motion.div 
          className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: index * 0.1 + 0.3
          }}
        >
          নতুন
        </motion.div>
      )}
      
      <div className="p-6 h-full flex flex-col">
        <motion.div 
          className="flex items-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.1 }}
        >
          <motion.div 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mr-3"
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            <FaBullhorn className="w-5 h-5" />
          </motion.div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </motion.div>
        
        <motion.div 
          className="flex items-center text-sm text-gray-500 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          <FaCalendarAlt className="w-3.5 h-3.5 mr-1.5 text-emerald-500" />
          <span>{date}</span>
        </motion.div>
        
        <motion.p 
          className="text-gray-600 mb-5 flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {description}
        </motion.p>
        
        <motion.button 
          className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 mt-auto group"
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <span className="group-hover:underline">বিস্তারিত জানুন</span>
          <FaArrowRight className="ml-2 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const AnnouncementsSection = ({ announcements }) => {
  return (
    <section className="py-4  bg-gradient-to-b from-white to-emerald-50">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
