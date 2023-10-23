import { createContext, useContext, useState } from "react";

const VillaDetailsContext = createContext(null);

function VillaDetailsProvider({ children }) {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  function handleOpen() {
    setIsDeleteModalVisible(true);
  }

  function handleClose() {
    setIsDeleteModalVisible(false);
  }

  function handleEditModalToggle() {
    setIsEditModalVisible(!isEditModalVisible);
  }

  return (
    <VillaDetailsContext.Provider
      value={{
        isEditModalVisible,
        isDeleteModalVisible,
        handleClose,
        handleOpen,
        handleEditModalToggle,
      }}
    >
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
