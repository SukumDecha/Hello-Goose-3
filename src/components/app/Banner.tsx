import VisitButton from "../VisitButton";
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

      </div>
      <div className="flex bg-cover bg-top w-[85%] h-full items-center mt-[-10%] goose-red">
        {/* Title */}
        <div className="font-mansalva w-3/5 px-20 flex flex-col">
          <div className="text-7xl">{major}</div>
          <VisitButton color={color}></VisitButton>
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
