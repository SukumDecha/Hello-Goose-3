import { useColorContext } from "../../../context/ColorContext";
import { useMajorContext } from "../../../context/MajorContext";
import SearchBar from "../searchbar/SearchBar";
import VisitButton from "../visitbutton/VisitButton";
import "./Banner.css";

const majorTitle: Record<string, string> = {
  SIT: "School of information technology",
  ENGINEER: "Faculty of Engineering",
  FiET: "Faculty of Industrial Education and Technology",
};



const Banner = () => {
  const { color, setColor } = useColorContext();
  const { major, setMajor } = useMajorContext();
  
  const handleNext = () => {
    if(color === 'blue') {
      setColor('red');
      setMajor('ENGINEER')
    } else if(color === 'red') {
      setColor('orange')
      setMajor('FiET')
    } else {
      setColor('blue');
      setMajor('SIT');
    }
  }

  const handleBack = () => {
    if(color === 'blue') {
      setColor('orange');
      setMajor('FiET')
    } else if(color === 'orange') {
      setColor('red')
      setMajor('ENGINEER')
    } else {
      setColor('blue');
      setMajor('SIT');
    }
  }
  return (
    /* Biggest background */
    <div
      className={`bg-cover bg-center h-screen banner-${color} flex flex-col
        bg-bottom gap-0 items-center bg-transition`}
    >
      <div className="search-bar z-2">
        <SearchBar />
      </div>
      
      <div
        className={`flex bg-cover bg-top w-[85%] h-full items-center mt-[-10%] goose-${color} bg-transition z-1`}
      >
        {/* Title */}
        <div>
          <img
            src="/assets/App/banners/leftArrow.png"
            alt="leftArrow"
            className="w-12 hover:cursor-pointer"
            onClick={handleBack}
          />
        </div>


        <div className="font-mansalva w-3/5 px-20 flex flex-col">
          <div className="text-7xl text-white">{majorTitle[major]}</div>
          <VisitButton color={color}></VisitButton>
        </div>
        <div>
          <img
            src="/assets/App/banners/rightArrow.png"
            alt="rightArrow"
            className="w-12 ml-96 hover:cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;