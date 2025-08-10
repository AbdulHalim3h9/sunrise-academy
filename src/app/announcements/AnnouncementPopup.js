'use client';

import { useEffect } from 'react';
import { format } from 'date-fns';
import { FaTimes, FaBullhorn, FaCalendarAlt } from 'react-icons/fa';

export default function AnnouncementPopup({ announcement, onClose }) {
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

  if (!announcement) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-t-lg">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-emerald-100 text-emerald-600 mr-3">
              <FaBullhorn className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              ঘোষণা
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
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {announcement.title}
          </h2>
          
          {/* Date */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <FaCalendarAlt className="w-4 h-4 mr-2 text-emerald-500" />
            {announcement.date}
          </div>

          {/* Content */}
          <div className="prose max-w-none text-gray-700">
            {announcement.description ? (
              <div dangerouslySetInnerHTML={{ __html: announcement.description }} />
            ) : (
              <p className="text-gray-600">কোনো বিস্তারিত তথ্য পাওয়া যায়নি।</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
