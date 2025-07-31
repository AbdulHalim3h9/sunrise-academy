'use client';
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import { format } from 'date-fns';
import { bn } from 'date-fns/locale';

const GET_NOTICES = gql`
  query GetNotices($first: Int = 10) {
    schoolNotices(
      first: $first, 
      where: { 
        orderby: { 
          field: DATE, 
          order: DESC 
        } 
      }
    ) {
      nodes {
        id
        title
        excerpt
        date
        uri
        schoolNoticeSettings {
          isImportant
          noticeDate
        }
      }
    }
  }
`;

const NoticesList = ({ limit = 10, showViewAll = true }) => {
  const { data, loading, error } = useQuery(GET_NOTICES, {
    variables: { first: limit },
  });

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 animate-pulse">
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-100 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    console.error('Error loading notices:', error);
    return (
      <div className="bg-red-50 text-red-800 p-4 rounded-lg">
        <p>নোটিশ লোড করতে সমস্যা হয়েছে। দয়া করে পরে আবার চেষ্টা করুন।</p>
      </div>
    );
  }

  const notices = data?.schoolNotices?.nodes || [];

  if (notices.length === 0) {
    return (
      <div className="bg-yellow-50 text-yellow-800 p-4 rounded-lg">
        <p>কোন নোটিশ পাওয়া যায়নি।</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {notices.map((notice) => {
        // Format date in Bengali
        const noticeDate = notice.schoolNoticeSettings?.noticeDate || notice.date;
        const formattedDate = noticeDate 
          ? format(new Date(noticeDate), 'd MMMM yyyy', { locale: bn })
          : '';

        return (
          <div 
            key={notice.id} 
            className={`bg-white rounded-lg shadow-sm border-l-4 overflow-hidden transition-all duration-200 hover:shadow-md ${
              notice.schoolNoticeSettings?.isImportant 
                ? 'border-red-500' 
                : 'border-blue-500'
            }`}
          >
            <Link href={`/notices${notice.uri || ''}`} className="block p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {notice.title}
                </h3>
                {notice.schoolNoticeSettings?.isImportant && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 ml-2">
                    জরুরি
                  </span>
                )}
              </div>
              
              {formattedDate && (
                <p className="text-sm text-gray-500 mb-2">
                  তারিখ: {formattedDate}
                </p>
              )}
              
              {notice.excerpt && (
                <div 
                  className="text-gray-600 text-sm line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: notice.excerpt }}
                />
              )}
              
              <div className="mt-2 text-blue-600 text-sm font-medium">
                বিস্তারিত দেখুন →
              </div>
            </Link>
          </div>
        );
      })}
      
      {showViewAll && (
        <div className="text-center mt-6">
          <Link 
            href="/notices" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            সব নোটিশ দেখুন
          </Link>
        </div>
      )}
    </div>
  );
};

export default NoticesList;
