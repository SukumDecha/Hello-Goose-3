export const SummarySection = () => {
  return (
    <div className="flex flex-col items-center relative my-[100px]">
      <div
        className="flex justify-center w-[190px] h-[190px]"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <img src="../public/assets/Access/check.png" alt="Your Image" />
      </div>
      <div className="flex items-center content-center  ">
        <p>
          <h1 className="flex justify-center items-center text-white font-margarine text-center py-4 text-[30px] font-normal">
            Thankyou for Ordering{" "}
          </h1>

          <h2 className="flex justify-center text-[rgba(255,255,255,0.70)] font-margarine text-center">
            {" "}
            your order will be emailed out within three <br />
            working days Expect your items to arrive within <br />
            7-10 days or 2 weeks{" "}
          </h2>
        </p>
      </div>
      <button
        type="submit"
        className="btn items-center h-[50px] w-[250px] text-[#fff]  mt-5 border  border-[#FFF] font-margarine bg-[#0547A6] rounded-sm"
      >
        <h1 className="text-[#fff] opacity-[]"> Continue to shopping </h1>
      </button>
    </div>
  );
};

export default SummarySection;
