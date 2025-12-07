import React, { useRef } from "react";
import { experienceData } from "../Store";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import PhotoGallery from "./PhotoGallery";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Experience = () => {
  const container = useRef();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card");


      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cards-wrapper",
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: 1,
          pinSpacing:false,
        },
      });

      tl.to(".card", {
        height: 130,
        stagger: 2,
        ease: "linear",
      });
    },
    { scope: container }
  );

  return (
    <section id="projects" ref={container}>
      <div className="cards-wrapper p-16 overflow-hidden">
        <div>
          <p className="experience font-bold font-mono text-5xl text-[#D3D3D3] mt-30 ml-20">
            {"</> "}Projects{" "}
            <span className="inline-block w-100 bg-[#F2F0EF] mb-3 opacity-35 h-0.5 ml-4"></span>
          </p>
        </div>
        {experienceData.map((card, index) => {
          return (
            <div
              key={index}
              className="card p-6 overflow-hidden"
            >
              <div className="flex gap-4 items-center ml-10 h-30">
                <h1 className="text-xl -translate-y-4 opacity-80 font-mono font-bold text-[#D3D3D3]">
                  {card.id}
                </h1>
                <h1 className="text-3xl opacity-80 font-mono font-bold text-[#1AFF00]">
                  {card.title}
                </h1>
              </div>

              <ul className="text-[#D3D3D3] mb-10">
                {card.items.map((content, idx) => (
                  <li
                    className="list-disc marker:text-[#1AFF00] ml-15 mb-2  text-[#D3D3D3] font-bold font-mono text-lg"
                    key={idx}
                  >
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        
      </div>
    </section>
  );
};

export default Experience;
