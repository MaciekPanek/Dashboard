import { Children, createContext, useContext, useState } from "react";

const VillaDetailsContext = createContext(null);

function VillaDetailsProvider({ children }) {
  const [villaDetails, setVillaDetails] = useState({});

  return (
    <VillaDetailsContext.Provider value={{ villaDetails, setVillaDetails }}>
      {children}
    </VillaDetailsContext.Provider>
  );
}

function useVillaDetails() {
  const context = useContext(VillaDetailsContext);
  if (context === undefined)
    throw new Error(
      "VIllaDetailsContext was used outside of VillaDetailsProvider"
    );
  return context;
}

export { VillaDetailsProvider, useVillaDetails };
