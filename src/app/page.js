'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import NoticeSection from './sections/NoticeSection';
import WelcomeSection from './sections/WelcomeSection';
import NewsAndEventsSection from './sections/NewsAndEventsSection';
import QuickLinksAndEventsSection from './sections/QuickLinksAndEventsSection';
import AnnouncementsSection from './sections/AnnouncementsSection';
import AcademicCalendar from './sections/AcademicCalendar';
import GallerySection from './sections/GallerySection';

const SectionWrapper = ({ children, className = '' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  const heroImages = [
    {
      src: 'https://narayanganjhighschoolandcollege.edu.bd/wp-content/uploads/2023/08/banner-3-1200x380.jpg',
      alt: 'বিদ্যালয়ের সামনের দৃশ্য',
      title: 'আমাদের বিদ্যালয় প্রাঙ্গণ',
      description: 'উন্নত শিক্ষার জন্য সুসজ্জিত ও মনোরম পরিবেশ',
    },
    {
      src: 'https://baniabhs.edu.bd/media/slideshow/baniabhs.edu.bd/20250218020238_%E0%A7%87%E0%A6%AE.jpg',
      alt: 'বিদ্যালয়ের একাডেমিক ভবন',
      title: 'উচ্চমানের শিক্ষা',
      description: 'আধুনিক পাঠদান পদ্ধতিতে গুণগত শিক্ষা প্রদান',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35gIZ072maDtAVzzqquQqqgLuoWiszwFUOA&s',
      alt: 'শিক্ষার্থীদের একত্রে ছবি',
      title: 'সামগ্রিক উন্নয়ন',
      description: 'শিক্ষার পাশাপাশি সহশিক্ষা কার্যক্রমে অংশগ্রহণ',
    },
  ];

  const notices = [
    { title: 'বিদ্যালয় পুনরায় চালু', date: '১ আগস্ট, ২০২৫' },
    { title: 'বিজ্ঞান মেলা', date: '১৫ সেপ্টেম্বর, ২০২৫' },
    { title: 'অভিভাবক-শিক্ষক সভা', date: '১০ অক্টোবর, ২০২৫' },
  ];

  const announcements = [
    {
      title: 'নতুন শিক্ষাবর্ষ',
      date: '১ আগস্ট, ২০২৫',
      description: 'নতুন শিক্ষাবর্ষ শুরু হচ্ছে ১ আগস্ট, ২০২৫ থেকে। সকল শিক্ষার্থী ও অভিভাবকদের জানানো যাচ্ছে।',
    },
    {
      title: 'অনলাইন ভর্তি শুরু',
      date: '১৫ জুলাই, ২০২৫',
      description: '২০২৫-২৬ শিক্ষাবর্ষের জন্য অনলাইন ভর্তি শুরু হয়েছে। আমাদের ওয়েবসাইটে গিয়ে আবেদন করুন।',
    },
    {
      title: 'অভিভাবক-শিক্ষক সভা',
      date: '১০ অক্টোবর, ২০২৫',
      description: 'আগামী ১০ অক্টোবর, ২০২৫ তারিখে বার্ষিক অভিভাবক-শিক্ষক সভা অনুষ্ঠিত হবে।',
    },
  ];

  const quickLinks = [
    { title: 'ভর্তি প্রক্রিয়া', url: '/admissions' },
    { title: 'শিক্ষাবর্ষ ক্যালেন্ডার', url: '/academics/calendar' },
    { title: 'ইউনিফর্ম', url: '/about/uniform' },
    { title: 'ফটো গ্যালারি', url: '/gallery' },
    { title: 'যোগাযোগ', url: '/contact' },
  ];

  const upcomingEvents = [
    { title: 'বার্ষিক ক্রীড়া দিবস', date: '১৫ অক্টোবর, ২০২৫' },
    { title: 'বিজ্ঞান প্রদর্শনী', date: '৫ নভেম্বর, ২০২৫' },
    { title: 'সাংস্কৃতিক উৎসব', date: '১০ ডিসেম্বর, ২০২৫' },
  ];

  const galleryImages = [
    {
      src: 'https://c8.alamy.com/comp/JM2RYY/bangladeshi-school-students-walking-on-the-school-ground-at-class-JM2RYY.jpg',
      alt: 'বিদ্যালয় প্রাঙ্গণে শিক্ষার্থীরা',
      title: 'বিদ্যালয় প্রাঙ্গণে শিক্ষার্থীরা',
      description: 'বিদ্যালয়ের সুন্দর পরিবেশে শিক্ষার্থীদের যাতায়াতের দৃশ্য'
    },
    {
      src: 'https://st4.depositphotos.com/12722406/39166/i/450/depositphotos_391660360-stock-photo-bangladeshi-school-students-stand-alignment.jpg',
      alt: 'শৃঙ্খলার সাথে সারিবদ্ধভাবে দাঁড়িয়ে শিক্ষার্থীরা',
      title: 'শৃঙ্খলার সাথে প্রস্তুতি',
      description: 'বিদ্যালয়ের বিভিন্ন কার্যক্রমে অংশগ্রহণের জন্য প্রস্তুত শিক্ষার্থীরা'
    },
    {
      src: 'https://c8.alamy.com/comp/JM2RYY/bangladeshi-school-students-walking-on-the-school-ground-at-class-JM2RYY.jpg',
      alt: 'বিদ্যালয়ের প্রাত্যহিক কার্যক্রম',
      title: 'প্রাত্যহিক কার্যক্রম',
      description: 'বিদ্যালয়ের নিয়মিত কার্যক্রমে ব্যস্ত শিক্ষার্থীরা'
    },
    {
      src: 'https://st4.depositphotos.com/12722406/39166/i/450/depositphotos_391660360-stock-photo-bangladeshi-school-students-stand-alignment.jpg',
      alt: 'শিক্ষার্থীদের দলবদ্ধ কার্যক্রম',
      title: 'দলবদ্ধ কার্যক্রম',
      description: 'বিভিন্ন দলগত কার্যক্রমে অংশ নিচ্ছে শিক্ষার্থীরা'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SectionWrapper className="py-2 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <HeroSection images={heroImages} />
            </div>
            <div className="lg:col-span-4 h-full">
              <div className="sticky top-24">
                <NoticeSection notices={notices} />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-emerald-50">
          <WelcomeSection />
      </SectionWrapper>
      
      {/* Announcements & Calendar Section */}
      <SectionWrapper className="py-4  bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Announcements - Takes 2/3 width on large screens */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <AnnouncementsSection announcements={announcements} />
              </motion.div>
            </div>
            
            {/* Calendar - Takes 1/3 width on large screens */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <AcademicCalendar />
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      
      {/* News & Events and Quick Links Section */}
      <SectionWrapper className="py-4  bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* News & Events - Takes 2/3 width on large screens */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <NewsAndEventsSection />
              </motion.div>
            </div>
            
            {/* Quick Links - Takes 1/3 width on large screens */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="sticky top-4"
              >
                <QuickLinksAndEventsSection quickLinks={quickLinks} />
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="py-4  bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GallerySection images={galleryImages} />
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}