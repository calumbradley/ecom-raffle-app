"use client";

import { useParams } from "next/navigation";

export default function ProductPage() {
  const { product } = useParams();

  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <h1>Product: {product}</h1>
      <p>This is a test page for product: {product}</p>
    </div>
  );
}
