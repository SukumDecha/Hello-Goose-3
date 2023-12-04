import VisitButton from "../VisitButton";
import "./Banner.css";

interface BannerProps {
  color: string;
  major: string;
}

const Banner = ({ color, major }: BannerProps) => {
  return (
    <div
      className={`bg-cover bg-center h-screen banner-${color} flex
        bg-bottom gap-0 items-center`}
    >
      <div className="font-mansalva w-2/5 px-20 ">
        <div className="text-7xl">{major}</div>
        <VisitButton></VisitButton>
      </div>

      {/* <div className="border-2 border-green-300 w-full h-auto flex justify-center ">
        <img src={`/assets/App/ducks/duck-${color}.png`} alt={color} className="border-2 border-blue-400 ml-[-30rem] w-[99em] h-[60rem]"/>
      </div> */}
    </div>
  );
};

export default Banner;
