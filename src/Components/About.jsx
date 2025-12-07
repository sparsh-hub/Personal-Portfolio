import React, { useState, useRef } from "react";

import { SplitText } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const About = () => {
  
  const container = useRef();
  useGSAP(
    () => {
      const split = SplitText.create(".about", {
        type: "lines",
      });
      gsap.from(split.lines, {
        y: 200,
        opacity: 0,
        stagger: 0.1,
        duration: 2,
        ease: "sine.out",
        scrollTrigger:{
            trigger: '.about',
        }
      });
    },
    { scope: container }
  );
  return (
    <section id="about" ref={container} className="text-[#D3D3D3] pb-20">
      <div className="about">
        <p className="aboutme font-bold font-mono text-5xl mt-40 ml-40">
          {"</> "}About Me{" "}
          <span className="inline-block w-100 bg-[#D3D3D3] mb-3 opacity-35 h-0.5 ml-4"></span>
        </p>
        <div className="aboutme flex flex-row justify-around gap-20">
          <div className="font-bold font-mono mt-15 ml-40 text-lg leading-8 max-w-220">
            <p>
              I am a highly driven second-year Computer Science student at{" "}
              <span className="text-[#1AFF00] font-extrabold text-xl">
                Panjab University, Chandigarh
              </span>
              , leveraging a foundation in ECE and robotics. My strong
              interdisciplinary focus spans core CS domains, Finance, and
              Psychology. Demonstrating high personal discipline and commitment,
              I consistently dedicate{" "}
              <span className="text-[#1AFF00] font-extrabold text-xl">
                12 hours
              </span>{" "}
              daily to academics while managing extracurriculars like daily fitness or debating or the multiple interests i have. One thing I do wanna say is creating these many interests made me learn about how important discipline is in life to grow and hence i try to be as disciplined as possible.
              <br />
              Quoting Marcus Aurelius
              <i></i>
            </p>
            <div className="flex flex-row gap-15">
              <ul className="mt-10 ml-5">
                <li className="list-disc marker:text-[#1AFF00] mb-2">C++</li>
                <li className="list-disc marker:text-[#1AFF00] mb-2">
                  React.js
                </li>
                <li className="list-disc marker:text-[#1AFF00] mb-2">
                  JavaScript
                </li>
              </ul>
              <ul className="mt-10 ml-5">
                <li className="list-disc marker:text-[#1AFF00] mb-2">AWS</li>
                <li className="list-disc marker:text-[#1AFF00] mb-2">SQL</li>
                <li className="list-disc marker:text-[#1AFF00] mb-2">
                  MongoDB
                </li>
              </ul>
            </div>
            <p className="mt-7">
              On a genuine note, I love learning a lot and i try to push myself
              to learn about probably everything new i get and can spend my time
              on, 
            </p>
          </div>
          <div className="mr-30 ">
            <img
              src='/myPic.jpg'
              className="w-100 mt-10 h-100 border-0 rounded-[30px] hover:-translate-y-3 "
            />
            <button className="mt-10 ml-25 border p-5 hover:bg-[#000000]  hover:translate-y-1 hover:scale-110 hover:opacity-70 border-[#1AFF00] bg-gradient-to-b from-[#023020] to-[#1AFF00] bg-clip-text text-transparent hover:transition hover:duration-1000 hover:ease-in-out ">
              Click For More Pics?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
