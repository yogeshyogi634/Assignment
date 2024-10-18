import React from "react";
import Profile from "../Profile/Profile";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ setSidebarOpen, sidebarOpen }) => {
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <nav className="flex justify-between items-center px-6 py-4 text-white lg:hidden sticky top-0 z-50 bg-lightGray shadow-lg">
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
