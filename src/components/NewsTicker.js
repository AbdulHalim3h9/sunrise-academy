'use client';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';

// GraphQL query for latest notices
const GET_LATEST_NOTICES = gql`
  query GetLatestNotices($first: Int = 5) {
    schoolNotices(first: $first) {
      edges {
        node {
          id
          uri
          schoolNotices {
            notice
            noticeDate
            isImportant
          }
        }
      }
    }
  }
`;

const NewsTicker = () => {
  // State and refs
  const [isPaused, setIsPaused] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const contentRef = useRef(null);
  const animationRef = useRef({ start: 0 });
  const requestRef = useRef();
  
  // Fetch notices from WordPress
  const { data, loading, error } = useQuery(GET_LATEST_NOTICES);
  
  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Transform notices for the ticker - only take the first notice
  const newsItems = React.useMemo(() => {
    if (!data?.schoolNotices?.edges?.length) return [];
    
    // Get only the latest notice
    const latestNotice = data.schoolNotices.edges[0];
    const notice = latestNotice.node;
    const noticeData = notice.schoolNotices || {};
    const noticeText = noticeData.notice?.trim();
    
    if (!noticeText) return [];
    
    return [{
      id: notice.id,
      text: noticeText,
      link: notice.uri || '/notices',
      isImportant: noticeData.isImportant || false,
      date: noticeData.noticeDate
    }];
  }, [data]);
  
  // Add emoji based on importance
  const getNoticeEmoji = (isImportant) => {
    return isImportant ? '📢 ' : '📅 ';
  };
  
  // Animation function
  const animate = useCallback((timestamp) => {
    if (!contentRef.current) return;
    
    if (!animationRef.current.start) {
      animationRef.current.start = timestamp;
      animationRef.current.lastX = 0;
      animationRef.current.contentWidth = contentRef.current.scrollWidth / 2; // Since we duplicate the content
    }
    
    // Calculate progress (slower animation)
    const progress = timestamp - animationRef.current.start;
    const containerWidth = contentRef.current.parentElement.offsetWidth;
    const distance = (progress * 0.02) % (animationRef.current.contentWidth + containerWidth);
    
    // If we've scrolled past the width of one set of items, reset to start
    if (distance > animationRef.current.contentWidth) {
      animationRef.current.start = timestamp;
      contentRef.current.style.transition = 'none';
      contentRef.current.style.transform = 'translateX(0)';
      requestAnimationFrame(animate);
      return;
    }
    
    // Apply smooth transition
    contentRef.current.style.transition = 'transform 0.1s linear';
    contentRef.current.style.transform = `translateX(-${distance}px)`;
    
    if (!isPaused) {
      requestRef.current = requestAnimationFrame(animate);
    }
  }, [isPaused]);
  
  // Start/stop animation based on pause state and news items
  useEffect(() => {
    if (!isClient) return;
    
    if (newsItems.length > 0 && !isPaused) {
      animationRef.current.start = 0;
      requestRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isPaused, newsItems, animate, isClient]);
  
  // Show loading state
  if (!isClient || loading) {
    return (
      <div className="bg-blue-50 text-blue-800 p-2 text-center">
        Loading notices...
      </div>
    );
  }
  
  // Show error state
  if (error) {
    console.error('Error loading notices:', error);
    return (
      <div className="bg-red-50 text-red-800 p-2 text-center">
        Could not load notices. Please try again later.
      </div>
    );
  }
  
  // No need to duplicate items since we're only showing one notice

  return (
    <div 
      className="bg-emerald-50 border-b border-emerald-100 relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ padding: '0' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex items-center">
          {/* Label */}
          <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-emerald-600 text-white shadow-sm mr-2">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className="flex items-center justify-center w-full h-full"
            >
              <svg 
                className="w-3.5 h-3.5 md:w-4 md:h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </motion.div>
          </div>
          
          {/* Ticker Content */}
          <div className="relative flex-1 overflow-hidden h-8 md:h-7">
            <div 
              ref={contentRef}
              className="whitespace-nowrap inline-block absolute left-0 top-0 flex items-center h-full"
            >
              {newsItems.map((item) => (
                <div 
                  key={item.id}
                  className="inline-flex items-center w-full justify-center text-sm"
                >
                  <span className="font-bangla text-gray-800">{item.text}</span>
                  {item.date && (
                    <span className="hidden md:inline-block ml-4 text-xs text-gray-500">
                      {new Date(item.date).toLocaleDateString('bn-BD')}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* View All Link Removed */}
        </div>
      </div>
      

    </div>
  );
};

export default NewsTicker;
