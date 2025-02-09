import StoreHeading from "@components/StoreHeading";
import ProductListings from "@components/ProductListings";

export default function Home() {
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
