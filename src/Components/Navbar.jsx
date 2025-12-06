import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquarePinterest } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row justify-around bg-[#023020]">
        <ul className="flex flex-row gap-8 font-mono f text-[#F2F0EF] p-3 m-2 font-bold  ">
          <a href="/">Sparsh Agarwal</a>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">projects</a>
        </ul>
        <ul className="flex flex-row text-[#F2F0EF] p-3 m-2 gap-8">
          <a href="" className="hover:animate-bounce">
            <FaGithub size="20px" />
          </a>
          <a href="" className="hover:animate-bounce">
            <IoMdMailOpen size="20px" />
          </a>
          <a href="" className="hover:animate-bounce">
            <AiFillLinkedin size="20px" />
          </a>
          <a href="" className="hover:animate-bounce">
            <FaSquarePinterest size="20px" />
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
