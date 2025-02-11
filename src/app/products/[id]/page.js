"use client";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/context/ProductContext";

export default function ProductPage() {
  const { id } = useParams();
  const { productData } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productData) {
      console.log(productData);
      console.log(id);
    }
  }, [id, productData]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <h1>Product: {product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.imageSrc} alt={product.imageAlt} />
    </div>
  );
}
