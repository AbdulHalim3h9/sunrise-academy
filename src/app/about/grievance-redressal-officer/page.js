import React from 'react';
import { FaUserTie, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export const metadata = {
  title: 'অভিযোগ নিষ্পত্তি কর্মকর্তার ঠিকানা ও মোবাইল নম্বর',
  description: 'স্কয়ার কিন্ডারগার্টেন স্কুলের অভিযোগ নিষ্পত্তি কর্মকর্তার সাথে যোগাযোগের ঠিকানা ও মোবাইল নম্বর',
};

export default function GrievanceRedressalOfficer() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 font-siyam-rupali">
            অভিযোগ নিষ্পত্তি কর্মকর্তার ঠিকানা ও মোবাইল নম্বর
          </h1>
          <div className="mt-2 h-1 w-24 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="bg-emerald-100 p-4 rounded-full">
                <FaUserTie className="w-12 h-12 text-emerald-600" />
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 font-siyam-rupali">
                  জনাব মোঃ আব্দুল করিম
                </h2>
                <p className="text-gray-600 mt-1 font-siyam-rupali">
                  প্রধান শিক্ষক ও অভিযোগ নিষ্পত্তি কর্মকর্তা
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="ml-3 text-gray-700 font-siyam-rupali">
                      স্কয়ার কিন্ডারগার্টেন স্কুল,<br />
                      মৌলভীবাজার সদর, মৌলভীবাজার - ৩২০০
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <FaPhone className="w-5 h-5 text-emerald-600" />
                    <a href="tel:+8801712345678" className="ml-3 text-gray-700 hover:text-emerald-600 transition-colors font-siyam-rupali">
                      +৮৮ ০১৭১২-৩৪৫৬৭৮
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <FaEnvelope className="w-5 h-5 text-emerald-600" />
                    <a href="mailto:grievance@squarekindergarten.edu.bd" className="ml-3 text-gray-700 hover:text-emerald-600 transition-colors break-all">
                      grievance@squarekindergarten.edu.bd
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <FaClock className="w-5 h-5 text-emerald-600" />
                    <p className="ml-3 text-gray-700 font-siyam-rupali">
                      শনিবার থেকে বৃহস্পতিবার, সকাল ৯টা থেকে বিকাল ৫টা
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 font-siyam-rupali">অভিযোগ দাখিলের পদ্ধতি:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 font-siyam-rupali">
                <li>সরাসরি বিদ্যালয়ে এসে অভিযোগ দাখিল</li>
                <li>ফোনে অভিযোগ জানানো</li>
                <li>ইমেইলের মাধ্যমে অভিযোগ পাঠানো</li>
                <li>অনলাইন ফর্মের মাধ্যমে অভিযোগ দাখিল (শীঘ্রই আসছে)</li>
              </ul>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-blue-800 font-medium font-siyam-rupali">
                  <span className="font-bold">নোট:</span> অভিযোগ দাখিলের সময় আপনার নাম, ঠিকানা, ফোন নম্বর ও ইমেইল ঠিকানা অবশ্যই উল্লেখ করুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
