'use client';

import React from 'react';

const SchoolLogo = () => {
  return (
    <div className="w-12 h-12 rounded-full bg-white p-1 shadow-sm flex items-center justify-center overflow-hidden">
      <img 
        src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082016/untitled-2_16.jpg?itok=B_76GWVG" 
        alt="Square Kindergarten School Logo" 
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300596e"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 11.01L4.14 10 12 5.99 19.86 10 12 14.01z"/></svg>';
        }}
      />
    </div>
  );
};

export default SchoolLogo;
