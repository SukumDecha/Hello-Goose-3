export type SearchProps = {
  search: string;
  setSearch: (s: string) => void;
};

export default function SearchBar({ search, setSearch }: SearchProps) {
  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative mb-4 flex w-[70%] items-stretch">
        <input
          type="search"
          className="flex items-center w-[1000px] h-[59px] rounded-l-[20px] shadow-lg  bg-white/70 shadow-white-500/40 px-[1.5em]"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1"
          value={search}
          onChange={handleSearchChange}
        />

        {/* <!--Search button--> */}
        <button
          className="bg-white/70 px-[1em] rounded-r-[20px]"
          type="button"
          id="button-addon1"
        >
          <img
            src="/assets/App/searchbar/Searchbar.png"
            alt="search"
            width={40}
            height={20}
            className="opacity-100 mr-5"
          ></img>
        </button>
      </div>
    </div>
  );
}
