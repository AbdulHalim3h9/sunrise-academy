'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GallerySection = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">আমাদের গ্যালারি</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            স্কয়ার কিন্ডার গার্টেন স্কুলের বিভিন্ন অনুষ্ঠান, কার্যক্রম ও দৈনন্দিন জীবনের কিছু মুহূর্ত
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                  <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/gallery"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-8 rounded-full text-sm transition-colors duration-300 shadow-md hover:shadow-lg"
            aria-label="সমস্ত ছবি দেখুন"
          >
            সমস্ত ছবি দেখুন
          </a>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute -top-10 right-0 text-white text-2xl hover:text-emerald-400 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ✕
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="bg-white p-4 mt-2 rounded-b-lg">
                <h3 className="text-xl font-semibold text-gray-800">{selectedImage.title}</h3>
                <p className="text-gray-600 mt-1">{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
