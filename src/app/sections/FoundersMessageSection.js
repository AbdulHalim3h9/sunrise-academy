import React from 'react';

const FoundersMessageSection = () => {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">প্রতিষ্ঠাতার বাণী</h3>
        <div className="w-12 h-0.5 bg-emerald-600 mb-4"></div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 rounded-full overflow-hidden flex-shrink-0 border-2 border-emerald-100">
          <img
            src="/images/founder.jpg"
            alt="প্রতিষ্ঠাতা"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23e5e7eb"><path d="M12 12a5 5 0 110-10 5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6zm9 11a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a9 9 0 0118 0v1z"/></svg>';
            }}
          />
        </div>
        
        <div className="flex-1">
          <div className="mb-2">
            <h4 className="font-bold text-gray-900 text-sm sm:text-base">মোঃ আব্দুল মান্নান</h4>
            <p className="text-xs text-emerald-600 font-medium">প্রতিষ্ঠাতা, স্কয়ার কিন্ডার গার্টেন স্কুল</p>
          </div>
          
          <p className="text-gray-600 text-xs leading-relaxed">
            "শিক্ষাই জাতির মেরুদন্ড।" - এই মহান বাণীকে ধারণ করে আমরা স্কয়ার কিন্ডার গার্টেন প্রতিষ্ঠা করেছি। 
            আমাদের লক্ষ্য হল শিশুদের মেধা ও মননের সঠিক বিকাশ সাধন করা।
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundersMessageSection;
