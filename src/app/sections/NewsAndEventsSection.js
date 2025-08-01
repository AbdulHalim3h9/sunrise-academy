'use client';
import React, { useRef, useState, useEffect } from 'react';
import { FiCalendar, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const NewsAndEventsSection = () => {
  const scrollContainer = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scroll = (direction) => {
    if (!scrollContainer.current) return;
    
    const container = scrollContainer.current;
    const scrollAmount = direction === 'left' ? -400 : 400;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
    
    // Update button visibility after scroll
    setTimeout(() => {
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }, 300);
  };
  
  // Initialize button visibility on component mount and window resize
  useEffect(() => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const updateButtonVisibility = () => {
        setShowLeftButton(container.scrollLeft > 0);
        setShowRightButton(
          container.scrollLeft < container.scrollWidth - container.clientWidth - 10
        );
      };
      
      updateButtonVisibility();
      
      const handleResize = () => {
        updateButtonVisibility();
      };
      
      container.addEventListener('scroll', updateButtonVisibility);
      window.addEventListener('resize', handleResize);
      
      return () => {
        container.removeEventListener('scroll', updateButtonVisibility);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  const newsAndEvents = [
    {
      id: 1,
      title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫',
      date: '১৫ নভেম্বর ২০২৫',
      time: 'সকাল ৯:০০ টা',
      location: 'বিদ্যালয় মাঠ',
      excerpt: 'বার্ষিক ক্রীড়া প্রতিযোগিতার জন্য নিবন্ধন শুরু হয়েছে। সকল শিক্ষার্থীদের অংশগ্রহণের জন্য অনুরোধ করা হলো।',
      type: 'event',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      title: 'বিজ্ঞান মেলা আয়োজন',
      date: '২৫ নভেম্বর ২০২৫',
      time: 'সকাল ১০:০০ টা',
      location: 'বিদ্যালয় অডিটোরিয়াম',
      excerpt: 'আগামী মাসে অনুষ্ঠিত হতে যাচ্ছে বার্ষিক বিজ্ঞান মেলা। অংশগ্রহণে আগ্রহী শিক্ষার্থীদের নাম রেজিস্ট্রেশন করান।',
      type: 'event',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      title: 'মিড টার্ম পরীক্ষার সময়সূচি',
      date: '১০ ডিসেম্বর ২০২৫',
      excerpt: 'মিড টার্ম পরীক্ষার সময়সূচি প্রকাশিত হয়েছে। সকল শিক্ষার্থীদের সময়সূচি দেখে প্রস্তুতি নেওয়ার জন্য অনুরোধ করা হলো।',
      type: 'news',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
    },
    {
      id: 4,
      title: 'সাংস্কৃতিক সন্ধ্যা',
      date: '২০ ডিসেম্বর ২০২৫',
      time: 'সন্ধ্যা ৬:০০ টা',
      location: 'বিদ্যালয় প্রাঙ্গণ',
      excerpt: 'আগামী ২০ ডিসেম্বর সাংস্কৃতিক সন্ধ্যার আয়োজন করা হয়েছে। সকল অভিভাবক ও শিক্ষার্থীদের সাদর আমন্ত্রণ।',
      type: 'event',
      image: 'https://images.unsplash.com/photo-1505373870541-8cda17efd0d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
    },
    {
      id: 5,
      title: 'বই বিতরণ উৎসব',
      date: '৫ জানুয়ারি ২০২৬',
      excerpt: 'নতুন শিক্ষাবর্ষের বই বিতরণ উৎসবের তারিখ ঘোষণা করা হয়েছে।',
      type: 'news',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80'
    },
    {
      id: 6,
      title: 'শিক্ষক-অভিভাবক সভা',
      date: '১৫ জানুয়ারি ২০২৬',
      time: 'সকাল ১০:০০ টা',
      location: 'ক্লাসরুম',
      excerpt: 'নতুন শিক্ষাবর্ষের প্রথম শিক্ষক-অভিভাবক সভার আয়োজন করা হয়েছে।',
      type: 'event',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef188a54eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    }
  ];



  return (
    <section className="py-10 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-siyam-rupali)' }}>খবর ও ইভেন্ট</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Navigation Buttons */}
          {showLeftButton && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous items"
            >
              <FiChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          )}
          
          <div 
            ref={scrollContainer}
            className="flex gap-6 pb-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE and Edge
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
              scrollPadding: '0 1rem',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {newsAndEvents.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-80 snap-start relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-64 group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center text-sm text-white/80 mb-2">
                      <FiCalendar className="mr-1.5" size={14} />
                      <span>{item.date}</span>
                      {item.time && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{item.time}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2" style={{ fontFamily: 'var(--font-siyam-rupali)' }}>{item.title}</h3>
                    <p className="text-sm text-white/90 mb-3 line-clamp-2">{item.excerpt}</p>
                    <button className="text-sm text-white font-medium flex items-center group-hover:text-emerald-300 transition-colors">
                      বিস্তারিত জানুন
                      <FiArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {showRightButton && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next items"
            >
              <FiChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          )}
        </div>
        
        <div className="text-center mt-8">
          <button className="group relative inline-flex items-center justify-center px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-sm transition-all duration-300 overflow-hidden">
            <span className="relative z-10">সব খবর ও ইভেন্ট দেখুন</span>
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsAndEventsSection;
