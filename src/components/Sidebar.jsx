import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from "react-icons/ri";
import { logo } from '../assets';
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = (handleClick) => (
  <div className="mt-10 flex flex-col justify-center px-4">
    {links.map((item) => (
      <NavLink key={item.name} to={item.to} className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400" onClick={() => handleClick && handleClick()}>
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  

  return (
    <>
      <div className="border-r-[1px] border-gray-800 md:flex hidden flex-col items-center w-[200px] py-10  px-4 bg-gradient-to-b from-[#000000] to-[#0a1b30]">
        <img src="data:image/jpeg;base64,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" alt="logo" className="w-full h-[100px] object-contain "/>
        <NavLinks/>
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(false)} />
        ): <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(true)}/> }
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tr from from-white/10 to-[#0a1b30] backdrop-blur-lg z-10 p-6 md-hidden smooth-transition ${mobileMenuOpen ? 'left-0': '-left-full' } `}>
        <img src="data:image/jpeg;base64,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" alt="logo" className="w-full h-[100px] object-contain "/>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>

    </>
  )
};

export default Sidebar;