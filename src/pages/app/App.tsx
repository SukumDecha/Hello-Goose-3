import Banner from "../../components/app/banner/Banner";
import Content from "../../components/app/content/Content";
import CardSection from "../../components/app/coupon/CardSection";
import Footer from "../../components/footer/Footer";
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
      {/* <OpenHamburger/> */}
      <Navbar></Navbar>
      <Banner color={color} major={major}></Banner>

      <Content color={color}>
        <CardSection color={color} />
      </Content>
      <Footer color={color}/>
    </div>
  );
};

export default App;
