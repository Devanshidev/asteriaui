"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

// Drawer Props Type
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// Bottom Drawer Component with Touch & Mouse Drag Support
const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Common Start Event (Touch + Mouse)
  const handleStart = (y: number) => {
    setStartY(y);
    setCurrentY(y);
    setIsDragging(true);
  };

  // Common Move Event (Touch + Mouse)
  const handleMove = (y: number) => {
    if (!isDragging) return;
    setCurrentY(y);
  };

  // Common End Event (Touch + Mouse)
  const handleEnd = () => {
    if (currentY - startY > 100) {
      onClose(); // Close drawer if swiped down significantly
    }
    setIsDragging(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>}

      {/* Drawer Panel (Bottom Position) */}
      <div
        className={`fixed bottom-0 left-0 w-full h-[40%] bg-[#1a1a1a] shadow-lg z-50 rounded-t-lg transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out`}
        style={{
          transform: isDragging ? `translateY(${Math.max(currentY - startY, 0)}px)` : undefined,
        }}
        // Touch Events
        onTouchStart={(e) => handleStart(e.touches[0].clientY)}
        onTouchMove={(e) => handleMove(e.touches[0].clientY)}
        onTouchEnd={handleEnd}
        // Mouse Events (for Laptop)
        onMouseDown={(e) => handleStart(e.clientY)}
        onMouseMove={(e) => isDragging && handleMove(e.clientY)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd} // Handles case when mouse leaves the drawer
      >
        {/* Header with Drag Indicator */}
        <div className="flex flex-col items-center p-2 border-b cursor-pointer">
          <div className="w-12 h-1 rounded-full bg-gray-400 mb-2"></div> {/* Drag handle */}
          <div className="flex justify-between items-center w-full">
            <h2 className="text-base font-sans font-semibold text-white">Drawer</h2>
            <button onClick={onClose}>
              <AiOutlineClose className="w-4  text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>

        {/* Drawer Content */}
        <div className="p-4">{children}</div>
      </div>
    </>
  );
};

// Main Component with Drawer Button
const DrawerContainer: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Button to Open Drawer */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="bg-[#1a1a1a] border border-[#282828] text-white text-sm font-sans px-3 py-1 rounded-lg "
      >
        Open Drawer
      </button>

      {/* Bottom Drawer Component */}
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <p className="text-sm font-sans text-white">This is your slideable bottom drawer content! 🎉</p>
      </Drawer>
    </div>
  );
};

export default DrawerContainer;
