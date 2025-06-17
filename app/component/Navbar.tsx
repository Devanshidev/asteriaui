// "use client";
// import React, { useState } from 'react';
// import { AiFillHome } from "react-icons/ai";
// import { MdDashboardCustomize, MdPerson } from "react-icons/md";
// import { RiSettings4Fill } from "react-icons/ri";
// import { MdLogout } from "react-icons/md";
// import { ThemeToggler } from './ThemeToggler';

// const Navbar = () => {
//   const [active, setActive] = useState("");

//   const navItems = [
//     { name: "Home", icon: <AiFillHome className="text-[20px]" /> },
//     { name: "Dashboard", icon: <MdDashboardCustomize className="text-[20px]" /> },
//     { name: "Profile", icon: <MdPerson className="text-[20px]" /> },
//     { name: "Settings", icon: <RiSettings4Fill className="text-[20px]" /> },
//     { name: "Logout", icon: <MdLogout className="text-[20px] text-red-500" />, red: true },
//   ];

//   return (
//     <div className="flex  ">
//       {/* Sidebar */}
//       <div className="h-screen w-[18%] dark:bg-[#262626] bg-[#FFFFFF] pn:max-sm:w-full pn:max-sm:h-[60px] pn:max-sm:rounded-t-md pn:max-sm:fixed bottom-0 pn:max-sm:z-50">
//         <div className="p-4 flex flex-col justify-between h-full pn:max-sm:flex-row pn:max-sm:items-center">
//           {/* Logo Section */}
//           <div className="flex items-center gap-2 pn:max-sm:hidden">
//             <div className="rounded-2xl w-[40px] h-[40px] bg-slate-200 flex justify-center items-center"></div>
//             <div className="text-xl font-semibold dark:text-white text-[#272727]">Grovyo</div>
//           </div>

//           {/* Navigation Items */}
//           <div
//             className="space-y-4 text-sm w-full flex flex-col pn:max-sm:flex-row pn:max-sm:justify-evenly pn:max-sm:space-y-0 "
           
//           >
//             {navItems.map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center gap-2 px-4 py-2 ${
//                   active === item.name
//                     ? "dark:text-white text-[#272727]"
//                     : item.red
//                     ? "text-red-500"
//                     : "dark:text-[#83858A] text-[#464647]"
//                 } dark:hover:text-[#FFFFFF] hover:text-black cursor-pointer`}
//                 onClick={() => setActive(item.name)}
//               >
//                 {item.icon}
//                 <div className="pn:max-sm:hidden hover:translate-x-1 transition-transform duration-200">
//                   {item.name}
//                 </div>
//               </div>
//             ))}
//           </div>
       
//           {/* User Section */}
//           <div className="flex items-center gap-2 pn:max-sm:hidden">
//             <div className="rounded-2xl w-[40px] h-[40px] bg-slate-200 flex justify-center items-center "></div>
//             <div className="text-sm dark:text-white text-[#272727] mr-24">Name</div>
//             <div><ThemeToggler/></div>
//             </div>
//           </div>
//       </div>

//       {/* Right Side */}
//       <div className="w-[82%] h-screen dark:bg-[#171717] bg-white border-2 rounded-tl-xl dark:border-[#404040] border-[#e2e1e1] p-10  pn:max-sm:w-full">
//         <div className="flex justify-center items-center h-[80px] w-[100%] text-[20px] font-semibold dark:text-white text-[#272727] dark:bg-[#262626] bg-[#e2e1e1] rounded-xl animate-pulse mb-6"></div>
//         <div className="flex gap-5">
//           <div className="h-[180px] w-[400px] text-[20px] font-semibold dark:text-white text-[#272727] dark:bg-[#262626] bg-[#e2e1e1]  animate-pulse rounded-xl"></div>
//           <div className="h-[180px] w-[400px] text-[20px] font-semibold dark:text-white text-[#272727] dark:bg-[#262626] bg-[#e2e1e1]  animate-pulse rounded-xl"></div>
//           <div className="h-[180px] w-[400px] text-[20px] font-semibold dark:text-white text-[#272727] dark:bg-[#262626] bg-[#e2e1e1]  animate-pulse rounded-xl"></div>
//         </div>
//         <div className="flex justify-center items-center h-[350px] w-[100%] text-[20px] font-semibolddark:text-white text-[#272727] dark:bg-[#262626] bg-[#e2e1e1]  animate-pulse rounded-xl mt-6"></div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
