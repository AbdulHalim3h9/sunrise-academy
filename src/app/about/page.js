import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">স্কয়ার কিন্ডারগার্টেন স্কুল</h1>
              <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
            </div>

            <div className="space-y-6 text-justify">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">আমাদের কথা</h2>
                <p className="text-gray-700 leading-relaxed">
                  স্কয়ার কিন্ডারগার্টেন স্কুলে স্বাগতম। ১৯৯৫ সাল থেকে আমরা শিশুদের সৃজনশীলতা, নৈতিকতা ও জ্ঞানের সমন্বয়ে গড়ে তোলার লক্ষ্যে কাজ করে যাচ্ছি।
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">আমাদের লক্ষ্য</h2>
                <p className="text-gray-700 leading-relaxed">
                  "শিক্ষাই জাতির মেরুদন্ড" - এই বাণীকে ধারণ করে আমরা শিক্ষার্থীদের মেধা ও মননের সুষম বিকাশে কাজ করছি। আমাদের লক্ষ্য প্রতিটি শিশুর সুপ্ত প্রতিভার সন্ধান করা এবং তা বিকশিত করা।
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">আমাদের সুযোগ-সুবিধা</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'আধুনিক শ্রেণিকক্ষ',
                    'কম্পিউটার ল্যাব',
                    'সমৃদ্ধ লাইব্রেরি',
                    'খেলার মাঠ',
                    'সাংস্কৃতিক চর্চার ব্যবস্থা',
                    'নিরাপদ ও সুরক্ষিত ক্যাম্পাস',
                    'অভিজ্ঞ শিক্ষকমণ্ডলী',
                    'সর্বাধুনিক শিক্ষা উপকরণ'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <p className="text-gray-700 leading-relaxed italic">
                  "শিক্ষার আলো জ্বালো, আলোকিত করো জীবন" - এই প্রত্যয় নিয়ে আমরা প্রতিটি শিশুর মাঝে জ্ঞানের আলো ছড়িয়ে দিতে প্রতিশ্রুতিবদ্ধ।
                </p>
              </div>

              <div className="mt-8 text-center">
                <a 
                  href="/contact" 
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-md transition-colors text-sm md:text-base"
                >
                  যোগাযোগ করুন
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
