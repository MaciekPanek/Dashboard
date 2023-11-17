// VillaContext.js

import { createContext, useContext, useState } from 'react';

const VillaContext = createContext();

export const VillaProvider = ({ children }) => {
  const [villas, setVillas] = useState([]);

  const setVillasData = (data) => {
    setVillas(data);
  };

  return <VillaContext.Provider value={{ villas, setVillasData }}>{children}</VillaContext.Provider>;
};

export const useVillaContext = () => {
  const context = useContext(VillaContext);
  if (context === undefined) throw new Error('VillaDetailsContext was used outside of VillaDetailsProvider');
  return context;
};
