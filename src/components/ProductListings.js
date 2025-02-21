import React from "react";
import ProductCard from "@components/ProductCard";
import { useEffect, useState } from "react";
import { fetchProductData } from "@utils/fetchProductData";

const ProductListings = ({ store = [] }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchProductData()
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  if (!products) {
    return "loading...";
  }

  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} store={store} />
      ))}
    </div>
  );
};

export default ProductListings;
