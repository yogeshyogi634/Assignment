import React from "react";
import Profile from "../Profile/Profile";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import EventAvailableSharpIcon from "@mui/icons-material/EventAvailableSharp";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Sidebar = ({ sidebarOpen }) => {
  const menuItems = [
    { icon: <HomeSharpIcon />, label: "Home" },
    { icon: <EventAvailableSharpIcon />, label: "Events" },
    { icon: <FilterFramesIcon />, label: "Orders" },
    { icon: <SettingsIcon />, label: "Settings" },
  ];

  const upcomingEvents = [
    "Bear Hug: Live in Concert",
    "Six Fingers-DJ Set",
    "We All Look The Same",
    "Viking People",
  ];

  return (
    <aside
      className={`bg-black z-50 text-white w-full h-full lg:h-full lg:static fixed lg:translate-x-0 transform transition-transform duration-1000 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="p-10 mt-20 lg:mt-0">
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <LogoDevIcon />
            <p>Neo UI</p>
          </div>
          <KeyboardArrowDownIcon />
        </div>
        <hr className="mt-8 border-b-gray-400 border-b-[0.2px] opacity-10" />

        {/* Navigation */}
        <nav className="mt-8 mb-8 text-base">
          <ul className="flex flex-col gap-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-gray-400 flex items-center gap-4"
                >
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Upcoming Features */}
        <div>
          <p className="text-gray-400 text-sm mb-4 mt-12">Upcoming Events</p>
          <div className="flex flex-col gap-4 text-base">
            {upcomingEvents.map((event, index) => (
              <p key={index} className=" hover:text-gray-400 cursor-pointer">
                {event}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/*  Profile and Support Section */}
      <div className="absolute bottom-0 w-full hidden lg:flex flex-col p-10  ">
        <div className="flex flex-col gap-4">
          <div className="hover:text-gray-400 flex items-center gap-4 cursor-pointer">
            <HelpIcon />
            Support
          </div>
          <div className="hover:text-gray-400 flex items-center gap-4 cursor-pointer">
            <AutoAwesomeIcon />
            <p>Changelog</p>
          </div>
        </div>
        <hr className="mt-6 mb-6 border-b-gray-400 border-b-[0.2px] opacity-10" />
        {/* Profile */}
        <Profile />
      </div>
    </aside>
  );
};

export default Sidebar;
