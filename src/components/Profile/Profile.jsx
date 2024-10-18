import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const toggleProfile = () => setOpen((prev) => !prev);

  return (
    <div className="relative">
      {/* Profile Button */}

      <button
        onClick={toggleProfile}
        // className="flex items-center gap-2"
        className={`flex items-center gap-2 transition duration-300 ${
          open ? "bg-light" : "bg-transparent"
        } p-2 rounded-lg`}
      >
        <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12">
          <img
            src="https://img.freepik.com/free-photo/close-up-young-person-barbeque_23-2149271990.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="hidden lg:flex flex-col items-start">
          <p className="font-bold">Erica</p>
          <p className="text-gray-400">e@gmail.com</p>
        </div>
        <div className="hidden lg:flex">
          <KeyboardArrowUpIcon />
        </div>
      </button>

      {/* Popup Menu */}
      {open && (
        <div className="absolute bg-dark lg:bg-light text-white p-4 lg:p-2 xl:p-3 shadow-lg top-12 lg:top-auto lg:bottom-20 right-0 w-60 lg:w-full h-fit rounded-lg flex flex-col gap-4 cursor-pointer">
          <MenuItem icon={<AccountCircleIcon />} label="My account" />
          <Divider />
          <MenuItem icon={<VerifiedUserIcon />} label="Privacy policy" />
          <MenuItem icon={<FeedbackIcon />} label="Share feedback" />
          <Divider />
          <MenuItem icon={<ExitToAppIcon />} label="Sign out" />
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ icon, label }) => (
  <div className="flex items-center gap-4">
    {icon}
    {label}
  </div>
);

const Divider = () => (
  <hr className="border-b-gray-400 border-b-[0.2px] opacity-10" />
);

export default Profile;
