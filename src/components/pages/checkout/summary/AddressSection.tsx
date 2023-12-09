type props = {
  totalPrice: number;
};

export const AddressSection = (prop: props) => {
  return (
    <div>
      <div className="flex justify-between text-2xl mb-2 mt-3 ">
        <div className="w-4/12 ml-4 text-white font-margarine">
          <div className="font-margarine">
            <h1 className="text-2xl"> SHIPPING ADDRESS</h1>
            <h2 className="text-base font-margarine mt-4">
              89/31 ประชาอุทิศ 45 แขวงบางมดเขตทุ่งครุ
            </h2>
          </div>
        </div>

        <div className="w-8/12 flex">
          <div>
            <span className="text-[rgba(255,255,255,0.70)]   flex  opacity-60 justify-between ml-[100px] font-margarine m-4">
              SUBTOTAL
            </span>
            <span className="text-[rgba(255,255,255,0.70)]   flex  opacity-60 justify-between ml-[100px] font-margarine m-4">
              SHIPPING
            </span>
          </div>
          <div className="flex flex-col ml-auto mr-8">
            <span className="text-white font-margarine mt-4">
              {prop.totalPrice}
            </span>
            <span className="text-white font-margarine mt-4">
              free
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-2xl mb-2 ">
        <div className="w-4/12 ml-4 text-white font-margarine">
          <div className="font-margarine">
            <h1 className="text-2xl"> BILLING ADDRESS</h1>
            <h2 className="text-base font-margarine mt-4">
              89/31 ประชาอุทิศ 45 แขวงบางมดเขตทุ่งครุ
            </h2>
          </div>
        </div>

        <div className="w-8/12 flex">
          <div>
            <span className="text-[rgba(255,255,255,0.70)] flex justify-between ml-[100px] font-margarine">
              TOTAL
            </span>
          </div>
          <span className="text-white font-margarine ml-auto mr-8">
            {prop.totalPrice}
          </span>
        </div>
      </div>

      <hr className="bg-white mx-3 my-7" />
    </div>
  );
};
