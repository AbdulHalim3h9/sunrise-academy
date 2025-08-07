'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { format } from 'date-fns';
import { bn } from 'date-fns/locale';
import { FaTimes, FaBell, FaExclamationCircle } from 'react-icons/fa';

export default function NoticePopup({ notice, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [onClose]);

  if (!notice || !mounted) return null;

  const formattedDate = notice.date 
    ? format(new Date(notice.date), 'd MMMM yyyy', { locale: bn })
    : '';

  // Create a portal to render the popup at the document body level
  return createPortal((
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl max-h-[90vh] flex flex-col"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '56rem',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
          maxHeight: '90vh',
          overflowY: 'auto',
          zIndex: 10000
        }}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
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
  ), document.body);
}
