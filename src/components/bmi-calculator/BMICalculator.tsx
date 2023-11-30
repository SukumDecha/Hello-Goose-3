import { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const bmi = weight / (height * height);
    setBMI(bmi);
    setWeight(0);
    setHeight(0);
  };

  return (
    <div className="p-5 bg-emerald-400">
      <form className="flex gap-3">
        <input
          type="number"
          placeholder="height"
          className="p-1 rounded-md"
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="weight"
          className="p-1 rounded-md"
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        <button
          className="p-1 rounded-md outline outline-1"
          type="submit"
          onClick={handleClick}
        >
          Calculate
        </button>
      </form>
      <h2 className="mt-5 text-lg">YOUR BMI: {bmi}</h2>
    </div>
  );
};

export default BMICalculator;
