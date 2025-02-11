"use client";

import StoreHeading from "@/components/StoreHeading";
import ProductListings from "@/components/ProductListings";
import { useEffect, useState, useContext } from "react";
import { ProductContext } from "@/context/ProductContext";

export default function Home() {
  const { productData, setProductData } = useContext(ProductContext);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [setProductData]);

  return (
    <div className="">
      <main className="">
        <div className="mx-auto max-w-6xl">
          <StoreHeading />
          <ProductListings products={productData} />
        </div>
      </main>
    </div>
  );
}
