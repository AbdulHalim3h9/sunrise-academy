'use client';

import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_KHOBOR_EVENTS } from '../graphql/queries';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaNewspaper, FaArrowRight } from 'react-icons/fa';
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
      className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-56 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: (index % 3) * 0.1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-100">
        {coverImage?.node?.sourceUrl ? (
          <Image
            src={coverImage.node.sourceUrl}
            alt={coverImage.node.altText || eventTitle || 'Event'}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
            <FaNewspaper className="w-12 h-12 text-emerald-500" />
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-4 text-white">
        <div className="flex items-center text-xs text-white/80 mb-2">
          <FaCalendarAlt className="w-3 h-3 mr-1.5 text-emerald-300 flex-shrink-0" />
          <span>{formatDate(date)}</span>
        </div>
        
        <h3 
          className="text-xl font-bold leading-tight line-clamp-2 mb-3 text-white"
          style={{ 
            fontFamily: 'var(--font-siyam-rupali)',
            textShadow: '0 1px 3px rgba(0,0,0,0.7)'
          }}
        >
          {eventTitle}
        </h3>
        
        <div className="flex items-center text-xs text-white/80 group-hover:text-emerald-200 transition-colors">
          বিস্তারিত জানুন
          <FaArrowRight className="ml-1 h-2.5 w-2.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

const NewsAndEventsSection = () => {
  const { loading, error, data } = useQuery(GET_KHOBOR_EVENTS, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading && !data?.khoborEvents?.edges?.length) {
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

  const events = data?.khoborEvents?.edges?.slice(0, 3) || [];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 
          className="text-2xl font-bold text-gray-900 mb-2 md:mb-0"
          style={{ fontFamily: 'var(--font-siyam-rupali)' }}
        >
          খবর ও ইভেন্ট
        </h2>
        <Link 
          href="/news-events" 
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm"
        >
          সব দেখুন
          <FaArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
      
      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(({ node }, index) => (
            <NewsEventCard key={node.id} event={node} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <FaNewspaper className="mx-auto h-12 w-12 text-gray-300 mb-4" />
          <p className="text-gray-500">কোন খবর বা ইভেন্ট পাওয়া যায়নি</p>
        </div>
      )}
    </div>
  );
};

export default NewsAndEventsSection;
