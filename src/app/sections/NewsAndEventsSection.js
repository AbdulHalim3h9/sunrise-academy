'use client';
import React, { useState } from 'react';
import { FiCalendar, FiClock, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const NewsAndEventsSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsAndEvents = [
    {
      id: 1,
      title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫',
      date: '১৫ নভেম্বর ২০২৫',
      time: 'সকাল ৯:০০ টা',
      location: 'বিদ্যালয় মাঠ',
      excerpt: 'বার্ষিক ক্রীড়া প্রতিযোগিতার জন্য নিবন্ধন শুরু হয়েছে। সকল শিক্ষার্থীদের অংশগ্রহণের জন্য অনুরোধ করা হলো।',
      type: 'event',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
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

  const filteredItems = activeTab === 'all' 
    ? newsAndEvents 
    : newsAndEvents.filter(item => item.type === activeTab);

  const slides = [
    filteredItems.slice(0, 3),
    filteredItems.slice(3, 6)
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-emerald-600 text-sm font-semibold mb-2">আমাদের কার্যক্রম</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">খবর ও ইভেন্ট</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              সব
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-2 text-sm font-medium border-l border-r border-gray-200 ${
                activeTab === 'news'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              খবর
            </button>
            <button
              onClick={() => setActiveTab('event')}
              className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'event'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              ইভেন্ট
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slides[currentSlide]?.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <div className="flex items-center text-white text-sm">
                        <FiCalendar className="mr-1.5" />
                        <span>{item.date}</span>
                        {item.time && (
                          <>
                            <span className="mx-2">•</span>
                            <FiClock className="mr-1.5" />
                            <span>{item.time}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{item.excerpt}</p>
                    <div className="mt-auto">
                      <button className="group inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-300">
                        বিস্তারিত জানুন
                        <FiArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          {slides.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 z-10"
                aria-label="Previous slide"
              >
                <FiChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 z-10"
                aria-label="Next slide"
              >
                <FiChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </>
          )}
          
          {/* Dots Indicator */}
          {slides.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-emerald-600 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="text-center mt-12">
          <button className="group relative inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-sm transition-all duration-300 overflow-hidden">
            <span className="relative z-10">সব খবর ও ইভেন্ট দেখুন</span>
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsAndEventsSection;
