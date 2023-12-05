import Banner from "../../components/app/banner/Banner";
import CardSection from "../../components/app/coupon/CardSection";
import ProductList from "../../components/app/product/ProductList";
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
      <CardSection color={color} />
      <ProductList ></ProductList>
      <Footer color={color} />
    </div>
  );
};

export default App;
