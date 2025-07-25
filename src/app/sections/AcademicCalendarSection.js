'use client';
import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, parseISO } from 'date-fns';
import { bn } from 'date-fns/locale';

const AcademicCalendarSection = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 9, 1)); // October 2025
  
  // Academic year events and holidays
  const events = [
    { 
      date: '2025-10-15', 
      title: 'বার্ষিক ক্রীড়া দিবস',
      type: 'event',
      color: 'bg-blue-100 text-blue-800'
    },
    { 
      date: '2025-10-21', 
      title: 'দুর্গা পূজা (ছুটি)',
      type: 'holiday',
      color: 'bg-red-100 text-red-800'
    },
    { 
      date: '2025-10-22', 
      title: 'দুর্গা পূজা (ছুটি)',
      type: 'holiday',
      color: 'bg-red-100 text-red-800'
    },
    { 
      date: '2025-11-05', 
      title: 'বিজ্ঞান প্রদর্শনী',
      type: 'event',
      color: 'bg-green-100 text-green-800'
    },
    { 
      date: '2025-11-20', 
      title: 'মধ্যপর্বীয় পরীক্ষা শুরু',
      type: 'exam',
      color: 'bg-purple-100 text-purple-800'
    },
    { 
      date: '2025-12-10', 
      title: 'সাংস্কৃতিক উৎসব',
      type: 'event',
      color: 'bg-amber-100 text-amber-800'
    },
    { 
      date: '2025-12-16', 
      title: 'বিজয় দিবস (ছুটি)',
      type: 'holiday',
      color: 'bg-red-100 text-red-800'
    },
  ];

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get the day of the week for the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const startDay = monthStart.getDay();
  
  // Create empty cells for days before the first day of the month
  const emptyStartDays = Array.from({ length: startDay }, (_, i) => i);

  // Format month and year in Bengali
  const monthYearFormat = format(currentMonth, 'LLLL yyyy', { locale: bn });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  // Check if a date has any events
  const getEventsForDay = (day) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return isSameDay(day, eventDate) && isSameMonth(day, eventDate);
    });
  };

  // Bengali digits
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  const toBanglaNumber = (num) => {
    return num.toString().split('').map(digit => bnDigits[digit] || digit).join('');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">শিক্ষাবর্ষের ক্যালেন্ডার</h3>
        <div className="flex space-x-2">
          <button 
            onClick={prevMonth}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Previous month"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <span className="font-medium">{monthYearFormat}</span>
          <button 
            onClick={nextMonth}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Next month"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-600 mb-2">
        {['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি'].map(day => (
          <div key={day} className="p-1">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {/* Empty cells for days before the first of the month */}
        {emptyStartDays.map((_, index) => (
          <div key={`empty-${index}`} className="h-12"></div>
        ))}

        {/* Days of the month */}
        {daysInMonth.map((day, i) => {
          const dayEvents = getEventsForDay(day);
          const isToday = isSameDay(day, new Date());
          
          return (
            <div 
              key={i} 
              className={`
                h-16 p-1 border border-gray-100 text-sm overflow-hidden
                ${isToday ? 'bg-blue-50 border-blue-200' : ''}
                ${day.getDay() === 5 ? 'bg-blue-50' : ''} // Friday highlight
              `}
            >
              <div className={`text-right ${isToday ? 'font-bold text-blue-600' : 'text-gray-700'}`}>
                {toBanglaNumber(day.getDate())}
              </div>
              <div className="space-y-0.5 mt-0.5">
                {dayEvents.slice(0, 2).map((event, idx) => (
                  <div 
                    key={idx} 
                    className={`text-xs truncate px-1 rounded ${event.color}`}
                    title={event.title}
                  >
                    {event.title.split(' ')[0]}...
                  </div>
                ))}
                {dayEvents.length > 2 && (
                  <div className="text-xs text-gray-500 text-center">+{dayEvents.length - 2} more</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 text-xs space-y-1">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-red-100 mr-1 border border-red-200"></span>
          <span>ছুটি</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-100 mr-1 border border-blue-200"></span>
          <span>ইভেন্ট</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-purple-100 mr-1 border border-purple-200"></span>
          <span>পরীক্ষা</span>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendarSection;
