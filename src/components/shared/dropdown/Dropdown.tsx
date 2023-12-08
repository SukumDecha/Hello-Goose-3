import { useState } from "react";
import { useCategoryMajorContext } from "../../../context/category/CategoryMajorContext";
import { useColorContext } from "../../../context/ColorContext";
import "./Dropdown.css";

type DropdownProps = {
  name: string;
  selectList: string[];
  selected: string;
  setSelect: (select: string) => void;
  type: string;
};

const Dropdown = (props: DropdownProps) => {
  const { color } = useColorContext();
  const [isOpen, setIsOpen] = useState(false);
  const { setCategoryMajor } = useCategoryMajorContext();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectHandler = (s: string) => {
    if (
      ["SIT", "ENGINEER", "FiET", "ALL"].includes(s) &&
      props.type === "faculty"
    ) {
      setCategoryMajor("ALL");
    }

    props.setSelect(s);
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex flex-col gap-[1px] justify-center items-start bg-white/70 w-60 rounded-2xl px-3 py-1 h-[50px]"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span className={`text-xs ${color}-text-secondary`}>{props.name} :</span>
          <span className={`text-xl flex justify-between items-center w-full px-2 text-${color} fill-${color}`}>
            <span>{props.selected}</span>
            <svg height="16" width="16" viewBox="0 0 512 512">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          id="dropdown-content"
          className="absolute right-0 z-10 mt-2 w-56 rounded-2xl origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="" role="none">
            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}

            {props.selectList.map((v, index) => (
              <button
                onClick={() => selectHandler(v)}
                key={index}
                className={`w-full text-start text-${color} block px-4 py-2 text-sm rounded-xl hover:bg-gray-200 ${
                  props.selected === v ? "bg-gray-300" : ""
                }`}
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
