import { useRef } from "react";
import { useColorContext } from "../../../context/ColorContext";
import { useLoginContext } from "../../../context/LoginContext";
import "./Login.css";

type Props = {
  isOpen: boolean;
  setOpen: (b: boolean) => void;
};

const Profile = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { color } = useColorContext();
  const { setLogin } = useLoginContext();

  const isClickOutSide = (e: any) => {
    if (e.target.id === "login-backdrop") {
      props.setOpen(false);
    }
  };

  ref.current?.addEventListener("click", isClickOutSide);

  const handleSignOut = () => {
    setLogin(false);
    props.setOpen(false);
    window.localStorage.removeItem("token");
  };

  return (
    <div
      className={`${
        props.isOpen ? "fixed" : "hidden"
      } h-full w-full backdrop-blur-md z-50 flex justify-center items-center`}
      id="login-backdrop"
      ref={ref}
    >
      <div
        id="login"
        className={`${color}-primary w-[850px] h-[500px] flex justify-center items-center  rounded-3xl text-white shadow-2xl`}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-center font-margarine text-[32px] font-[400] leading-[normal]">
            Profile
          </h1>
          <div className="mt-12">
            <img src="/assets/avatar/avatar.png" width={"100px"}></img>
          </div>
          <div className="font-margarine mt-4">
            <h1 className="text-2xl"> BILLING ADDRESS</h1>
            <h2 className="text-base font-margarine">
              89/31 ประชาอุทิศ 45 แขวงบางมดเขตทุ่งครุ
            </h2>
          </div>
          <button
            onClick={handleSignOut}
            className={`mt-8 bg-white h-[25px] w-[200px] text-center rounded-lg flex items-center justify-center font-margarine text-${color}  border-${color}`}
          >
            SIGN OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
