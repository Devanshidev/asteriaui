import React from "react";
import Sidebar from "../component/Sidebar"; // Import your Sidebar component
import Header from "../component/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col bg-black h-screen ">
      <div className="h-[60px] w-full z-50 fixed top-0">
            <Header />
          </div>
      <div className="flex w-full h-full ">
      
        {/* Fixed Sidebar */}
        {/* <div className="w-[280px] mt-14 bg-black  h-full border-r border-[#171717] fixed left-0 top-0 pn:max-md:hidden">
          
          <Sidebar />
        </div> */}

        {/* Scrollable Content */}
        <div className=" h-screen ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
