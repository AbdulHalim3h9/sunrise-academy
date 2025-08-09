'use client';

import React, { useState, useEffect } from 'react';
import { FaFilePdf, FaDownload, FaCalendarAlt, FaInfoCircle, FaSpinner } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { GET_MPO_COPIES } from '@/app/graphql/mpoCopies';

export default function LatestMPOCopy() {
  const { data, loading, error } = useQuery(GET_MPO_COPIES);
  const [mpoDocuments, setMpoDocuments] = useState([]);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    if (data?.mpoCopies?.edges) {
      const documents = data.mpoCopies.edges.map(({ node }, index) => ({
        id: node.id || `doc-${index}-${Date.now()}`,
        title: node.mpoCopyDetails.documentTitle || 'এমপিও সনদপত্র',
        date: node.mpoCopyDetails.date || '',
        url: node.mpoCopyDetails.fileUpload?.node?.link || '#',
      }));
      
      setMpoDocuments(documents);
      
      // Set the last updated date to the most recent document's date
      if (documents.length > 0) {
        setLastUpdated(documents[0].date);
      }
    }
  }, [data]);
  
  // Format file size from bytes to human readable format
  const formatFileSize = (bytes) => {
    if (!bytes) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 font-siyam-rupali">
            বিদ্যালয়ের সর্বশেষ এমপিও কপি
          </h1>
          <div className="mt-2 h-1 w-24 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <FaInfoCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-blue-800 font-siyam-rupali">
                  এমপিও (মাধ্যমিক ও উচ্চ শিক্ষা কর্মকর্তা) সনদপত্র বিদ্যালয়ের মাসিক বেতন ভাতা এবং অন্যান্য সুবিধা প্রাপ্তির জন্য অত্যন্ত গুরুত্বপূর্ণ দলিল। এখানে বিদ্যালয়ের সর্বশেষ এমপিও সনদপত্রসমূহ আপলোড করা হয়েছে।
                </p>
              </div>
            </div>

            {loading ? (
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="border rounded-lg p-4 animate-pulse">
                    <div className="flex items-start">
                      <div className="w-6 h-8 bg-gray-200 rounded mr-3"></div>
                      <div className="flex-1">
                        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      ডেটা লোড করতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।
                    </p>
                  </div>
                </div>
              </div>
            ) : mpoDocuments.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 font-siyam-rupali">কোন এমপিও কপি পাওয়া যায়নি</p>
              </div>
            ) : (
              <div className="space-y-4">
                {mpoDocuments.map((doc) => (
                  <div key={doc.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div className="flex items-start">
                        <FaFilePdf className="text-red-500 text-2xl mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 font-siyam-rupali">{doc.title}</h3>
                          {doc.date && (
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <FaCalendarAlt className="mr-1" />
                              <span className="font-siyam-rupali">{doc.date}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                      >
                        <FaDownload className="mr-2" />
                        <span className="font-siyam-rupali">ডাউনলোড করুন</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 font-siyam-rupali">গুরুত্বপূর্ণ তথ্য:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 font-siyam-rupali">
                <li>এমপিও সনদপত্রের মূল কপি বিদ্যালয় অফিসে পরিদর্শনের জন্য সংরক্ষিত আছে</li>
                <li>কোনো সমস্যা হলে অনুগ্রহ করে অফিসে যোগাযোগ করুন</li>
                {lastUpdated && <li>সর্বশেষ আপডেট: {lastUpdated}</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
