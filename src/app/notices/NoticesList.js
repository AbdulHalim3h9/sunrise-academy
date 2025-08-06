'use client';
import { gql, useQuery } from '@apollo/client';
import { format } from 'date-fns';
import { bn } from 'date-fns/locale';
import { FaBell, FaExclamationCircle } from 'react-icons/fa';
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the NoticePopup to avoid SSR issues with modals
const NoticePopup = dynamic(
  () => import('@/components/notices/NoticePopup'),
  { ssr: false }
);

const NOTICES_PER_PAGE = 10;

const GET_NOTICES = gql`
  query GetNotices($first: Int, $after: String) {
    schoolNotices(
      first: $first, 
      after: $after,
      where: { orderby: { field: DATE, order: DESC } }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
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

export default function NoticesList() {
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [notices, setNotices] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    hasNextPage: true,
    endCursor: null,
  });
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  const { loading, error, fetchMore } = useQuery(GET_NOTICES, {
    variables: { first: NOTICES_PER_PAGE },
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      if (data?.schoolNotices) {
        setPageInfo({
          hasNextPage: data.schoolNotices.pageInfo.hasNextPage,
          endCursor: data.schoolNotices.pageInfo.endCursor,
        });
        
        const newNotices = data.schoolNotices.edges
          .map(edge => ({
            ...edge.node,
            cursor: edge.cursor,
            title: edge.node.schoolNotices?.notice,
            content: edge.node.content,
            date: edge.node.schoolNotices?.noticeDate,
            isImportant: edge.node.schoolNotices?.isImportant || false
          }))
          .filter(node => node.title?.trim());
        
        setNotices(newNotices);
      }
    },
  });

  const handleNoticeClick = (e, notice) => {
    e.preventDefault();
    setSelectedNotice(notice);
  };

  const handleClosePopup = () => {
    setSelectedNotice(null);
  };

  const loadMoreNotices = async () => {
    if (!pageInfo.hasNextPage || isLoadingMore) return;
    
    setIsLoadingMore(true);
    
    try {
      const { data: moreData } = await fetchMore({
        variables: {
          first: NOTICES_PER_PAGE,
          after: pageInfo.endCursor,
        },
      });
      
      if (moreData?.schoolNotices) {
        setPageInfo({
          hasNextPage: moreData.schoolNotices.pageInfo.hasNextPage,
          endCursor: moreData.schoolNotices.pageInfo.endCursor,
        });
        
        const newNotices = moreData.schoolNotices.edges
          .map(edge => ({
            ...edge.node,
            cursor: edge.cursor,
            title: edge.node.schoolNotices?.notice,
            content: edge.node.content,
            date: edge.node.schoolNotices?.noticeDate,
            isImportant: edge.node.schoolNotices?.isImportant || false
          }))
          .filter(node => node.title?.trim());
        
        setNotices(prevNotices => [...prevNotices, ...newNotices]);
      }
    } catch (error) {
      console.error('Error loading more notices:', error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 py-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4 animate-pulse">
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
            <div className="h-3 bg-gray-100 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-4 my-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <FaExclamationCircle className="h-5 w-5 text-red-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">
              নোটিশ লোড করতে সমস্যা হয়েছে। দয়া করে পরে আবার চেষ্টা করুন।
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (notices.length === 0) {
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <FaExclamationCircle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              কোন নোটিশ পাওয়া যায়নি।
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {notices.map((notice) => {
          const formattedDate = notice.date 
            ? format(new Date(notice.date), 'd MMMM yyyy', { locale: bn })
            : '';
            
          return (
            <div 
              key={notice.id}
              onClick={(e) => handleNoticeClick(e, notice)}
              className={`block group relative p-4 rounded-lg transition-all duration-300 cursor-pointer h-full ${
                notice.isImportant 
                  ? 'bg-red-50 border-l-4 border-red-500' 
                  : 'bg-white hover:bg-emerald-50 border-l-4 border-emerald-200'
              }`}
            >
              {notice.isImportant && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                  জরুরি
                </div>
              )}
              
              <div className="flex items-start">
                <div 
                  className={`flex-shrink-0 w-10 h-10 rounded-full ${
                    notice.isImportant 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-emerald-100 text-emerald-600'
                  } flex items-center justify-center mr-3`}
                >
                  <FaBell className="w-4 h-4" />
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                    {notice.title}
                  </h3>
                  
                  {formattedDate && (
                    <p className="text-xs text-gray-500 mt-1 flex items-center">
                      <svg 
                        className="w-3 h-3 mr-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                        />
                      </svg>
                      {formattedDate}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {pageInfo.hasNextPage && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreNotices}
            disabled={isLoadingMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoadingMore ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                লোড হচ্ছে...
              </span>
            ) : (
              'আরো নোটিশ দেখুন'
            )}
          </button>
        </div>
      )}
      
      {/* Notice Popup */}
      {selectedNotice && (
        <NoticePopup 
          notice={selectedNotice} 
          onClose={handleClosePopup} 
        />
      )}
    </div>
  );
}
