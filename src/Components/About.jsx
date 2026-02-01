// import React, { useState, useRef } from "react";

// import { SplitText } from "gsap/all";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

// const About = () => {
  
//   const container = useRef();
//   useGSAP(
//     () => {
//       const split = SplitText.create(".about", {
//         type: "lines",
//       });
//       gsap.from(split.lines, {
//         y: 200,
//         opacity: 0,
//         stagger: 0.1,
//         duration: 2,
//         ease: "sine.out",
//         scrollTrigger:{
//             trigger: '.about',
//         }
//       });
//     },
//     { scope: container }
//   );
//   return (
//     <section id="about" ref={container} className="text-[#D3D3D3] pb-20">
//       <div className="about">
//         <p className="aboutme font-bold font-mono text-5xl mt-40 ml-40">
//           {"</> "}About Me{" "}
//           <span className="inline-block w-100 bg-[#D3D3D3] mb-3 opacity-35 h-0.5 ml-4"></span>
//         </p>
//         <div className="aboutme flex flex-row justify-around gap-20">
//           <div className="font-bold font-mono mt-15 ml-40 text-lg leading-8 max-w-220">
//             <p>
//               I am a CS student at{" "}
//               <span className="text-[#1AFF00] font-extrabold text-xl">
//                 Panjab University, Chandigarh
//               </span>
//               , who creates problems for himself by having too many interests. With a foundation in ECE and Robotics, and a deep curiosity for Finance and Psychology, I realized I needed serious structure to keep up with my own ambitions. That led to a{" "}
//               <span className="text-[#1AFF00] font-extrabold text-xl">
//                 12 hour
//               </span>{" "}
//               daily grind of study, fitness, and other extracurriculars. I’ve found that high discipline is the only way to turn <br /> 'having many interests' into 'having many skills.
//               <br />
//               <i>'The art of living is more like wrestling than dancing.'</i> — Marcus Aurelius <br />(I take the wrestling part literally).
//             </p>
//             <div className="flex flex-row gap-15">
//               <ul className="mt-10 ml-5">
//                 <li className="list-disc marker:text-[#1AFF00] mb-2">C++</li>
//                 <li className="list-disc marker:text-[#1AFF00] mb-2">
//                   React.js
//                 </li>
//                 <li className="list-disc marker:text-[#1AFF00] mb-2">
//                   JavaScript
//                 </li>
//                 <li className="list-disc marker:text-[#1AFF00] mb-2">
//                   Three.js
//                 </li>
//               </ul>
//               <ul className="mt-10 ml-5">
//                 <li className="list-disc marker:text-[#1AFF00] mb-2">AWS</li>
//                 <li className="list-disc marker:text-[#1AFF00] mb-2">SQL</li>
//                 <li className="list-disc marker:text-[#1AFF00] mb-2">GSAP</li>
//                 <li className="list-disc marker:text-[#1AFF00] mb-2">
//                   Git/Github
//                 </li>
//               </ul>
//               <ul className="mt-10 ml-5">
//                 <li className="list-disc marker:text-[#1AFF00] mb-2">N8N</li>
//                 <li className="list-disc marker:text-[#1AFF00] mb-2">Python</li>
//                 <li className="list-disc marker:text-[#1AFF00] mb-2">Next.js</li>
//                 <li className="list-disc marker:text-[#1AFF00] mb-2">
//                   MongoDB
//                 </li>
//               </ul>
//             </div>
//             <p className="mt-7">
//               On a genuine note, I love learning a lot and i try to push myself
//               to learn about probably everything new i get and can spend my time
//               on, 
//             </p>
//           </div>
//           <div className="mr-30 ">
//             <img
//               src='/image.png'
//               className="w-100 mt-30 h-100 border-0 rounded-[30px] hover:-translate-y-3 "
//             />
            
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;






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
        scrollTrigger: {
          trigger: ".about",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      id="about"
      ref={container}
      className="text-[#D3D3D3] pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="about max-w-7xl mx-auto">
        {/* Heading */}
        <div className="aboutme font-bold font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-20 sm:mt-28 md:mt-32 lg:mt-40 mb-8 sm:mb-12 md:mb-16">
          <h2 className="flex flex-wrap items-center gap-2 sm:gap-4">
            {"</> "}About Me
            <span className="flex-grow max-w-[100px] sm:max-w-[150px] md:max-w-[200px] bg-[#D3D3D3] opacity-35 h-0.5"></span>
          </h2>
        </div>

        {/* Content Container */}
        <div className="aboutme flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-10">
          {/* Text Content */}
          <div className="font-bold font-mono text-sm sm:text-base md:text-lg leading-0.5 sm:leading-0.5 md:leading-0.5 w-full lg:max-w-[60%]">
            <p className="mb-6 sm:mb-8">
              I am a CS student at{" "}
              <span className="text-[#1AFF00] font-extrabold text-base sm:text-lg md:text-xl">
                Panjab University, Chandigarh
              </span>
              , who creates problems for himself by having too many interests.
              With a foundation in ECE and Robotics, and a deep curiosity for
              Finance and Psychology, I realized I needed serious structure to
              keep up with my own ambitions. That led to a{" "}
              <span className="text-[#1AFF00] font-extrabold text-base sm:text-lg md:text-xl">
                12 hour
              </span>{" "}
              daily grind of study, fitness, and other extracurriculars. I've
              found that high discipline is the only way to turn 'having many
              interests' into 'having many skills.'
            </p>
            <p className="italic leading-1 sm:leading-1 md:leading-1 mb-6 sm:mb-8 text-xs sm:text-sm md:text-base">
              'The art of living is more like wrestling than dancing.' — Marcus
              Aurelius
              <br />
              (I take the wrestling part literally).
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 md:gap-12 lg:gap-15 leading-4 sm:leading-5 md:leading-6 mt-6 sm:mt-8 md:mt-10">
              <ul className="space-y-2">
                <li className="list-disc marker:text-[#1AFF00] ml-5">C++</li>
                <li className="list-disc marker:text-[#1AFF00] ml-5">
                  React.js
                </li>
                <li className="list-disc marker:text-[#1AFF00] ml-5">
                  JavaScript
                </li>
                <li className="list-disc marker:text-[#1AFF00] ml-5">
                  Three.js
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="list-disc marker:text-[#1AFF00] ml-5">AWS</li>
                <li className="list-disc marker:text-[#1AFF00] ml-5">SQL</li>
                <li className="list-disc marker:text-[#1AFF00] ml-5">GSAP</li>
                <li className="list-disc marker:text-[#1AFF00] ml-5">
                  Git/Github
                </li>
              </ul>
              <ul className="space-y-2 col-span-2 sm:col-span-1">
                <li className="list-disc marker:text-[#1AFF00] ml-5">N8N</li>
                <li className="list-disc marker:text-[#1AFF00] ml-5">Python</li>
                <li className="list-disc marker:text-[#1AFF00] ml-5">
                  Next.js
                </li>
                <li className="list-disc marker:text-[#1AFF00] ml-5">
                  MongoDB
                </li>
              </ul>
            </div>

            <p className="mt-6 sm:mt-7 text-sm sm:text-base md:text-lg">
              On a genuine note, I love learning a lot and I try to push myself
              to learn about probably everything new I get and can spend my time
              on.
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-auto flex mt-20 justify-center lg:justify-end">
            <img
              src="/image.png"
              alt="Profile"
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-auto rounded-[20px] sm:rounded-[25px] md:rounded-[30px] hover:-translate-y-3 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

