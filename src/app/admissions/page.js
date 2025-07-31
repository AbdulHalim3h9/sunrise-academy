'use client';
import React, { useState } from 'react';

const admissionProcess = [
  {
    step: '1',
    title: 'Inquiry',
    description: 'Submit an inquiry form or visit our school for a tour.',
    icon: '📝'
  },
  {
    step: '2',
    title: 'Application',
    description: 'Complete and submit the online application form with required documents.',
    icon: '📄'
  },
  {
    step: '3',
    title: 'Assessment',
    description: 'Schedule and complete the entrance assessment (if applicable).',
    icon: '✏️'
  },
  {
    step: '4',
    title: 'Interview',
    description: 'Attend an interview with the admissions committee.',
    icon: '👥'
  },
  {
    step: '5',
    title: 'Decision',
    description: 'Receive the admission decision and enrollment package.',
    icon: '✅'
  },
  {
    step: '6',
    title: 'Enrollment',
    description: 'Complete the enrollment process and submit required fees.',
    icon: '🎓'
  }
];

const faqs = [
  {
    question: 'What are the age requirements for admission?',
    answer: 'For our elementary program, children must be 5 years old by September 1st of the enrollment year. Please check specific age requirements for each grade level in our admissions policy.'
  },
  {
    question: 'What documents are required for the application?',
    answer: 'Required documents typically include birth certificate, previous school records, immunization records, and any relevant educational assessments. A complete list will be provided during the application process.'
  },
  {
    question: 'Is there an application fee?',
    answer: 'Yes, there is a non-refundable application fee of $50. This fee covers the cost of processing your application and is required for each student applying.'
  },
  {
    question: 'Do you offer financial aid or scholarships?',
    answer: 'Yes, we offer need-based financial aid and merit-based scholarships. Please contact our admissions office for more information about eligibility and the application process.'
  },
  {
    question: 'When is the application deadline?',
    answer: 'The priority application deadline for the upcoming academic year is March 1st. However, we accept applications on a rolling basis as space allows.'
  },
  {
    question: 'Can international students apply?',
    answer: 'Yes, we welcome applications from international students. Additional documentation may be required, including proof of English proficiency and visa status.'
  }
];

export default function AdmissionsPage() {
  const [activeTab, setActiveTab] = useState('process');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto">Begin your journey to excellence at Square Kindergarten School</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mb-px">
            <button
              onClick={() => setActiveTab('process')}
              className={`py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'process'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Admission Process
            </button>
            <button
              onClick={() => setActiveTab('apply')}
              className={`py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'apply'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              How to Apply
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'faq'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              FAQs
            </button>
            <button
              onClick={() => setActiveTab('tuition')}
              className={`py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'tuition'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Tuition & Fees
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-4 ">
        <div className="container mx-auto">
          {/* Admission Process */}
          {activeTab === 'process' && (
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Admission Process</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {admissionProcess.map((step, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                      {step.icon}
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3 mx-auto">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Begin your application today and take the first step toward an exceptional education at Square Kindergarten School.
                </p>
                <a
                  href="#apply-now"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab('apply');
                    document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Apply Now
                </a>
              </div>
            </div>
          )}

          {/* How to Apply */}
          {activeTab === 'apply' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How to Apply</h2>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
                <div className="p-8">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Submit an Inquiry</h3>
                      <p className="text-gray-600 mb-4">
                        Begin by submitting an inquiry form or contacting our admissions office to schedule a campus tour.
                      </p>
                      <a 
                        href="/contact" 
                        className="text-blue-600 font-medium hover:underline inline-flex items-center"
                      >
                        Contact Admissions
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Complete the Application</h3>
                      <p className="text-gray-600 mb-4">
                        Fill out the online application form and submit all required documents, including:
                      </p>
                      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                        <li>Completed application form</li>
                        <li>Birth certificate (copy)</li>
                        <li>Previous school records (if applicable)</li>
                        <li>Immunization records</li>
                        <li>Two recent passport-sized photographs</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Schedule an Assessment</h3>
                      <p className="text-gray-600 mb-4">
                        After reviewing your application, we'll contact you to schedule an assessment (if required for your grade level).
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Family Interview</h3>
                      <p className="text-gray-600 mb-4">
                        Meet with our admissions team to discuss your child's educational needs and ensure Square Kindergarten School is the right fit.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Receive Admission Decision</h3>
                      <p className="text-gray-600 mb-4">
                        You'll be notified of the admission decision within two weeks of completing all requirements.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Complete Enrollment</h3>
                      <p className="text-gray-600 mb-4">
                        Upon acceptance, submit the enrollment agreement and required fees to secure your child's place.
                      </p>
                    </div>
                  </div>

                  <div id="apply-now" className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Begin Your Application</h3>
                    <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-600 mb-6 text-center">
                        Ready to take the next step? Click the button below to start your online application.
                      </p>
                      <div className="text-center">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                          Start Application
                        </button>
                        <p className="text-sm text-gray-500 mt-3">
                          or contact us at <a href="mailto:admissions@sunriseacademy.edu" className="text-blue-600 hover:underline">admissions@sunriseacademy.edu</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FAQ */}
          {activeTab === 'faq' && (
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      className="w-full px-6 py-4 text-left focus:outline-none"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={openFaq === index}
                      aria-controls={`faq-${index}`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            openFaq === index ? 'transform rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>
                    <div
                      id={`faq-${index}`}
                      className={`px-6 pb-4 pt-0 text-gray-600 transition-all duration-300 overflow-hidden ${
                        openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                      aria-hidden={openFaq !== index}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">
                  Have more questions? We're here to help!
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Contact Admissions
                </a>
              </div>
            </div>
          )}

          {/* Tuition & Fees */}
          {activeTab === 'tuition' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Tuition & Fees</h2>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
                <div className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">2025-2026 Tuition</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Grade Level
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Annual Tuition
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Elementary (Grades 1-5)</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">$12,500</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Middle School (Grades 6-8)</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">$14,500</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">High School (Grades 9-12)</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">$16,500</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional Fees</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Application Fee (non-refundable)</span>
                        <span className="font-medium">$50</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Enrollment Fee (annual, non-refundable)</span>
                        <span className="font-medium">$500</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Technology Fee (annual)</span>
                        <span className="font-medium">$300</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Textbooks & Materials (estimated annual)</span>
                        <span className="font-medium">$200 - $400</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Options</h3>
                    <p className="text-gray-600 mb-4">
                      We offer several payment plans to help make tuition more manageable for your family:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                      <li>Full payment (due by August 1st, 2% discount)</li>
                      <li>Two-payment plan (August and January)</li>
                      <li>Monthly payment plan (10 months, June-March)</li>
                    </ul>
                    <p className="text-gray-600">
                      <strong>Financial Aid:</strong> Need-based financial aid is available for qualifying families. 
                      Applications for financial aid must be submitted by March 1st for priority consideration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  For more detailed information about tuition, fees, and payment options, please contact our admissions office.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Contact Admissions
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
