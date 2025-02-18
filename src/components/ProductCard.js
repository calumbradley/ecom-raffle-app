import React from "react";
import Image from "next/image";
import Link from "next/link";
import Price from "@/components/Price";
import truncateText from "@/utils/truncateText";

const ProductCard = ({ product, store }) => {
  if (!product || !product.node || !store || !store[0] || !store[0].node) {
    return null; // or some fallback UI
  }

  const imageNode = product.node.images.edges[0]?.node;
  const currency = store[0].node.currency;

  return (
    <Link href={`/products/${product.node.id}`} passHref>
      <div className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
        <div className="h-72 border-b-2 border-palette-lighter relative">
          {imageNode && (
            <Image
              src={imageNode.originalSrc}
              alt={imageNode.altText}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="transform duration-500 ease-in-out hover:scale-110"
              priority
            />
          )}
        </div>
        <div className="h-48 relative">
          <div className="text-palette-primary text-2xl pt-4 px-4 font-semibold font-primary">
            {truncateText(product.node.title, 40)}
          </div>
          <div className="text-lg text-gray-600 p-4 font-light font-primary">
            {truncateText(product.node.description, 40)}
          </div>
          <div
            className="text-palette-dark font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm triangle font-primary"
          >
            <Price
              currency={currency}
              num={product.node.price}
              numSize="text-lg"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
