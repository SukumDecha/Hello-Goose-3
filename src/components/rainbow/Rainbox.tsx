import { useState } from "react";

const Rainbox = () => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  const [color, setColor] = useState(colors[0]);
  const handleClick = () => {
    const index = Math.floor(Math.random() * colors.length);
    setColor(colors[index]);
  };
  return (
    <div style={{ backgroundColor: color }} className="p-5 transition-all duration-200">
      <h1 className="text-3xl font-bold">Rainbox</h1>
      <button onClick={handleClick} className="mt-3 button">
        CLICK ME!
      </button>
    </div>
  );
};

export default Rainbox;
