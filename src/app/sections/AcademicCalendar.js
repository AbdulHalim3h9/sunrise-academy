'use client';
import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, getDay } from 'date-fns';
import { bn } from 'date-fns/locale';

const AcademicCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Sample holidays and important dates (date should be in YYYY-MM-DD format)
  const events = [
    { date: '2025-08-15', title: 'জাতীয় শোক দিবস', type: 'holiday' },
    { date: '2025-08-25', title: 'শ্রদ্ধাঞ্জলি দিবস', type: 'holiday' },
    { date: '2025-09-06', title: 'মিড টার্ম পরীক্ষা শুরু', type: 'exam' },
    { date: '2025-09-10', title: 'মিড টার্ম পরীক্ষা শেষ', type: 'exam' },
    { date: '2025-10-02', title: 'মহান শিক্ষা দিবস', type: 'event' },
    { date: '2025-10-15', title: 'বার্ষিক ক্রীড়া দিবস', type: 'event' },
  ];

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfMonth(monthStart);
  const endDate = endOfMonth(monthEnd);

  const dateFormat = 'MMMM yyyy';
  const days = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি'];

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={prevMonth}
          className="p-1 rounded-full hover:bg-gray-100"
          aria-label="পূর্ববর্তী মাস"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <h3 className="text-lg font-semibold text-gray-800">
          {format(currentMonth, 'MMMM yyyy', { locale: bn })}
        </h3>
        <button 
          onClick={nextMonth}
          className="p-1 rounded-full hover:bg-gray-100"
          aria-label="পরবর্তী মাস"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    );
  };

  const renderDays = () => {
    return (
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day, i) => (
          <div key={i} className="text-xs font-medium text-center text-gray-500 py-1">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const startDate = startOfMonth(currentMonth);
    const endDate = endOfMonth(startDate);
    const startDay = getDay(startDate);
    
    const daysInMonth = eachDayOfInterval({
      start: startDate,
      end: endDate,
    });

    // Add empty cells for days before the start of the month
    const emptyStartCells = Array.from({ length: startDay }).map((_, i) => (
      <div key={`empty-start-${i}`} className="h-8"></div>
    ));

    const dateCells = daysInMonth.map((day, i) => {
      const dayEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        return isSameDay(day, eventDate);
      });

      const isToday = isSameDay(day, new Date());
      
      return (
        <div 
          key={i} 
          className={`relative p-1 h-20 border border-gray-100 text-sm overflow-hidden ${
            !isSameMonth(day, currentMonth) ? 'bg-gray-50 text-gray-400' : 'text-gray-800'
          }`}
        >
          <div className={`text-right ${isToday ? 'bg-emerald-600 text-white' : 'text-gray-700'} rounded-full w-6 h-6 flex items-center justify-center ml-auto text-sm font-medium`}>
            {format(day, 'd')}
          </div>
          <div className="mt-1 space-y-0.5 overflow-hidden h-12">
            {dayEvents.map((event, i) => (
              <div 
                key={i} 
                className={`text-xs truncate px-1 rounded ${
                  event.type === 'holiday' 
                    ? 'bg-red-100 text-red-800' 
                    : event.type === 'exam' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-blue-100 text-blue-800'
                }`}
                title={event.title}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    });

    return (
      <div className="grid grid-cols-7 gap-px bg-gray-100">
        {[...emptyStartCells, ...dateCells]}
      </div>
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold text-emerald-800 mb-4 pb-2 border-b border-emerald-200">
        <span className="inline-block mr-2">📅</span>
        একাডেমিক ক্যালেন্ডার
      </h3>
      <div className="calendar">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-red-100 mr-1"></span>
          <span>ছুটি</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-yellow-100 mr-1"></span>
          <span>পরীক্ষা</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-100 mr-1"></span>
          <span>অনুষ্ঠান</span>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
