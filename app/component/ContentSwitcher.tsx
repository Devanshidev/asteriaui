"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContentSwitcher = () => {
  const [activeTab, setActiveTab] = useState("components");

  const tabContent: { [key: string]: { title: string; description: string; status: string; tech: string } } = {
    components: {
      title: "Asteria UI Components",
      description: "Explore beautifully crafted, reusable UI components designed for modern web applications.",
      status: "Available Now",
      tech: "Next.js · Tailwind · Framer Motion",
    },
    templates: {
      title: "Pre-Built UI Templates",
      description: "Save development time with our professionally designed UI templates for various industries.",
      status: "Coming Soon",
      tech: "Next.js · Tailwind · Framer Motion",
    },
  };

  return (
    <div className="w-[50%]  p-8 space-y-10 ">
      {/* Switcher */}
      <div className="flex justify-center ">
        <div className="bg-[#1a1a1a] p-1 rounded-xl inline-flex items-center">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              className={`px-6 py-1 rounded-lg font-medium relative transition-all duration-300 ${
                activeTab === tab
                  ? " shadow-md text-white"
                  : "text-[#7f7f7f] hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {activeTab === tab && (
                <motion.div
                //   layoutId="active-pill"
                  className="absolute inset-0 bg-[#2a2a2a] rounded-lg shadow-md"
                />
              )}
              <span className="relative z-10">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-[#1a1a1a] rounded-xl p-6 shadow-md"
        >
          <h2 className="text-xl font-bold font-sans text-white text-center">{tabContent[activeTab].title}</h2>
          <p className="mt-4 text-[#7f7f7f] font-sans text-sm text-center">{tabContent[activeTab].description}</p>
          <div className="mt-4 text-xs font-sans  text-[#525252] text-center">{tabContent[activeTab].tech}</div>
          <div className="mt-3 flex justify-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-4 py-2 text-sm rounded-full bg-[#2a2a2a] text-emerald-400"
            >
              {tabContent[activeTab].status}
            </motion.span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ContentSwitcher;
