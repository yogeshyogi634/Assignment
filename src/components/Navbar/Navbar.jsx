import React from "react";
import Profile from "../Profile/Profile";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ setSidebarOpen, sidebarOpen }) => {
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <nav className="flex justify-between items-center p-8 text-white lg:hidden">
      {/* Sidebar Toggle Button */}
      <button onClick={toggleSidebar} className="text-white z-50">
        {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      {/* Profile Section */}
      <Profile />
    </nav>
  );
};

export default Navbar;
