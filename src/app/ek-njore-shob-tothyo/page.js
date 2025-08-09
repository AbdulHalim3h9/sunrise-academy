'use client';

import EkNjoreTothyoList from '@/components/EkNjoreTothyoList';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            এক নজরে সকল তথ্য
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            প্রতিষ্ঠানের সকল গুরুত্বপূর্ণ তথ্য এক নজরে
          </p>
        </div>
        
        <EkNjoreTothyoList />
        
        <div className="mt-8 text-sm text-gray-600">
          <p className="text-center">
            * সর্বশেষ হালনাগাদ: {new Date().toLocaleDateString('bn-BD')}
          </p>
        </div>
      </div>
    </div>
  );
}
