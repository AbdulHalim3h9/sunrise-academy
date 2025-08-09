'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_INFORMATION_CENTERS } from '@/app/graphql/informationCenters';

export default function InformationCenterList() {
  const { loading, error, data } = useQuery(GET_INFORMATION_CENTERS);

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2].map((i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
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
    );
  }

  const informationCenter = data?.informationCenters?.edges[0]?.node?.informationCenterFields;

  if (!informationCenter) {
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              কোন তথ্য পাওয়া যায়নি।
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">যোগাযোগের তথ্য</h2>
        <div className="space-y-4">
          {informationCenter.address && (
            <p className="text-gray-700">
              <span className="font-medium">ঠিকানা:</span> {informationCenter.address.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < informationCenter.address.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          )}
          {informationCenter.email && (
            <p className="text-gray-700">
              <span className="font-medium">ইমেইল:</span>{' '}
              <a href={`mailto:${informationCenter.email}`} className="text-emerald-600 hover:underline">
                {informationCenter.email}
              </a>
            </p>
          )}
          {informationCenter.phone && (
            <p className="text-gray-700">
              <span className="font-medium">ফোন:</span>{' '}
              <a href={`tel:${informationCenter.phone}`} className="text-emerald-600 hover:underline">
                {informationCenter.phone}
              </a>
            </p>
          )}
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">কার্যক্রম</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {informationCenter.operatingHours && (
            <li>{informationCenter.operatingHours}</li>
          )}
          {informationCenter.closedDays && (
            <li>{informationCenter.closedDays}</li>
          )}
          {informationCenter.helpline && (
            <li>জরুরি যোগাযোগের জন্য: {informationCenter.helpline}</li>
          )}
        </ul>
      </div>
    </div>
  );
}
