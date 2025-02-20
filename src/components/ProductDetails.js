import { useState, useContext } from "react";
import BackToProductButton from "@/components/BackToProductButton";
import ProductInfo from "@/components/ProductInfo";
import TicketSlider from "@/components/TicketSlider";
import ProgressBar from "@/components/ProgressBar";
import QuestionAnswer from "@/components/QuestionAnswer";
import { StoreContext } from "@/context/StoreContext";
import AddtoBasketButton from "@/components/AddtoBasketButton";

const ProductDetails = ({ productData }) => {
  const [price, setPrice] = useState(null);
  const { storeData } = useContext(StoreContext);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProgressBar soldTickets={11} totalTickets={100} />
      <QuestionAnswer
        question={"Which of these is a golf brand?"}
        answers={["Titleist", "Spessavers", "Audi"]}
        companyAddress={"123 Fake Street, Faketown, FA1 2KE, United Kingdom"}
        currency={"£"}
        pricePerEntry={productData.price}
      />
      <TicketSlider totalTickets={100} />
      <AddtoBasketButton />
      {/* <ProductInfo
        title={productData.title}
        description={productData.description}
        price={variantPrice}
      /> */}
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
