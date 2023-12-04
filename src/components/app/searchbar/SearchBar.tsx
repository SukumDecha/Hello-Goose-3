const SearchBar = () => {
  return (
    <div>
      <img
        src="/assets/App/searchbar/Searchbar.png"
        alt="search"
        width={40}
        height={40}
        className="opacity-100 absolute right-[156.5px] space-y-3.5 top-[155px]"
      ></img>

      <div className="flex items-center bg-white w-[1000px] h-[59px] opacity-70 rounded-[20px] shadow-lg  shadow-white-500/40 px-10,20 relative  "></div>
    </div>
  );
};

export default SearchBar;
