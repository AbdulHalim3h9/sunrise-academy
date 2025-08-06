'use client';

import { useEffect } from 'react';
import { format } from 'date-fns';
import { bn } from 'date-fns/locale';
import { FaTimes, FaBell, FaExclamationCircle } from 'react-icons/fa';

export default function NoticePopup({ notice, onClose }) {
  // Close popup when clicking outside or pressing Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!notice) return null;

  const formattedDate = notice.date 
    ? format(new Date(notice.date), 'd MMMM yyyy', { locale: bn })
    : '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b ${
          notice.isImportant ? 'bg-red-50' : 'bg-gray-50'
        } rounded-t-lg`}>
          <div className="flex items-center">
            <div className={`p-2 rounded-full ${
              notice.isImportant ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
            } mr-3`}>
              <FaBell className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {notice.isImportant && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mr-2">
                  <FaExclamationCircle className="mr-1" /> জরুরি
                </span>
              )}
              নোটিশ
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
            aria-label="Close"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Date */}
          {formattedDate && (
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              {formattedDate}
            </div>
          )}

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {notice.title}
          </h2>

          {/* Content */}
          <div className="prose max-w-none text-gray-700">
            {notice.content ? (
              <div dangerouslySetInnerHTML={{ __html: notice.content }} />
            ) : (
              <p className="text-gray-600">কোনো বিস্তারিত তথ্য পাওয়া যায়নি।</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 rounded-b-lg flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
}
