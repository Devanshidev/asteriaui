// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import logo from "../assets/logo.png";
// import { CgMenu } from "react-icons/cg";
// import { IoClose } from "react-icons/io5"; // Close icon
// import Sidebar from "./Sidebar";

// const Header = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="bg-[#121212] w-full border-b border-[#171717] relative">
//       <div className="p-2 mx-4 flex items-center justify-between">
//         {/* Logo & Name */}
//         <div className="flex items-center gap-2">
//           <Image src={logo} alt="Asteria UI Logo" className="w-10" />
//           <div className="text-xl font-bold font-markazi text-white text-[15px] pn:max-md:hidden">
//             ASTERIA UI
//           </div>
//         </div>

//         {/* Hamburger Menu */}
//         <button
//           className="text-[#818181] hover:text-white text-2xl md:hidden"
//           onClick={() => setIsSidebarOpen(true)}
//         >
//           <CgMenu />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full w-[250px] bg-black border-l border-[#171717] shadow-lg transform ${
//           isSidebarOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out`}
//       >
//         <div className="w-full h-full"><Sidebar /></div>
//       </div>

//       {/* Overlay (Optional, to close sidebar when clicking outside) */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50"
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Header;
// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import logo from "../assets/logo.png";
// import { auth, provider, signInWithPopup } from "../firebase";

// const Header = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [user, setUser] = useState<any>(null); // Store logged-in user

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       setUser(result.user); // Save user data
//       setIsModalOpen(false); // Close modal after login
//       console.log("User Logged In:", result.user);
//     } catch (error) {
//       console.error("Login Error:", error);
//     }
//   };

//   return (
//     <>
//       {/* Header */}
//       <div className="bg-[#121212]/80 w-full fixed top-0 z-50 p-1 px-8 flex justify-between items-center border-b border-[#2E2F31]">
//         {/* Left Section - Logo & Name */}
//         <div className="flex items-center gap-3">
//           <Image src={logo} alt="Asteria UI" className="w-12 h-11" />
//           <div className="text-white text-2xl font-sans font-bold">Asteria UI</div>
//         </div>

//         {/* Right Section - Show Login or User Info */}
//         {user ? (
//           <div className="flex items-center gap-2 text-white">
//             <Image
//               src={user.photoURL || "/default-avatar.png"}
//               alt="User Avatar"
//               width={36}
//               height={36}
//               className="rounded-full"
//             />
//             <span className="text-sm">{user.displayName}</span>
//           </div>
//         ) : (
//           <div
//             onClick={() => setIsModalOpen(true)}
//             className="px-4 py-0.5 rounded-lg flex justify-center items-center bg-white shadow-md cursor-pointer hover:bg-gray-100 active:scale-95 transition duration-200"
//           >
//             <button className="text-black text-sm font-sans font-bold">Log In</button>
//           </div>
//         )}
//       </div>

//       {/* Login Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-md z-50">
//           <div className="bg-[#1c1b1b] p-6 rounded-lg shadow-lg w-96 text-center relative">
//             <h2 className="text-xl font-sans font-semibold mb-4 text-white">Log In</h2>

//             {/* Google Login Button */}
//             <button
//               onClick={handleGoogleLogin}
//               className="text-white border border-[#363535] py-2 rounded-lg font-sans hover:bg-white hover:text-black transition"
//             >
//               Login with Google
//             </button>

//             {/* Close Button */}
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-2 right-2 text-[#717171] hover:text-white"
//             >
//               ✖
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { auth, provider, signInWithPopup } from "../firebase";
import logo2 from "../assets/logo2.png";
import Cookies from "js-cookie"; // ✅ Import js-cookie
import { IoIosArrowForward } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { RiShareForward2Fill } from "react-icons/ri";; // Import heart icons

const Header = () => {
  const [user, setUser] = useState<any>(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false); // Track like state
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Retrieve user data from cookies
    const savedUser = Cookies.get("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // ✅ Retrieve likes and like status from cookies
    const savedLikes = Cookies.get("likes");
    const likedStatus = Cookies.get("isLiked");

    if (savedLikes) setLikes(parseInt(savedLikes));
    if (likedStatus === "true") setIsLiked(true);
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (result && result.user) {
        const userData = {
          name: result.user.displayName,
          email: result.user.email,
          membership: result.user.hasPaid,
          plan: result.user.type,
        };
        const res = await axios.post("http://localhost:3001/login", userData);
        if (res.status === 200) {
          console.log("User logged in successfully");
          setUser(user);
          Cookies.set("user", JSON.stringify(user), { expires: 7 });
        }
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = () => {
    setUser(null);
    Cookies.remove("user");
    setShowLogoutPopup(false);
  };

  // ✅ Toggle Like Function using Cookies
  const toggleLike = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1);
      setIsLiked(false);
      Cookies.set("likes", likes - 1, { expires: 7 });
      Cookies.set("isLiked", "false", { expires: 7 });
    } else {
      setLikes((prev) => prev + 1);
      setIsLiked(true);
      Cookies.set("likes", likes + 1, { expires: 7 });
      Cookies.set("isLiked", "true", { expires: 7 });
    }
  };

  return (
    <>
      {/* Header */}
      <div className="bg-black/30 w-full fixed top-0 z-50 flex justify-between items-center p-1.5 pt-3 px-20">
        {/* Left Section - Logo & Name */}
        {path === "/components" || path === "/" || path === "/components/plans"  ? (
          <div className="flex items-center gap-3 group">
            <Image
              src={logo2}
              alt="Asteria UI"
              className="w-10 h-9 shadow-md rounded-lg hover:shadow-gray-500 transition duration-200 ease-in-out"
            />
            <div className="text-white text-xl font-inter font-semibold">
              Asteria UI
            </div>
          </div>
        ) : (
          <div>
            <Image
              src={logo2}
              alt="Asteria UI"
              className="w-10 h-9 shadow-md rounded-lg hover:shadow-gray-500 transition duration-200 ease-in-out"
            />
          </div>
        )}

        {/* Right Section */}
        <div className="flex gap-3 items-center">
          {/* ✅ Unlock Premium Button */}
          {path === "/components" || path === "/" || path === "/components/plans" ? (
            <Link
              href="/components/plans"
              className="text-white text-[10px] rounded-full shadow-sm shadow-emerald-500 py-1 px-3 flex items-center gap-1 font-semibold hover:shadow-white cursor-pointer"
            >
              Unlock Premium
              <IoIosArrowForward />
            </Link>
          ) : (
            <div className="text-white text-xl flex items-center gap-1">
                <div className="text-white mr-2"><RiShareForward2Fill /></div>
              <button onClick={toggleLike} className="focus:outline-none">
                {isLiked ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
              <span className="text-sm">{likes}</span>
            
            </div>
          )}

          {/* ✅ Log In / Profile Section */}
          {!user ? (
            <button
              onClick={handleGoogleLogin}
              className="px-3 py-1 rounded-2xl bg-white shadow-md shadow-gray-500 gap-2 items-center text-black text-[11px] font-medium font-sans hover:bg-gray-100 active:scale-95 transition duration-200 flex"
            >
              Log In
            </button>
          ) : (
            <div className="flex items-center gap-2">
              {/* ✅ Profile Picture */}
              {user.photoURL ? (
                <Image
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                  width={32}
                  height={32}
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs">
                  {user.displayName ? user.displayName[0].toUpperCase() : "?"}
                </div>
              )}

              {/* ✅ Logout Button */}
              <button
                onClick={() => setShowLogoutPopup(true)}
                className="px-3 py-1 rounded-full bg-white text-[11px] font-medium font-sans text-black  transition duration-200"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg text-center space-y-10">
            <p className="text-white font-sans text-base font-medium">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handleLogout}
                className="w-[50%] py-1 font-sans text-base font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
              >
                Yes
              </button>
              <button
                onClick={() => setShowLogoutPopup(false)}
                className="w-[50%] py-1 font-sans text-base font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition duration-200"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;



// ----------------------------------------------------scroll blur header-------------------------------------------------------------//
// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { auth, provider, signInWithPopup } from "../firebase"; // Import Firebase auth
// import logo2 from "../assets/logo2.png";
// import Cookies from "js-cookie"; // Import js-cookie
// import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

// const Header = () => {
//   const [user, setUser] = useState<any>(null); // Use 'any' for user state
//   const [menuOpen, setMenuOpen] = useState(false); // For dropdown menu
//   const [scrolled, setScrolled] = useState(false); // Track if the page is scrolled

//   useEffect(() => {
//     // Check if the user data is available in cookies on page load
//     const savedUser = Cookies.get("user");
//     if (savedUser) {
//       setUser(JSON.parse(savedUser)); // Parse and set user data from cookies
//     }

//     // Track scroll position to change header style
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true); // Apply blur effect when scrolled
//       } else {
//         setScrolled(false); // Revert to original state when not scrolled
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const userData = result.user;
//       setUser(userData); // Save user data in state

//       // Save user data in cookies
//       Cookies.set("user", JSON.stringify(userData), { expires: 7 }); // Set cookie to expire in 7 days
//     } catch (error) {
//       console.error("Login failed", error);
//     }
//   };

//   const handleLogout = () => {
//     setUser(null); // Clear user state
//     Cookies.remove("user"); // Remove user data from cookies
//     setMenuOpen(false); // Close the menu on logout
//   };

//   return (
//     <>
//       {/* Header */}
//       <div
//         className={`${
//           scrolled
//             ? "bg-black bg-opacity-50 backdrop-blur-md transition-all duration-300"
//             : "bg-black"
//         } w-full fixed top-0 z-50 flex justify-between items-center p-1.5 pt-3 px-20`}
//       >
//         {/* Left Section - Logo & Name */}
//         <div className="flex items-center gap-3 group ">
//           <Image
//             src={logo2}
//             alt="Asteria UI"
//             className="w-10 h-9 shadow-md rounded-lg hover:shadow-gray-500  transition duration-200 ease-in-out"
//           />
//           <div className="text-white text-xl font-inter font-semibold">Asteria UI</div>
//         </div>

//         {/* Right Section */}
//         <div className="flex gap-3 items-center">
//           {/* ✅ Unlock Premium Button - Always Visible */}
//           <div className="text-white text-[10px] rounded-full shadow-sm shadow-emerald-500 py-1 px-3 flex items-center gap-1 font-semibold hover:shadow-white cursor-pointer">
//             Unlock Premium
//             <IoIosArrowForward />
//           </div>

//           {/* ✅ Log In / Profile Section */}
//           {!user ? (
//             <button
//               onClick={handleGoogleLogin}
//               className="px-3 py-1 rounded-2xl bg-white shadow-md shadow-gray-500 gap-2 items-center text-black text-[11px] font-medium font-sans hover:bg-gray-100 active:scale-95 transition duration-200 flex"
//             >
//               Log In
//             </button>
//           ) : (
//             <>
//               {/* Profile Picture & Dropdown */}
//               <div className="relative flex items-center gap-2 cursor-pointer">
//                 {user.photoURL ? (
//                   <Image
//                     src={user.photoURL}
//                     alt="User Avatar"
//                     className="w-8 h-8 rounded-full"
//                     width={32}
//                     height={32}
//                     onClick={() => setMenuOpen(!menuOpen)}
//                   />
//                 ) : (
//                   <div
//                     className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs"
//                     onClick={() => setMenuOpen(!menuOpen)}
//                   >
//                     {user.displayName ? user.displayName[0].toUpperCase() : "?"}
//                   </div>
//                 )}

//                 {/* Dropdown Arrow */}
//                 <IoIosArrowDown
//                   className={`text-white text-lg transition-transform ${
//                     menuOpen ? "rotate-180" : ""
//                   }`}
//                   onClick={() => setMenuOpen(!menuOpen)}
//                 />

//                 {/* Dropdown Menu */}
//                 {menuOpen && (
//                   <div className="absolute top-10 right-0 bg-[#2D2E2F] hover:bg-gray-800 text-white text-sm rounded-2xl shadow-sm hover:shadow-gray-500 w-32">
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-2 font-medium font-sans text-sm transition"
//                     >
//                       Log Out
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
