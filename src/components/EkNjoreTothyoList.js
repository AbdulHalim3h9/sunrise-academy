'use client';

import { useQuery } from '@apollo/client';
import { GET_EK_NJORE_TOTHYOS } from '@/app/graphql/ekNjoreTothyos';

// Define the exact order of fields and their display names
const fieldOrder = [
  { key: 'institutionName', label: 'প্রতিষ্ঠানের নাম' },
  { key: 'institutionAddress', label: 'প্রতিষ্ঠানের ঠিকানা' },
  { key: 'institutionLocation', label: 'প্রতিষ্ঠানের অবস্থান' },
  { key: 'emailAddress', label: 'ই মেইল ঠিকানা' },
  { key: 'websiteAddress', label: 'ওয়েবসাইটের ঠিকানা' },
  { key: 'mobileNumber', label: 'মোবাইল নম্বর' },
  { key: 'eiinNumber', label: 'ইআইআইএন নম্বর' },
  { key: 'institutionCode', label: 'প্রতিষ্ঠান কোড নম্বর' },
  { key: 'mpoCode', label: 'এম পি ও কোড নম্বর' },
  { key: 'stipendLocationCode', label: 'উপবৃত্তি লোকেশন কোড নম্বর' },
  { key: 'stipendCode', label: 'উপবৃত্তি কোড নম্বর' },
  { key: 'establishmentDate', label: 'প্রতিষ্ঠার তারিখ' },
  { key: 'firstRecognitionDate', label: 'প্রথম স্বীকৃতির তারিখ' },
  { key: 'firstMpoDate', label: 'প্রথম এম পি ও ভূক্তির তারিখ' },
  { key: 'landAmount', label: 'জমির পরিমান' },
  { key: 'founder', label: 'প্রতিষ্ঠাতা' },
  { key: 'bankAccountNumber', label: 'ব্যাংক হিসাব নম্বর' },
  { key: 'libraryBooks', label: 'গ্রন্থাগারে বইয়ের সংখ্যা' },
  { key: 'buildingCount', label: 'ভবন সংখ্যা' },
  { key: 'hostelCount', label: 'ছাত্রাবাসের সংখ্যা' },
  { key: 'teacherHousing', label: 'শিক্ষক আবাসন' },
  { key: 'stallCount', label: 'স্টল সংখ্যা' },
  { key: 'toiletsTotal', label: 'শৌচাগার' },
  { key: 'totalTeachers', label: 'মোট শিক্ষক' },
  { key: 'totalStudents', label: 'মোট শিক্ষার্থী' },
  { key: 'classrooms', label: 'শ্রেণী কক্ষ' },
  { key: 'officeRoom', label: 'অফিস কক্ষ' },
  { key: 'femaleStudentCommonRoom', label: 'ছাত্রী কমন রুম' },
  { key: 'scienceLab', label: 'বিজ্ঞানাগার' },
  { key: 'scoutRoom', label: 'স্কাউট কক্ষ' },
  { key: 'femaleTeacherCommonRoom', label: 'শিক্ষিকা কমন রুম' },
  { key: 'multimediaClassroom', label: 'মাল্টিমিডিয়া ক্লাস রুম' },
  { key: 'toiletsStudentsMale', label: 'শৌচাগার (ছাত্রদের জন্য)' },
  { key: 'toiletsStudentsFemale', label: 'শৌচাগার (ছাত্রীদের জন্য)' },
  { key: 'toiletsTeachers', label: 'শৌচাগার (শিক্ষকদের জন্য)' },
  { key: 'liberationWarCorner', label: 'মুক্তিযুদ্ধ কর্নার' },
  { key: 'prayerRoom', label: 'প্রার্থনা কক্ষ' }
];

export default function EkNjoreTothyoList() {
  const { data, loading, error } = useQuery(GET_EK_NJORE_TOTHYOS);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 animate-pulse">
            <div className="h-5 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">
              ত্রুটি: তথ্য লোড করতে সমস্যা হয়েছে। দয়া করে পরে আবার চেষ্টা করুন।
            </p>
          </div>
        </div>
      </div>
    );
  }

  const ekNjoreTothyo = data?.ekNjoreTothyos?.edges[0]?.node?.ekNjoreTothyoFields;

  if (!ekNjoreTothyo) {
    return (
      <div className="text-center py-12">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">কোনো তথ্য পাওয়া যায়নি</h3>
        <p className="mt-1 text-sm text-gray-500">বর্তমানে কোন তথ্য পাওয়া যায়নি।</p>
      </div>
    );
  }

  // Format the data for display
  const formatValue = (key, value) => {
    if (value === null || value === undefined || value === '') return 'N/A';
    
    // Format dates
    if (key.toLowerCase().includes('date')) {
      return new Date(value).toLocaleDateString('bn-BD');
    }
    
    // Format boolean values
    if (typeof value === 'boolean') {
      return value ? 'হ্যাঁ' : 'না';
    }
    
    // Return value as is for all other cases
    return value;
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <colgroup>
            <col className="w-16" />
            <col className="w-1/3" />
            <col className="w-2/3" />
          </colgroup>
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-2 py-3 text-center text-sm font-medium text-gray-900 border-r">
                ক্র. নং
              </th>
              <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-r">
                তথ্যের হেড
              </th>
              <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                তথ্যের বিবরণ
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fieldOrder.map((field, index) => {
              const value = ekNjoreTothyo[field.key];
              return (
                <tr key={field.key} className="hover:bg-gray-50">
                  <td className="px-2 py-4 text-center text-sm text-gray-500 border-r">
                    {String(index + 1).padStart(2, '০')}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    {field.label}
                  </td>
                  <td className="px-4 py-4 whitespace-normal text-sm text-gray-700 text-left">
                    {formatValue(field.key, value)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
