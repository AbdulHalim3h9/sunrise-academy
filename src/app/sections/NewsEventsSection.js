'use client';

import { useQuery } from '@apollo/client';
import { GET_KHOBOR_EVENTS } from '../graphql/queries';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaNewspaper } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

const NewsEventCard = ({ event, index }) => {
  const { eventTitle, date, coverImage } = event.khoborEventFields || {};
  
  return (
    <motion.div 
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: (index % 3) * 0.1 }}
    >
      <div className="relative h-48 bg-gray-100">
        {coverImage?.node?.sourceUrl ? (
          <Image
            src={coverImage.node.sourceUrl}
            alt={coverImage.node.altText || eventTitle || 'Event'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
            <FaNewspaper className="w-12 h-12 text-emerald-500" />
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <h3 
          className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2"
          style={{ fontFamily: 'var(--font-siyam-rupali)' }}
        >
          {eventTitle}
        </h3>
        
        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <FaCalendarAlt className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
            <span>{formatDate(date)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const NewsEventsSection = () => {
  const { loading, error, data } = useQuery(GET_KHOBOR_EVENTS);

  if (loading) {
    return (
      <div className="py-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">খবর ও ইভেন্ট লোড হচ্ছে...</p>
      </div>
    );
  }

  if (error) {
    console.error('Error loading news and events:', error);
    return (
      <div className="py-12 text-center">
        <p className="text-red-500">খবর ও ইভেন্ট লোড করতে সমস্যা হয়েছে। দয়া করে পরে আবার চেষ্টা করুন।</p>
      </div>
    );
  }

  const events = data?.khoborEvents?.edges || [];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-siyam-rupali)' }}
          >
            খবর ও ইভেন্ট
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>
        
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map(({ node }, index) => (
              <NewsEventCard key={node.id} event={node} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600">কোন খবর বা ইভেন্ট পাওয়া যায়নি</p>
          </div>
        )}
        
        <div className="text-center mt-10">
          <Link 
            href="/news-events" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
          >
            সব খবর ও ইভেন্ট দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
