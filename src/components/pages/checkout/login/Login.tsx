import { useRef, useState } from "react";
import "./Login.css";
import { useColorContext } from "../../../../context/ColorContext";
import { useLoginContext } from "../../../../context/LoginContext";
import Profile from "./Profile";

type Props = {
  isOpen: boolean;
  setOpen: (b: boolean) => void;
};

const Login = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { color } = useColorContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { login, setLogin } = useLoginContext();

  const handleClick = () => {
    if (username !== "admin" || password !== "123") {
      setErr("*username or password incorrect");
      return;
    }
    window.localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsIm5hbWUiOiIxMjMiLCJpYXQiOjE1MTYyMzkwMjJ9.mmV67y2NhkWSC20FeJGu6RSuTLW3NI78FQxNCUk0mYU"
    );
    setLogin(true);
    props.setOpen(false);
  };
  const isClickOutSide = (e: any) => {
    if (e.target.id === "login-backdrop") {
      props.setOpen(false);
    }
  };

  const borderStyle2 = {
    border: "2px solid #fff",
  };

  const inputStyle = {
    backgroundColor: "transparent",
  };

  ref.current?.addEventListener("click", isClickOutSide);
  if (login) {
    return (
      <div>
        <Profile isOpen={props.isOpen} setOpen={props.setOpen} />
      </div>
    );
  }
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
        <div className="flex justify-center items-center flex-col gap-4">
          <h1 className="text-center py-1 font-margarine   text-[32px] font-[400] leading-[normal] mb-6">
            SIGN IN
          </h1>
          <h2 className="text-center  pb-2 font-margarine      text-[19.09px] font-[400]  leading-[normal] ">
            Password details are case sensitive
          </h2>

          <div className="flex ">
            <div
              className={`p-2 ${color}-secondary flex items-left justify-left rounded-l-md`}
            >
              <img
                src="/assets/Login/user.png"
                alt="user"
                width={16}
                height={21}
                className={`${color}-secondary`}
              ></img>
            </div>
            <div className={`w-[220px] rounded-r-md border-${color}`}>
              <input
                onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(value.target.value)
                }
                type="text"
                placeholder="Username"
                style={inputStyle}
                className="placeholder-white font-margarine  opacity-70 ml-2"
              />
            </div>
          </div>

          <div className="flex my-3">
            <div
              className={`p-2 ${color}-secondary flex items-left justify-left rounded-l-md`}
            >
              <img
                src="/assets/Login/lock.png"
                alt="user"
                width={16}
                height={10}
                className={`${color}-secondary`}
              ></img>
            </div>
            <div className={`w-[220px] rounded-r-md border-${color}`}>
              <input
                onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(value.target.value)
                }
                type="password"
                placeholder="Password"
                style={inputStyle}
                className="placeholder-white font-margarine opacity-70    ml-2"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-rose-600">{err}</p>
          </div>

          <button
            onClick={handleClick}
            className={`bg-white h-[25px] w-[200px] text-center rounded-lg flex items-center justify-center font-margarine text-${color}  border-${color}`}
          >
            SIGN IN
          </button>

          <p className="my-1 text-center opacity-80 font-margarine text-sm">
            forgot your password ?
          </p>

          <hr
            className={`border-black w-[270px] h-[1px] ${color}-secondary shadow-xl`}
          />

          <div
            className={`${color}-secondary text-white h-[25px] w-[200px] text-center rounded-md flex items-center justify-center font-margarine`}
            style={borderStyle2}
          >
            <button>REGISTER </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
