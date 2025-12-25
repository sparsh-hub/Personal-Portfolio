import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquarePinterest } from "react-icons/fa6";
import gsap from "gsap";

import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";


const Navbar = () => {
  useGSAP(() => {
    gsap.from(".nav", {
      x:100,
      opacity:0,
      duration: 1.5,
      ease: "sine.out",
      stagger:1
    })
  })
  return (
    <header>
      <nav className="nav flex flex-col md:flex-row justify-center md:justify-around bg-[#023020] top-0 fixed w-full z-100 py-2 md:py-0">
        <div className="flex flex-col flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 font-mono text-sm sm:text-base text-[#D3D3D3] p-2 md:p-3 md:m-2 font-bold">
        <img src="/sign.gif" alt="Sign" className="animate-pulse h-15"  />
      </div>
        <ul className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 font-digital text-sm sm:text-base text-[#D3D3D3] p-2 md:p-3 md:m-2 font-bold">
          <Link
            to="home"
            smooth
            offset={0}
            duration={1000}
            className="aboutLink hover:bg-[#1AFF00]/45 hover:p-2 md:hover:p-3 rounded-2xl whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth
            offset={0}
            duration={1000}
            className="hover:bg-[#1AFF00]/45 hover:p-2 md:hover:p-3 rounded-2xl scroll-smooth whitespace-nowrap"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth
            offset={0}
            duration={1000}
            className="hover:bg-[#1AFF00]/45 hover:p-2 md:hover:p-3 rounded-2xl whitespace-nowrap"
          >
            Projects
          </Link>
          <Link
            to="gallery"
            smooth
            offset={0}
            duration={1000}
            className="hover:text-[#1AFF00] whitespace-nowrap"
          >
            PhotoGallery
          </Link>
        </ul>

        <ul className="flex flex-row text-[#D3D3D3] p-2 md:p-3 md:m-2 gap-4 md:gap-8 justify-center items-center">
          <a
            href="https://github.com/sparsh-hub"
            className="hover:animate-bounce hover:text-[#1AFF00]"
          >
            <FaGithub size="20px" />
          </a>
          <a
            href="mailto:sparshag2803@gmail.com"
            className="hover:animate-bounce hover:text-[#1AFF00]"
          >
            <IoMdMailOpen size="20px" />
          </a>
          <a
            href="https://www.linkedin.com/in/sparsh-agarwal-657455289/"
            className="hover:animate-bounce hover:text-[#1AFF00]"
          >
            <AiFillLinkedin size="20px" />
          </a>
          <a
            href="https://in.pinterest.com/in/sparsh_hh/"
            className="hover:animate-bounce hover:text-[#1AFF00]"
          >
            <FaSquarePinterest size="20px" />
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
