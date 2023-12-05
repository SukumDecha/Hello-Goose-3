import SearchBar from "../searchbar/SearchBar";
import VisitButton from "../visitbutton/VisitButton";
import "./Banner.css";

interface BannerProps {
  color: string;
  major: string;
}

const Banner = ({ color, major }: BannerProps) => {
  return (
    /* Biggest background */
    <div
      className={`bg-cover bg-center h-screen banner-${color} flex flex-col
        bg-bottom gap-0 items-center`}
    >
      <div className="search-bar">
        <SearchBar />
      </div>
      <div
        className={`flex bg-cover bg-top w-[85%] h-full items-center mt-[-10%] goose-${color}`}
      >
        {/* Title */}
        <div>
          <img
            src="/assets/App/banners/leftArrow.png"
            alt="leftArrow"
            className="w-12"
          />
        </div>
        <div className="font-mansalva w-3/5 px-20 flex flex-col">
          <div className="text-7xl">{major}</div>
          <VisitButton color={color}></VisitButton>
        </div>
        <div>
          <img
            src="/assets/App/banners/rightArrow.png"
            alt="rightArrow"
            className="w-12 ml-96"
            onClick={() => { console.log("Clicked right arrow")}}
          />
        </div>
        {/* Title */}

        {/* <div className="flex justify-center w-full h-full">
          <img
            src={`/assets/App/ducks/duck-${color}.png`}
            alt={color}
            className="ml-[-20rem] w-full h-full"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
