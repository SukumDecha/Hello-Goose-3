import { useState } from "react";
import Banner from "../../components/app/Banner";
import Navbar from "../../components/navbar/Navbar";
import "./App.css";

interface AppProps {
  color: string;
  major: string;
}
const App = ({ color: c, major: m }: AppProps) => {
  const [color, setColor] = useState(c);
  const [major, setMajor] = useState(m);

  const handleNext = () => {
    // setColor(color === 'red' ? 'orange' : color === 'orange')
  }

  const handleBack = () => {
    setColor(color === 'red' ? )
  }

  return (
    /** Todo: wrap into json */
    <div className={`bg-linear-${color}`}>
      <Navbar color={color}></Navbar>
      <Banner color={color} major={major}></Banner>
    </div>

  );
};

export default App;
