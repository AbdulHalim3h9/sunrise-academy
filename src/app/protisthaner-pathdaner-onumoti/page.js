'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProtisthanerPathdanerOnumoti() {
  // Sample data for the table
  const [documents] = useState([
    { id: 1, title: 'প্রতিষ্ঠানের পাঠদানের অনুমতি ২০২৪', date: '০১/০১/২০২৪', file: '/documents/pathdaner-onumoti-2024.pdf' },
    { id: 2, title: 'প্রতিষ্ঠানের পাঠদানের অনুমতি ২০২৩', date: '০১/০১/২০২৩', file: '/documents/pathdaner-onumoti-2023.pdf' },
    { id: 3, title: 'প্রতিষ্ঠানের পাঠদানের অনুমতি নবায়ন ২০২২', date: '০১/০১/২০২২', file: '/documents/pathdaner-onumoti-2022.pdf' },
    { id: 4, title: 'প্রতিষ্ঠানের পাঠদানের অনুমতি ২০২১', date: '০১/০১/২০২১', file: '/documents/pathdaner-onumoti-2021.pdf' },
    { id: 5, title: 'প্রাথমিক স্বীকৃতি পত্র ২০২০', date: '০১/০১/২০২০', file: '/documents/pathdaner-onumoti-2020.pdf' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            প্রতিষ্ঠানের পাঠদানের অনুমতি ও স্বীকৃতি
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            প্রতিষ্ঠানের পাঠদানের অনুমতি ও স্বীকৃতি সংক্রান্ত সকল তথ্য
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    ক্রমিক নং
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    শিরোনাম
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    তারিখ
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    ডাউনলোড
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {documents.map((doc, index) => (
                  <tr key={doc.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}>                    
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                      {doc.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-right text-gray-900">
                      {doc.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      {doc.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <a
                        href={doc.file}
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        download
                      >
                        <svg className="-ml-0.5 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        ডাউনলোড
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Empty state */}
          {documents.length === 0 && (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">কোনো তথ্য পাওয়া যায়নি</h3>
              <p className="mt-1 text-sm text-gray-500">বর্তমানে কোনো পদ্মানুরের তথ্য উপলব্ধ নেই।</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
