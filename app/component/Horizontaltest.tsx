import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alice Johnson",
    text: "Asteria UI has completely transformed the way I design interfaces. Highly recommended!",
  },
  {
    name: "David Smith",
    text: "The UI components are top-notch and save me so much time. Absolutely love it!",
  },
  {
    name: "Sophia Lee",
    text: "A must-have for developers and designers. The quality is simply outstanding!",
  },
  {
    name: "John Doe",
    text: "Asteria UI provides the best user experience. Great work by the team!",
  },
  {
    name: "Emily Brown",
    text: "The animations and smooth UI components are just perfect. Definitely worth it!",
  },
];

const Horizontaltest = () => {
  return (
    <div className="flex justify-center items-center flex-col overflow-hidden">
      <h2 className="text-white font-sans text-xl font-semibold mb-8">What People Say</h2>

      <div className="relative w-full overflow-hidden">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0D1117] to-transparent z-10" />

        {/* Right fade mask */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0D1117] to-transparent z-10" />

        {/* Scrolling content */}
        <div className="relative overflow-hidden">
          <div className="flex">
            <motion.div
              className="flex gap-6 shrink-0"
              animate={{
                translateX: [0, -1240],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              style={{ willChange: "transform" }}
            >
              {/* First set of testimonials */}
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 text-white p-5 rounded-lg w-80 shrink-0"
                >
                  <p className="italic">"{testimonial.text}"</p>
                  <p className="mt-3 text-right text-gray-400">— {testimonial.name}</p>
                </div>
              ))}

              {/* Duplicate testimonials for smooth looping */}
              {testimonials.map((testimonial, idx) => (
                <div
                  key={`second-${idx}`}
                  className="bg-gray-800 text-white p-5 rounded-lg w-80 shrink-0"
                >
                  <p className="italic">"{testimonial.text}"</p>
                  <p className="mt-3 text-right text-gray-400">— {testimonial.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horizontaltest;


