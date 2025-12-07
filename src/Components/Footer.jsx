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
    <section id="footer" ref={container} className="text-[#D3D3D3]">
      <div className="footer">
        <div className="flex flex-row justify-center gap-30">
          <h1 className="font-mono font-bold text-3xl mr-50 p-20">
            ThankYou For Visiting
          </h1>
          <div className="grid grid-rows-4 mr-50">
            <a
              href=""
              className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
            >
              Instagram
            </a>
            <a
              href=""
              className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
            >
              Linkedin
            </a>
            <a
              href=""
              className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
            >
              Pinterest
            </a>
            <a
              href=""
              className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
            >
              E-Mail
            </a>
          </div>
          <div className="grid grid-rows-4 mr-50 ">
            <a
              href=""
              className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
            >
              HOME
            </a>
            <a
              href=""
              className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
            >
              ABOUT
            </a>
            <a
              href=""
              className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
            >
              EXPERIENCE
            </a>
            <a
              href=""
              className="text-xs p-5 hover:underline hover:text-[#1AFF00]"
            >
              GALLERY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
