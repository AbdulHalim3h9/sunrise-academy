'use client';
import React, { useEffect, useState, useRef, useCallback } from 'react';
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
  
  // Transform notices for the ticker
  const newsItems = React.useMemo(() => {
    if (!data?.schoolNotices?.edges) return [];
    
    return data.schoolNotices.edges
      .map(edge => {
        const notice = edge.node;
        const noticeData = notice.schoolNotices || {};
        
        // Get the notice text
        const noticeText = noticeData.notice?.trim();
        
        if (!noticeText) return null;
        
        return {
          id: notice.id,
          text: noticeText,
          link: notice.uri || '/notices',
          isImportant: noticeData.isImportant || false,
          date: noticeData.noticeDate
        };
      })
      .filter(Boolean) // Remove any null entries
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
    }
    
    const progress = timestamp - animationRef.current.start;
    const translateX = -(progress * 0.01) % 1000; // Slower animation
    contentRef.current.style.transform = `translateX(${translateX}%)`;
    
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
  
  // Combine original and duplicate items for seamless looping
  const allItems = newsItems.length > 0 ? [...newsItems, ...newsItems] : [];

  return (
    <div 
      className="bg-blue-50 border-b border-gray-200 py-2 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-md mr-4 whitespace-nowrap">
            <i className="fas fa-bullhorn mr-2"></i>
            সর্বশেষ নোটিশ
          </div>
          <div className="relative flex-1 overflow-hidden h-6">
            <div 
              ref={contentRef}
              className="whitespace-nowrap inline-block absolute left-0 top-0"
            >
              {allItems.map((item, index) => (
                <Link 
                  key={`${item.id}-${index}`} 
                  href={item.link}
                  className={`inline-block mr-10 text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm ${item.isImportant ? 'font-semibold' : ''}`}
                >
                  {getNoticeEmoji(item.isImportant)} {item.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-4 text-gray-500 text-sm">
            <i className="fas fa-angle-double-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
