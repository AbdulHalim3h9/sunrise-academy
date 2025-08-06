import React from 'react';

export default function InformationCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">তথ্য কেন্দ্রের ঠিকানা</h1>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">যোগাযোগের তথ্য</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <span className="font-medium">ঠিকানা:</span> স্কয়ার কিন্ডারগার্টেন স্কুল,<br/>
                    ঝোপগাড়ী, বগুড়া-৫৮০০
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">ইমেইল:</span> info@squarekindergarten.edu.bd
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">ফোন:</span> +৮৮ ০১৯১২-৩৪৫৬৭৮
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">কার্যক্রম</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>সকাল ৯:০০ টা থেকে বিকাল ৫:০০ টা পর্যন্ত খোলা থাকে</li>
                  <li>শুক্রবার ও সরকারি ছুটির দিন বন্ধ</li>
                  <li>জরুরি যোগাযোগের জন্য ২৪/৭ হেল্পলাইন নম্বর: +৮৮ ০১৯১২-৩৪৫৬৭৯</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
