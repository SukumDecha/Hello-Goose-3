import { useState } from "react";

const Form = () => {
  const [data, setData] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setData("");
  };

  return (
    <div className="p-5 bg-slate-300">
      <h1 className="text-2xl">Form Input</h1>
      <form className="flex gap-1">
        <input
          className="p-1 rounded-md"
          type="text"
          placeholder="input here..."
          onChange={handleInput}
          value={data}
        />
        <button
          className="p-1 rounded-md outline outline-1"
          type="submit"
          onClick={handleClick}
        >
          Reset
        </button>
      </form>
      <h2 className="mt-6 text-lg">
        Here is what you just typed: {data ? data : "empty"}
      </h2>
    </div>
  );
};

export default Form;
