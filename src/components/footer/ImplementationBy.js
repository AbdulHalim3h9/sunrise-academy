'use client';

const ImplementationBy = () => {
  return (
    <div className="relative group">
      <a 
        href="https://squarecomputer.net" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 hover:bg-gray-800/50"
      >
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center shadow-sm">
            <img 
              src="/images/square-computer_logo.jpeg" 
              alt="Square Computers"
              className="h-8 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/square-computer_logo.jpeg';
              }}
            />
          </div>
        </div>
        <div className="text-left">
          <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            Developed by
          </div>
          <div className="text-base font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
            Square Computers
          </div>
        </div>
        <svg 
          className="w-5 h-5 ml-1 text-gray-500 group-hover:text-emerald-400 transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
};

export default ImplementationBy;
