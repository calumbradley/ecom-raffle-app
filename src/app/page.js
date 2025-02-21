"use client";

import StoreHeading from "@components/StoreHeading";
import ProductListings from "@components/ProductListings";
import { useContext } from "react";
import { StoreContext } from "@context/StoreContext";

export default function Home() {
  const { storeData } = useContext(StoreContext);

  return (
    <div className="">
      <main className="">
        <div className="mx-auto max-w-6xl">
          <StoreHeading />
          <ProductListings store={storeData} />
        </div>
      </main>
    </div>
  );
}
