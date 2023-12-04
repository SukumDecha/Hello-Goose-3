import Banner from "../../components/app/Banner";
import Navbar from "../../components/navbar/Navbar";
import OpenHamburger from "../../components/navbar/OpenHamburger";
import "./App.css";

interface AppProps {
  color: string;
  major: string;
}
const App = ({ color, major }: AppProps) => {
  // const [color, setColor] = useState(c);
  // const [major, setMajor] = useState(m);
  
  return (
    /** Todo: wrap into json */
    <div className={`bg-linear-${color}`}>
      <OpenHamburger/>
      <Navbar></Navbar>
      <Banner color={color} major={major}></Banner>
    </div>
  );
};

export default App;
