"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const { product } = useParams();
  const searchParams = useSearchParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const id = searchParams.get("id");
    const name = searchParams.get("name");

    // async function fetchProductData() {
    //   // Replace this URL with your actual API endpoint
    //   const res = await fetch(`/api/products/${id}`);
    //   const data = await res.json();
    //   setProductData(data);
    // }

    // if (id && name) {
    //   fetchProductData();
    // }
  }, [searchParams]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <h1>Product: {productData.title}</h1>
      <p>{productData.description}</p>
      <p>Price: ${productData.price}</p>
      <img src={productData.imageSrc} alt={productData.imageAlt} />
    </div>
  );
}
