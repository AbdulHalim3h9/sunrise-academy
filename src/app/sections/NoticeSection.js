'use client';
import React, { useEffect, useState } from 'react';
import { FaBell, FaArrowRight, FaExclamationCircle } from 'react-icons/fa';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';

// GraphQL query for latest notices
const GET_LATEST_NOTICES = gql`
  query GetLatestNotices($first: Int = 5) {
    schoolNotices(first: $first) {
      edges {
        node {
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

const NoticeCard = ({ title, date, isUrgent = false, uri = '#' }) => {
  return (
    <Link 
      href={`/notices${uri}`}
      className={`block group relative p-4 rounded-lg transition-all duration-300 ${isUrgent ? 'bg-red-50 border-l-4 border-red-500' : 'bg-white hover:bg-emerald-50 border-l-4 border-emerald-200'}`}
    >
      {isUrgent && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
          জরুরি
        </div>
      )}
      <div className="flex items-start">
        <div className={`flex-shrink-0 w-10 h-10 rounded-full ${isUrgent ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'} flex items-center justify-center mr-3`}>
          <FaBell className="w-4 h-4" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-sm leading-tight">{title}</h3>
          <p className="text-xs text-gray-500 mt-1 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </p>
        </div>
      </div>
    </Link>
  );
};

const NoticeSection = () => {
  const [notices, setNotices] = useState([]);
  
  const { data, loading, error } = useQuery(GET_LATEST_NOTICES, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    onError: (error) => {
      console.error('GraphQL Error Details:', {
        message: error.message,
        networkError: error.networkError,
        graphQLErrors: error.graphQLErrors,
      });
    },
    onCompleted: (data) => {
      console.log('GraphQL Query Completed:', {
        data,
        hasNotices: data?.schoolNotices?.edges?.length > 0,
        firstNotice: data?.schoolNotices?.edges?.[0]?.node
      });
    }
  });

  // Process notices when data changes
  useEffect(() => {
    if (data?.schoolNotices?.edges) {
      const processedNotices = data.schoolNotices.edges
        .map(edge => edge.node)
        .filter(node => node.schoolNotices?.notice?.trim())
        .map(node => ({
          id: node.id,
          uri: node.uri,
          schoolNotices: node.schoolNotices
        }));
      
      setNotices(processedNotices);
      
      console.log('Processed Notices:', processedNotices);
    } else {
      setNotices([]);
    }
  }, [data]);

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
          {notices.map((notice) => {
            const noticeData = notice.schoolNotices || {};
            const noticeDate = noticeData.noticeDate || notice.date;
            const formattedDate = noticeDate ? new Date(noticeDate).toLocaleDateString('bn-BD', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : '';
            
            // Only show notices that have notice text
            if (!noticeData.notice?.trim()) return null;
            
            // Create a unique key by combining notice.id and a hash of the notice text
            const uniqueKey = `notice-${notice.id}-${noticeData.notice ? noticeData.notice.trim().substring(0, 20).replace(/\s+/g, '-') : ''}`;
            
            return (
              <div key={uniqueKey} className="mb-3">
                <NoticeCard 
                  title={noticeData.notice.trim()} 
                  date={formattedDate}
                  isUrgent={noticeData.isImportant || false}
                  uri={notice.uri}
                />
              </div>
            );
          })}
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
