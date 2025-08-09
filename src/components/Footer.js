'use client';

import { useSchoolInfo } from '@/context/SchoolInfoContext';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ImplementationBy from './footer/ImplementationBy';
import { useEffect, useState } from 'react';

export default function Footer() {
  const { schoolInfo, loading } = useSchoolInfo();
  const [email, setEmail] = useState('info@squarekindergarten.edu.bd');
  const [phone, setPhone] = useState('+৮৮ ০১৯১২-৩৪৫৬৭৮');
  const [address, setAddress] = useState('ঝোপগাড়ি, বগুড়া - ৫৮০০, বাংলাদেশ');
  const [description, setDescription] = useState('জ্ঞান, নৈতিকতা ও আধুনিক শিক্ষার সমন্বয়ে গড়ে উঠেছে আমাদের শিক্ষা প্রতিষ্ঠান। ভবিষ্যতের জন্য দক্ষ ও নৈতিক নাগরিক গড়ে তোলাই আমাদের লক্ষ্য।');

  useEffect(() => {
    if (schoolInfo) {
      if (schoolInfo.emailAddress) setEmail(schoolInfo.emailAddress);
      if (schoolInfo.mobileNumber) setPhone(schoolInfo.mobileNumber);
      if (schoolInfo.institutionAddress) setAddress(schoolInfo.institutionAddress);
      // Add more fields as needed
    }
  }, [schoolInfo]);

  if (loading) {
    return (
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="h-8 bg-gray-800 rounded w-full animate-pulse mb-6"></div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* School Info */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-5">
              <img 
                src="/images/square-kindergarten-logo.jpeg" 
                alt="Square Kindergarten School Logo" 
                className="rounded-full h-12 w-12 mr-3" 
              />
              <h3 className="text-xl font-semibold text-white">স্কয়ার কিন্ডারগার্টেন স্কুল</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-md">
              {description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-start">
                <div className="text-emerald-400 mr-3 mt-0.5">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <span className="text-gray-300 text-sm">{address}</span>
              </div>
              <div className="flex items-center">
                <div className="text-emerald-400 mr-3">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <a href={`mailto:${email}`} className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {email}
                </a>
              </div>
              <div className="flex items-center">
                <div className="text-emerald-400 mr-3">
                  <FaPhone className="w-4 h-4" />
                </div>
                <a href={`tel:${phone}`} className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {phone}
                </a>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-emerald-700 text-white p-2 rounded-md transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-red-700 text-white p-2 rounded-md transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links - Wider section with 2 columns */}
          <div className="md:col-span-5">
            <h4 className="text-base font-semibold text-white mb-4 pb-2 border-b border-gray-700">জরুরি লিঙ্ক সমূহ</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {[
                { href: "http://www.dshe.gov.bd/", label: "মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর" },
                { href: "http://data.banbeis.gov.bd/", label: "বাংলাদেশ শিক্ষাতথ্য ও পরিসংখ্যান ব্যুরো (ব্যানবেইস)" },
                { href: "https://www.bangladesh.gov.bd/", label: "বাংলাদেশ জাতীয় তথ্য বাতায়ন" },
                { href: "http://www.moedu.gov.bd/", label: "শিক্ষা মন্ত্রণালয়" },
                { href: "https://www.bise-ctg.gov.bd/", label: "মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, সিলেট" },
                { href: "http://www.mopme.gov.bd/", label: "প্রাথমিক ও গণশিক্ষা মন্ত্রণালয়" },
                { href: "https://www.ugc.gov.bd/", label: "বাংলাদেশ বিশ্ববিদ্যালয় মঞ্জুরী কমিশন" },
                { href: "https://www.du.ac.bd/", label: "ঢাকা বিশ্ববিদ্যালয়" },
                { href: "https://www.sust.edu/", label: "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়" }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 block"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Implementation By */}
          <div className="md:col-span-3">
            <h4 className="text-base font-semibold text-white mb-4 pb-2 border-b border-gray-700">বাস্তবায়নে</h4>
            <ImplementationBy />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} স্কয়ার কিন্ডার গার্টেন স্কুল, ঝোপগাড়ী, বগুড়া। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center space-x-4 text-sm">
            <a href="/privacy-policy" className="text-gray-500 hover:text-gray-300 transition-colors duration-200">
              গোপনীয়তা নীতি
            </a>
            <span className="text-gray-600">•</span>
            <a href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors duration-200">
              ব্যবহারের শর্তাবলী
            </a>
            <span className="text-gray-600">•</span>
            <a href="/sitemap" className="text-gray-500 hover:text-gray-300 transition-colors duration-200">
              সাইটম্যাপ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
