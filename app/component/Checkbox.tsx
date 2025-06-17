"use client";
import React, { useState } from "react";

const Checkbox: React.FC = ({options}:{options:any}) => {
 
  const [selected, setSelected] = useState<string[]>([]);

  // Toggle individual checkbox
  const handleCheckboxChange = (option: string) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  // Select/Deselect All
  const handleSelectAll = () => {
    setSelected(selected.length === options.length ? [] : options);
  };

  return (
    <div className="p-2 w-60 bg-[#1a1a1a] text-white rounded-lg shadow-lg">
      <h2 className="text-md font-semibold font-sans mb-4">Select Fruits</h2>

      {/* Select All Checkbox */}
      <label className="flex items-center space-x-2 mb-2 font-sans text-sm">
        <input
          type="checkbox"
          checked={selected.length === options.length}
          onChange={handleSelectAll}
          className="w-3 h-3 accent-blue-500"
        />
        <span>Select All</span>
      </label>

      {/* Individual Checkboxes */}
      {options.map((option) => (
        <label key={option} className="flex items-center space-x-2 mb-2 font-sans text-sm">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            className="w-3 h-3 accent-blue-500"
          />
          <span>{option}</span>
        </label>
      ))}

      {/* Selected Items Display */}
      <div className="mt-4 font-sans text-sm">
        <strong>Selected:</strong> {selected.length > 0 ? selected.join(", ") : "None"}
      </div>
    </div>
  );
};

export default Checkbox;
