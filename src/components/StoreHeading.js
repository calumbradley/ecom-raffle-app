import PageTitle from "@/components/PageTitle";

function StoreHeading() {
  return (
    <div className="">
      <PageTitle text={process.env.NEXT_PUBLIC_PAGE_TITLE} />
      <p className="max-w-xl text-center px-2 mx-auto text-base text-gray-600">
        Swing into action and take a shot at winning amazing golf gear! 🏌️‍♂️
      </p>
    </div>
  );
}

export default StoreHeading;
