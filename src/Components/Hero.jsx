import React from "react";
import { FaMailBulk } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const container = useRef();
  useGSAP(
    () => {
      gsap.fromTo(
        ".hero",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          duration: 5,
          y: 0,
          ease: "power1.out",
        }
      );
    },
    { scope: container }
  );
  return (
    <section id="home" ref={container} className="text-[#F2F0EF] ">
      <div className="hero">
        <h1 className="font-mono font-bold pt-60 text-5xl text-center">
          Hi{" "}
          <span className="bg-gradient-to-b from-[#023020] to-[#1AFF00] bg-clip-text text-transparent">
            Sparsh
          </span>{" "}
          here.
          <span className="text-[#1AFF00] animate-ping">|</span>
        </h1>
        <h2 className="hero font-mono font-bold mt-5 mr-10 text-3xl text-center">
          Currently On Development Arc
        </h2>
        <p className="text-center text-justify ml-120 mr-120 font-mono font-bold text-lg mt-5">
          I am a second-year Computer Science student at Panjab University,
          Chandigarh, leveraging a foundation in ECE and robotics. Driven by an
          interdisciplinary curiosity, I am actively exploring diverse fields
          from core CS to Finance and Psychology
        </p>
        <a
          href="mailto:sparshag2803@gmail.com"
          className="flex flex-row justify-center gap-4 mt-20 text-lg font-bold border ml-190 mr-190 p-8 border-[#1AFF00] rounded-lg hover:bg-[#023020] hover:opacity-70 hover:animate-bounce bg-gradient-to-b from-[#023020] to-[#1AFF00] bg-clip-text text-transparent"
        >
          <FaMailBulk size="30px" className="text-[#1AFF00]" />
          Say Hi
        </a>
      </div>
    </section>
  );
};

export default Hero;
