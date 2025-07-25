import React from 'react';

const QuickLinksAndEventsSection = ({ quickLinks }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold mb-4 pb-2 border-b border-emerald-200 text-emerald-800">
        <span className="inline-block mr-2">🔗</span>
        দ্রুত লিঙ্ক
        <span className="text-sm font-normal text-gray-500 ml-2">Quick Links</span>
      </h3>
      <ul className="space-y-3">
        {quickLinks.map((link, index) => (
          <li key={index} className="group">
            <a
              href={link.url}
              className="flex items-center text-emerald-800 hover:text-emerald-700 transition-colors text-sm font-medium hover:bg-emerald-50 -mx-2 px-2 py-1.5 rounded"
              aria-label={link.title}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 mr-2 text-emerald-600 group-hover:text-emerald-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinksAndEventsSection;
