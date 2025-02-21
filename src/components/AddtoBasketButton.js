import React, { useEffect } from "react";
import { fetchProductData } from "@utils/fetchProductData";

const AddtoBasketButton = ({ product, setProducts }) => {
  const handleAddToBasket = () => {
    console.log(`User clicked the add to basket button...`);
    fetchProductData()
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  };

  useEffect(() => {
    console.log(
      `only ${product.totalTickets - product.soldTickets} tickets left...`
    );
  }, [product]);

  return (
    <div>
      {/* Add to Basket Button */}
      <button
        onClick={handleAddToBasket}
        className="bg-palette-primary text-white hover:bg-opacity-90 transition-colors border border-palette-primary text-lg font-semibold pt-2 pb-1 leading-relaxed flex justify-center items-center focus:ring-2 focus:ring-offset-2 focus:ring-palette-primary focus:outline-none w-full rounded-sm font-primary"
      >
        Add To Basket
      </button>
    </div>
  );
};

export default AddtoBasketButton;
