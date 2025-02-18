"use client";

import StoreHeading from "@/components/StoreHeading";
import ProductListings from "@/components/ProductListings";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import { StoreContext } from "@/context/StoreContext";

export default function Home() {
  const { productData } = useContext(ProductContext);
  const { storeData } = useContext(StoreContext);

  return (
    <div className="">
      <main className="">
        <div className="mx-auto max-w-6xl">
          <StoreHeading />
          <ProductListings products={productData} store={storeData} />
        </div>
      </main>
    </div>
  );
}
