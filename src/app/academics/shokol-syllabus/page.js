'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_SYLLABUS } from '@/app/graphql/syllabus';
import { FaSpinner } from 'react-icons/fa';

export default function ShokolSyllabus() {
  const { data, loading, error } = useQuery(GET_ALL_SYLLABUS);
  const [syllabi, setSyllabi] = useState([]);

  useEffect(() => {
    if (data?.shokolSyllabuses?.edges) {
      const formattedSyllabi = data.shokolSyllabuses.edges.map(({ node }, index) => ({
        id: index + 1,
        title: node.shokolSyllabusFields.syllabusTitle || 'সিলেবাস',
        date: node.shokolSyllabusFields.date || '',
        download: node.shokolSyllabusFields.file?.node?.link || '#',
      }));
      setSyllabi(formattedSyllabi);
    }
  }, [data]);

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
                {loading ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center">
                      <div className="flex justify-center items-center space-x-2">
                        <FaSpinner className="animate-spin h-5 w-5 text-emerald-600" />
                        <span className="text-gray-600">লোড হচ্ছে...</span>
                      </div>
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-red-600">
                      ডেটা লোড করতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।
                    </td>
                  </tr>
                ) : syllabi.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                      কোন সিলেবাস পাওয়া যায়নি
                    </td>
                  </tr>
                ) : (
                  syllabi.map((syllabus, index) => (
                    <tr key={`${syllabus.id}-${index}`} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{syllabus.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{syllabus.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{syllabus.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <a 
                          href={syllabus.download} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:text-emerald-900 inline-block"
                        >
                          <svg className="h-5 w-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
