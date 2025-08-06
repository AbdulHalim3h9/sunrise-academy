import React from 'react';
import { FaFilePdf, FaDownload, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';

export const metadata = {
  title: 'বিদ্যালয়ের সর্বশেষ এমপিও কপি',
  description: 'স্কয়ার কিন্ডারগার্টেন স্কুলের সর্বশেষ এমপিও কপি ডাউনলোড করুন',
};

export default function LatestMPOCopy() {
  // Sample data - replace with actual MPO data
  const mpoDocuments = [
    {
      id: 1,
      title: 'এমপিও সনদপত্র ২০২৩-২০২৪',
      date: '০১ জানুয়ারি, ২০২৪',
      fileSize: '2.4 MB',
      url: '/documents/mpo-certificate-2024.pdf',
    },
    {
      id: 2,
      title: 'এমপিও সনদপত্র ২০২২-২০২৩',
      date: '১৫ জানুয়ারি, ২০২৩',
      fileSize: '1.8 MB',
      url: '/documents/mpo-certificate-2023.pdf',
    },
  ];

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

            <div className="space-y-4">
              {mpoDocuments.map((doc) => (
                <div key={doc.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex items-start">
                      <FaFilePdf className="text-red-500 text-2xl mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 font-siyam-rupali">{doc.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <FaCalendarAlt className="mr-1" />
                          <span className="font-siyam-rupali">{doc.date}</span>
                          <span className="mx-2">•</span>
                          <span>{doc.fileSize}</span>
                        </div>
                      </div>
                    </div>
                    <a
                      href={doc.url}
                      download
                      className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                    >
                      <FaDownload className="mr-2" />
                      <span className="font-siyam-rupali">ডাউনলোড করুন</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 font-siyam-rupali">গুরুত্বপূর্ণ তথ্য:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 font-siyam-rupali">
                <li>এমপিও সনদপত্রের মূল কপি বিদ্যালয় অফিসে পরিদর্শনের জন্য সংরক্ষিত আছে</li>
                <li>কোনো সমস্যা হলে অনুগ্রহ করে অফিসে যোগাযোগ করুন</li>
                <li>সর্বশেষ আপডেট: ০১ জানুয়ারি, ২০২৪</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
