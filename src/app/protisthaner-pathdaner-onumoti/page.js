'use client';

import PermissionsList from '@/components/PermissionsList';

export default function ProtisthanerPathdanerOnumoti() {
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

        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
          <PermissionsList />
        </div>
      </div>
    </div>
  );
}
