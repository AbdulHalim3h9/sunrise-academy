'use client';
import React, { useEffect, useState } from 'react';

const NewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Sample news items in Bengali
  const newsItems = [
    { id: 1, text: '🎓 ২০২৫-২৬ শিক্ষাবর্ষের ভর্তি প্রক্রিয়া শুরু হয়েছে!', link: '/admissions' },
    { id: 2, text: '🏆 শিক্ষাগত সাফল্যে আমাদের বিদ্যালয় জেলায় শীর্ষস্থান অর্জন করেছে', link: '/about' },
    { id: 3, text: '📅 অভিভাবক-শিক্ষক বৈঠক আগামী ১৫ই আগস্ট', link: '/events' },
    { id: 4, text: '🚌 নতুন শিক্ষাবর্ষের স্কুল বাস রুট আপডেট করা হয়েছে', link: '/transportation' },
    { id: 5, text: '📢 বার্ষিক ক্রীড়া প্রতিযোগিতা আগামী মাসে অনুষ্ঠিত হবে', link: '/events/sports' },
    { id: 6, text: '🏫 বিদ্যালয়ের গ্রন্থাগারে নতুন বই যুক্ত করা হয়েছে', link: '/library' },
  ];

  // Auto-scroll to the next news item
  useEffect(() => {
    if (newsItems.length <= 1) return;
    
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
      }
    }, 5000); // Change news every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, newsItems.length]);

  if (newsItems.length === 0) return null;

  return (
    <div 
      className="bg-amber-100 text-amber-900 py-2 px-4 overflow-hidden relative border-b border-amber-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto flex items-center">
        <div className="font-bold mr-4 whitespace-nowrap flex-shrink-0 flex items-center">
          <span className="bg-amber-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">LATEST</span>
          <span>News:</span>
        </div>
        <div className="overflow-hidden relative flex-grow">
          <div 
            className="whitespace-nowrap transition-transform duration-1000"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {newsItems.map((item, index) => (
              <div 
                key={item.id} 
                className="inline-block w-full px-2"
              >
                <a 
                  href={item.link} 
                  className="hover:underline hover:text-amber-700 transition-colors font-medium"
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-2 ml-4 flex-shrink-0">
          <button 
            onClick={() => setCurrentIndex(prev => (prev - 1 + newsItems.length) % newsItems.length)}
            className="text-amber-700 hover:bg-amber-200 p-1 rounded-full focus:outline-none transition-colors"
            aria-label="Previous news"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => setCurrentIndex(prev => (prev + 1) % newsItems.length)}
            className="text-amber-700 hover:bg-amber-200 p-1 rounded-full focus:outline-none transition-colors"
            aria-label="Next news"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
