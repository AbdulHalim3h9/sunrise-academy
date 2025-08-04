'use client';

export default function Page() {
  const branches = [
    { id: 1, class: 'ষষ্ঠ শ্রেণি', branch: 'বালক', date: '' },
    { id: 2, class: 'ষষ্ঠ শ্রেণি', branch: 'বালিকা', date: '' },
    { id: 3, class: 'সপ্তম শ্রেণি', branch: 'বালক', date: '' },
    { id: 4, class: 'সপ্তম শ্রেণি', branch: 'বালিকা', date: '' },
    { id: 5, class: 'অষ্টম শ্রেণি', branch: 'বালক', date: '' },
    { id: 6, class: 'অষ্টম শ্রেণি', branch: 'বালিকা', date: '' },
    { id: 7, class: 'নবম শ্রেণি', branch: 'বালক', date: '' },
    { id: 8, class: 'নবম শ্রেণি', branch: 'বালিকা', date: '' },
    { id: 9, class: 'দশম শ্রেণি', branch: 'বালক', date: '' },
    { id: 10, class: 'দশম শ্রেণি', branch: 'বালিকা', date: '' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          শ্রেণিভিত্তিক অনুমোদিত শাখা
        </h1>
        
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">ক্র. নং</th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">শ্রেণি</th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">শাখা</th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">তারিখ</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {branches.map((branch, index) => (
                  <tr key={branch.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{branch.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{branch.class}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{branch.branch}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{branch.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-600">
          <p className="text-center">
            * উপরের তালিকাটি সর্বশেষ হালনাগাদ করা হয়েছে: {new Date().toLocaleDateString('bn-BD')}
          </p>
        </div>
      </div>
    </div>
  );
}
