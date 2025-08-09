'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EK_NJORE_TOTHYOS } from '@/app/graphql/ekNjoreTothyos';

const SchoolInfoContext = createContext();

export const SchoolInfoProvider = ({ children }) => {
  const { data, loading, error } = useQuery(GET_EK_NJORE_TOTHYOS);
  const [schoolInfo, setSchoolInfo] = useState(null);

  useEffect(() => {
    if (data?.ekNjoreTothyos?.edges[0]?.node?.ekNjoreTothyoFields) {
      setSchoolInfo(data.ekNjoreTothyos.edges[0].node.ekNjoreTothyoFields);
    }
  }, [data]);

  return (
    <SchoolInfoContext.Provider value={{ schoolInfo, loading, error }}>
      {children}
    </SchoolInfoContext.Provider>
  );
};

export const useSchoolInfo = () => {
  const context = useContext(SchoolInfoContext);
  if (context === undefined) {
    throw new Error('useSchoolInfo must be used within a SchoolInfoProvider');
  }
  return context;
};
