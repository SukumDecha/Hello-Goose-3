import ProductItem from "./product/ProductItem";

export const ProductSection = () => {
  return (
    <div>
      <div className="flex justify-between text-2xl mb-5  font-margarine text-white">
        <div className="w-4/12 ml-4  ">PRODUCT</div>
        <div className="w-7/12 flex justify-between">
          <span className="">QTY</span>
          <span>PRICE</span>
          <span className="mr-9">TOTAL</span>
        </div>
      </div>

      <ProductItem title="hey" major="SIT" quantity={5} price={100} />
      <ProductItem title="hey" major="SIT" quantity={5} price={100} />
      <ProductItem title="hey" major="SIT" quantity={5} price={100} />

      <hr className="bg-white mx-3 my-7" />
    </div>
  );
};

export default ProductSection;
