"use client"
import React, { useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineInfoCircle, AiOutlineExclamationCircle } from "react-icons/ai";

const Toast = ({ message = "This is a toast message!", type = "success" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showToast = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000); 
  };

  const getToastStyles = () => {
    const baseStyles = "fixed top-16 right-4 p-2 rounded-lg shadow-lg transform transition-all duration-300 flex items-center gap-2";
    const variants = {
      success: "bg-green-900 text-green-200",
      error: "bg-red-900 text-red-200",
      info: "bg-blue-900 text-blue-200",
      warning: "bg-yellow-900 text-yellow-200"
    };
    return `${baseStyles} ${variants[type]} ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`;
  };

  const getIcon = () => {
    const icons = {
      success: <AiOutlineCheckCircle className="w-5 h-5" />,
      error: <AiOutlineClose className="w-5 h-5" />,
      info: <AiOutlineInfoCircle className="w-5 h-5" />,
      warning: <AiOutlineExclamationCircle className="w-5 h-5" />
    };
    return icons[type];
  };

  return (
    <div className="p-4">
     <button 
        onClick={showToast}
        className="bg-[#1a1a1a] border border-[#282828] text-white text-sm font-sans px-4 py-2 rounded-lg"
      >
        Show Toast
      </button>
      <div className={getToastStyles()}>
        {getIcon()}
        <span>{message}</span>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-4 hover:opacity-75 transition-opacity"
        >
          <AiOutlineClose className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
const Toastify = () => {
  return (
    <div className="flex text-sm font-sans ">
      <Toast message="Success! Operation completed." type="success" />
      <Toast message="Error! Something went wrong." type="error" />
      <Toast message="Info: Update available." type="info" />
      <Toast message="Warning: Low storage space." type="warning" />
    </div>
  );
};

export default Toastify;