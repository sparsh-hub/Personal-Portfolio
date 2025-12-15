// import React, { useRef } from "react";
// import { FaGithub } from "react-icons/fa";
// import { IoMdMailOpen } from "react-icons/io";
// import { AiFillLinkedin } from "react-icons/ai";
// import { FaSquarePinterest } from "react-icons/fa6";
// import gsap from "gsap";

// import { ScrollSmoother, ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollSmoother);
// const Navbar = () => {
  

//   return (
//     <header >
      
//         <nav className="flex flex-row justify-around bg-[#023020] top-0 fixed w-full z-100 ">
//           <ul className="flex flex-row gap-8 font-mono f text-[#D3D3D3] p-3 m-2 font-bold ">
//             <a href="/" className="hover:text-[#1AFF00]">
//               Sparsh Agarwal
//             </a>
//             <a href="#home" className="aboutLink hover:bg-[#1AFF00]/45 hover:p-3 rounded-2xl">
//               Home
//             </a>
//             <a href="#about" className="hover:bg-[#1AFF00]/45 hover:p-3 rounded-2xl scroll-smooth">
//               About
//             </a>
//             <a href="#projects" className="hover:bg-[#1AFF00]/45 hover:p-3 rounded-2xl">
//               Projects
//             </a>
            
//           </ul>
//           <ul className="flex flex-row text-[#D3D3D3] p-3 m-2 gap-8 ">
//             <a href="https://github.com/sparsh-hub" className="hover:animate-bounce hover:text-[#1AFF00]">
//               <FaGithub size="20px" />
//             </a>
//             <a href="mailto:sparshag2803@gmail.com" className="hover:animate-bounce hover:text-[#1AFF00]">
//               <IoMdMailOpen size="20px" />
//             </a>
//             <a href="https://www.linkedin.com/in/sparsh-agarwal-657455289/" className="hover:animate-bounce hover:text-[#1AFF00]">
//               <AiFillLinkedin size="20px" />
//             </a>
//             <a href="https://in.pinterest.com/sparsh_hh/" className="hover:animate-bounce hover:text-[#1AFF00]">
//               <FaSquarePinterest size="20px" />
//             </a>
//           </ul>
//         </nav>
     
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

import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollSmoother);
const Navbar = () => {
  

  return (
    <header >
      
        <nav className="flex flex-col md:flex-row justify-center md:justify-around bg-[#023020] top-0 fixed w-full z-100 py-2 md:py-0">
          <ul className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 font-mono text-sm sm:text-base text-[#D3D3D3] p-2 md:p-3 md:m-2 font-bold">
            <a href="/" className="hover:text-[#1AFF00] whitespace-nowrap">
              Sparsh Agarwal
            </a>
            <a href="#home" className="aboutLink hover:bg-[#1AFF00]/45 hover:p-2 md:hover:p-3 rounded-2xl whitespace-nowrap">
              Home
            </a>
            <a href="#about" className="hover:bg-[#1AFF00]/45 hover:p-2 md:hover:p-3 rounded-2xl scroll-smooth whitespace-nowrap">
              About
            </a>
            <a href="#projects" className="hover:bg-[#1AFF00]/45 hover:p-2 md:hover:p-3 rounded-2xl whitespace-nowrap">
              Projects
            </a>
            
          </ul>
          <ul className="flex flex-row text-[#D3D3D3] p-2 md:p-3 md:m-2 gap-4 md:gap-8 justify-center items-center">
            <a href="https://github.com/sparsh-hub" className="hover:animate-bounce hover:text-[#1AFF00]">
              <FaGithub size="20px" />
            </a>
            <a href="mailto:sparshag2803@gmail.com" className="hover:animate-bounce hover:text-[#1AFF00]">
              <IoMdMailOpen size="20px" />
            </a>
            <a href="https://www.linkedin.com/in/sparsh-agarwal-657455289/" className="hover:animate-bounce hover:text-[#1AFF00]">
              <AiFillLinkedin size="20px" />
            </a>
            <a href="https://in.pinterest.com/in/sparsh_hh/" className="hover:animate-bounce hover:text-[#1AFF00]">
              <FaSquarePinterest size="20px" />
            </a>
          </ul>
        </nav>
     
    </header>
  );
};

export default Navbar;
