import { useState } from "react";
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
  const [isSidebarOpen, setSidebar] = useState(false)

  return (
    /** Todo: wrap into json */
    <div className={`bg-linear-${color}`}>
      <OpenHamburger isOpen={isSidebarOpen} setOpen={setSidebar} />
      <Navbar setOpen={setSidebar}></Navbar>
      <div className="">
        <Banner color={color} major={major}></Banner>
      </div>
    </div>
  );
};

export default App;
