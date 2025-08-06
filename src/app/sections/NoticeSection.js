'use client';
import React, { useState, useEffect } from 'react';
import { FaBell, FaArrowRight, FaExclamationCircle } from 'react-icons/fa';
import { useQuery, gql } from '@apollo/client';
import dynamic from 'next/dynamic';

// Dynamically import the NoticePopup to avoid SSR issues with modals
const NoticePopup = dynamic(
  () => import('@/components/notices/NoticePopup'),
  { ssr: false }
);

// GraphQL query for latest notices
const GET_LATEST_NOTICES = gql`
  query GetLatestNotices($first: Int = 5) {
    schoolNotices(first: $first) {
      edges {
        node {
          id
          uri
          content
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

const NoticeCard = ({ title, date, isUrgent = false, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="block group cursor-pointer"
    >
      <div className={`p-4 rounded-lg transition-all duration-300 h-full ${
        isUrgent 
          ? 'bg-red-50 border-l-4 border-red-500' 
          : 'bg-white hover:bg-emerald-50 border-l-4 border-emerald-200'
      }`}>
        <div className="flex items-start">
          <div 
            className={`flex-shrink-0 w-10 h-10 rounded-full ${
              isUrgent 
                ? 'bg-red-100 text-red-600' 
                : 'bg-emerald-100 text-emerald-600'
            } flex items-center justify-center mr-3`}
          >
            <FaBell className="w-4 h-4" />
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 text-sm leading-tight">
              {title}
            </h3>
            
            {date && (
              <p className="text-xs text-gray-500 mt-1">
                {new Date(date).toLocaleDateString('bn-BD', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const NoticeSection = () => {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const { loading, error, data } = useQuery(GET_LATEST_NOTICES, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  // Process the data when it's loaded
  const processNotices = () => {
    if (data?.schoolNotices?.edges) {
      return data.schoolNotices.edges.map(edge => ({
        id: edge.node.id,
        title: edge.node.schoolNotices?.notice,
        date: edge.node.schoolNotices?.noticeDate,
        isImportant: edge.node.schoolNotices?.isImportant || false,
        uri: edge.node.uri,
        content: edge.node.content
      })).filter(notice => notice.title?.trim());
    }
    return [];
  };

  // Update notices when data changes
  useEffect(() => {
    const processed = processNotices();
    setNotices(processed);
  }, [data]);

  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
  };

  const handleClosePopup = () => {
    setSelectedNotice(null);
  };

  if (loading) {
    return (
      <div className="w-full h-full">
        <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-emerald-800 flex items-center">
              <span className="bg-emerald-100 p-2 rounded-full mr-2">
                <FaBell className="w-5 h-5 text-emerald-600" />
              </span>
              সর্বশেষ নোটিশ
            </h2>
          </div>
          <div className="space-y-4 mt-4 flex-grow">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-24 bg-gray-100 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    console.error('Error loading notices:', {
      message: error.message,
      networkError: error.networkError,
      graphQLErrors: error.graphQLErrors,
    });
    
    // Check if it's a network error
    if (error.networkError) {
      return (
        <div className="w-full h-full">
          <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col items-center justify-center text-center">
            <FaExclamationCircle className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">সার্ভারে সংযোগ করতে সমস্যা হয়েছে</h3>
            <p className="text-gray-600 mb-4">আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-md hover:bg-emerald-200 transition-colors"
            >
              আবার চেষ্টা করুন
            </button>
          </div>
        </div>
      );
    }

    // Check for GraphQL errors
    if (error.graphQLErrors && error.graphQLErrors.length > 0) {
      return (
        <div className="w-full h-full">
          <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col items-center justify-center text-center">
            <FaExclamationCircle className="w-10 h-10 text-yellow-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">ডাটা লোড করতে সমস্যা হয়েছে</h3>
            <p className="text-gray-600 mb-4">দয়া করে অ্যাডমিনকে জানান</p>
            <div className="bg-gray-50 p-3 rounded text-left text-sm text-gray-600 font-mono max-w-full overflow-auto">
              {JSON.stringify(error.graphQLErrors, null, 2)}
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-md hover:bg-emerald-200 transition-colors"
            >
              আবার চেষ্টা করুন
            </button>
          </div>
        </div>
      );
    }

    // Generic error
    return (
      <div className="w-full h-full">
        <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col items-center justify-center text-center">
          <FaExclamationCircle className="w-10 h-10 text-red-500 mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">নোটিশ লোড করতে সমস্যা হয়েছে</h3>
          <p className="text-gray-600 mb-4">দয়া করে পরে আবার চেষ্টা করুন</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-md hover:bg-emerald-200 transition-colors"
          >
            আবার চেষ্টা করুন
          </button>
        </div>
      </div>
    );
  }

  if (notices.length === 0) {
    return (
      <div className="w-full h-full">
        <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col items-center justify-center text-center">
          <FaBell className="w-10 h-10 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-800">কোন নোটিশ পাওয়া যায়নি</h3>
          <p className="text-gray-600 mt-2">শীঘ্রই নতুন নোটিশ প্রকাশিত হবে</p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-full">
      <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-emerald-800 flex items-center">
            <span className="bg-emerald-100 p-2 rounded-full mr-2">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </span>
            সর্বশেষ নোটিশ
          </h2>
          <a 
            href="/notices" 
            className="text-sm font-medium text-emerald-600 hover:text-emerald-800 flex items-center transition-colors"
            aria-label="সব নোটিশ দেখুন"
          >
            সব দেখুন
            <FaArrowRight className="ml-1 w-3 h-3" />
          </a>
        </div>
        <div className="space-y-4 mt-4 flex-grow overflow-y-auto max-h-[400px] pr-2 -mr-3">
          {notices.map((notice) => (
            <div key={notice.id} className="mb-3">
              <NoticeCard
                title={notice.title}
                date={notice.date}
                isUrgent={notice.isImportant}
                onClick={() => handleNoticeClick(notice)}
              />
            </div>
          ))}

          {/* Notice Popup */}
          {selectedNotice && (
            <NoticePopup 
              notice={selectedNotice} 
              onClose={handleClosePopup} 
            />
          )}
        </div>
        <div className="mt-4 text-center">
          <a 
            href="/notices"
            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
            aria-label="সমস্ত নোটিশ দেখুন"
          >
            সমস্ত নোটিশ দেখুন
            <FaArrowRight className="ml-2 w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoticeSection;
