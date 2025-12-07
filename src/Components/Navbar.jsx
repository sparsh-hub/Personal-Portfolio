import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquarePinterest } from "react-icons/fa6";
import gsap from "gsap";

import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollSmoother);
const Navbar = () => {
  

  return (
    <header >
      
        <nav className="flex flex-row justify-around bg-[#023020] top-0 fixed w-full z-100 ">
          <ul className="flex flex-row gap-8 font-mono f text-[#D3D3D3] p-3 m-2 font-bold ">
            <a href="/" className="hover:text-[#1AFF00]">
              Sparsh Agarwal
            </a>
            <a href="#home" className="aboutLink hover:bg-[#1AFF00]/45 hover:p-3 rounded-2xl">
              Home
            </a>
            <a href="#about" className="hover:bg-[#1AFF00]/45 hover:p-3 rounded-2xl scroll-smooth">
              About
            </a>
            <a href="#projects" className="hover:bg-[#1AFF00]/45 hover:p-3 rounded-2xl">
              Projects
            </a>
            
          </ul>
          <ul className="flex flex-row text-[#D3D3D3] p-3 m-2 gap-8 ">
            <a href="https://github.com/sparsh-hub" className="hover:animate-bounce hover:text-[#1AFF00]">
              <FaGithub size="20px" />
            </a>
            <a href="mailto:sparshag2803@gmail.com" className="hover:animate-bounce hover:text-[#1AFF00]">
              <IoMdMailOpen size="20px" />
            </a>
            <a href="https://www.linkedin.com/in/sparsh-agarwal-657455289/" className="hover:animate-bounce hover:text-[#1AFF00]">
              <AiFillLinkedin size="20px" />
            </a>
            <a href="https://in.pinterest.com/sparsh_hh/" className="hover:animate-bounce hover:text-[#1AFF00]">
              <FaSquarePinterest size="20px" />
            </a>
          </ul>
        </nav>
     
    </header>
  );
};

export default Navbar;
