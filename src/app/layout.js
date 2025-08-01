import './globals.css'
import NewsTicker from '../components/NewsTicker'
import Navigation from '../components/Navigation'
import SchoolLogo from '../components/SchoolLogo'
import ApolloClientProvider from '../providers/ApolloProvider'

export const metadata = {
  title: 'Square Kindergarten School | স্কয়ার কিন্ডারগার্টেন স্কুল',
  description: 'Welcome to Square Kindergarten School - স্কয়ার কিন্ডারগার্টেন স্কুলে স্বাগতম',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <ApolloClientProvider>
          <Navigation />
          <div className="pt-16">
            <NewsTicker />
            <main>{children}</main>
          </div>
          <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-10"></div>
            
            <div className="w-full">
              <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-10 gap-8 lg:gap-12">
                {/* School Info */}
                <div className="md:col-span-4">
                  <div className="flex items-center mb-6">
                    <img src="/images/square-kindergarten-logo.jpeg" alt="Square Kindergarten School Logo" className="rounded-full h-14 w-14 mr-4" />
                    <h3 className="text-xl font-bold text-white">স্কয়ার কিন্ডারগার্টেন স্কুল</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    জ্ঞান, নৈতিকতা ও আধুনিক শিক্ষার সমন্বয়ে গড়ে উঠেছে আমাদের শিক্ষা প্রতিষ্ঠান। ভবিষ্যতের জন্য দক্ষ ও নৈতিক নাগরিক গড়ে তোলাই আমাদের লক্ষ্য।
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-800 hover:bg-emerald-600 text-white p-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-800 hover:bg-red-600 text-white p-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                      <span className="sr-only">YouTube</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="md:col-span-3">
                  <h4 className="text-lg font-bold text-white mb-6 pb-2 border-b border-gray-700">কুইক লিংক</h4>
                  <ul className="space-y-3.5">
                    {[
                      { href: "/about", label: "আমাদের সম্পর্কে" },
                      { href: "/academics", label: "শিক্ষা কার্যক্রম" },
                      { href: "/admissions", label: "ভর্তি সংক্রান্ত" },
                      { href: "/gallery", label: "গ্যালারি" },
                      { href: "/contact", label: "যোগাযোগ" }
                    ].map((item) => (
                      <li key={item.href}>
                        <a 
                          href={item.href} 
                          className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                        >
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 transform group-hover:translate-x-1 transition-transform duration-300"></span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="md:col-span-3">
                  <h4 className="text-lg font-bold text-white mb-6 pb-2 border-b border-gray-700">যোগাযোগ করুন</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-emerald-600/20 p-2.5 rounded-lg text-emerald-400 mr-4 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-300">ঝোপগাড়ি, বগুড়া - ৫৮০০, বাংলাদেশ</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-emerald-600/20 p-2.5 rounded-lg text-emerald-400 mr-4 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <a href="mailto:info@squarekindergarten.edu.bd" className="text-gray-300 hover:text-white transition-colors duration-300 break-words">
                        info@squarekindergarten.edu.bd
                      </a>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-emerald-600/20 p-2.5 rounded-lg text-emerald-400 mr-4 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <a href="tel:+8801912345678" className="text-gray-300 hover:text-white transition-colors duration-300">
                        +৮৮ ০১৯১২-৩৪৫৬৭৮
                      </a>
                    </li>
                  </ul>
                </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
                  © {new Date().getFullYear()} স্কয়ার কিন্ডার গার্টেন স্কুল, ঝোপগাড়ী, বগুড়া। সর্বস্বত্ব সংরক্ষিত।
                </p>
                <div className="flex space-x-4">
                  <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                    গোপনীয়তা নীতি
                  </a>
                  <span className="text-gray-600">|</span>
                  <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                    ব্যবহারের শর্তাবলী
                  </a>
                  <span className="text-gray-600">|</span>
                  <a href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                    সাইটম্যাপ
                  </a>
                </div>
              </div>
          </div>
        </footer>
        </ApolloClientProvider>
      </body>
    </html>
  )
}
