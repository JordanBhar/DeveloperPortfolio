import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <nav>
      <div className="bg-acrylic m-[10px] w-full flex justify-between  rounded-lg shadow-2xl shadow-cyan-600/50">
        {/* Big Logo Here */}
        <img
          src={logo}
          className="justify-start h-[125px] w-[125px] p-[15px] ml-[10px]"
          alt="Logo"
        />

        {/* Navigation Links Here */}
        <ul className="list-none md:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-poppins text-white font-normal cursor-pointer text-[18px] mr-10"
            >
              <NavLink
                to={`/${nav.id}`}
                key={nav.id}
                className={`transition duration-700 ease-in-out hover:text-teal-300 hover:border-b-2 text-[20px] border-teal-300 `}
                onClick={closeMenu} // Close the menu when a link is clicked
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Supports for Smaller Devices */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Mobile Menu"
            className="w-[28px] h-[38px] object-contain mr-6"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-acrylic  absolute top-20 right-2 mx-4 my-2 min-w-[300px] rounded-xl sidebar justify-end mt-[65px]`}
          >
            <ul className={`list-none flex flex-col justify-end items-end`}>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins text-white text-[16px]  ${
                    index === navLinks.length ? "mr-0" : "mb-4"
                  }`}
                  onClick={closeMenu}
                >
                  <NavLink
                    to={`/${nav.id}`}
                    key={nav.id}
                    className={`transition duration-700 ease-in-out hover:text-teal-300 hover:border-b-2 text-[20px] border-teal-300 `}
                    onClick={closeMenu}
                  >
                    {nav.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
