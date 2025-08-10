'use client';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_LATEST_ANNOUNCEMENTS } from '@/app/graphql/latestAnnouncements';
import { motion } from 'framer-motion';
import { FaBullhorn, FaCalendarAlt, FaSpinner, FaHome } from 'react-icons/fa';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the AnnouncementPopup
const AnnouncementPopup = dynamic(
  () => import('@/app/announcements/AnnouncementPopup'),
  { ssr: false }
);

const ITEMS_PER_PAGE = 10;

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
        className="group relative bg-white hover:bg-gray-50 transition-all duration-200 overflow-hidden border border-gray-200 hover:border-emerald-200 rounded-lg shadow-sm hover:shadow cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: (index % 3) * 0.05 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <FaBullhorn className="w-4 h-4" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 
                className="text-base font-medium text-gray-800 line-clamp-2 mb-1" 
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

const PageHeader = () => (
  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ fontFamily: 'var(--font-siyam-rupali)' }}
            >
              সমস্ত ঘোষণা
            </h1>
            <p className="text-emerald-100 text-sm md:text-base">সর্বশেষ ঘোষণা এবং বিজ্ঞপ্তিসমূহ</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm font-medium text-white hover:text-emerald-100 transition-colors px-3 py-1.5 rounded-md hover:bg-white/10"
            >
              <FaHome className="mr-2" />
              হোম পেজে ফিরে যান
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AnnouncementList = ({ announcements, loading, error, loadMore, hasNextPage, isLoadingMore }) => {
  if (loading && !announcements?.length) {
    return (
      <div className="py-16 text-center">
        <FaSpinner className="animate-spin h-10 w-10 text-emerald-600 mx-auto" />
        <p className="mt-4 text-gray-600">ঘোষণা সমূহ লোড হচ্ছে...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 text-center">
        <p className="text-red-500">ঘোষণা সমূহ লোড করতে সমস্যা হয়েছে। দয়া করে পরে আবার চেষ্টা করুন।</p>
        <p className="mt-2 text-gray-600">{error.message}</p>
      </div>
    );
  }

  if (!announcements?.length) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-600">কোন ঘোষণা পাওয়া যায়নি</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {announcements.map(({ node }, index) => {
        const description = node.latestAnnouncementFields?.description || '';
        const date = node.latestAnnouncementFields?.date || '';
        
        return (
          <AnnouncementCard
            key={node.id}
            id={node.id}
            title={node.title}
            date={date}
            description={description}
            index={index}
          />
        );
      })}

      {hasNextPage && (
        <div className="col-span-full mt-8 text-center">
          <button
            onClick={loadMore}
            disabled={isLoadingMore}
            className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoadingMore ? (
              <>
                <FaSpinner className="animate-spin -ml-1 mr-2 h-4 w-4" />
                লোড হচ্ছে...
              </>
            ) : (
              'আরও ঘোষণা দেখুন'
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default function AllAnnouncements() {
  const { loading, error, data, fetchMore } = useQuery(GET_LATEST_ANNOUNCEMENTS, {
    variables: { first: ITEMS_PER_PAGE },
    notifyOnNetworkStatusChange: true,
  });

  const loadMore = () => {
    if (data?.latestAnnouncements?.pageInfo?.hasNextPage) {
      fetchMore({
        variables: {
          first: ITEMS_PER_PAGE,
          after: data.latestAnnouncements.pageInfo.endCursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            latestAnnouncements: {
              ...fetchMoreResult.latestAnnouncements,
              edges: [
                ...prev.latestAnnouncements.edges,
                ...fetchMoreResult.latestAnnouncements.edges,
              ],
            },
          };
        },
      });
    }
  };

  const announcements = data?.latestAnnouncements?.edges || [];
  const hasNextPage = data?.latestAnnouncements?.pageInfo?.hasNextPage;
  const isLoadingMore = loading && announcements.length > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader />
      
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnnouncementList
            announcements={announcements}
            loading={loading}
            error={error}
            loadMore={loadMore}
            hasNextPage={hasNextPage}
            isLoadingMore={isLoadingMore}
          />
        </div>
      </div>
    </div>
  );
}
