'use client';

import { useState } from 'react';

export default function ShokolSyllabus() {
  const [syllabi] = useState([
    { id: 1, title: 'ষষ্ঠ শ্রেণীর সিলেবাস', date: '০১/০১/২০২৫', download: '#' },
    { id: 2, title: 'সপ্তম শ্রেণীর সিলেবাস', date: '০১/০১/২০২৫', download: '#' },
    { id: 3, title: 'অষ্টম শ্রেণীর সিলেবাস', date: '০১/০১/২০২৫', download: '#' },
    { id: 4, title: 'নবম শ্রেণীর সিলেবাস', date: '০১/০১/২০২৫', download: '#' },
    { id: 5, title: 'দশম শ্রেণীর সিলেবাস', date: '০১/০১/২০২৫', download: '#' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          সকল সিলেবাস
        </h1>
        
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">ক্রমিক নং</th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">শিরোনাম</th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">তারিখ</th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">ডাউনলোড</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {syllabi.map((syllabus, index) => (
                  <tr key={syllabus.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{syllabus.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{syllabus.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{syllabus.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <a href={syllabus.download} className="text-emerald-600 hover:text-emerald-900">
                        <svg className="h-5 w-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
