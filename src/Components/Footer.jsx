// import React, { useState, useRef } from "react";

// import { SplitText } from "gsap/all";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

// const Footer = () => {
//   const container = useRef();
//   useGSAP(
//     () => {
//       const split = SplitText.create(".footer", {
//         type: "words",
//       });
//       gsap.from(split.words, {
//         x: 200,
//         opacity: 0,
//         stagger: {
//             amount: 0.5,
//             from: "random",
//         },
//         duration: 2,
//         ease: "sine.out",
//         scrollTrigger: {
//           trigger: ".footer",
//         },
//       });
//     },
//     { scope: container }
//   );
//   return (
//     <section id="footer" ref={container} className="text-[#D3D3D3]">
//       <div className="footer">
//         <div className="flex flex-row justify-center gap-30">
//           <h1 className="font-mono font-bold text-3xl mr-30 p-20">
//             ThankYou For <br /> Visiting
//           </h1>
//           <div className="grid grid-rows-4 mr-50">
//             <a
//               href="https://www.instagram.com/sparsh_.agarwal"
//               className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
//             >
//               Instagram
//             </a>
//             <a
//               href="https://www.linkedin.com/in/sparsh-agarwal-657455289/"
//               className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
//             >
//               Linkedin
//             </a>
//             <a
//               href="https://in.pinterest.com/sparsh_hh/"
//               className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
//             >
//               Pinterest
//             </a>
//             <a
//               href="mailto:sparshag2803@gmail.com"
//               className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
//             >
//               E-Mail
//             </a>
//           </div>
//           <div className="grid grid-rows-4 mr-50 ">
//             <a
//               href="#home"
//               className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
//             >
//               HOME
//             </a>
//             <a
//               href="#about"
//               className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
//             >
//               ABOUT
//             </a>
//             <a
//               href="#project"
//               className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
//             >
//               Projects
//             </a>
//             <a
//               href="#gallery"
//               className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
//             >
//               GALLERY
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;


import React, { useState, useRef } from "react";

import { SplitText } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Footer = () => {
  const container = useRef();
  useGSAP(
    () => {
      const split = SplitText.create(".footer", {
        type: "words",
      });
      gsap.from(split.words, {
        x: 200,
        opacity: 0,
        stagger: {
          amount: 0.5,
          from: "random",
        },
        duration: 2,
        ease: "sine.out",
        scrollTrigger: {
          trigger: ".footer",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      id="footer"
      ref={container}
      className="text-[#D3D3D3] py-12 sm:py-16 mt-10 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="footer max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 sm:gap-12 md:gap-16 lg:gap-50 xl:gap-60">
          {/* Thank You Message */}
          <div className="text-center lg:text-left">
            <h1 className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
              ThankYou For
              <br />
              Visiting
            </h1>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="font-mono font-bold text-sm sm:text-base mb-2 text-center lg:text-left">
              CONNECT
            </h2>
            <a
              href="https://www.instagram.com/sparsh_.agarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm py-2 px-3 hover:underline hover:text-[#1AFF00] transition-colors duration-300 text-center lg:text-left"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/sparsh-agarwal-657455289/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm py-2 px-3 hover:underline hover:text-[#1AFF00] transition-colors duration-300 text-center lg:text-left"
            >
              LinkedIn
            </a>
            <a
              href="https://in.pinterest.com/sparsh_hh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm py-2 px-3 hover:underline hover:text-[#1AFF00] transition-colors duration-300 text-center lg:text-left"
            >
              Pinterest
            </a>
            <a
              href="mailto:sparshag2803@gmail.com"
              className="text-xs sm:text-sm py-2 px-3 hover:underline hover:text-[#1AFF00] transition-colors duration-300 text-center lg:text-left"
            >
              E-Mail
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="font-mono font-bold text-sm sm:text-base mb-2 text-center lg:text-left">
              NAVIGATE
            </h2>
            <a
              href="#home"
              className="text-xs sm:text-sm py-2 px-3 hover:underline hover:text-[#1AFF00] transition-colors duration-300 text-center lg:text-left"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-xs sm:text-sm py-2 px-3 hover:underline hover:text-[#1AFF00] transition-colors duration-300 text-center lg:text-left"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              className="text-xs sm:text-sm py-2 px-3 hover:underline hover:text-[#1AFF00] transition-colors duration-300 text-center lg:text-left"
            >
              PROJECTS
            </a>
            <a
              href="#gallery"
              className="text-xs sm:text-sm py-2 px-3 hover:underline hover:text-[#1AFF00] transition-colors duration-300 text-center lg:text-left"
            >
              GALLERY
            </a>
          </div>
        </div>

        {/* Optional Copyright - You can add this if you want */}
        <div className="text-center mt-12 sm:mt-16 pt-8 border-t border-[#D3D3D3] border-opacity-20">
          <p className="text-xs sm:text-sm text-[#D3D3D3] opacity-60">
            © {new Date().getFullYear()} Sparsh Agarwal. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;