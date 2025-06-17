"use client";
import React from 'react';
import { motion } from 'framer-motion';

type ToggleStyle = 'square' | 'colorful'|'simple';

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
  style?: ToggleStyle;
  disabled?: boolean;
  label?: string;
}

const Toggle = ({
  isOn,
  onToggle,
  style = 'colorful',
  disabled = false,
  label
}: ToggleProps) => {
  const toggleStyles = {
    square: {
      track: 'w-12 h-6 rounded-md bg-slate-200',
      activeTrack: 'bg-gradient-to-r from-green-400 to-blue-500 ',
      thumb: 'rounded-md bg-white shadow-lg',
    },
    colorful: {
      track: 'w-12 h-6 rounded-full bg-slate-200',
      activeTrack: 'bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-500',
      thumb: 'bg-white shadow-lg',
    },
    simple:{
      track:'w-12 h-6 bg-slate-200 rounded-full',
      activeTrack: "bg-gradient-to-r from-blue-600 to-blue-400",
      thumb: 'bg-white shadow-lg',
    }
  };

  const currentStyle = toggleStyles[style];

  return (
    <div className="flex items-center space-x-2">
      {label && (
        <span className="text-sm font-medium text-gray-700">{label}</span>
      )}
      <button
        type="button"
        onClick={onToggle}
        disabled={disabled}
        className={`
          relative cursor-pointer transition-all duration-200 ease-in-out
          ${currentStyle.track}
          ${isOn ? currentStyle.activeTrack : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          hover:opacity-90
        `}
      >
        <motion.div
          className={`
            absolute top-0.5 left-0.5 rounded-full
            h-5 w-5
            ${currentStyle.thumb}
          `}
          animate={{
            x: isOn ? 24 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        />
      </button>
    </div>
  );
};

// Example usage component
const Togglestate = () => {
  const [toggleStates, setToggleStates] = React.useState({
    square: false,
    colorful: false,
    simple: false,
  });

  const handleToggle = (style: keyof typeof toggleStates) => {
    setToggleStates(prev => ({
      ...prev,
      [style]: !prev[style]
    }));
  };

  return (
    <div className="p-8  space-y-8">
    <h2 className="text-2xl font-semibold font-sans text-white mb-6">Toggle Variants</h2>
    
  
    <div className="flex flex-row items-center justify-center gap-8 text-red-500 ">
      
      {/* First Toggle */}
      <div className="space-y-6 font-sans text-white">
        <h3 className="text-sm font-sans font-medium text-white">Colorful Style</h3>
        <Toggle
          isOn={toggleStates.colorful}
          onToggle={() => handleToggle('colorful')}
          style="colorful"
          label={<span className="text-white">Toggle me</span>}
        />
      </div>
  
      {/* Second Toggle  */}
      <div className="space-y-6 font-sans text-white ">
        <h3 className="text-sm font-sans font-medium text-white">Square Style</h3>
        <Toggle
          isOn={toggleStates.square}
          onToggle={() => handleToggle('square')}
          style="square"
          label={<span className="text-white">Toggle me</span>}
        />
      </div>
      <div className="space-y-6 font-sans text-white ">
        <h3 className="text-sm font-sans font-medium text-white">Simple Style</h3>
        <Toggle
          isOn={toggleStates.simple}
          onToggle={() => handleToggle('simple')}
          style="simple"
          label={<span className="text-white">Toggle me</span>}
        />
      </div>
  
    </div>
  </div>
  
  );
};

export default Togglestate;
