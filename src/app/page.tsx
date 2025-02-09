import StoreHeading from "@components/StoreHeading";
import ProductListings from "@components/ProductListings";
import data from "./products.json";

export default function Home() {
  const products = data.products;

  return (
    <div className="">
      <main className="">
        <div className="mx-auto max-w-6xl">
          <StoreHeading />
          <ProductListings products={products} />
        </div>
      </main>
    </div>
  );
}
