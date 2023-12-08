import Dropdown from "../../../../shared/dropdown/Dropdown";

type FilterProps = {
  name: string;
  option: string;
};

const Filter = (props: FilterProps) => {
  return (
    // <div className="flex flex-col gap-[1px] justify-center items-start bg-white/70 w-60 rounded-2xl px-3 py-1 h-[50px]">
    //   <span className="text-xs text-[#5D92DE]">{props.name}</span>
    //   <span className="text-xl flex justify-between items-center w-full px-2 text-[#0F5CCC] fill-[#0F5CCC]">
    //     <span>{props.option}</span>
    //     <svg height="16" width="16" viewBox="0 0 512 512">
    //       <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    //     </svg>
    //   </span>
    // </div>
    <div>
      <Dropdown name="IT" option="Major" catogories={["Option1", "Option 2"]}/>
    </div>
  );
};

export default Filter;
