import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">About Square Kindergarten School</h1>
              <div className="text-2xl font-semibold text-gray-700 mb-4">স্কয়ার কিন্ডারগার্টেন স্কুল</div>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Square Kindergarten School, we are dedicated to providing a nurturing and stimulating environment where students can achieve their full potential. 
                Our mission is to foster intellectual curiosity, critical thinking, and a lifelong love of learning in every student.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                We envision a world where every student is empowered with the knowledge, skills, and values needed to thrive in an ever-changing global society. 
                Our goal is to develop well-rounded individuals who are prepared to make meaningful contributions to their communities.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Our History</h2>
              <p className="text-gray-600 mb-6">
                Established in 1995, Square Kindergarten School has been at the forefront of educational excellence for over two decades. 
                What began as a small institution with a handful of students has grown into a renowned educational center serving hundreds of students each year.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Our Facilities</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  'Modern classrooms with smart boards',
                  'Fully equipped science and computer labs',
                  'Extensive library with digital resources',
                  'Sports complex with indoor and outdoor facilities',
                  'Auditorium for events and performances',
                  'Cafeteria serving healthy meals',
                  'Art and music rooms',
                  'Safe and secure campus'
                ].map((facility, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{facility}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Our Team</h2>
              <p className="text-gray-600 mb-6">
                Our dedicated team of experienced educators is committed to providing the highest quality education. 
                With a student-centered approach, our teachers create engaging learning experiences that inspire and challenge students to excel.
              </p>

              <div className="mt-12 text-center">
                <a 
                  href="/contact" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
