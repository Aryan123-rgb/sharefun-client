// MobileMenu.js
import React from "react";
import { LuLogOut } from "react-icons/lu";
import { FaBell } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdMenu } from "react-icons/md";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const MobileMenu = ({ handleLogout }) => {
  return (
    <Menu>
      <MenuHandler>
        <button className="focus:outline-none">
          <MdMenu className="text-3xl text-ascent-1" />
        </button>
      </MenuHandler>
      <MenuList className="bg-white mt-2 w-48 rounded-md shadow-md">
        <MenuItem className="flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
          <CgProfile className="text-ascent-1 text-lg" />
          <span className="text-ascent-1 text-lg">My Profile</span>
        </MenuItem>
        <MenuItem className="flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
          <IoPeople className="text-ascent-1 text-lg" />
          <span className="text-ascent-1 text-lg">Friends</span>
        </MenuItem>
        <MenuItem className="flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
          <FaBell className="text-ascent-1 text-lg" />
          <span className="text-ascent-1 text-lg">Requests</span>
        </MenuItem>
        <MenuItem
          onClick={handleLogout}
          className="flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-md cursor-pointer"
        >
          <LuLogOut className="text-ascent-1 text-lg" />
          <span className="text-ascent-1 text-lg">Logout</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MobileMenu;
