import React from 'react';
import { FaBullhorn, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const AnnouncementCard = ({ title, date, description, isNew = false, index }) => {
  return (
    <div className="group relative h-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-700"></div>
      
      {isNew && (
        <div className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full z-10">
          নতুন
        </div>
      )}
      
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mr-3 hover:rotate-6 hover:scale-105 transition-transform">
            <FaBullhorn className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <FaCalendarAlt className="w-3.5 h-3.5 mr-1.5 text-emerald-500" />
          <span>{date}</span>
        </div>
        
        <p className="text-gray-600 mb-5 flex-grow">
          {description}
        </p>
        
        <button className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 mt-auto group">
          <span className="group-hover:underline">বিস্তারিত জানুন</span>
          <FaArrowRight className="ml-2 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const AnnouncementsSection = ({ announcements }) => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-emerald-700 bg-emerald-100/80 rounded-full mb-4">
            গুরুত্বপূর্ণ তথ্য
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ঘোষণা ও বিজ্ঞপ্তি
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement, index) => (
            <div key={index}>
              <AnnouncementCard 
                title={announcement.title}
                date={announcement.date}
                description={announcement.description}
                isNew={announcement.isNew}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
