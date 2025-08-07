'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white text-sm py-2 px-4 border-b border-gray-800 h-10 flex items-center relative z-30">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Hours and Address - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center text-white">
            <FaClock className="mr-2 text-emerald-400" />
            <span className="font-siyam-rupali font-medium">রবি - বৃহস্পতি: সকাল ৯টা - বিকাল ৫টা</span>
          </div>
          <span className="text-gray-500">|</span>
          <div className="flex items-center text-white">
            <FaMapMarkerAlt className="mr-2 text-emerald-400" />
            <span className="font-siyam-rupali font-medium">ঝোপগাড়ি, বগুড়া - ৫৮০০</span>
          </div>
        </div>
        
        {/* Right side - Contact */}
        <div className="flex items-center space-x-4">
          <a 
            href="mailto:info@squarekindergarten.edu.bd" 
            className="flex items-center hover:text-emerald-300 transition-colors duration-200 group"
          >
            <FaEnvelope className="mr-2 text-emerald-400 group-hover:text-emerald-300" />
            <span className="font-siyam-rupali font-medium text-white">info@squarekindergarten.edu.bd</span>
          </a>
          <span className="hidden md:inline text-gray-500">|</span>
          <a 
            href="tel:+8801912345678" 
            className="flex items-center hover:text-emerald-300 transition-colors duration-200 group"
          >
            <FaPhone className="mr-2 text-emerald-400 group-hover:text-emerald-300" />
            <span className="font-siyam-rupali font-medium text-white">+৮৮ ০১৯১২-৩৪৫৬৭৮</span>
          </a>
        </div>
      </div>
    </div>
  );
}
