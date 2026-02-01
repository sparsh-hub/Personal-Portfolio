// import { Icon } from "@iconify/react/dist/iconify.js";
// import { projects } from "../Store/index.js";
// import { useRef, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const Experience = () => {
//   const overlayRefs = useRef([]);
//   const previewRef = useRef(null);

//   const [currentIndex, setCurrentIndex] = useState(null);
//   const text = `Featured projects that have been meticulously
//     crafted with passion to drive
//     results and impact.`;

//   const mouse = useRef({ x: 0, y: 0 });
//   const moveX = useRef(null);
//   const moveY = useRef(null);

//   useGSAP(() => {
//     moveX.current = gsap.quickTo(previewRef.current, "x", {
//       duration: 1.5,
//       ease: "power3.out",
//     });
//     moveY.current = gsap.quickTo(previewRef.current, "y", {
//       duration: 2,
//       ease: "power3.out",
//     });

//     gsap.from("#project", {
//       y: 100,
//       opacity: 0,
//       delay: 0.1,
//       duration: 0.8,
//       stagger: 0.3,
//       ease: "back.out",
//       scrollTrigger: {
//         trigger: "#project",
//       },
//     });
//   }, []);

//   const handleMouseEnter = (index) => {
//     if (window.innerWidth < 768) return;
//     setCurrentIndex(index);

//     const el = overlayRefs.current[index];
//     if (!el) return;

//     gsap.killTweensOf(el);
//     gsap.fromTo(
//       el,
//       {
//         clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
//       },
//       {
//         clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//         duration: 0.15,
//         ease: "power2.out",
//       },
//     );

//     gsap.to(previewRef.current, {
//       opacity: 1,
//       scale: 1,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   };

//   const handleMouseLeave = (index) => {
//     if (window.innerWidth < 768) return;
//     setCurrentIndex(null);

//     const el = overlayRefs.current[index];
//     if (!el) return;

//     gsap.killTweensOf(el);
//     gsap.to(el, {
//       clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
//       duration: 0.2,
//       ease: "power2.in",
//     });

//     gsap.to(previewRef.current, {
//       opacity: 0,
//       scale: 0.95,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   };

//   const handleMouseMove = (e) => {
//     if (window.innerWidth < 768) return;
//     mouse.current.x = e.clientX + 24;
//     mouse.current.y = e.clientY + 24;
//     moveX.current(mouse.current.x);
//     moveY.current(mouse.current.y);
//   };

//   return (
//     <section
//       id="work"
//       className="flex flex-col min-h-screen items-center justify-between"
//     >
//       <div className="cards-wrapper p-16 mt-15 mb-15 overflow-hidden">
//         <div>
//           <p className="experience font-bold font-mono text-5xl text-[#D3D3D3] mt-30 ml-20">
//             {"</> "}Projects{" "}
//             <span className="inline-block w-100 bg-[#F2F0EF] mb-3 opacity-35 h-0.5 ml-4"></span>
//           </p>
//         </div>
//       </div>
//       <div
//         className="relative flex flex-col font-light"
//         onMouseMove={handleMouseMove}
//       >
//         {projects.map((project, index) => (
//           <>
//             <div
//               key={project.id}
//               img-title={project.name}
//               id="project"
//               className="title relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={() => handleMouseLeave(index)}
//               onClick={() => window.open(project.url, "_blank")}
//             >
//               {/* overlay */}
//               <div
//                 ref={(el) => {
//                   overlayRefs.current[index] = el;
//                 }}
//                 className="absolute font-digital inset-0 hidden md:block duration-200 -z-10 clip-path"
//               />

//               {/* title */}
//               <div className="flex justify-between px-10 text-white/50 transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
//                 <h2 className="lg:text-[32px] text-[26px] leading-none">
//                   {project.name}
//                 </h2>
//                 <Icon
//                   icon="lucide:arrow-up-right"
//                   className="md:size-6 size-5"
//                 />
//               </div>
//               {/* divider */}
//               <div className="w-full h-0.5 bg-green/80" />
//               {/* framework */}
//               <div className="flex px-10 text-xs leading-loose uppercase transtion-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
//                 {project.frameworks.map((framework) => (
//                   <p
//                     key={framework.id}
//                     className="text-white/50 font-digital transition-colors duration-500 md:group-hover:text-white"
//                   >
//                     {framework.name}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </>
//         ))}

//         <div
//           ref={previewRef}
//           className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[960px] md:block hidden opacity-0"
//         >
//           {currentIndex !== null && (
//             <img
//               src={projects[currentIndex].image}
//               alt="preview"
//               className="object-cover w-full h-full"
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;



import { Icon } from "@iconify/react/dist/iconify.js";
import { projects } from "../Store/index.js";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Experience = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(null);

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.1,
      duration: 0.8,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section
      id="work"
      className="flex flex-col min-h-screen items-center justify-between py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16">
        <div className="experience font-bold font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#D3D3D3]">
          <h2 className="flex flex-wrap items-center gap-2 sm:gap-4">
            {"</> "}Projects
            <span className="flex-grow max-w-[100px] sm:max-w-[150px] md:max-w-[200px] bg-[#F2F0EF] opacity-35 h-0.5"></span>
          </h2>
        </div>
      </div>

      {/* Projects List */}
      <div
        className="relative flex flex-col font-light w-full max-w-7xl mx-auto"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            img-title={project.name}
            id="project"
            className="title relative flex flex-col gap-1 py-4 sm:py-5 md:py-6 cursor-pointer group md:gap-0 transition-all duration-300 active:bg-white/5 md:active:bg-transparent"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => window.open(project.url, "_blank")}
          >
            {/* Overlay - Desktop only */}
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute font-digital inset-0 hidden md:block duration-200 -z-10 clip-path"
            />

            {/* Title */}
            <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 text-white/50 transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white group-active:text-white">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-tight sm:leading-none font-semibold">
                {project.name}
              </h2>
              <Icon
                icon="lucide:arrow-up-right"
                className="size-4 sm:size-5 md:size-6 flex-shrink-0"
              />
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 bg-[#1AFF00]/80" />

            {/* Frameworks */}
            <div className="flex flex-wrap px-4 sm:px-6 md:px-8 lg:px-10 text-xs sm:text-sm leading-loose uppercase transition-all duration-500 gap-x-3 sm:gap-x-4 md:gap-x-5 gap-y-1 md:group-hover:px-12">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-white/50 font-digital transition-colors duration-500 md:group-hover:text-white group-active:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Preview Image - Desktop only */}
        <div
          ref={previewRef}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 overflow-hidden border-4 sm:border-6 md:border-8 border-black pointer-events-none w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] aspect-video hidden md:block opacity-0 rounded-lg shadow-2xl"
        >
          {currentIndex !== null && (
            <img
              src={projects[currentIndex].image}
              alt={`${projects[currentIndex].name} preview`}
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>

      {/* Optional: Featured Text for larger screens */}
      <div className="hidden lg:block w-full max-w-7xl mx-auto mt-12">
        <p className="text-center text-white/40 text-sm md:text-base italic px-4">
          Featured projects that have been meticulously crafted with passion to
          drive results and impact.
        </p>
      </div>
    </section>
  );
};

export default Experience;