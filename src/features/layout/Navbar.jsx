import React from "react";
import { NavLink } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";

function Navbar() {
  return (
    <>
      <nav className=" w-full h-full">
        <div className=" flex flex-col  w-full h-full pt-2 gap-2 bg-[#313137]">
          <h1 className="ml-3 sm:ml-6 border-b-2 pb-2 text-[#e52b09] text-xl sm:text-3xl font-bold ">
            Mi Logo
          </h1>
          <ul className="flex flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-6 pt-3 pb-3 group flex items-center gap-3 z-10 text-[#faf3f4] ${
                  isActive ? "bg-[#19191c] " : "bg-[#313137] "
                }`
              }
            >
              <span className="absolute inset-0 origin-left scale-x-0 transition-transform ease-in-out duration-300 group-hover:scale-x-100 z-0 bg-red-500"></span>
              <FaHome className="relative z-1" />
              <span className="relative z-10 hidden sm:block">Inicio</span>
            </NavLink>
            <NavLink
              to="/catalogue"
              className={({ isActive }) =>
                `relative px-6 pt-3 pb-3 group flex items-center gap-3 z-10 text-[#faf3f4] ${
                  isActive ? "bg-[#19191c] " : "bg-[#313137] "
                }`
              }
            >
              <span className="absolute inset-0 origin-left scale-x-0 transition-transform ease-in-out duration-300 group-hover:scale-x-100 z-0 bg-red-500"></span>
              <FaBookOpen className="relative z-1" />
              <span className="relative z-10 hidden sm:block">Catálogo</span>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative px-6 pt-3 pb-3 group flex items-center gap-3 z-10 text-[#faf3f4] ${
                  isActive ? "bg-[#19191c] " : "bg-[#313137] "
                }`
              }
            >
              <span className="absolute inset-0 origin-left scale-x-0 transition-transform ease-in-out duration-300 group-hover:scale-x-100 z-0 bg-red-500"></span>
              <ImAddressBook className="relative z-1" />
              <span className="relative z-10 hidden sm:block">Contact</span>
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
