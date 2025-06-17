import React from "react";

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
 
];

const Normaltestimonial = () => {
  return (
    <div className="flex flex-col justify-center items-center   px-6">
      <h2 className="text-white font-sans text-xl font-semibold mb-6">
        What People Say
      </h2>

      {/* Horizontal Scroll Wrapper */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-4">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg min-w-[300px] backdrop-blur-md bg-white/10 border border-white/10 shadow-lg"
            >
              <p className="italic text-white">"{testimonial.text}"</p>
              <p className="mt-3 text-right text-gray-300">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Normaltestimonial;
