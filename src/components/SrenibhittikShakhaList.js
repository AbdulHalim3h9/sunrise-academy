'use client';

import { useQuery } from '@apollo/client';
import { GET_SRENIBHITTIKSHAKHAS } from '@/app/graphql/srenibhittikShakhas';

export default function SrenibhittikShakhaList() {
  const { data, loading, error } = useQuery(GET_SRENIBHITTIKSHAKHAS);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 animate-pulse">
            <div className="h-5 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-100 rounded w-1/2"></div>
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
              ত্রুটি: শ্রেণিভিত্তিক অনুমোদিত শাখার তালিকা লোড করতে সমস্যা হয়েছে। দয়া করে পরে আবার চেষ্টা করুন।
            </p>
          </div>
        </div>
      </div>
    );
  }

  const shakhas = data?.srenibhittikShakhas?.edges || [];

  if (shakhas.length === 0) {
    return (
      <div className="text-center py-8">
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
        <p className="mt-1 text-sm text-gray-500">বর্তমানে কোনো শ্রেণিভিত্তিক অনুমোদিত শাখার তথ্য পাওয়া যায়নি।</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3 text-right text-sm font-semibold text-gray-700 uppercase tracking-wider">
              শ্রেণি
            </th>
            <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
              শাখা
            </th>
            <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
              তারিখ
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {shakhas.map(({ node }, index) => {
            const { class: className, section, date } = node.srenibhittikShakhaFields || {};
            return (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                  {className || 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                  {section || 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                  {date ? new Date(date).toLocaleDateString('bn-BD') : 'N/A'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
