// import React, { useRef } from "react";
// import { FaGithub } from "react-icons/fa";
// import { IoMdMailOpen } from "react-icons/io";
// import { AiFillLinkedin } from "react-icons/ai";
// import { FaSquarePinterest } from "react-icons/fa6";
// import gsap from "gsap";

// import { Link } from "react-scroll";
// import { useGSAP } from "@gsap/react";


// const Navbar = () => {
//   useGSAP(() => {
//     gsap.from(".nav", {
//       x:100,
//       opacity:0,
//       duration: 1.5,
//       ease: "sine.out",
//       stagger:1
//     })
//   })
//   return (
//     <header>
//       <nav className="nav flex flex-col md:flex-row justify-center md:justify-around bg-[#023020] top-0 fixed w-full z-100 py-2 md:py-0">
//         <div className="flex flex-col flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 font-mono text-sm sm:text-base text-[#D3D3D3] p-2 md:p-3 md:m-2 font-bold">
//         <img src="/sign.gif" alt="Sign" className="animate-pulse h-15"  />
//       </div>
//         <ul className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 font-digital text-sm sm:text-base text-[#D3D3D3] p-2 md:p-3 md:m-2 font-bold">
//           <Link
//             to="home"
//             smooth
//             offset={0}
//             duration={1000}
//             className="aboutLink hover:text-xl hover:text-[#1AFF00]"
//           >
//             Home
//           </Link>
//           <Link
//             to="about"
//             smooth
//             offset={0}
//             duration={1000}
//             className="hover:text-xl hover:text-[#1AFF00]"
//           >
//             About
//           </Link>
//           <Link
//             to="projects"
//             smooth
//             offset={0}
//             duration={1000}
//             className="hover:text-xl hover:text-[#1AFF00]"
//           >
//             Projects
//           </Link>
//           <Link
//             to="gallery"
//             smooth
//             offset={0}
//             duration={1000}
//             className="hover:text-xl hover:text-[#1AFF00]"
//           >
//             PhotoGallery
//           </Link>
//         </ul>

//         <ul className="flex flex-row text-[#D3D3D3] p-2 md:p-3 md:m-2 gap-4 md:gap-8 justify-center items-center">
//           <a
//             href="https://github.com/sparsh-hub"
//             className="hover:animate-bounce hover:text-[#1AFF00]"
//           >
//             <FaGithub size="20px" />
//           </a>
//           <a
//             href="mailto:sparshag2803@gmail.com"
//             className="hover:animate-bounce hover:text-[#1AFF00]"
//           >
//             <IoMdMailOpen size="20px" />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/sparsh-agarwal-657455289/"
//             className="hover:animate-bounce hover:text-[#1AFF00]"
//           >
//             <AiFillLinkedin size="20px" />
//           </a>
//           <a
//             href="https://in.pinterest.com/in/sparsh_hh/"
//             className="hover:animate-bounce hover:text-[#1AFF00]"
//           >
//             <FaSquarePinterest size="20px" />
//           </a>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;





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
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: "sine.out",
      stagger: 1,
    });
  });

  return (
    <>
    <header className="w-full">
      <nav className="nav flex flex-col lg:flex-row justify-center lg:justify-around items-center bg-[#023020] top-0 fixed w-full z-50 py-3 lg:py-2 px-4 gap-3 lg:gap-0">
        {/* Logo Section */}
        <div className="flex justify-center items-center">
          <img
            src="/sign.gif"
            alt="Sign"
            className="animate-pulse h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 font-digital text-xs sm:text-sm md:text-base text-[#D3D3D3] font-bold">
          <li>
            <Link
              to="home"
              smooth
              offset={0}
              duration={1000}
              className="cursor-pointer transition-all duration-300 hover:text-base sm:hover:text-lg md:hover:text-xl hover:text-[#1AFF00]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth
              offset={0}
              duration={1000}
              className="cursor-pointer transition-all duration-300 hover:text-base sm:hover:text-lg md:hover:text-xl hover:text-[#1AFF00]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth
              offset={0}
              duration={1000}
              className="cursor-pointer transition-all duration-300 hover:text-base sm:hover:text-lg md:hover:text-xl hover:text-[#1AFF00]"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              smooth
              offset={0}
              duration={1000}
              className="cursor-pointer transition-all duration-300 hover:text-base sm:hover:text-lg md:hover:text-xl hover:text-[#1AFF00]"
            >
              Gallery
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <ul className="flex flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 justify-center items-center text-[#D3D3D3]">
          <li>
            <a
              href="https://github.com/sparsh-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:animate-bounce hover:text-[#1AFF00]"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg sm:text-xl md:text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="mailto:sparshag2803@gmail.com"
              className="transition-all duration-300 hover:animate-bounce hover:text-[#1AFF00]"
              aria-label="Email"
            >
              <IoMdMailOpen className="text-lg sm:text-xl md:text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sparsh-agarwal-657455289/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:animate-bounce hover:text-[#1AFF00]"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin className="text-lg sm:text-xl md:text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://in.pinterest.com/in/sparsh_hh/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:animate-bounce hover:text-[#1AFF00]"
              aria-label="Pinterest"
            >
              <FaSquarePinterest className="text-lg sm:text-xl md:text-2xl" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Navbar;