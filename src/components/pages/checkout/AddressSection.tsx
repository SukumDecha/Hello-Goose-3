export const AddressSection = () => {
  return (
    <div>
      <div className="flex justify-between text-2xl  ">
        <div className="w-4/12 ml-4 text-white font-margarine">
          <div className="font-margarine">
            <h1 className="text-2xl"> SHIPPING ADDRESS</h1>
            <h2 className="text-base font-margarine">
              89/31 ประชาอุทิศ 45 แขวงบางมดเขตทุ่งครุ
            </h2>
          </div>
        </div>

        <div className="w-8/12 flex">
          <div>
            <span className="text-[rgba(255,255,255,0.70)] flex  opacity-60 justify-between ml-[100px] font-margarine">
              SUBTOTAL
            </span>
            <span className="text-[rgba(255,255,255,0.70)] flex opacity-60 justify-between ml-[100px] font-margarine my-3 ">
              {" "}
              SHIPPING{" "}
            </span>
          </div>

          <div className="ml-[150px]">
            <span className="text-white flex  justify-between ml-[100px] font-margarine">
              31320 B
            </span>
            <span className="text-white flex  justify-between ml-[120px] font-margarine my-3 ">
              Free
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-2xl mb-2 mt-3 ">
        <div className="w-4/12 ml-4 text-white font-margarine">
          <div className="font-margarine">
            <h1 className="text-2xl"> BILLING ADDRESS</h1>
            <h2 className="text-base font-margarine">
              89/31 ประชาอุทิศ 45 แขวงบางมดเขตทุ่งครุ
            </h2>
          </div>
        </div>

        <div className="w-8/12 flex">
          <div>
            <span className="text-[rgba(255,255,255,0.70)]   flex  opacity-60 justify-between ml-[100px] font-margarine">
              SUBTOTAL
            </span>
          </div>
          <span className="text-white font-margarine ml-[240px]">31,320 B</span>
        </div>
      </div>

      <hr className="bg-white mx-3 " />
    </div>
  );
};
