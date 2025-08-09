'use client';

import { useQuery } from '@apollo/client';
import { GET_PERMISSIONS } from '@/app/graphql/permissions';

export default function PermissionsList() {
  const { data, loading, error } = useQuery(GET_PERMISSIONS);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 animate-pulse">
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
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
              ত্রুটি: অনুমতির তালিকা লোড করতে সমস্যা হয়েছে। দয়া করে পরে আবার চেষ্টা করুন।
            </p>
          </div>
        </div>
      </div>
    );
  }

  const permissions = data?.permissions?.edges || [];
  
  // Ensure each node has permissionDescriptions as an array
  const normalizedPermissions = permissions.map(({ node }) => ({
    ...node,
    permissionDescriptions: Array.isArray(node.permissionDescriptions) 
      ? node.permissionDescriptions 
      : [node.permissionDescriptions || {}].filter(Boolean)
  }));

  if (normalizedPermissions.length === 0) {
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
        <h3 className="mt-2 text-sm font-medium text-gray-900">কোনো অনুমতি পাওয়া যায়নি</h3>
        <p className="mt-1 text-sm text-gray-500">বর্তমানে কোনো অনুমতি প্রকাশ করা হয়নি।</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
              ক্রমিক নং
            </th>
            <th scope="col" className="px-6 py-3 text-right text-sm font-semibold text-gray-700 uppercase tracking-wider">
              শিরোনাম
            </th>
            <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
              তারিখ
            </th>
            <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
              ডাউনলোড
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {normalizedPermissions.map((node, index) => {
            const latestDesc = node.permissionDescriptions[0]; // Get the latest description
            return (
              <tr key={node.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 text-sm text-right text-gray-900">
                  {node.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                  {latestDesc?.date ? new Date(latestDesc.date).toLocaleDateString('bn-BD') : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  {latestDesc?.fileUpload?.node?.link ? (
                    <a
                      href={latestDesc.fileUpload.node.link}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      <svg className="-ml-0.5 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      ডাউনলোড
                    </a>
                  ) : (
                    <span className="text-gray-500">N/A</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
