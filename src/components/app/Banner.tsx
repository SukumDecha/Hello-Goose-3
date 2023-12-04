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
      <div className="font-mansalva w-2/5 px-20 flex flex-col">
        <div className="text-7xl">{major}</div>
        <VisitButton class="mt-10" color={color}></VisitButton>
      </div>

      <div className="flex justify-center ">
        <img
          src={`/assets/App/ducks/duck-${color}.png`}
          alt={color}
          className="ml-[-20rem] w-[90em] h-[40rem]"
        />
      </div>
    </div>
  );
};

export default Banner;
