import React from "react";
import { FaMailBulk } from "react-icons/fa";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { motion } from "motion/react";
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
          scrollTrigger:{
            trigger: "#hero",
            start: 'top top',
            end: 'bottom top',
            scrub:true,
          }
        })
      
        gsap.from(split.chars, {
        //   x: 100,
          opacity:0,
          autoAlpha: 0,
          stagger:0.1,
          
          duration:2, // Changed from 0.5 to 0.05
          ease: "sine.out",
        });
     
    },
    { scope: container }
  );
  return (
    <section id="home" ref={container} className="text-[#D3D3D3] ">
      <Cursor />
      <h1 className="intro font-mono font-bold pt-60 text-5xl text-center">
        Hi{" "}
        <span className="name text-[#1AFF00]">
          Sparsh
        </span>{" "}
        here.
        <span className="text-[#1AFF00] animate-ping">|</span>
      </h1>
      <div className="hero">
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
          className="flex flex-row justify-center items-center mr-155 ml-155 gap-4 mt-20 text-lg font-bold border  p-8 border-[#1AFF00] rounded-lg hover:bg-[#023020] hover:opacity-10 hover:animate-pulse bg-gradient-to-b from-[#023020] to-[#1AFF00] bg-clip-text text-transparent"
        >
          <FaMailBulk size="30px" className="text-[#1AFF00]" />
          Say Hi
        </a>
      </div>
    </section>
  );
};

export default Hero;



// bg-gradient-to-b from-[#023020] to-[#1AFF00] bg-clip-text text-transparent