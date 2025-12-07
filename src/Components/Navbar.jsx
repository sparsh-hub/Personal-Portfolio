import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquarePinterest } from "react-icons/fa6";
import gsap from "gsap";

const Navbar = () => {
    
  return (
    <header>
      <nav className="flex flex-row justify-around bg-[#023020] top-0 fixed w-full z-100">
        <ul className="flex flex-row gap-8 font-mono f text-[#F2F0EF] p-3 m-2 font-bold ">
          <a href="/" className="hover:text-[#1AFF00]">
            Sparsh Agarwal
          </a>
          <a href="#home" className="hover:text-[#1AFF00]">
            Home
          </a>
          <a href="#about" className="hover:text-[#1AFF00] scroll-smooth">
            About
          </a>
          <a href="#experience" className="hover:text-[#1AFF00]">
            Experience
          </a>
          <a href="#projects" className="hover:text-[#1AFF00]">
            projects
          </a>
        </ul>
        <ul className="flex flex-row text-[#F2F0EF] p-3 m-2 gap-8 ">
          <a href="" className="hover:animate-bounce hover:text-[#1AFF00]">
            <FaGithub size="20px" />
          </a>
          <a href="" className="hover:animate-bounce hover:text-[#1AFF00]">
            <IoMdMailOpen size="20px" />
          </a>
          <a href="" className="hover:animate-bounce hover:text-[#1AFF00]">
            <AiFillLinkedin size="20px" />
          </a>
          <a href="" className="hover:animate-bounce hover:text-[#1AFF00]">
            <FaSquarePinterest size="20px" />
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
