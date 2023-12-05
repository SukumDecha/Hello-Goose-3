const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center w-[1000px] h-[59px] rounded-[20px] shadow-lg  shadow-white-500/40 px-10,20">
        <div className="flex justify-end items-center bg-white/70 w-[1000px] h-[59px] rounded-[20px]">
          <img
            src="/assets/App/searchbar/Searchbar.png"
            alt="search"
            width={40}
            height={40}
            className="opacity-100 mr-5"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
