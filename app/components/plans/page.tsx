import Hovergradient from "@/app/component/Hovergradient";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdBusinessCenter, MdEmail, MdWidgets } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";

const page = () => {
  return (
    <div className="bg-view bg-cover bg-no-repeat w-screen h-screen flex items-center p-16 gap-3 flex-col overflow-auto">
      <div className="text-white text-4xl font-inter font-semibold w-[60%] text-center select-none ">
      Get unlimited access to premium UI components at a simple price.
      </div>

      <div className="font-inter text-xs text-center text-[#919090] font-medium">
        <div>
          Get unlimited access to our complete library of 50+ components and
          templates, plus all future updates and additions,
        </div>
        with a single one-time purchase.
      </div>

      <div className="flex justify-center mt-8 gap-8">
        {/* Red Card (Individual License - Annual Access) */}
        <div className="w-[25%]">
          <div className="border border-[#222] text-white p-6 rounded-lg space-y-4 h-full bg-[#252323]">
            <div className="font-sans font-semibold text-sm">
              Individual License - Get Annual Access
            </div>
            <div className="flex ">
            <div className="font-sans font-bold text-4xl">$99</div>
            <div className="font-sans font-bold text-3xl  line-through text-[#b6b6b6]/70 mt-6 ml-3">$149</div>
            </div>
            <div className="font-sans font-bold text-xs text-[#919090]">
              Billed Annually
            </div>
            <div className="font-sans font-normal text-xs text-[#a1a0a0]">
              Beautifully designed React components and templates, powered by
              Tailwind CSS and Framer Motion, to elevate your next web project.
            </div>
            <div className="font-sans font-semibold text-sm">
              What's Included:
            </div>
            <ul className="space-y-3 text-white list-disc pl-5">
              <li className="text-xs font-sans font-normal">
                <span className="font-semibold">Email-based priority support</span> 
                <div className=" mt-2 ">Get priority support via email within 2-3 business days.</div> 
              </li>
              <li className="text-xs font-sans font-normal">
                <span className="font-semibold">Access to All Components</span> 
                <div className=" mt-2 ">Unlock full access to all available components for your projects.</div> 
              </li>
              <li className="text-xs font-sans font-normal">
                <span className="font-semibold">Commercial Use</span> 
                <div className=" mt-2 ">Use the components in any commercial project without limitations.</div>
              </li>
            </ul>
            <div className="pt-8 flex justify-center items-center ">
              <div className="text-white text-[10px] w-full rounded-full py-1.5 px-24 flex items-center gap-2 font-semibold border-2 border-[#423f3f] cursor-pointer">
                Get Access
                <IoIosArrowForward className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Black Card (Individual License - Lifetime Access) */}
        <div className="w-[24%] h-[108%] relative">
          <div className="border border-[#222] text-white px-6 rounded-lg space-y-6 h-full -mt-6 -ml-12 bg-[#181818] shadow-md shadow-green-800">
            {/* Banner */}
            <div className="absolute -top-6 right-0 bg-emerald-600 text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg shadow-lg font-sans font-semibold ">
              Recommended
            </div>

            <div className="font-sans font-semibold text-sm">
              Individual License - Get Lifetime Access
            </div>
            <div className="flex ">
            <div className="font-sans font-bold text-4xl">$139</div>
            <div className="font-sans font-bold text-3xl  line-through text-[#b6b6b6]/70 mt-6 ml-3">$259</div>
            </div>
            <div className="font-sans font-bold text-xs text-[#919090]">
              One-Time Payment
            </div>
            <div className="font-sans font-normal text-xs text-[#a1a0a0]">
              Beautifully designed React components and templates, powered by
              Tailwind CSS and Framer Motion, to elevate your next web project.
            </div>
            <div className="font-sans font-semibold text-sm">
              What's Included:
            </div>
            <ul className="space-y-3 text-white list-disc pl-5">
              <li className="text-xs font-sans font-normal ">
                <div className="font-semibold">Same day priority support</div> 
                 <div className=" mt-2 ">Get priority support same day.</div >
              </li>
              <li className="text-xs font-sans font-normal">
                <span className="font-semibold">80% off</span> 
                <div className=" mt-2">AI-based future components.</div>
              </li>
              <li className="text-xs font-sans font-normal">
                <span className="font-semibold">Early Access</span> 
                <div className=" mt-2">Get early access to new premium components (25+ components updated monthly).</div> 
              </li>
              <li className="text-xs font-sans font-normal ">
                <span className="font-semibold">UI and Templates</span>
                <button className="ml-2 text-[10px] font-sans text-[#10B981] rounded-xl border-2 border-[#10B981] px-2">
                  Coming Soon
                </button>
              </li>
            </ul>
            <div className="pt-8 flex justify-center items-center">
              <div className="text-white text-[10px] rounded-full py-2 px-32 flex items-center gap-1 font-semibold bg-black cursor-pointer border-2 border-[#2e2b2b]">
                Get Access
                <IoIosArrowForward />
              </div>
              {/* <button
    //   onClick={onClick}
      className="relative px-28 py-2 rounded-full text-lg font-medium transition-all hover:opacity-90 group"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 via-green-400 to-green-400 opacity-0 group-hover:opacity-60 transition-opacity blur-xl" />
      <div className="absolute inset-0 rounded-full border-2 border-[#2e2b2b] bg-black " />
      <span className="relative flex justify-center items-center font-sans font-semibold text-sm">
        Get Access
        <span className="ml-2 text-sm  flex justify-center  items-center " > <IoIosArrowForward /> </span>
      </span> 
    </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
