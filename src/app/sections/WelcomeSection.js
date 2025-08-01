import React from 'react';
import PrincipalMessageSection from './PrincipalMessageSection';

const WelcomeSection = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          <div className="lg:w-2/3">
            <div className="bg-white p-6 rounded-lg">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  স্কয়ার কিন্ডার গার্টেন স্কুল
                </h2>
                <div className="w-16 h-0.5 bg-emerald-600 mb-5"></div>
              </div>
              
              <div className="prose prose-sm md:prose-base text-gray-600 max-w-none">
                <p className="leading-relaxed mb-4 text-gray-700">
                  স্কয়ার কিন্ডার গার্টেন স্কুলে স্বাগতম। ঝোপগাড়ী, বগুড়ায় অবস্থিত আমাদের প্রতিষ্ঠানটি একটি আদর্শ শিক্ষা প্রতিষ্ঠান যেখানে আমরা শিক্ষার্থীদের সৃজনশীলতা, নৈতিকতা এবং জ্ঞানের সমন্বয়ে গড়ে তুলি।
                </p>
                <p className="leading-relaxed text-gray-700 mb-6">
                  আমাদের লক্ষ্য হল এমন একটি পরিবেশ তৈরি করা যেখানে প্রতিটি শিক্ষার্থী তাদের পূর্ণ সম্ভাবনা বিকাশ করতে পারে। আমাদের অভিজ্ঞ শিক্ষকমণ্ডলী এবং আধুনিক সুযোগ-সুবিধার মাধ্যমে আমরা শিক্ষার্থীদেরকে ভবিষ্যতের জন্য প্রস্তুত করি।
                </p>
                
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href="/about"
                    className="px-5 py-2.5 text-sm bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded transition-colors duration-200 inline-flex items-center"
                  >
                    আরও জানুন
                    <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="/admissions"
                    className="px-5 py-2.5 text-sm bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded transition-colors duration-200 inline-flex items-center"
                  >
                    ভর্তি প্রক্রিয়া
                    <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <PrincipalMessageSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
