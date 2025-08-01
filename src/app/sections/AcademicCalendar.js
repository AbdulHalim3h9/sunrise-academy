'use client';
import React from 'react';

const AcademicCalendar = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 w-full max-w-md mx-auto">
      <div className="p-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-center">
        <h3 className="text-base font-bold flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          একাডেমিক ক্যালেন্ডার
        </h3>
      </div>
      <div className="p-1">
        <div className="overflow-hidden rounded-b-md">
          <iframe 
            src="https://calendar.google.com/calendar/embed?height=400&wkst=7&bgcolor=%23ffffff&ctz=Asia%2FDhaka&title=%E0%A6%A6%E0%A6%BF%E0%A6%A8%E0%A6%AA%E0%A7%81%E0%A6%9E%E0%A7%8D%E0%A6%9C%E0%A6%BF&hl=bn&showTitle=0&showPrint=0&showNav=1&showDate=1&showTabs=0&src=Z2FuaXRpay50ZWNoQGdtYWlsLmNvbQ&src=NDlxb2JmamltdTZyZ3IyM2RyZzVjMGNpcW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NDlrdTJkbDZ1NmgzdHF2YjBqczUzbW9jMmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4uYmQjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23AD1457&color=%23A79B8E&color=%230B8043" 
            className="w-full border-0" 
            height="400" 
            frameBorder="0" 
            scrolling="no"
            title="Academic Calendar"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
