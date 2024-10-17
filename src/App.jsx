import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-full h-full bg-black text-white">
      {/* Sidebar for Mobile and Tablet */}
      <div className="lg:hidden">
        <Sidebar sidebarOpen={sidebarOpen} />
      </div>

      {/* Static Sidebar for Desktop */}
      <div className=" flex-[1] hidden lg:flex lg:fixed lg:top-0 lg:left-0 lg:h-full  ">
        <Sidebar />
      </div>

      {/*Navbar and Dashboard */}
      <div className="flex-[4] lg:ml-[250px] flex flex-col w-full h-screen overflow-y-auto bg-zinc-900 rounded-none lg:rounded-l-[16px] xl:rounded-l-[32px] shadow-lg">
        <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
