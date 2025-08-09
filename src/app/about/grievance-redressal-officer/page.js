'use client';

import React from 'react';
import { FaUserTie, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { GET_GRIEVANCE_OFFICERS } from '@/app/graphql/grievanceOfficers';

export default function GrievanceRedressalOfficer() {
  const { data, loading, error } = useQuery(GET_GRIEVANCE_OFFICERS);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-1 bg-emerald-200 w-24 mx-auto"></div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex space-x-4">
                <div className="rounded-full bg-emerald-100 h-20 w-20"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="space-y-3 mt-6">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                তথ্য লোড করতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const officers = data?.grievanceOfficers?.edges || [];

  if (officers.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                কোন অভিযোগ নিষ্পত্তি কর্মকর্তার তথ্য পাওয়া যায়নি।
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 font-siyam-rupali">
            অভিযোগ নিষ্পত্তি কর্মকর্তার ঠিকানা ও মোবাইল নম্বর
          </h1>
          <div className="mt-2 h-1 w-24 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {officers.map(({ node }, index) => {
            const officer = node.grievanceOfficerFields;
            return (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="bg-emerald-100 p-4 rounded-full">
                      <FaUserTie className="w-12 h-12 text-emerald-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-800 font-siyam-rupali">
                        {officer.officerName || 'নাম পাওয়া যায়নি'}
                      </h2>
                      {officer.designation && (
                        <p className="text-gray-600 mt-1 font-siyam-rupali">
                          {officer.designation}
                        </p>
                      )}
                      
                      <div className="mt-6 space-y-4">
                        {officer.address && (
                          <div className="flex items-start">
                            <FaMapMarkerAlt className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                            <p className="ml-3 text-gray-700 font-siyam-rupali whitespace-pre-line">
                              {officer.address}
                            </p>
                          </div>
                        )}
                        
                        {officer.mobileNumber && (
                          <div className="flex items-center">
                            <FaPhone className="w-5 h-5 text-emerald-600" />
                            <a href={`tel:${officer.mobileNumber}`} className="ml-3 text-gray-700 hover:text-emerald-600 transition-colors font-siyam-rupali">
                              {officer.mobileNumber}
                            </a>
                          </div>
                        )}
                  
                        {officer.email && (
                          <div className="flex items-center">
                            <FaEnvelope className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                            <a 
                              href={`mailto:${officer.email}`} 
                              className="ml-3 text-gray-700 hover:text-emerald-600 transition-colors break-all font-siyam-rupali"
                            >
                              {officer.email}
                            </a>
                          </div>
                        )}
                        
                        {officer.workingHours && (
                          <div className="flex items-start">
                            <FaClock className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                            <p className="ml-3 text-gray-700 font-siyam-rupali">
                              {officer.workingHours}
                            </p>
                          </div>
                        )}
                      </div>
                      
                      {officer.complaintMethods && (
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <h3 className="text-lg font-semibold text-gray-800 mb-4 font-siyam-rupali">
                            অভিযোগ দাখিলের পদ্ধতি:
                          </h3>
                          <div 
                            className="prose prose-sm text-gray-700 font-siyam-rupali"
                            dangerouslySetInnerHTML={{ __html: officer.complaintMethods }}
                          />
                          
                          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                            <p className="text-blue-800 font-medium font-siyam-rupali">
                              <span className="font-bold">নোট:</span> অভিযোগ দাখিলের সময় আপনার নাম, ঠিকানা, ফোন নম্বর ও ইমেইল ঠিকানা অবশ্যই উল্লেখ করুন।
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
