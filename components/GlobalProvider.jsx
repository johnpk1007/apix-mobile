import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [date, setDate] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        date,
        setDate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
