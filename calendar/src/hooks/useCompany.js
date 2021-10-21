import { useState } from 'react';

export const useCompany = () => {
  const [selectedCompany, setCompany] = useState('');

  const setSelectedCompany = (target) => {
    setCompany(target);
  };

  return {
    selectedCompany,
    setSelectedCompany,
  };
};
