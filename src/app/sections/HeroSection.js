import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroSection = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full relative overflow-hidden rounded-2xl shadow-xl">
      <div className="relative h-[30vh] min-h-[300px] md:h-[50vh] md:min-h-[500px] w-full group">
        {/* Navigation Arrows */}
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

        <AnimatePresence custom={direction} mode="wait">
          {images.map((image, index) => (
            index === currentIndex && (
            <motion.div
              key={image.src}
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
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8, ease: 'easeInOut' }}
              />
            </motion.div>
          )))}
        </AnimatePresence>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <a
            key={index}
            href={`#slide${index}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white'}`}
            aria-label={`স্লাইড ${index + 1} এ যান`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
