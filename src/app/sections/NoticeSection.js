import React from 'react';
import { FaBell, FaArrowRight } from 'react-icons/fa';

const NoticeCard = ({ title, date, isUrgent = false }) => {
  return (
    <div className={`group relative p-4 rounded-lg transition-all duration-300 ${isUrgent ? 'bg-red-50 border-l-4 border-red-500' : 'bg-white hover:bg-emerald-50 border-l-4 border-emerald-200'}`}>
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
    </div>
  );
};

const NoticeSection = ({ notices }) => {
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
          {notices.map((notice, index) => (
            <div key={index} className="mb-3">
              <NoticeCard 
                title={notice.title} 
                date={notice.date} 
                isUrgent={index === 0} // Make first notice urgent for demo
              />
            </div>
          ))}
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
