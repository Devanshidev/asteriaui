


import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Alice Johnson", text: "Asteria UI is a game changer! Love the components." },
  { name: "David Smith", text: "The UI is smooth, clean, and highly customizable!" },
  { name: "Sophia Lee", text: "Saves me hours of work. Highly recommend!" },
  { name: "John Doe", text: "Absolutely stunning design system. Great work!" },
  { name: "Emily Brown", text: "Perfect for my design projects. Love it!" },
];

const columnVariants = (direction) => ({
  animate: {
    translateY: direction === "up" ? [-350, 0] : [0, -350],
  },
});

const Testimonials = ({testimonials}:{testimonials:any}) => {
  return (
    <div className="flex flex-col items-center overflow-hidden h-[500px] w-full mt-10">
      <h2 className="text-white font-sans text-xl font-semibold mb-5">What People Say</h2>

      <div className="relative flex gap-6 w-full justify-center h-96 overflow-hidden">
        {/* Fade Masks */}
        <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-[#0D1117] to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#0D1117] to-transparent z-10" />

        {/* Four Columns of Testimonials */}
        {[0, 1, 2, 3].map((colIdx) => (
          <div key={colIdx} className="w-60 flex flex-col gap-6 overflow-hidden">
            <motion.div
              className="flex flex-col gap-6"
              variants={columnVariants(colIdx % 2 === 0 ? "up" : "down")}
              animate="animate"
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              style={{ willChange: "transform" }}
            >
              {/* First Set of Testimonials */}
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-gray-800 text-white p-5 rounded-lg w-56">
                  <p className="italic">"{testimonial.text}"</p>
                  <p className="mt-3 text-right text-gray-400">— {testimonial.name}</p>
                </div>
              ))}

              {/* Duplicate Set for Smooth Scrolling */}
              {testimonials.map((testimonial, idx) => (
                <div key={`second-${idx}`} className="bg-gray-800 text-white p-5 rounded-lg w-56">
                  <p className="italic">"{testimonial.text}"</p>
                  <p className="mt-3 text-right text-gray-400">— {testimonial.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

