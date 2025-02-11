"use client";

import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <ProductContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductContext.Provider>
  );
};
