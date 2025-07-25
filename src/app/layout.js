import { Inter } from 'next/font/google'
import './globals.css'
import NewsTicker from '../components/NewsTicker'
import SchoolLogo from '../components/SchoolLogo'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sunrise Academy',
  description: 'Welcome to Sunrise Academy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-100`}>
        <nav className="bg-emerald-50 shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center space-x-3">
                <SchoolLogo />
                <div className="hidden sm:block">
                  <div className="text-xl font-bold text-emerald-800">সানরাইজ একাডেমি</div>
                  <div className="text-xs text-emerald-700">উজ্জ্বল ভবিষ্যতের সন্ধানে</div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="text-xs text-emerald-600 whitespace-nowrap">
                  <span className="font-medium">ইনস্টিটিউট কোড:</span> ২০০৬৮ | <span className="font-medium">EIIN:</span> ১৩২৯১৩
                </div>
              </div>
              <div className="hidden md:flex space-x-1">
                <a href="/" className="px-4 py-2 rounded-md text-emerald-900 hover:bg-emerald-100 hover:text-emerald-800 font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
                  <span className="relative">
                    <span className="relative z-10">হোম</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <a href="/about" className="px-4 py-2 rounded-md text-emerald-900 hover:bg-emerald-100 hover:text-emerald-800 font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
                  <span className="relative">
                    <span className="relative z-10">আমাদের সম্পর্কে</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <a href="/academics" className="px-4 py-2 rounded-md text-emerald-900 hover:bg-emerald-100 hover:text-emerald-800 font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
                  <span className="relative">
                    <span className="relative z-10">শিক্ষা কার্যক্রম</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <a href="/admissions" className="px-4 py-2 rounded-md text-emerald-900 hover:bg-emerald-100 hover:text-emerald-800 font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
                  <span className="relative">
                    <span className="relative z-10">ভর্তি</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <a href="/contact" className="px-4 py-2 rounded-md text-emerald-900 hover:bg-emerald-100 hover:text-emerald-800 font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
                  <span className="relative">
                    <span className="relative z-10">যোগাযোগ</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </div>
              <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <NewsTicker />
        <main>{children}</main>
        <footer className="bg-[#012b20] text-white pt-12 pb-6 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/2 -right-20 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-1/2 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* School Info */}
              <div className="md:col-span-2 relative z-10">
                <div className="flex items-center mb-4">
                  <SchoolLogo className="h-12 w-12 mr-3" />
                  <h3 className="text-2xl font-bold text-emerald-100">সানরাইজ একাডেমি</h3>
                </div>
                <p className="text-emerald-100 mb-4">জ্ঞান, নৈতিকতা ও আধুনিক শিক্ষার সমন্বয়ে গড়ে উঠেছে আমাদের শিক্ষা প্রতিষ্ঠান। ভবিষ্যতের জন্য দক্ষ ও নৈতিক নাগরিক গড়ে তোলাই আমাদের লক্ষ্য।</p>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-emerald-100 mb-4 pb-2 border-b border-emerald-700">দ্রুত লিংক</h4>
                <ul className="space-y-3">
                  <li><a href="/about" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    আমাদের সম্পর্কে
                  </a></li>
                  <li><a href="/academics" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    শিক্ষা কার্যক্রম
                  </a></li>
                  <li><a href="/admissions" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    ভর্তি সংক্রান্ত
                  </a></li>
                  <li><a href="/contact" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    যোগাযোগ
                  </a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-emerald-100 mb-4 pb-2 border-b border-emerald-700">যোগাযোগ করুন</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-emerald-100">১২৩ স্কুল স্ট্রিট, ঢাকা - ১২১৬, বাংলাদেশ</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-300 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@sunriseacademy.edu.bd" className="text-emerald-100 hover:text-white transition-colors">info@sunriseacademy.edu.bd</a>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-300 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+8801912345678" className="text-emerald-100 hover:text-white transition-colors">+৮৮ ০১৯১২-৩৪৫৬৭৮</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-emerald-800 mt-8 pt-6 text-center">
              <p className="text-emerald-200 text-sm">
                © {new Date().getFullYear()} সানরাইজ একাডেমি। সর্বস্বত্ব সংরক্ষিত।
              </p>
              <p className="text-emerald-300 text-xs mt-2">
                <a href="/privacy-policy" className="hover:text-white transition-colors">গোপনীয়তা নীতি</a> | 
                <a href="/terms" className="hover:text-white transition-colors mx-2">ব্যবহারের শর্তাবলী</a> | 
                <a href="/sitemap" className="hover:text-white transition-colors">সাইটম্যাপ</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
