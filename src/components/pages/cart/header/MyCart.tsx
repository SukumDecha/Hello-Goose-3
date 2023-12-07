import ContinueShopping from "./ContinueShopping";
const MyCart = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex-col font-margarine text-white w-[70%]">
        <div className="flex justify-between items-center mb-12">
          <span className="text-5xl">MY CART</span>
          <ContinueShopping></ContinueShopping>
        </div>
        <div className="flex justify-between text-2xl mb-8">
          <div className="w-5/12">PRODUCT</div>
          <div className="w-7/12 flex justify-between">
            <span>PRICE</span>
            <span>QTY</span>
            <span>TOTAL</span>
          </div>
        </div>
        <hr className="bg-white" />
      </div>
    </div>
  );
};

export default MyCart;
