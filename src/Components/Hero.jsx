import React from "react";
import { FaFileDownload, FaMailBulk } from "react-icons/fa";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Cursor from "./Cursor";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

const Hero = () => {
  const container = useRef();

  useGSAP(
    () => {
      const split = SplitText.create(".intro", {
        type: "chars",
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(split.chars, {
        opacity: 0,
        autoAlpha: 0,
        stagger: 0.1,

        duration: 2,
        ease: "sine.out",
      });
    },
    { scope: container },
  );
  return (
    <section
      id="home"
      ref={container}
      className="text-[#D3D3D3] px-4 sm:px-6 md:px-8"
    >
      <Cursor />
      <h1 className="intro font-mono font-bold pt-32 sm:pt-40 md:pt-52 lg:pt-60 text-3xl sm:text-4xl md:text-5xl text-center">
        Hi <span className="name text-[#1AFF00]">Sparsh</span> here.
        <span className="text-[#1AFF00] animate-ping">|</span>
      </h1>
      <div className="hero max-w-4xl mx-auto">
        <h2 className="hero font-mono font-bold mt-5 text-xl sm:text-2xl md:text-3xl text-center px-4">
          Currently On Development Arc
        </h2>
        <p className="text-center md:text-justify mx-auto font-mono font-bold text-sm sm:text-base md:text-lg mt-5 px-4 sm:px-8 md:px-12 lg:px-20 max-w-3xl">
          I am a second-year Computer Science student at Panjab University,
          Chandigarh, leveraging a foundation in ECE and robotics. Driven by an
          interdisciplinary curiosity, I am actively exploring diverse fields
          from core CS to Finance and Psychology
        </p>
        <div className="flex flex-row justify-center items-center ">
          <a
            href="mailto:sparshag2803@gmail.com"
            className="flex flex-row justify-center items-center mx-auto max-w-xs sm:max-w-sm md:max-w-md gap-3 sm:gap-4 mt-10 sm:mt-12 md:mt-16 lg:mt-20 text-base sm:text-lg font-bold border p-4 sm:p-6 md:p-8 border-[#1AFF00] rounded-lg hover:bg-[#023020] hover:opacity-10 hover:animate-pulse bg-gradient-to-b from-[#023020] to-[#1AFF00] bg-clip-text text-transparent"
          >
            <FaMailBulk size="30px" className="text-[#1AFF00] flex-shrink-0" />
            <span>Say Hi</span>
          </a>
          <a
            href="/resume.pdf"
            download="Sparsh_Resume.pdf"
            className="flex flex-row justify-center items-center mx-auto max-w-xs sm:max-w-sm md:max-w-md gap-3 sm:gap-4 mt-10 sm:mt-12 md:mt-16 lg:mt-20 text-base sm:text-lg font-bold border p-4 sm:p-6 md:p-8 border-[#1AFF00] rounded-lg hover:bg-[#023020] hover:opacity-10 hover:animate-pulse bg-gradient-to-b from-[#023020] to-[#1AFF00] bg-clip-text text-transparent"
          >
            <FaFileDownload
              size="30px"
              className="text-[#1AFF00] flex-shrink-0"
            />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
