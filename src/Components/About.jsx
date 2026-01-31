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
              I am a CS student at{" "}
              <span className="text-[#1AFF00] font-extrabold text-xl">
                Panjab University, Chandigarh
              </span>
              , who creates problems for himself by having too many interests. With a foundation in ECE and Robotics, and a deep curiosity for Finance and Psychology, I realized I needed serious structure to keep up with my own ambitions. That led to a{" "}
              <span className="text-[#1AFF00] font-extrabold text-xl">
                12 hour
              </span>{" "}
              daily grind of study, fitness, and other extracurriculars. I’ve found that high discipline is the only way to turn <br /> 'having many interests' into 'having many skills.
              <br />
              <i>'The art of living is more like wrestling than dancing.'</i> — Marcus Aurelius <br />(I take the wrestling part literally).
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
                <li className="list-disc marker:text-[#1AFF00] mb-2">
                  Three.js
                </li>
              </ul>
              <ul className="mt-10 ml-5">
                <li className="list-disc marker:text-[#1AFF00] mb-2">AWS</li>
                <li className="list-disc marker:text-[#1AFF00] mb-2">SQL</li>
                <li className="list-disc marker:text-[#1AFF00] mb-2">GSAP</li>
                <li className="list-disc marker:text-[#1AFF00] mb-2">
                  Git/Github
                </li>
              </ul>
              <ul className="mt-10 ml-5">
                <li className="list-disc marker:text-[#1AFF00] mb-2">N8N</li>
                <li className="list-disc marker:text-[#1AFF00] mb-2">Python</li>
                <li className="list-disc marker:text-[#1AFF00] mb-2">Next.js</li>
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
              src='/image.png'
              className="w-100 mt-30 h-100 border-0 rounded-[30px] hover:-translate-y-3 "
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;








