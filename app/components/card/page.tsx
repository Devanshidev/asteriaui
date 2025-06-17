"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter for redirection

import Cookies from "js-cookie";
import { PiCopySimpleBold } from "react-icons/pi";
import { HiCheck } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css"; // Import Clipboard Icon
import Card from '@/app/component/Card';
import book from "../../../public/assets/book.jpg"

const Page = () => {
  const [hasMembership, setHasMembership] = useState(false);
  const [user, setUser] = useState(null);
  const [isCopied, setIsCopied] = useState(false); // State to track if the code is copied
  const router = useRouter(); // ✅ Initialize router for navigation

  // 🔹 Fetch user from cookies on component mount
  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🔹 Handle Purchase Click - Redirect instead of opening modal
  const handlePurchaseClick = () => {
    const storedUser = Cookies.get("user"); // Get latest user from cookies
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Ensure user state is updated
      router.push("/components/plans"); // ✅ Redirect to plans page
    } else {
      toast.error("Please log in first!", { position: "top-center" });  // Fallback if toast doesn't work
    }
  };

  // 🔹 Handle Copy Code Click
  const handleCopyCode = () => {
    const codeText = document.getElementById("codeText").innerText; // Get code text
    navigator.clipboard.writeText(codeText).then(() => {
      setIsCopied(true); // Update the state to show "Copied" message
      setTimeout(() => {
        setIsCopied(false); // Reset the state after 2 seconds
      }, 2000);
    });
  };

  return (
    <div> 
      <ToastContainer />  
      <div className="bg-vieww bg-cover bg-no-repeat bg-center h-[722px] w-screen flex gap-2 pt-14 px-5 overflow-hidden ">
        {/* Left Section */}
        <div className="h-full w-[70%] ">
          <div className="text-white text-5xl font-merriweather font-medium mb-3 mx-10">
            Card 
          </div>
          <div className="text-[#7f7f7f] font-sans text-sm font-medium mx-12">
          A clean and minimalistic card design that allows content to stand out.
          </div>
          <div className="flex justify-center items-center h-full  -mt-20">
          <div className='  flex justify-center items-center mx-44 space-x-32'>
             <Card image1={book} 
             name = "The Monk Who Sold his Ferrari"
             description = " The Monk Who Sold His Ferrari by Robin Sharma follows Julian Mantle, a
               successful lawyer who, after a life crisis, seeks spiritual fulfillment
               in India. He learns life-changing lessons on inner peace, purpose, and
               personal growth."/>
       
        </div>
          </div>
        </div>

        {/* Right Section - Code Display */}
        <div className="bg-[#09090B] border border-[#27272A] rounded-lg h-screen w-[30%] p-5 relative ">
          <div className="text-white font-sans font-medium">Use Component</div>
          <div className="text-white font-sans font-medium bg-[#151515] w-[50px] text-center mt-6 rounded-t-lg p-1 text-sm">
            Code
          </div>

          {/* Code with Blur Effect */}
          <div className={`bg-[#151515] p-3 rounded-tr-lg relative text-white ${!hasMembership ? "blur-sm" : ""}`} id="codeText">
            {hasMembership ? "xetrcytvybk" : "••••••••••••"}

            {/* Copy Code Button inside the red div */}
            {hasMembership && (
              <button
                onClick={handleCopyCode}
                className="absolute top-2 right-2 bg-[#444444] py-1 px-2 rounded-xl hover:bg-[#5f5e5e] transition-all flex gap-1 items-center cursor-pointer m-2"
              >
                {isCopied ? (
                  <HiCheck className="text-green-500 text-xs font-sans" /> // Show Tick Icon when copied
                ) : (
                  <PiCopySimpleBold className="text-white text-xs font-sans" /> // Show Copy Icon when not copied
                )}
                <div className="text-xs font-sans">{isCopied ? "Copied" : "Copy"}</div>
              </button>
            )}
          </div>

          {/* Membership */}
          {!hasMembership && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg">
              <button
                onClick={handlePurchaseClick} // ✅ Redirects instead of opening modal
                className="text-white font-sans font-medium py-3 px-5 rounded-2xl bg-[#2b2a2a] shadow-sm hover:shadow-gray-500"
              >
                Purchase Membership
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
