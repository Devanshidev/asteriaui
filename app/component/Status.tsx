"use client";
import React, { useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";

const Status = () => {
  const [isOpen, setIsOpen] = useState(false); // To control dropdown visibility
  const [selectedStatus, setSelectedStatus] = useState("Status"); // To store selected status

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  const handleSelect = (status:any) => {
    setSelectedStatus(status); // Set selected status
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="flex justify-center items-center relative">
      <div className="border border-[#383838] px-4 py-1 text-sm font-sans font-semibold rounded-2xl flex justify-between items-center space-x-2 w-44 text-white">
        <span>{selectedStatus}</span>
        <TiArrowUnsorted onClick={toggleDropdown} />
      </div>

      {isOpen && (
        <div className="absolute top-7 mt-2 w-44 bg-black text-white border border-[#383838] rounded-md shadow-lg font-sans ">
          <ul className="text-sm">
            <li
              className="px-4 py-2 cursor-pointer hover:bg-[#4e4d4d] rounded-md"
              onClick={() => handleSelect("Active")}
            >
              Active
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-[#2a2a2a] rounded-md"
              onClick={() => handleSelect("Inactive")}
            >
              Inactive
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-[#2a2a2a] rounded-md"
              onClick={() => handleSelect("Pending")}
            >
              Pending
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Status;
