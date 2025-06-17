// // import React from "react";
// // import { IoMdArrowRoundBack } from "react-icons/io";
// // import { HiMenu } from "react-icons/hi";
// // import Link from "next/link";
// // import Header from "./Header";
// // const Sidebar = () => {
// //   return (
// //     <div className=" bg-black space-y-20 text-sm flex flex-col w-full h-screen">
// //       <div className="flex flex-colitems-center h-[60px] px-10 mt-5">
// //         <div className="text-white text-2xl"><HiMenu /></div>
// //         {/* <div className="text-white text-2xl font-markazi font-semibold">
// //           ASTERIA UI
// //         </div> */}

// //       </div>
// //       {/* <div className='rounded-lg border border-[#464646] px-1 py-1.5 flex gap-1 mx-3 text-[12px]'>
// //         <GrFormSearch className='text-xl'/>
// //          Search Components
// //         </div> */}
// //       <div className="cursor-pointer space-y-5 font-medium  flex-col flex px-10">
// //         <Link
// //           href="/components/buttons"
// //           className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
// //         >
// //           Button
// //         </Link>
// //         {/* <Link href="/components/Sidebar" className=' hover:text-white text-[#7f7f7f]'>Sidebar</Link> */}
// //         <Link
// //           href="/components/image-reveal"
// //           className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
// //         >
// //           Image Reveal
// //         </Link>
// //         <Link
// //           href="/components/type-writer"
// //           className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
// //         >
// //           Type-Writer
// //         </Link>
// //         {/* <Link
// //           href="/components/glass-button"
// //           className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
// //         >
// //           Glass Button
// //         </Link> */}
// //         {/* <Link
// //           href="/components/gradient-button"
// //           className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
// //         >
// //           Gradient Button
// //         </Link> */}
// //         {/* <Link
// //           href="/components/moving-gradient"
// //           className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
// //         >
// //           Moving Gradient Button
// //         </Link> */}
// //         {/* <Link
// //           href="/components/moving-line"
// //           className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
// //         >
// //           Moving Line Button
// //         </Link> */}
// //         <Link
// //           href="/components/hover-nav"
// //           className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
// //         >
// //           Hover Navigation Bar
// //         </Link>
// //         {/* <Link
// //           href="/components/tracing-beam"
// //           className=" hover:text-white text-[#7f7f7f]"
// //         >
// //           Tracing Beam
// //         </Link> */}
// //         <Link
// //           href="/components/pop-up"
// //           className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
// //         >
// //           Popup
// //         </Link>
// //         <Link
// //           href="/components/card"
// //           className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
// //         >
// //           Card
// //         </Link>
// //         <Link
// //           href="/components/chat"
// //           className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
// //         >
// //           Chat
// //         </Link>
// //         <Link
// //           href="/components/tooltip"
// //           className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
// //         >
// //        Tooltip
// //        </Link>
// //        <Link
// //           href="/components/image-effect"
// //           className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
// //         >
// //        Interactive Image
// //        </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { MdOutlineSmartButton } from "react-icons/md";
// import { IoIosImages } from "react-icons/io";
// import { TbWriting } from "react-icons/tb";
// import { TbLayoutNavbarExpandFilled } from "react-icons/tb";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { BiCard } from "react-icons/bi";
// import { PiChatsCircle } from "react-icons/pi";
// import { TbTooltip } from "react-icons/tb";
// import { TbPhotoSpark } from "react-icons/tb";
// import { RiDropdownList } from "react-icons/ri";
// import { LiaGlobeSolid } from "react-icons/lia";
// import { LuCalendarClock } from "react-icons/lu";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { MdTableView } from "react-icons/md";
// import { TbLoader3 } from "react-icons/tb";
// import { RiAiGenerateText } from "react-icons/ri";
// import { BsToggles } from "react-icons/bs";
// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const menuItems = [
//     { href: "/components/buttons", label: "Button" },
//     { href: "/components/image-reveal", label: "Image Reveal" },
//     { href: "/components/type-writer", label: "Type-Writer" },
//     { href: "/components/hover-nav", label: "Hover Navigation Bar" },
//     { href: "/components/pop-up", label: "Popup" },
//     { href: "/components/card", label: "Card" },
//     { href: "/components/chat", label: "Chat" },
//     { href: "/components/tooltip", label: "Tooltip" },
//     { href: "/components/image-effect", label: "Interactive Image" },
//   ];

//   return (
//     <>
//       <div className=" space-y-20 text-sm flex flex-col w-full h-[calc(100vh-60px)] py-6  ">
//         {/* <div className='rounded-lg border border-[#464646] px-1 py-1.5 flex gap-1 mx-3 text-[12px]'>
//     //         <GrFormSearch className='text-xl'/>
//     //          Search Components
//     //         </div> */}
//         <div className="cursor-pointer  space-y-1 overflow-auto font-medium  flex-col flex px-10 custom-scrollbar">
//         <Link
//             href="/components/animated-text"
//             className=" hover:text-white p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717]  text-[#7f7f7f] hover:translate-x-1"
//           >
//             <RiAiGenerateText className="h-5 w-5" />
//             Animated Text
//           </Link>
//           <Link
//             href="/components/buttons"
//             className=" hover:text-white p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717]  text-[#7f7f7f] hover:translate-x-1"
//           >
//             <MdOutlineSmartButton className="h-5 w-5" />
//             Button
//           </Link>
//           {/* <Link href="/components/Sidebar" className=' hover:text-white text-[#7f7f7f]'>Sidebar</Link> */}
//           <Link
//             href="/components/image-reveal"
//             className=" hover:text-white p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717]  text-[#7f7f7f] hover:translate-x-1"
//           >
//             <IoIosImages className="h-5 w-5" />
//             Image Reveal
//           </Link>
//           <Link
//             href="/components/type-writer"
//             className=" hover:text-white p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717]  text-[#7f7f7f] hover:translate-x-1"
//           >
//              <TbWriting className="h-5 w-5" />
//             Type-Writer
//           </Link>
//           {/* <Link
//               href="/components/glass-button"
//               className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
//             >
//               Glass Button
//             </Link> */}
//           {/* <Link
//               href="/components/gradient-button"
//               className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
//             >
//               Gradient Button
//             </Link> */}
//           {/* <Link
//               href="/components/moving-gradient"
//               className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
//             >
//               Moving Gradient Button
//             </Link> */}
//           {/* <Link
//               href="/components/moving-line"
//               className=" hover:text-white text-[#7f7f7f] hover:translate-x-1"
//             >
//               Moving Line Button
//             </Link> */}
//           <Link
//             href="/components/hover-nav"
//             className=" hover:text-white p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717]  text-[#7f7f7f] hover:translate-x-1"
//           >
//             <TbLayoutNavbarExpandFilled className="h-5 w-5" />
//             Hover Navigation Bar
//           </Link>
//           {/* <Link
//               href="/components/tracing-beam"
//               className=" hover:text-white text-[#7f7f7f]"
//             >
//               Tracing Beam
//             </Link> */}
//           <Link
//             href="/components/pop-up"
//             className=" hover:text-white p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717]  text-[#7f7f7f] hover:translate-x-1"
//           >
//             <BiMessageSquareDetail  className="h-5 w-5" />
//             Popup
//           </Link>
//           <Link
//             href="/components/card"
//             className=" hover:text-white  p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717] text-[#7f7f7f] hover:translate-x-1"
//           >
//             <BiCard   className="h-5 w-5" />
//             Card
//           </Link>
//           <Link
//             href="/components/chat"
//             className=" hover:text-white  p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717] text-[#7f7f7f] hover:translate-x-1"
//           >
//             <PiChatsCircle className="h-5 w-5" />
//             Chat
//           </Link>
//           <Link
//             href="/components/toggle"
//             className=" hover:text-white p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717]  text-[#7f7f7f] hover:translate-x-1"
//           >
//             <BsToggles className="h-5 w-5" />
//             Toggle
//           </Link>
//           <Link
//             href="/components/tooltip"
//             className=" hover:text-white p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717] text-[#7f7f7f] hover:translate-x-1"
//           >
//              <TbTooltip className="h-5 w-5" />
//             Tooltip
//           </Link>
//           <Link
//             href="/components/image-effect"
//             className=" hover:text-white p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717] text-[#7f7f7f] hover:translate-x-1"
//           >
//             <TbPhotoSpark className="h-5 w-5" />
//             Interactive Image
//           </Link>
//           <Link
//             href="/components/dropdown"
//             className=" hover:text-white p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717] text-[#7f7f7f] hover:translate-x-1"
//           >
//             <RiDropdownList  className="h-5 w-5" />
//             Dropdown
//           </Link>
//           <Link
//             href="/components/globe"
//             className=" hover:text-white  p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717] text-[#7f7f7f] hover:translate-x-1"
//           >
//             <LiaGlobeSolid   className="h-5 w-5" />
//             Globe
//           </Link>
//           <Link
//             href="/components/date-time"
//             className=" hover:text-white p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717] text-[#7f7f7f] hover:translate-x-1"
//           >
//             <LuCalendarClock    className="h-5 w-5" />
//             Date Time Picker
//           </Link>
//           <Link
//             href="/components/toast"
//             className=" hover:text-white p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717]  text-[#7f7f7f] hover:translate-x-1"
//           >
//             <IoNotificationsOutline     className="h-5 w-5" />
//             Toast
//           </Link>
//           <Link
//             href="/components/table"
//             className=" hover:text-white p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717]  text-[#7f7f7f] hover:translate-x-1"
//           >
//              <MdTableView     className="h-5 w-5" />
//             Table
//           </Link>
//           <Link
//             href="/components/loading"
//             className=" hover:text-white p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717]  text-[#7f7f7f] hover:translate-x-1"
//           >
//             <TbLoader3     className="h-5 w-5" />
//             Loading
//           </Link>
//         </div>
//       </div>

//       {/* <div className='sm:hidden'>
    
//       <button 
//         onClick={toggleSidebar}
//         className="fixed top-20 left-10 text-white z-50 text-2xl font-bold"
//       >
//         ☰
//       </button>

     
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={toggleSidebar}
//         />
//       )}

     
//       <div className={`fixed top-0 left-0 h-screen bg-black w-64 transform transition-transform duration-300 ease-in-out z-50 ${
//         isOpen ? 'translate-x-0' : '-translate-x-full'
//       }`}>
//         <div className="space-y-20 text-sm flex flex-col w-full h-screen">
//           <div className="flex flex-col items-start h-[60px] px-10 mt-5">
//             <button 
//               className="text-white text-2xl font-bold" 
//               onClick={toggleSidebar}
//             >
//               ☰
//             </button>
//           </div>

//           <div className="cursor-pointer space-y-5 font-medium flex-col flex px-10">
//             {menuItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className="hover:text-white text-[#7f7f7f] hover:translate-x-1 transition-all duration-200"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//       </div> */}
//     </>
//   );
// };

// export default Sidebar;


"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiCard, BiMessageSquareDetail } from "react-icons/bi";
import { BsToggles } from "react-icons/bs";
import { IoIosImages } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { LiaGlobeSolid } from "react-icons/lia";
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineSmartButton, MdTableView } from "react-icons/md";
import { PiChatsCircle, PiWavesBold } from "react-icons/pi";
import { RiAiGenerateText, RiDropdownList } from "react-icons/ri";
import { TbLayoutNavbarExpandFilled, TbLoader3, TbPhotoSpark, TbSparkles, TbTooltip, TbWriting } from "react-icons/tb";
import { AiOutlineSwitcher } from "react-icons/ai";



const Sidebar = () => {
  const pathname = usePathname(); // Get the current path

  const menuItems = [
    { href: "/components/animated-text", label: "Animated Text", icon: <RiAiGenerateText /> },
    { href: "/components/buttons", label: "Buttons", icon: <MdOutlineSmartButton /> },
    { href: "/components/card", label: "Card", icon: <BiCard /> },
    { href: "/components/chat", label: "Chat", icon: <PiChatsCircle /> },
    { href: "/components/switcher", label: "Content Switcher", icon: <AiOutlineSwitcher  /> },
    { href: "/components/date-time", label: "Date Time Picker", icon: <LuCalendarClock /> },
    { href: "/components/dropdown", label: "Dropdown", icon: <RiDropdownList /> },
    { href: "/components/globe", label: "Globe", icon: <LiaGlobeSolid /> },
    { href: "/components/hover-nav", label: "Hover Navigation Bar", icon: <TbLayoutNavbarExpandFilled /> },
    { href: "/components/image-effect", label: "Interactive Image", icon: <TbPhotoSpark /> },
    { href: "/components/image-reveal", label: "Image Reveal", icon: <IoIosImages /> },
    { href: "/components/loading", label: "Loading", icon: <TbLoader3 /> },
    { href: "/components/particle", label: "Particle Background", icon: <TbSparkles  /> },
    { href: "/components/pop-up", label: "Popup", icon: <BiMessageSquareDetail /> },
    { href: "/components/table", label: "Table", icon: <MdTableView /> },
    { href: "/components/toast", label: "Toast", icon: <IoNotificationsOutline /> },
    { href: "/components/toggle", label: "Toggle", icon: <BsToggles /> },
    { href: "/components/tooltip", label: "Tooltip", icon: <TbTooltip /> },
    { href: "/components/type-writer", label: "Type-Writer", icon: <TbWriting /> },
    { href: "/components/wavy", label: "Waves", icon: <PiWavesBold /> },
  ];

  return (
    <div className="space-y-20 text-sm flex flex-col w-full h-[calc(100vh-60px)] py-6 overflow-auto custom-scrollbar">
      <div className="cursor-pointer space-y-1 font-medium flex-col flex px-10">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`p-2 rounded-xl flex items-center gap-2 hover:bg-[#171717] transition-all duration-200
              ${pathname === item.href ? "text-white" : "text-[#7f7f7f] hover:text-white hover:translate-x-1"}`}
          >
            <span className="h-5 w-5 ">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
