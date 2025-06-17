"use client";
import React, { useState } from "react";

const Radiogroup: React.FC = ({options}:{options:any}) => {
 
  const [selected, setSelected] = useState<string>("");

  // Handle radio selection
  const handleRadioChange = (option: string) => {
    setSelected(option);
  };

  return (
    <div className="p-2 w-60 bg-[#1a1a1a] text-white rounded-lg shadow-lg">
      <h2 className="text-md font-semibold font-sans mb-4">Select a Fruit</h2>

      {/* Radio Options */}
      {options.map((option) => (
        <label key={option} className="flex items-center space-x-2 mb-2 font-sans text-sm">
          <input
            type="radio"
            name="fruit"
            value={option}
            checked={selected === option}
            onChange={() => handleRadioChange(option)}
            className="w-3 h-3 accent-blue-500"
          />
          <span>{option}</span>
        </label>
      ))}

      {/* Selected Item Display */}
      <div className="mt-4 font-sans text-sm">
        <strong>Selected:</strong> {selected ? selected : "None"}
      </div>
    </div>
  );
};

export default Radiogroup;
