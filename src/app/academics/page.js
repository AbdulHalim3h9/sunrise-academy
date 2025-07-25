import React from 'react';

const programs = [
  {
    title: 'Elementary School',
    description: 'Our elementary program focuses on building strong foundations in literacy, numeracy, and social skills through engaging, hands-on learning experiences.',
    grades: 'Grades 1-5',
    highlights: [
      'Interactive learning environment',
      'Focus on core subjects',
      'Introduction to arts and physical education',
      'Character development'
    ]
  },
  {
    title: 'Middle School',
    description: 'Our middle school program encourages academic exploration and personal growth with a challenging curriculum that prepares students for high school.',
    grades: 'Grades 6-8',
    highlights: [
      'Subject-specific teachers',
      'STEM and arts integration',
      'Leadership opportunities',
      'Extracurricular activities'
    ]
  },
  {
    title: 'High School',
    description: 'Our comprehensive high school program offers a rigorous academic curriculum with Advanced Placement (AP) courses and college preparation support.',
    grades: 'Grades 9-12',
    highlights: [
      'AP and honors courses',
      'College counseling',
      'Extracurricular and athletic programs',
      'Community service opportunities'
    ]
  }
];

const curriculumAreas = [
  {
    title: 'STEM',
    description: 'Science, Technology, Engineering, and Mathematics education with hands-on learning approaches.',
    icon: '🔬'
  },
  {
    title: 'Humanities',
    description: 'Literature, history, and social studies that foster critical thinking and global awareness.',
    icon: '📚'
  },
  {
    title: 'Arts',
    description: 'Visual and performing arts programs that encourage creativity and self-expression.',
    icon: '🎨'
  },
  {
    title: 'Physical Education',
    description: 'Programs promoting physical fitness, teamwork, and healthy lifestyle choices.',
    icon: '⚽'
  },
  {
    title: 'World Languages',
    description: 'Language programs that develop communication skills and cultural understanding.',
    icon: '🌍'
  },
  {
    title: 'Technology',
    description: 'Integrated technology education preparing students for the digital age.',
    icon: '💻'
  }
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl max-w-3xl mx-auto">Excellence in education through innovative teaching and learning experiences</p>
        </div>
      </div>

      {/* Academic Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Academic Programs</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              We offer a comprehensive range of academic programs designed to meet the diverse needs and interests of our students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="text-blue-600 text-2xl font-bold mb-2">{program.grades}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a 
                      href="#" 
                      className="text-blue-600 font-medium hover:underline inline-flex items-center"
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Curriculum Areas</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Our comprehensive curriculum is designed to provide a well-rounded education that prepares students for success in college and beyond.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-blue-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Academic Calendar</h2>
            <p className="text-gray-600 mb-6">
              Stay informed about important dates, holidays, and school events throughout the academic year.
            </p>
            <a 
              href="/academic-calendar" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Full Calendar
            </a>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Academic Resources</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Library',
                description: 'Access to a vast collection of books, digital resources, and research materials.',
                link: '/library'
              },
              {
                title: 'Learning Support',
                description: 'Specialized programs and resources to support diverse learning needs.',
                link: '/learning-support'
              },
              {
                title: 'College Counseling',
                description: 'Guidance and resources for college and career planning.',
                link: '/college-counseling'
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a 
                  href={resource.link} 
                  className="text-blue-600 font-medium hover:underline inline-flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
