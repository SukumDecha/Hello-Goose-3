import ProductItem from "./product/ProductItem";

export const ProductSection = () => {
  return (
    <div>
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
        {/* <div className="flex justify-between text-2xl mb-2  ">
          <div className="w-4/12 ml-4 text-white text-lg">
            <div className="font-margarine">
              <h1> Hermes Allblack Backpack </h1>
              <h2 className="opacity-60"> color : bone </h2>
            </div>
          </div>
          <div className="w-8/12 flex justify-between">
            <span className="text-[rgba(255,255,255,0.70)] flex  opacity-60 justify-between ml-[70px] font-margarine">
              1
            </span>
            <span className="text-[rgba(255,255,255,0.70)] flex opacity-60 ml-[70px] font-margarine ">
              31,200 B
            </span>
            <span className="text-[rgba(255,255,255,0.70)] flex opacity-60 mx-5 font-margarine">
              31,200 B
            </span>
          </div>
        </div>

        <div className="flex justify-between text-2xl mb-2 ">
          <div className="w-4/12 ml-4 text-white text-lg">
            <div className="font-margarine">
              <h1> 705 seven T-shirt </h1>
              <h2 className="opacity-60"> color : black </h2>
            </div>
          </div>
          <div className="w-8/12 flex justify-between">
            <span className="text-[rgba(255,255,255,0.70)] flex  opacity-60 justify-between ml-[70px] font-margarine">
              1
            </span>
            <span className="text-[rgba(255,255,255,0.70)]  flex opacity-60 ml-[70px] font-margarine ">
              120 B
            </span>
            <span className="text-[rgba(255,255,255,0.70)] flex opacity-60 mx-5  font-margarine ">
              31,320 B
            </span>
          </div>
        </div> */}
        <hr className="bg-white mx-3 my-7" />
      </div>
    </div>
  );
};

export default ProductSection;
