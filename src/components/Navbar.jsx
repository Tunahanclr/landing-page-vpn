import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  
  const overlay = (
    <div className="bg-black bg-opacity-80 fixed w-full h-full z-10 top-0 left-0"></div>
  );

  return (
    <div className="h-20 flex justify-between items-center">
      {/* logo */}
      <div>
        <img className="w-36" src={logo} alt="" />
      </div>

      {/* center */}
      <nav className="md:flex hidden">
        <ul className="flex items-center gap-14">
          <li className="text-xl hover:text-[#F53838] transition-all cursor-pointer">
            features
          </li>
          <li className="text-xl hover:text-[#F53838] transition-all cursor-pointer">
            Pricing
          </li>
          <li className="text-xl hover:text-[#F53838] transition-all cursor-pointer">
            Testimonial
          </li>
          <li className="text-xl hover:text-[#F53838] transition-all cursor-pointer">
            Help
          </li>
        </ul>
      </nav>
      
      {/* mobile menu */}
      <div className="md:hidden flex">
        <AiOutlineMenu onClick={() => setNav(!nav)} size={20} />
        {nav && overlay}
        <div
          className={
            nav
              ? "fixed top-0 right-0 w-[250px] sm:w-[300px] bg-white h-screen z-10 duration-300"
              : "fixed top-0 right-[-100%] w-[250px] sm:w-[300px] bg-white h-screen z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            className="absolute right-0 top-2 pr-3 cursor-pointer"
            size={32}
          />
          <ul className="flex text-center flex-col mt-20 p-4 gap-4">
            <li className="text-xl hover:text-[#F53838] transition-all cursor-pointer">
              features
            </li>
            <li className="text-xl hover:text-[#F53838] transition-all cursor-pointer">
              Pricing
            </li>
            <li className="text-xl hover:text-[#F53838] transition-all cursor-pointer">
              Testimonial
            </li>
            <li className="text-xl hover:text-[#F53838] transition-all cursor-pointer">
              Help
            </li>
          </ul>
          <div className="justify-center flex mt-2 items-center gap-4">
            <button className="">Sign in</button>
            <button className="border-2  border-[#F53838] w-[101px] h-[36px] rounded-full">
              Sign up
            </button>
          </div>
        </div>
      </div>
      
      {/* button */}
      <div className="hidden md:flex items-center gap-4">
        <button>Sign in</button>
        <button className="border-2 hover:bg-[#F53838] transition-all  hover:text-white border-[#F53838] w-[101px] h-[36px] rounded-full">
          Sign up
        </button>
      </div>
    </div>
  );
}
