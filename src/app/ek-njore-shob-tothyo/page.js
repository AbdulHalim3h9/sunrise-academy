'use client';

export default function Page() {
  const schoolInfo = [
    { id: '০১', title: 'প্রতিষ্ঠানের নাম', description: 'তুষখালী মাধ্যমিক বিদ্যালয়' },
    { id: '০২', title: 'প্রতিষ্ঠানের ঠিকানা', description: 'গ্রাম: উদয়তারা বুড়িরচর, ওয়ার্ড নং: ০৪, ডাকঘর: তুষখালী(৮৫৬১), উপজেলা: মঠবাড়িয়া, জেলা: পিরোজপুর।' },
    { id: '০৩', title: 'প্রতিষ্ঠানের অবস্থান', description: 'পোনা নদীর পূর্বপাড়ে' },
    { id: '০৪', title: 'ই মেইল ঠিকানা', description: 'tushkhalihighschool@yahoo.com' },
    { id: '০৫', title: 'ওয়েবসাইটের ঠিকানা', description: 'tushkhalihighschool.edu.bd' },
    { id: '০৬', title: 'মোবাইল নম্বর', description: '০১৩০৯-১০২৭২৮' },
    { id: '০৭', title: 'ইআইআইএন নম্বর', description: '১০২৭২৮' },
    { id: '০৮', title: 'প্রতিষ্ঠান কোড নম্বর', description: '২৫৫২' },
    { id: '০৯', title: 'এম পি ও কোড নম্বর', description: '৫৪০৫০৭১৩০২' },
    { id: '১০', title: 'উপবৃত্তি লোকেশন কোড নম্বর', description: '' },
    { id: '১১', title: 'উপবৃত্তি কোড নম্বর', description: '' },
    { id: '১২', title: 'প্রতিষ্ঠার তারিখ', description: '১৯৪১' },
    { id: '১৩', title: 'প্রথম স্বীকৃতির তারিখ', description: '' },
    { id: '১৪', title: 'প্রথম এম পি ও ভূক্তির তারিখ', description: '' },
    { id: '১৫', title: 'জমির পরিমান', description: '১৯২৩.০০ শতাংশ' },
    { id: '১৬', title: 'প্রতিষ্ঠাতা', description: '' },
    { id: '১৭', title: 'ব্যাংক হিসাব নম্বর', description: '' },
    { id: '১৮', title: 'গ্রন্থাগারে বইয়ের সংখ্যা', description: '' },
    { id: '১৯', title: 'ভবন সংখ্যা', description: '০৩' },
    { id: '২০', title: 'ছাত্রাবাসের সংখ্যা', description: '' },
    { id: '২১', title: 'শিক্ষক আবাসন', description: '' },
    { id: '২২', title: 'স্টল সংখ্যা', description: '' },
    { id: '২৩', title: 'শৌচাগার', description: '০৭' },
    { id: '২৪', title: 'মোট শিক্ষক', description: '১৬' },
    { id: '২৫', title: 'মোট শিক্ষার্থী', description: '৬২৫' },
    { id: '২৬', title: 'শ্রেণী কক্ষ', description: '১৯' },
    { id: '২৭', title: 'অফিস কক্ষ', description: '০১' },
    { id: '২৮', title: 'ছাত্রী কমন রুম', description: '০১' },
    { id: '২৯', title: 'বিজ্ঞানাগার', description: '০১' },
    { id: '৩০', title: 'স্কাউট কক্ষ', description: '০১' },
    { id: '৩১', title: 'শিক্ষিকা কমন রুম', description: '০১' },
    { id: '৩২', title: 'মাল্টিমিডিয়া ক্লাস রুম', description: '' },
    { id: '৩৩', title: 'শৌচাগার (ছাত্রদের জন্য)', description: '০২' },
    { id: '৩৪', title: 'শৌচাগার (ছাত্রীদের জন্য)', description: '০৩' },
    { id: '৩৫', title: 'শৌচাগার (শিক্ষকদের জন্য)', description: '০২' },
    { id: '৩৬', title: 'মুক্তিযুদ্ধ কর্নার', description: '' },
    { id: '৩৭', title: 'প্রার্থনা কক্ষ', description: '০১' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          এক নজরে সকল তথ্য
        </h1>
        
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">ক্র. নং</th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">তথ্যের হেড</th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">তথ্যের বিবরণ</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {schoolInfo.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{item.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.description || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-600">
          <p className="text-center">
            * সর্বশেষ হালনাগাদ: {new Date().toLocaleDateString('bn-BD')}
          </p>
        </div>
      </div>
    </div>
  );
}
