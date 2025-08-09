'use client';

import React from 'react';
import InformationCenterList from '@/components/InformationCenterList';

export default function InformationCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">তথ্য কেন্দ্রের ঠিকানা</h1>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            
            <InformationCenterList />
          </div>
        </div>
      </div>
    </div>
  );
}
