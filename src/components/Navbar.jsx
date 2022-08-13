import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
          ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-white `} // ${if we're in the last nav link do mr-0 otherwise do mr-10}
          >
            <a href={`#${nav.id}`}> {nav.title} </a>
          </li>
        ))}
      </ul>
      {/* Mobile Version */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu"
        
        
        className="w-[28px] h-[28px] object-contain"
        // on click setToggle to ! the opposite of prev 
        onClick={() => setToggle((prev) => !prev)  }/>
        {/* if toggle is on then 'flex' else 'hidden' */}
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}> 
        <ul className="list-none flex justify-end items-center flex-1 flex-col">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
          ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} text-white `} // ${if we're in the last nav link do mb-0 otherwise do mb-4}
          >
            <a href={`#${nav.id}`}> {nav.title} </a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
