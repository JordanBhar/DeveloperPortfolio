import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = ({ scrollToRef, educationRef, projectsRef, contactRef }) => {
  const [toggle, setToggle] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <nav className="flex items center">
      <div className="bg-acrylic m-[10px] h-[110px] w-full flex justify-between  rounded-lg shadow-2xl shadow-cyan-600/50">
        
        {/* Big Logo Here */}
        <div className="justify-start flex items-center">
          <img src={logo} className="h-[125px] w-[125px] xs:scale-75 p-[15px] ml-[10px]" alt="Logo"/>
        </div>

        {/* Navigation Links Here */}
        <ul className="list-none md:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav) => (
            <li key={nav.id} className="font-poppins text-white font-normal cursor-pointer text-[30px] mr-10">
              <a
                href={`#${nav.id}`} // Use "#" and the reference ID as the href
                className={`transition duration-700 ease-in-out hover:text-teal-300 hover:border-b-2 text-xl border-teal-300`}
                onClick={() => {
                  scrollToRef(nav.id === "education" ? educationRef : nav.id === "projects" ? projectsRef : contactRef);
                  closeMenu();
                }}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Supports for Smaller Devices */}
        <div className="md:hidden flex justify-end items-center">
          <img src={toggle ? close : menu} alt="Mobile Menu" className="w-[28px] h-[38px] object-contain mr-6" onClick={() => setToggle((prev) => !prev)}/>
          <div className={`${toggle ? "flex" : "hidden"}  p-6 absolute top-28 md:right-10 min-w-[300px] p:min-w-[250px]  bg-acrylic rounded-xl sidebar justify-end mt-[10px]`}>
            <ul className={`list-none flex flex-col items-end`}>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins text-white text-[16px] ${index === navLinks.length ? "mr-0" : "mb-4"}`} onClick={() => scrollToRef(nav.id === "education" ? educationRef : nav.id === "projects" ? projectsRef : contactRef)}>
                  <a
                    href={`#${nav.id}`} // Use "#" and the reference ID as the href
                    className={`transition duration-700 ease-in-out hover:text-teal-300 hover:border-b-2 text-[20px] border-teal-300`}
                    onClick={closeMenu}
                  >
                    {nav.title}
                  </a>
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


