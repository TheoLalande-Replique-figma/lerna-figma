"use client";
import { useState } from "react";

const CatPicker = () => {
  const [toggleValue, setToggleValue] = useState(false);

  function toggleButton(btnValue: string) {
    if (btnValue === "choice1" && toggleValue === true)
      setToggleValue(!toggleValue);
    else if (btnValue === "choice2" && toggleValue === false)
      setToggleValue(!toggleValue);
  }

  return (
    <div className="relative w-full bg-gray-300 m-2 rounded-full flex flex-row items-center">
      <div
        className={`absolute bg-white w-1/2 h-full rounded-full z-7 transform transition ease-in-out duration-300 ${
          toggleValue ? "translate-x-full" : "translate-x-0"
        }`}
      ></div>
      <button
        className="flex w-1/2 justify-center z-10 my-2 font-bold text-[#49474D]"
        onClick={() => toggleButton("choice1")}
      >
        Choix 1
      </button>
      <button
        className="flex  w-1/2 justify-evenly z-10 my-2 font-bold text-[#49454D]"
        onClick={() => toggleButton("choice2")}
      >
        <span>Choix 2</span>
        <div className="ml-2 flex bg-[#29004D] w-6 h-6 text-white rounded-full p-1 justify-center items-center font-normal">
          4
        </div>
      </button>
    </div>
  );
};

export default CatPicker;
