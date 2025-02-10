"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const { handle } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  if (loading) {
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
