"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";


interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
  onClose: () => void;
}

interface AlertType {
  id: number;
  type: "success" | "error" | "warning" | "info";
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const alertStyles: Record<AlertProps["type"], string> = {
    success: "bg-green-100 border-green-500 text-green-700 font-sans text-xs",
    error: "bg-red-100 border-red-500 text-red-700 font-sans text-xs",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700 font-sans text-xs",
    info: "bg-blue-100 border-blue-500 text-blue-700 font-sans text-xs",
  };

  return (
    <div className={`flex items-center justify-between w-full max-w-md p-3 border-l-4 rounded-md shadow-md ${alertStyles[type]} transition-all duration-300 ease-in-out`}>
      <span>{message}</span>
      <button onClick={onClose}>
        <AiOutlineClose className="w-3 ml-2 cursor-pointer text-gray-700 hover:text-black" />
      </button>
    </div>
  );
};

const AlertContainer: React.FC = () => {
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  const showAlert = (type: AlertType["type"], message: string) => {
    const id = Date.now();
    setAlerts([...alerts, { id, type, message }]);
  };

  const closeAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Alert Display Section */}
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 space-y-2 z-50">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            type={alert.type}
            message={alert.message}
            onClose={() => closeAlert(alert.id)}
          />
        ))}
      </div>

      {/* Buttons to Trigger Alerts */}
      <div className="space-x-2 font-sans text-sm">
        <button onClick={() => showAlert("success", " Success! Your action was successful!")} className="bg-[#1a1a1a] border border-[#282828] text-white text-sm font-sans px-4 py-2 rounded-lg">Show Success</button>
        <button onClick={() => showAlert("error", "Error! Something went wrong.")} className="bg-[#1a1a1a] border border-[#282828] text-white text-sm font-sans px-4 py-2 rounded-lg">Show Error</button>
        <button onClick={() => showAlert("warning", " Warning! Please check your inputs.")} className="bg-[#1a1a1a] border border-[#282828] text-white text-sm font-sans px-4 py-2 rounded-lg">Show Warning</button>
        <button onClick={() => showAlert("info", "Info: This is an informational alert.")} className="bg-[#1a1a1a] border border-[#282828] text-white text-sm font-sans px-4 py-2 rounded-lg">Show Info</button>
      </div>
    </div>
  );
};

export default AlertContainer;
