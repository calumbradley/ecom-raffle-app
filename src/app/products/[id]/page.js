"use client";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/context/ProductContext";
import ProductSection from "@/components/ProductSection";

export default function ProductPage() {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);
  const { productData } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productData) {
      const foundProduct = productData.find((i) => i.node.id === decodedId);
      if (foundProduct) {
        setProduct(foundProduct.node);
      }
    }
  }, [decodedId, productData]);

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
      <ProductSection productData={product} />
    </div>
  );
}
