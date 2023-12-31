import IT from "./majorList/IT";
import Engineering from "./majorList/Engineering";
import FiET from "./majorList/FiET";
import { useRef, useState } from "react";
import { useColorContext } from "../../../context/ColorContext";
import { useFacultyContext } from "../../../context/category/FacultyContex";
import { useCategoryMajorContext } from "../../../context/category/CategoryMajorContext";
import { useCategoryContext } from "../../../context/category/CategoryContext";

type Props = {
  isOpen: boolean;
  setOpen: (b: boolean) => void;
};

const plusIcon = (
  <img
    className="w-10 h-15"
    src="/assets/navbars/Plus_symbol.svg"
    alt="plus_icon"
  />
);
const minusIcon = (
  <img
    className="w-5 h-15"
    src="/assets/navbars/minus-icon.png"
    alt="minus_icon"
  />
);

const Sidebar = (props: Props) => {
  const [isItOpen, setItOpen] = useState(false);
  const [isEngOpen, setEngOpen] = useState(false);
  const [isFiETOpen, setFiETItOpen] = useState(false);
  const { color } = useColorContext();
  const { setFaculty } = useFacultyContext();
  const { setCategoryMajor } = useCategoryMajorContext();
  const { setCategory } = useCategoryContext();

  const ref = useRef<HTMLDivElement>(null);

  const isClickOutSide = (e: any) => {
    if (e.target.id === "sidebar-backdrop") {
      props.setOpen(false);
    }
  };

  ref.current?.addEventListener("click", isClickOutSide);

  return (
    <div
      className={`${
        props.isOpen ? "fixed" : "hidden"
      } h-full w-full backdrop-blur-md z-50`}
      id="sidebar-backdrop"
      ref={ref}
    >
      <div
        className={` h-full w-full md:w-96 bg-${color} m-0 overflow-scroll no-scrollbar`}
        id="sidebar"
      >
        <div
          className={` h-full w-full md:w-96 bg-slate-100/40 m-0 overflow-scroll no-scrollbar`}
          id="sidebar"
        >
          <div className="flex flex-row justify-start m-8 items-center">
            <button onClick={() => props.setOpen(false)}>
              <img
                className="w-10 h-10"
                src="/assets/navbars/x-thin.svg"
                alt="x_icon"
              />
            </button>
            <span className="font-margarine ml-5 text-3xl">MENU</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="font-margarine underline ml-8 text-2xl">SIT</span>
            <div className="flex mr-8">
              {!isItOpen ? (
                <button onClick={() => setItOpen(true)}>{plusIcon}</button>
              ) : (
                <button onClick={() => setItOpen(false)}>{minusIcon}</button>
              )}
            </div>
          </div>
          <div className={!isItOpen ? "hidden" : "block"}>
            <IT setFaculty={setFaculty} setMajor={setCategoryMajor} setSidebarOpen={props.setOpen} setCategory={setCategory}></IT>
          </div>
          <div className="flex flex-row justify-between mt-8">
            <span className="font-margarine underline ml-8 text-2xl">
              Engineering
            </span>
            <div className="flex mr-8">
              {!isEngOpen ? (
                <button onClick={() => setEngOpen(true)}>{plusIcon}</button>
              ) : (
                <button onClick={() => setEngOpen(false)}>{minusIcon}</button>
              )}
            </div>
          </div>
          <div className={!isEngOpen ? "hidden" : "block"}>
            <Engineering setFaculty={setFaculty} setMajor={setCategoryMajor} setSidebarOpen={props.setOpen} setCategory={setCategory}></Engineering>
          </div>
          <div className="flex flex-row justify-between mt-8">
            <span className="font-margarine underline ml-8 text-2xl">FiET</span>
            <div className="flex mr-8">
              {!isFiETOpen ? (
                <button onClick={() => setFiETItOpen(true)}>{plusIcon}</button>
              ) : (
                <button onClick={() => setFiETItOpen(false)}>
                  {minusIcon}
                </button>
              )}
            </div>
          </div>
          <div className={!isFiETOpen ? "hidden" : "block"}>
            <FiET setFaculty={setFaculty} setMajor={setCategoryMajor} setSidebarOpen={props.setOpen} setCategory={setCategory}></FiET>
          </div>
          <div className="h-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
