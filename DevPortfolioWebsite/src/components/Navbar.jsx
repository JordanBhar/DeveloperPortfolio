import {useState} from 'react';
//import {close, logo, menu } from '../assets';
import {navLinks} from '../constants';

export const Navbar = () => {
  return (
    <nav className="bg-discord w-full flex p-[40px] justify-between items-center border-2 rounded-lg shadow-2xl">
        
        {/* Big Logo Here */}
        <h1 className={`justify-start text-title font-poppins text-teal-300 ] `}>Jordan</h1> 

        {/* Navigation Links Here */}
        <ul className={`list-none sm:flex hidden justify-end items-center flex-1 `}>
            {navLinks.map((nav,index) => (
                <li key={nav.id} className={`font-poppins text-white font-normal cursor-pointer text-[16px]   ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                    <a  href={`#${nav.id}`} className='hover:text-teal-200 hover:border-b-2 border-teal-300 text-lg'>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>

    </nav>
  )
}

export default Navbar