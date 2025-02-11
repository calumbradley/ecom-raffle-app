"use client";

import StoreHeading from "@/components/StoreHeading";
import ProductListings from "@/components/ProductListings";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";

export default function Home() {
  const { productData } = useContext(ProductContext);

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
