'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { GET_TEACHER_STAFF } from '../graphql/queries';

export default function TeacherStaffs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [staffMembers, setStaffMembers] = useState([]);

  // Fetch teacher staff data using Apollo Client
  const { data, loading: queryLoading, error: queryError } = useQuery(GET_TEACHER_STAFF, {
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      if (data?.teacherStaffs?.nodes) {
        // Transform the data to match our component's expected format
        const transformedData = data.teacherStaffs.nodes.map(staff => ({
          id: staff.id,
          name: staff.title,
          position: staff.teacherStaffInfo?.position || 'শিক্ষক',
          image: staff.teacherStaffInfo?.profileImage?.node?.sourceUrl || '/images/placeholder-teacher.jpg',
          altText: staff.teacherStaffInfo?.profileImage?.node?.altText || staff.title,
          phone: staff.teacherStaffInfo?.phone || null,
        }));
        
        // Sort by name
        transformedData.sort((a, b) => a.name.localeCompare(b.name));
        
        setStaffMembers(transformedData);
      }
      setLoading(false);
    },
    onError: (error) => {
      console.error('Error fetching teacher staff:', error);
      setError(error.message);
      setLoading(false);
    }
  });

  // Filter staff based on search term
  const filteredStaff = staffMembers.filter(staff =>
    staff.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.department?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-emerald-50 pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-emerald-200 rounded w-1/3 mx-auto"></div>
            <div className="h-1 bg-emerald-200 w-24 mx-auto"></div>
            <div className="h-4 bg-emerald-200 rounded w-1/2 mx-auto"></div>
            <div className="h-12 bg-emerald-200 rounded-full w-1/2 mx-auto mt-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-64 bg-emerald-100 animate-pulse"></div>
                  <div className="p-6 space-y-2">
                    <div className="h-6 bg-emerald-100 rounded w-3/4 mx-auto"></div>
                    <div className="h-4 bg-emerald-100 rounded w-1/2 mx-auto"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-emerald-50 pt-24 pb-12 px-4">
        <div className="max-w-2xl mx-auto text-center bg-red-50 p-8 rounded-lg border border-red-200">
          <div className="text-red-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-red-700 mb-2">তথ্য লোড করতে সমস্যা হয়েছে</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          >
            আবার চেষ্টা করুন
          </button>
        </div>
      </div>
    );
  }

  // Main content
  return (
    <div className="min-h-screen bg-emerald-50 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">আমাদের শিক্ষক ও কর্মচারী</h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-emerald-700 max-w-3xl mx-auto">
            আমাদের অভিজ্ঞ ও দক্ষ শিক্ষকমন্ডলী যারা শিক্ষার্থীদের সঠিকভাবে গড়ে তুলতে নিরলসভাবে কাজ করে যাচ্ছেন।
          </p>
        </div>

        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="শিক্ষক/কর্মচারী খুঁজুন..."
              className="w-full px-6 py-3 rounded-full border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-emerald-900 placeholder-emerald-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {filteredStaff.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStaff.map((staff) => (
              <div key={staff.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-72 w-full">
                  <Image
                    src={staff.image}
                    alt={staff.altText || staff.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => e.target.src = '/images/placeholder-teacher.jpg'}
                  />
                  {staff.isFeatured && (
                    <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                      প্রধান
                    </div>
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-emerald-900 mb-1">{staff.name}</h3>
                  <p className="text-emerald-700 font-medium">{staff.position}</p>
                  {staff.phone && (
                    <div className="mt-2">
                      <a 
                        href={`tel:${staff.phone}`}
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-800 text-sm"
                        title="কল করুন"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {staff.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <div className="text-emerald-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">কোন শিক্ষক/কর্মচারী পাওয়া যায়নি</h3>
            <p className="text-gray-600 mb-4">আপনার অনুসন্ধানের সাথে মিল রেখে কোন ফলাফল পাওয়া যায়নি</p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
            >
              সব দেখুন
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
