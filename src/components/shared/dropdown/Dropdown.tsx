import { useState } from "react";
import { useCategoryMajorContext } from "../../../context/category/CategoryMajorContext";

type DropdownProps = {
  name: string;
  selectList: string[];
  selected: string
  setSelect: (select: string) => void
};

const Dropdown = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {setCategoryMajor} = useCategoryMajorContext()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const selectHandler = (s: string) => {
    if (["SIT", "ENGINEER","FiET"].includes(s)){
      setCategoryMajor("ALL")
    }
    props.setSelect(s)
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
         {`${props.name}: ${props.selected}`}
          <svg
            className={`-mr-1 h-5 w-5 text-gray-400 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          id="dropdown-content"
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
            {
            props.selectList.map((v,index) => (
            <button onClick={()=>selectHandler(v)}
              key={index}
              className={`w-full text-start text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 ${props.selected === v ? "bg-gray-300":""}`}
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
