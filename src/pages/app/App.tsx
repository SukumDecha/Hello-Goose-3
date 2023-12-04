import Banner from "../../components/app/Banner";
import Navbar from "../../components/navbar/Navbar";
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
      <Navbar></Navbar>
      <Banner color={color} major={major}></Banner>
    </div>
  );
};

export default App;
