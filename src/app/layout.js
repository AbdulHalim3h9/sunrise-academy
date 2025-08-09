import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import ImplementationBy from '@/components/footer/ImplementationBy'
import SchoolLogo from '../components/SchoolLogo'
import ApolloClientProvider from '../providers/ApolloProvider'
import { SchoolInfoProvider } from '@/context/SchoolInfoContext'
import Head from 'next/head';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Square Kindergarten School | স্কয়ার কিন্ডারগার্টেন স্কুল',
  description: 'Welcome to Square Kindergarten School - স্কয়ার কিন্ডারগার্টেন স্কুলে স্বাগতম',
}

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className="font-siyam-rupali">
      <Head>
        <link rel="preconnect" href="https://fonts.maateen.me" />
        <link 
          href="https://fonts.maateen.me/tiro-bangla/font.css" 
          rel="stylesheet"
        />
        <link 
          href="https://fonts.maateen.me/siyam-rupali/font.css" 
          rel="stylesheet"
        />
      </Head>
      <body className="min-h-screen bg-gray-50">
        <ApolloClientProvider>
          <SchoolInfoProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <div className="flex-grow px-4 sm:px-6 lg:px-8">
                <main className="mt-16 md:mt-20">{children}</main>
              </div>
            
            <Footer />
          </div>
          </SchoolInfoProvider>
        </ApolloClientProvider>
      </body>
    </html>
  )
}