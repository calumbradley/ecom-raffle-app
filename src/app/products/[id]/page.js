"use client";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/context/ProductContext";

export default function ProductPage() {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);
  const { productData } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productData) {
      setProduct(
        productData.find((i) => {
          return i.node.id === decodedId;
        })
      );
    }
  }, [id, productData]);

  useEffect(() => {
    if (product) {
      console.log(product);
    }
  }, [product]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <h1>Product: {product.node.title}</h1>
      <p>{product.node.description}</p>
      <p>Price: ${product.node.price}</p>
      <img src={product.node.imageSrc} alt={product.node.imageAlt} />
    </div>
  );
}
