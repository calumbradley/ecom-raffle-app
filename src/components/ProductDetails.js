import { useState, useEffect } from "react";
import BackToProductButton from "@/components/BackToProductButton";
import ProductInfo from "@/components/ProductInfo";
import TicketSlider from "@/components/TicketSlider";
import ProgressBar from "@/components/ProgressBar";
import QuestionAnswer from "@/components/QuestionAnswer";

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

  const mockApiData = {
    totalTickets: 100,
    soldTickets: 11,
    question: "Which of these is a golf brand?",
    answers: ["Titleist", "Spessavers", "Audi"],
    pricePerEntry: 1,
    companyAddress: "123 Fake Street, Faketown, FA1 2KE, United Kingdom",
  };

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProgressBar
        sold={mockApiData.soldTickets}
        total={mockApiData.totalTickets}
      />
      <QuestionAnswer
        question={mockApiData.question}
        answers={mockApiData.answers}
        companyAddress={mockApiData.companyAddress}
      />
      <TicketSlider totalTickets={mockApiData.totalTickets} />
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
