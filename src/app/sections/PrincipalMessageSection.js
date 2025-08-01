import React from 'react';

const PrincipalMessageSection = () => {
  return (
    <div className="bg-white p-5 rounded-lg h-full flex flex-col">
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">প্রিন্সিপালের বার্তা</h3>
        <div className="w-12 h-0.5 bg-emerald-600 mb-4"></div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 flex-grow">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 rounded-full overflow-hidden flex-shrink-0 border-2 border-emerald-100">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="প্রিন্সিপাল"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23e5e7eb"><path d="M12 12a5 5 0 110-10 5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6zm9 11a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a9 9 0 0118 0v1z"/></svg>';
            }}
          />
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="mb-2">
            <h4 className="font-bold text-gray-900 text-sm sm:text-base">মোঃ রুহুল আমিন সরকার</h4>
            <p className="text-xs text-emerald-600 font-medium">পরিচালক, স্কয়ার কিন্ডার গার্টেন স্কুল</p>
          </div>
          
          <p className="text-gray-600 text-xs mb-4 leading-relaxed line-clamp-3 flex-grow">
            স্কয়ার কিন্ডার গার্টেন স্কুলে স্বাগতম। আমাদের লক্ষ্য হল শিক্ষার্থীদের প্রযুক্তিগত দক্ষতা এবং নৈতিক মূল্যবোধে সমৃদ্ধ করে গড়ে তোলা।
          </p>
          
          <div className="mt-auto">
            <a
              href="/about/principal-message"
              className="inline-flex items-center text-xs font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
              aria-label="আরও পড়ুন"
            >
              <span>আরও পড়ুন</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-3 w-3 ml-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-center space-x-5">
        <a 
          href="#" 
          className="text-gray-400 hover:text-emerald-600 transition-colors"
          aria-label="Facebook"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </a>
        <a 
          href="#" 
          className="text-gray-400 hover:text-emerald-600 transition-colors"
          aria-label="Twitter"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
      </div>
    </div>

  );
};

export default PrincipalMessageSection;
