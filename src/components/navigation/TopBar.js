'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { GET_INFORMATION_CENTERS } from '@/app/graphql/informationCenters';
import { useEffect, useState } from 'react';

export default function TopBar() {
  const { data, loading, error } = useQuery(GET_INFORMATION_CENTERS);
  const [email, setEmail] = useState('info@squarekindergarten.edu.bd');
  const [phone, setPhone] = useState('+৮৮ ০১৯১২-৩৪৫৬৭৮');
  const [address, setAddress] = useState('ঝোপগাড়ি, বগুড়া - ৫৮০০');
  const [hours, setHours] = useState('রবি - বৃহস্পতি: সকাল ৯টা - বিকাল ৫টা');

  useEffect(() => {
    if (data?.informationCenters?.edges?.[0]?.node?.informationCenterFields) {
      const info = data.informationCenters.edges[0].node.informationCenterFields;
      if (info.email) setEmail(info.email);
      if (info.phone) setPhone(info.phone);
      if (info.address) setAddress(info.address.split('\n')[0]); // Take first line of address
      if (info.operatingHours) setHours(info.operatingHours);
    }
  }, [data]);

  if (loading) {
    return (
      <div className="bg-gray-900 text-white text-sm py-2 px-4 border-b border-gray-800 h-10 flex items-center relative z-30">
        <div className="max-w-7xl w-full mx-auto">
          <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gray-900 text-white text-sm py-2 px-4 border-b border-gray-800 h-10 flex items-center relative z-30">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Hours and Address - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center text-white">
            <FaClock className="mr-2 text-emerald-400" />
            <span className="font-siyam-rupali font-medium">{hours}</span>
          </div>
          <span className="text-gray-500">|</span>
          <div className="flex items-center text-white">
            <FaMapMarkerAlt className="mr-2 text-emerald-400" />
            <span className="font-siyam-rupali font-medium">{address}</span>
          </div>
        </div>
        
        {/* Right side - Contact */}
        <div className="flex items-center space-x-4">
          <a 
            href="mailto:info@squarekindergarten.edu.bd" 
            className="flex items-center hover:text-emerald-300 transition-colors duration-200 group"
          >
            <FaEnvelope className="mr-2 text-emerald-400 group-hover:text-emerald-300" />
            <span className="font-siyam-rupali font-medium text-white">{email}</span>
          </a>
          <span className="hidden md:inline text-gray-500">|</span>
          <a 
            href="tel:+8801912345678" 
            className="flex items-center hover:text-emerald-300 transition-colors duration-200 group"
          >
            <FaPhone className="mr-2 text-emerald-400 group-hover:text-emergent-300" />
            <span className="font-siyam-rupali font-medium text-white">{phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
