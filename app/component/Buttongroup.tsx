"use client";
import React, { useState } from "react";

const Buttongroup = ({text1,text2,text3}:{text1:any,text2:any,text3:any}) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (button: string) => {
    setSelected(selected === button ? null : button);
  };

  return (
    <div className="flex gap-1">
      {/* Button 1 */}
      <button
        className={`px-3 py-1 rounded-md transition-all font-sans text-sm ${
          selected === "one" ? "bg-[#343434] text-white" : "bg-gray-300  text-black"
        }`}
        onClick={() => handleClick("one")}
        disabled={selected && selected !== "one"}
      >
       {text1}
      </button>

      {/* Button 2 */}
      <button
        className={`px-3 py-1 rounded-md transition-all font-sans text-sm  ${
          selected === "two" ? "bg-[#343434] text-white" : "bg-gray-300  text-black"
        }`}
        onClick={() => handleClick("two")}
        disabled={selected && selected !== "two"}
      >
        {text2}
      </button>

      {/* Button 3 */}
      <button
        className={`px-3 py-1 rounded-md transition-all font-sans text-sm ${
          selected === "three" ? "bg-[#343434] text-white" : "bg-gray-300  text-black"
        }`}
        onClick={() => handleClick("three")}
        disabled={selected && selected !== "three"}
      >
      {text3}
      </button>
    </div>
  );
};

export default Buttongroup;
