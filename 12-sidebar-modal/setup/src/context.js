import React, { useState, useContext } from "react";

// GEt back two components, one for provider and another for consumer. We won't use consumer here
const AppContext = React.createContext();

// We'll wrap our whole app in this. This is saying get me the children prop and then return children inside our component
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // We'd want to come up with 4 functions. 2 that open and close sidebar and 2 that open and close modal.
  // This is not toggle functionality. This is because we have 2 separate buttons, one inside the sidebar and then another inside the homr
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // We'd want to have the children here otherwise we won't see any of our components
  // From this component we'd want to export 2 things, 1 is AppContext because useContext will be looking for that, and also AppProdivder
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// This is the custom hook route where we wouldn't want to import the useContext in every component or AppContext. Where we just wanna import the custom hook that already has access to the AppContext. In otherwords this is just another implementation.
// This has to start with "use" by the way
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
