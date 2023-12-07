import { useColorContext } from "../../../context/ColorContext";
import { CreditBook } from "./credit/CreditBook";
import Member from "./member/Member";

import "./Footer.css";

function Footer() {
  const { color } = useColorContext();
  return (
    <div
      className={`footer-bg-${color} flex justify-start items-center gap-4 py-6`}
    >
      <div
        className="w-[40%] flex flex-col justify-start items-center pb-[7.5rem]
      gap-4"
      >
        <h1 className="mb-6 font-margarine text-white text-4xl border-b-4">
          Web Design
        </h1>
        <Member name="Wee IT" img="/assets/footers/wee_ds.png"></Member>
        <Member name="Fern DSI" img="/assets/footers/fern_ds.png"></Member>
      </div>

      <div className="w-[40%] flex flex-col items-center gap-4">
        <h1 className="mb-6 font-margarine text-white text-4xl border-b-4">
          Front End
        </h1>
        <Member name="Mook IT" img="/assets/footers/mook_fe.png"></Member>
        <Member name="Now CS" img="/assets/footers/now_fe.png"></Member>
        <Member name="Ice IT" img="/assets/footers/ice_fe.png"></Member>
      </div>

      <div className="w-[40%] flex flex-col items-center pb-[5.5rem] ">
        <h1 className="mb-6 font-margarine text-white text-4xl border-b-4">
          Devops
        </h1>
        <Member name="Nine IT" img="/assets/footers/nine_devop.png"></Member>

        <div className="mt-[3rem] flex flex-col gap-4 items-center">
          <span className="font-margarine text-white text-3xl border-b-4">
            CREDIT
          </span>
          <div className="flex flex-wrap w-[80%] justify-between">
            <CreditBook book={"Calculus Book"} />
            <CreditBook book={"React Book"} />
            <CreditBook book={"Hermes allback"} />
            <CreditBook book={"Stripped T-shirt"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
