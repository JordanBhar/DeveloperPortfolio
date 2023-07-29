import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <nav className="bg-discord w-full flex p-[40px] justify-between items-center border-2 rounded-lg shadow-2xl">
      {/* Big Logo Here */}
      <h1 className="justify-start text-title font-poppins text-teal-300">Jordan</h1>

      {/* Navigation Links Here */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li key={nav.id} className="font-poppins text-white font-normal cursor-pointer text-[16px] mr-10">
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

