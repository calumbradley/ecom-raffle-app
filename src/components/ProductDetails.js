import { useState, useEffect } from "react";
import BackToProductButton from "@/components/BackToProductButton";
import ProductInfo from "@/components/ProductInfo";
// import ProductForm from "@/components/ProductForm";

const ProductDetails = ({ productData }) => {
  const [variantPrice, setVariantPrice] = useState(null);

  useEffect(() => {
    if (productData && productData.variants && productData.variants.edges) {
      setVariantPrice(productData.variants.edges[0].node.price);
    }
  }, [productData]);

  if (!productData || !productData.variants || !productData.variants.edges) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProductInfo
        title={productData.title}
        description={productData.description}
        price={variantPrice}
      />
      {/* <ProductForm
        title={productData.title}
        handle={productData.handle}
        variants={productData.variants.edges}
        mainImg={productData.images.edges[0].node}
        setVariantPrice={setVariantPrice}
      /> */}
    </div>
  );
};

export default ProductDetails;
