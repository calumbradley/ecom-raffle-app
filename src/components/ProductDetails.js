import BackToProductButton from "@components/BackToProductButton";
import ProductInfo from "@components/ProductInfo";
import TicketSlider from "@components/TicketSlider";
import ProgressBar from "@components/ProgressBar";
import QuestionAnswer from "@components/QuestionAnswer";
import AddtoBasketButton from "@components/AddtoBasketButton";

const ProductDetails = ({ product, setProducts }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProgressBar
        totalTickets={product.totalTickets}
        soldTickets={product.soldTickets}
      />
      <QuestionAnswer
        question={"Which of these is a golf brand?"}
        answers={["Titleist", "Spessavers", "Audi"]}
        companyAddress={"123 Fake Street, Faketown, FA1 2KE, United Kingdom"}
        currency={"£"}
        pricePerEntry={product.price}
      />
      <TicketSlider totalTickets={product.totalTickets} />
      <AddtoBasketButton product={product} setProducts={setProducts} />
    </div>
  );
};

export default ProductDetails;
