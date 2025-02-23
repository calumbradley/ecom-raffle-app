"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductImage from "@components/ProductImage";
import ProductDetails from "@components/ProductDetails";
import { fetchProductData } from "@utils/fetchProductData";

function ProductSection() {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductData()
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  // do an api call with id to set product?

  useEffect(() => {
    if (products) {
      const foundProduct = products.find((i) => i.node.id === decodedId);
      if (foundProduct) {
        setProduct(foundProduct.node);
      }
    }
  }, [decodedId, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
      <ProductImage images={product.images.edges} />
      <ProductDetails product={product} setProducts={setProducts} />
    </div>
  );
}

export default ProductSection;
