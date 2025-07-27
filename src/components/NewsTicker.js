'use client';
import React, { useEffect, useState, useRef } from 'react';

const NewsTicker = () => {
  const [isPaused, setIsPaused] = useState(false);
  const contentRef = useRef(null);
  const animationRef = useRef({ start: 0 });
  const requestRef = useRef();
  
  // Sample news items in Bengali
  const newsItems = [
    { id: 1, text: '🎓 ২০২৫-২৬ শিক্ষাবর্ষের ভর্তি প্রক্রিয়া শুরু হয়েছে!', link: '/admissions' },
    { id: 2, text: '📅 ১৫ই আগস্ট স্বাধীনতা দিবস উপলক্ষে বিদ্যালয় বন্ধ থাকবে', link: '/notices' },
    { id: 3, text: '🏆 বার্ষিক ক্রীড়া প্রতিযোগিতা ২০শে ডিসেম্বর', link: '/events' },
    { id: 4, text: '💻 নতুন কম্পিউটার ল্যাব উদ্বোধন করা হয়েছে', link: '/news' },
    { id: 5, text: '📢 আগামী সপ্তাহে অভিভাবক-শিক্ষক সভা', link: '/events' },
    { id: 6, text: '🏫 বিদ্যালয়ের গ্রন্থাগারে নতুন বই যুক্ত করা হয়েছে', link: '/library' },
  ];

  // Combine original and duplicate items for seamless looping
  const allItems = [...newsItems, ...newsItems];
  
  // Animation function
  const animate = (timestamp) => {
    if (!contentRef.current) return;
    
    if (!animationRef.current.start) {
      animationRef.current.start = timestamp;
    }
    
    const progress = timestamp - animationRef.current.start;
    const translateX = -(progress * 0.0003) % 1000; // Optimized calculation
    contentRef.current.style.transform = `translateX(${translateX}%)`;
    
    if (!isPaused) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };
  
  // Start/stop animation based on pause state
  useEffect(() => {
    if (!isPaused) {
      animationRef.current.start = 0; // Reset animation start time
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div 
      className="bg-amber-100 text-amber-900 py-2 px-4 overflow-hidden relative border-b border-amber-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto flex items-center">
        <div className="overflow-hidden relative flex-grow">
          <div 
            ref={contentRef}
            className="whitespace-nowrap inline-block"
            style={{
              whiteSpace: 'nowrap',
              display: 'inline-block',
              paddingRight: '20px',
              willChange: 'transform' // Optimize for animation
            }}
          >
            {allItems.map((item, index) => (
              <span key={`${item.id}-${index}`} className="inline-block mr-8">
                <a 
                  href={item.link} 
                  className="hover:underline hover:text-amber-700 transition-colors font-medium whitespace-nowrap inline-block"
                >
                  {item.text}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
