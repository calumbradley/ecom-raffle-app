import Price from "@components/Price";

function ProductInfo({ title, description, price }) {
  return (
    <div>
      <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4 font-primary">
        {title}
      </h1>
      <p className="font-medium text-lg font-primary">{description}</p>
      <div className="text-xl text-palette-primary font-medium py-4 px-1 ">
        <Price
          currency={process.env.NEXT_PUBLIC_CURRENCY}
          num={price}
          numSize="text-2xl"
        />
      </div>
    </div>
  );
}

export default ProductInfo;
