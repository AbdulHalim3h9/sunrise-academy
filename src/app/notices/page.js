'use client';

import React from 'react';
import NoticesList from './NoticesList';
import { useRouter } from 'next/navigation';

export default function AllNoticesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            সকল নোটিশ
          </h1>
          <p className="text-lg text-gray-600">
            স্কুলের সকল গুরুত্বপূর্ণ নোটিশসমূহ এখানে প্রকাশিত হবে
          </p>
        </div>
        
        <NoticesList />
        
        <div className="mt-8 text-center">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            পিছনে যান
          </button>
        </div>
      </div>
    </div>
  );
}
