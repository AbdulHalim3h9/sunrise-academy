import React, { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaBullhorn, FaCalendarAlt, FaArrowRight, FaSpinner } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../../utils/motion';

// Dynamically import the AnnouncementPopup to avoid SSR issues with modals
const AnnouncementPopup = dynamic(
  () => import('@/app/announcements/AnnouncementPopup'),
  { ssr: false }
);

const formatDate = (dateString) => {
  if (!dateString) return '';
  
  // Try parsing the date string (handling different formats)
  let date;
  if (dateString.includes('T')) {
    // ISO format (2025-08-10T00:00:00+00:00)
    date = new Date(dateString);
  } else if (dateString.includes('/')) {
    // DD/MM/YYYY format
    const [day, month, year] = dateString.split('/').map(Number);
    date = new Date(year, month - 1, day);
  } else {
    return dateString; // Return as is if format is unknown
  }
  
  // Format as DD MMM YYYY (e.g., 10 Aug 2025)
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

const AnnouncementCard = ({ title, date, description, id, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Format the date
  const formattedDate = formatDate(date);
  
  // Strip HTML tags from description for preview
  const plainText = description.replace(/<[^>]*>?/gm, '');
  const previewText = plainText.length > 80 ? plainText.substring(0, 80) + '...' : plainText;

  return (
    <>
      <motion.div 
        className="group relative bg-white hover:bg-gray-50 transition-all duration-200 overflow-hidden border border-gray-200 hover:border-emerald-200 rounded-lg shadow-sm hover:shadow cursor-pointer flex flex-col h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 
              className="text-base font-medium text-gray-800 line-clamp-2 mb-2" 
              style={{ fontFamily: 'var(--font-siyam-rupali)' }}
            >
              {title}
            </h3>
            
            {previewText && (
              <p className="text-sm text-gray-600 line-clamp-2">
                {previewText}
              </p>
            )}
          </div>
          
          <div className="mt-3 pt-2 border-t border-gray-100">
            <div className="flex justify-end">
              <span className="text-xs text-gray-500 flex items-center">
                <FaCalendarAlt className="w-3 h-3 mr-1 text-emerald-500 flex-shrink-0" />
                {formattedDate}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <AnnouncementPopup
          announcement={{
            title,
            date: formattedDate,
            description
          }}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

const AnnouncementsSection = ({ announcements = [], loading = false, error = null }) => {
  if (loading) {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto text-center">
          <FaSpinner className="animate-spin h-8 w-8 text-emerald-600 mx-auto" />
          <p className="mt-4 text-gray-600">ঘোষণা লোড হচ্ছে...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  ঘোষণাগুলি লোড করতে সমস্যা হয়েছে। দয়া করে পরে আবার চেষ্টা করুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              সর্বশেষ ঘোষণা
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full"></div>
          </div>
        </motion.div>

        {announcements.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">কোন ঘোষণা পাওয়া যায়নি</p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20%" }}
          >
            {announcements.map((announcement, index) => (
              <AnnouncementCard
                key={announcement.id || index}
                id={announcement.id}
                title={announcement.title}
                date={announcement.date}
                description={announcement.description}
                index={index}
              />
            ))}
          </motion.div>
        )}
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link 
              href="/announcements"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full hover:from-emerald-700 hover:to-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              সমস্ত ঘোষণা দেখুন
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
