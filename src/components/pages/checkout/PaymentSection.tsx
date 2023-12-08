export const PaymentSection = () => {
  return (
    <div>
      <div className=" items-center flex mx-3 mt-3">
        <div className="text-white text-lg font-margarine ">
          {" "}
          PAYMENT <br /> WITH{" "}
        </div>
        <div className="flex flex-row gap-4 items-center ml-8">
          <input
            id="c1"
            type="checkbox"
            className={`appearance-none rounded-full h-4 w-4 cursor-pointer border-2 checked:bg-white`}
          />
          <span className="text-[rga(255,255,255,0.70)  text-white font-[24px] font-margarine">
            {" "}
            PAYPAL
          </span>
        </div>

        <div className="flex flex-row gap-4 items-center ml-8">
          <input
            id="c1"
            type="checkbox"
            className={`appearance-none rounded-full h-4 w-4 cursor-pointer border-2 checked:bg-white`}
          />
          <span className="text-[rga(255,255,255,0.70)  text-white font-[24px] font-margarine">
            {" "}
            CREDIT CARD
          </span>
        </div>

        <div className="flex flex-row gap-4 items-center ml-8">
          <input
            id="c1"
            type="checkbox"
            className={`appearance-none rounded-full h-4 w-4 cursor-pointer border-2 checked:bg-white`}
          />
          <span className="text-[rga(255,255,255,0.70)  text-white font-[24px] font-margarine ">
            {" "}
            Cash on delivery{" "}
          </span>
        </div>

        <button className="btn ml-[190px] h-[50px] w-[100px] text-[#fff]   border  border-[#FFF] font-margarine bg-[#0547A6] rounded-3xl">
          {" "}
          Pay{" "}
        </button>
      </div>
    </div>
  );
};
