import React from "react";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 md:px-8 py-3">
      <div className="flex gap-3 items-center">
        <img src="./src/assets/Logo.svg" alt="Logo" className="w-8 md:w-12 lg:w-20 lg:h-25" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs md:text-sm text-white font-medium rounded-full px-2.5 md:px-4 py-1.5 md:justify-between">
          Hoister is Hiring
        </button>
      </div>
      <ul className="hidden lg:flex justify-between items-center gap-6 font-lato text-gray-400">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hoister</a></li>
      </ul>
      <div className="hidden lg:flex justify-between items-center gap-6">
        <a href="#" className="font-lato text-gray-400 font-medium gap-4">Sign in</a>
        <button className="rounded-md px-3 py-2 bg-blue-400 hover:bg-blue-600 text-white text-lg">
            Join Waitlist
          </button>
      </div>
      <div className="lg:hidden">
        <FaBars className="text-xl text-gray-700" />
      </div>
    </div>
  );
};

export default Header;
