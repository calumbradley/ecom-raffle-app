import React from "react";

const AddtoBasketButton = () => {
  const handleAddToBasket = () => {
    console.log(`Added ${tickets} tickets to the basket`);
    // Add your logic for adding tickets to the basket here
  };
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
