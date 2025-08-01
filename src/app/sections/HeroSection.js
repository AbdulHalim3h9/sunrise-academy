'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useQuery, gql } from '@apollo/client';

// Move the query outside the component to prevent recreation on re-renders
const GET_HERO_IMAGES = gql`
  query GetHeroImages {
    heroImages {
      nodes {
        id
        title
        heroImageSettings {
          heroImage {
            node {
              sourceUrl
              altText
            }
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

const HeroSection = () => {
  // State
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Data fetching
  const { loading, error, data } = useQuery(GET_HERO_IMAGES);
  const heroImages = data?.heroImages?.nodes || [];

  // Debug: Log the data we received in development
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && data) {
      console.log('Hero Images Data:', JSON.stringify(data, null, 2));
    }
  }, [data]);

  // Set isClient to true after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (heroImages.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Navigation functions
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(prevIndex => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  // Render loading state
  if (loading || !isClient) {
    return <div className="h-[500px] bg-gray-200 animate-pulse"></div>;
  }

  // Render error state
  if (error) {
    console.error('Error loading hero images:', error);
    return (
      <div className="h-[500px] bg-red-50 text-red-600 p-4 flex items-center justify-center">
        Error loading hero images. Please check the console for details.
      </div>
    );
  }

  // Render no images state
  if (heroImages.length === 0) {
    console.log('No hero images found in the response');
    return (
      <div className="h-[500px] bg-yellow-50 text-yellow-800 p-4 flex flex-col items-center justify-center">
        <div className="text-xl font-bold mb-2">No hero images found</div>
        <div className="text-sm mb-4">Please check your WordPress admin panel and ensure you have published hero images.</div>
        <div className="text-xs bg-white p-2 rounded border border-yellow-200">
          <div>WordPress API URL: {process.env.NEXT_PUBLIC_WORDPRESS_API_URL}</div>
          <div>Number of images: {heroImages.length}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-xl">
      <div className="relative h-[30vh] min-h-[300px] md:h-[50vh] md:min-h-[500px] w-full group">
        {/* Navigation Arrows - Only show if more than one image */}
        {heroImages.length > 1 && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="পূর্ববর্তী স্লাইড"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="পরবর্তী স্লাইড"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <AnimatePresence mode="wait">
          {heroImages.map((image, index) => (
            index === currentIndex && (
              <motion.div
                key={image.id}
                className="absolute inset-0 w-full h-full"
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.5, ease: 'easeInOut' }
                }}
                exit={{ 
                  opacity: 0, 
                  x: direction > 0 ? -100 : 100,
                  transition: { duration: 0.5, ease: 'easeInOut' }
                }}
              >
                <motion.img
                  src={image.heroImageSettings?.heroImage?.node?.sourceUrl || 
                       image.featuredImage?.node?.sourceUrl || 
                       '/default-hero.jpg'}
                  alt={image.heroImageSettings?.heroImage?.node?.altText || 
                       image.featuredImage?.node?.altText || 
                       image.title || 
                       'Hero Image'}
                  className="w-full h-full object-cover rounded-lg"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 8, ease: 'easeInOut' }}
                  onError={(e) => {
                    console.error('Error loading image:', e.target.src);
                    e.target.src = '/default-hero.jpg';
                  }}
                />
                {/* Optional: Add overlay text */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4" style={{ fontFamily: 'var(--font-siyam-rupali)' }}>
                    {image.title}
                  </h2>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
      
      {/* Navigation Dots - Only show if more than one image */}
      {heroImages.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-6 bg-white' 
                  : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`স্লাইড ${index + 1} এ যান`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSection;
