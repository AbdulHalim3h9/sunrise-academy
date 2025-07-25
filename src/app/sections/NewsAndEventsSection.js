'use client';
import React from 'react';
import { motion } from 'framer-motion';

const NewsAndEventsSection = () => {
  const newsAndEvents = [
    {
      id: 1,
      title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫',
      date: '১৫ নভেম্বর ২০২৫',
      excerpt: 'বার্ষিক ক্রীড়া প্রতিযোগিতার জন্য নিবন্ধন শুরু হয়েছে।',
      type: 'event',
      image: 'https://arntechbd.com/wp-content/uploads/2022/04/oxford_international_school.png'
    },
    {
      id: 2,
      title: 'বিজ্ঞান মেলা আয়োজন',
      date: '২৫ নভেম্বর ২০২৫',
      excerpt: 'আগামী মাসে অনুষ্ঠিত হতে যাচ্ছে বার্ষিক বিজ্ঞান মেলা।',
      type: 'event',
      image: 'https://arntechbd.com/wp-content/uploads/2022/04/oxford_international_school.png'
    },
    {
      id: 3,
      title: 'মিড টার্ম পরীক্ষার সময়সূচি',
      date: '১০ ডিসেম্বর ২০২৫',
      excerpt: 'মিড টার্ম পরীক্ষার সময়সূচি প্রকাশিত হয়েছে।',
      type: 'news',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2C2vcO7X6ZDXBab3rdcOc-gfwcPTKu1B4aA&s'
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">খবর ও ইভেন্ট</h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsAndEvents.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="h-40 bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23e5e7eb"><rect width="24" height="24" rx="0" ry="0"/><text x="50%" y="50%" font-family="Arial" font-size="12" text-anchor="middle" dy=".3em" fill="%239ca3af">No Image</text></svg>';
                  }}
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    item.type === 'event' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {item.type === 'event' ? 'ইভেন্ট' : 'খবর'}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 h-12">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.excerpt}</p>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-1.5 px-4 rounded-full text-xs transition-colors duration-300 inline-flex items-center">
                  বিস্তারিত জানুন
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-full text-sm transition-colors duration-300">
            সব খবর ও ইভেন্ট দেখুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsAndEventsSection;
