'use client';

import { useState, useMemo } from 'react';

export default function SreniBhobikShikkharthi() {
  const [yearFilter, setYearFilter] = useState('2025');
  const [classFilter, setClassFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allStudents = [
    { id: 1, class: 'Class Ten', year: '2025', boy: 74, girl: 29, muslim: 102, hindu: 1, others: 0, total: 103 },
    { id: 2, class: 'Class Nine', year: '2025', boy: 73, girl: 45, muslim: 112, hindu: 6, others: 0, total: 118 },
    { id: 3, class: 'Class Eight', year: '2025', boy: 65, girl: 51, muslim: 106, hindu: 10, others: 0, total: 116 },
    { id: 4, class: 'Class Seven', year: '2025', boy: 93, girl: 44, muslim: 133, hindu: 4, others: 0, total: 137 },
    { id: 5, class: 'Class Six', year: '2025', boy: 97, girl: 54, muslim: 143, hindu: 8, others: 0, total: 151 },
  ];

  const filteredStudents = useMemo(() => {
    return allStudents.filter(student => {
      const matchesYear = student.year === yearFilter;
      const matchesClass = classFilter === 'all' || student.class.toLowerCase().includes(classFilter.toLowerCase());
      const matchesSearch = student.class.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           student.year.includes(searchTerm);
      
      return matchesYear && matchesClass && matchesSearch;
    });
  }, [yearFilter, classFilter, searchTerm]);

  const totals = useMemo(() => {
    return filteredStudents.reduce((acc, curr) => ({
      boy: acc.boy + curr.boy,
      girl: acc.girl + curr.girl,
      muslim: acc.muslim + curr.muslim,
      hindu: acc.hindu + curr.hindu,
      others: acc.others + curr.others,
      total: acc.total + curr.total
    }), { boy: 0, girl: 0, muslim: 0, hindu: 0, others: 0, total: 0 });
  }, [filteredStudents]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          শ্রেণীভিত্তিক শিক্ষার্থী
        </h1>
        
        {/* Filters */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                বছর (Year)
              </label>
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              >
                <option value="2025">২০২৫</option>
                <option value="2024">২০২৪</option>
                <option value="2023">২০২৩</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                শ্রেণী (Class)
              </label>
              <select
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              >
                <option value="all">সকল শ্রেণী</option>
                <option value="six">ষষ্ঠ শ্রেণী</option>
                <option value="seven">সপ্তম শ্রেণী</option>
                <option value="eight">অষ্টম শ্রেণী</option>
                <option value="nine">নবম শ্রেণী</option>
                <option value="ten">দশম শ্রেণী</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                অনুসন্ধান (Search)
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="শ্রেণী বা বছর লিখুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 sm:text-sm text-gray-900"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">ক্রমিক নং</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">শ্রেণী</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">ছাত্র</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">ছাত্রী</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">মোট</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                      কোন তথ্য পাওয়া যায়নি
                    </td>
                  </tr>
                ) : (
                  <>
                    {filteredStudents.map((student, index) => (
                      <tr key={student.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 text-center text-sm text-gray-900">{student.id}</td>
                        <td className="px-4 py-3 text-center text-sm font-medium text-gray-900">{student.class}</td>
                        <td className="px-4 py-3 text-center text-sm text-gray-900">{student.boy}</td>
                        <td className="px-4 py-3 text-center text-sm text-gray-900">{student.girl}</td>
                        <td className="px-4 py-3 text-center text-sm font-medium text-emerald-600">{student.total}</td>
                      </tr>
                    ))}
                    <tr className="bg-gray-100 font-semibold">
                      <td colSpan="2" className="px-4 py-3 text-right text-sm text-gray-900">সর্বমোট:</td>
                      <td className="px-4 py-3 text-center text-sm text-gray-900">{totals.boy}</td>
                      <td className="px-4 py-3 text-center text-sm text-gray-900">{totals.girl}</td>
                      <td className="px-4 py-3 text-center text-sm text-emerald-700">{totals.total}</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
