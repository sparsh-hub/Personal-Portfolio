import React, { useState } from "react";
import myPic from "./my-pic.jpg";

const About = () => {
  const [Image, setImage] = useState(myPic);

  return (
    <section id="about" className="text-[#F2F0EF] pb-20">
      <p className="font-bold font-mono text-5xl mt-30 ml-40">
        About Me{" "}
        <span className="inline-block w-100 bg-[#F2F0EF] mb-3 opacity-35 h-0.5 ml-4"></span>
      </p>
      <div className="flex flex-row justify-around gap-20">
        <div className="font-bold font-mono mt-15 ml-40 text-lg leading-8 max-w-220">
          <p>
            I am a highly driven second-year Computer Science student at{" "}
            <span className="text-[#1AFF00] font-extrabold text-xl">
              Panjab University, Chandigarh
            </span>
            , leveraging a foundation in ECE and robotics. My strong
            interdisciplinary focus spans core CS domains, Finance, and
            Psychology. Demonstrating high personal discipline and commitment, I
            consistently dedicate{" "}
            <span className="text-[#1AFF00] font-extrabold text-xl">
              12 hours
            </span>{" "}
            daily to academics while managing debating and fitness, reflecting
            the goal-oriented approach seen in my successful 15 kg weight loss
            achievement
          </p>
          <div className="flex flex-row gap-15">
            <ul className="mt-10 ml-5">
              <li className="list-disc marker:text-[#1AFF00] mb-2">C++</li>
              <li className="list-disc marker:text-[#1AFF00] mb-2">React.js</li>
              <li className="list-disc marker:text-[#1AFF00] mb-2">
                JavaScript
              </li>
            </ul>
            <ul className="mt-10 ml-5">
              <li className="list-disc marker:text-[#1AFF00] mb-2">AWS</li>
              <li className="list-disc marker:text-[#1AFF00] mb-2">SQL</li>
              <li className="list-disc marker:text-[#1AFF00] mb-2">MongoDB</li>
            </ul>
          </div>
          <p className="mt-7">
            On a genuine note, I love learning a lot and i try to push myself to
            learn about probably everything new i get and can spend my time on,
            this site is my first project on react/js btw and i learned react
            like yesterday and js 2 days back btw (subtle flex yes)
          </p>
        </div>
        <div className="mr-50 ">
          <img src={myPic} className="w-200 mt-10 h-100 border-0 rounded-lg" />
          <button className="mt-10 ml-25 border p-5 hover:bg-[#000000]  hover:translate-y-1 hover:scale-110 hover:opacity-70 border-[#1AFF00] text-[#1AFF00] hover:transition hover:duration-1000 hover:ease-in-out ">
            Click For More Pics?
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
