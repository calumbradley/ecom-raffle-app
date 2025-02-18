"use client";

import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/store")
      .then((response) => response.json())
      .then((data) => {
        setStoreData(data.store);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <StoreContext.Provider value={{ storeData, setStoreData }}>
      {children}
    </StoreContext.Provider>
  );
};
