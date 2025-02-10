"use client";

import StoreHeading from "@/components/StoreHeading";
import ProductListings from "@/components/ProductListings";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="">
      <main className="">
        <div className="mx-auto max-w-6xl">
          <StoreHeading />
          <ProductListings products={products} />
        </div>
      </main>
    </div>
  );
}
