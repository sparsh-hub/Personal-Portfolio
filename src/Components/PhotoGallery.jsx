// import React, { useRef } from "react";
// import { gallery } from "../Store";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger)

// const PhotoGallery = () => {
//   const containerRef = useRef(null);
//   const imageRef = useRef([]);

//   useGSAP(() => {
//     const images = imageRef.current

//     const startPositions = [
//       {x: "-120vw", y: "-50vh"},
//       {x: "120vw", y: "-60vh"},
//       {x: "-130vw", y: "60vh"},
//       {x: "130vw", y: "50vh"},
//       {x: "0vw", y: "-70vh"},
//       {x: "10vw", y: "100vh"},
//     ]
//     const finalPositions = [
//       {x: "-40%", y: "20%", rotation: 7},
//       {x: "40%", y: "-45%", rotation: -12},
//       {x: "-45%", y: "-35%", rotation: 10},
//       {x: "20%", y: "25%", rotation: -15},
//       {x: "45%", y: "-15%", rotation: -5},
//       {x: "0%", y: "0%", rotation: 0},
//     ]

//     images.forEach((image,i) => {
//       gsap.set(image, {
//         x: startPositions[i].x,
//         y: startPositions[i].y,
//         rotation: gsap.utils.random(-60,60),
//         scale:0.5,
//         visibility: "visible", 
//       })
//     })

//     const tl = gsap.timeline({
//       scrollTrigger:{
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=1000",
//         scrub:2,
//         pin:true,
//         anticipatePin:1,
//       }
//     })

//     images.forEach((image,i) => {
//       tl.to(image, {
//         x: finalPositions[i].x,
//         y: finalPositions[i].y,
//         rotation: finalPositions[i].rotation,
//         scale: 1,
//         ease: "power2.out",
//         duration:1,
//       }, i*0.3)
//     })

//   },{scope : containerRef})
//   return (
//     <section id="gallery"  className="container flex justify-center items-center h-screen overflow-hidden -translate-y-100" ref={containerRef}>
//       <div className="center-point relative w-[250px] aspect-square">
//         {gallery.map((card, index) => {
//           return (
//             <div key={index} className="image-wrapper absolute w-[300px] aspect-square rounded-lg p-4 bg-[#fafafa] -translate-y-30 shadow-2xl invisible" ref={(el) => (imageRef.current[index] = el)}>
//               <img className="w-full h-full object-cover " src={card.link} alt="" />
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default PhotoGallery;





import React, { useRef } from "react";
import { gallery } from "../Store";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PhotoGallery = () => {
  const containerRef = useRef(null);
  const imageRef = useRef([]);

  useGSAP(() => {
    const images = imageRef.current;

    // Responsive positioning based on screen size
    const getPositions = () => {
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

      if (isMobile) {
        return {
          start: [
            { x: "-100vw", y: "-40vh" },
            { x: "100vw", y: "-50vh" },
            { x: "-110vw", y: "50vh" },
            { x: "110vw", y: "40vh" },
            { x: "0vw", y: "-60vh" },
            { x: "10vw", y: "80vh" },
          ],
          final: [
            { x: "-25%", y: "15%", rotation: 5 },
            { x: "25%", y: "-30%", rotation: -8 },
            { x: "-30%", y: "-25%", rotation: 7 },
            { x: "15%", y: "20%", rotation: -10 },
            { x: "30%", y: "-10%", rotation: -3 },
            { x: "0%", y: "0%", rotation: 0 },
          ],
        };
      } else if (isTablet) {
        return {
          start: [
            { x: "-110vw", y: "-45vh" },
            { x: "110vw", y: "-55vh" },
            { x: "-120vw", y: "55vh" },
            { x: "120vw", y: "45vh" },
            { x: "0vw", y: "-65vh" },
            { x: "10vw", y: "90vh" },
          ],
          final: [
            { x: "-35%", y: "18%", rotation: 6 },
            { x: "35%", y: "-40%", rotation: -10 },
            { x: "-40%", y: "-30%", rotation: 8 },
            { x: "18%", y: "23%", rotation: -12 },
            { x: "40%", y: "-13%", rotation: -4 },
            { x: "0%", y: "0%", rotation: 0 },
          ],
        };
      } else {
        // Desktop
        return {
          start: [
            { x: "-120vw", y: "-50vh" },
            { x: "120vw", y: "-60vh" },
            { x: "-130vw", y: "60vh" },
            { x: "130vw", y: "50vh" },
            { x: "0vw", y: "-70vh" },
            { x: "10vw", y: "100vh" },
          ],
          final: [
            { x: "-40%", y: "20%", rotation: 7 },
            { x: "40%", y: "-45%", rotation: -12 },
            { x: "-45%", y: "-35%", rotation: 10 },
            { x: "20%", y: "25%", rotation: -15 },
            { x: "45%", y: "-15%", rotation: -5 },
            { x: "0%", y: "0%", rotation: 0 },
          ],
        };
      }
    };

    const positions = getPositions();

    // Set initial positions
    images.forEach((image, i) => {
      if (image) {
        gsap.set(image, {
          x: positions.start[i].x,
          y: positions.start[i].y,
          rotation: gsap.utils.random(-60, 60),
          scale: 0.5,
          visibility: "visible",
        });
      }
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000",
        scrub: 2,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate to final positions
    images.forEach((image, i) => {
      if (image) {
        tl.to(
          image,
          {
            x: positions.final[i].x,
            y: positions.final[i].y,
            rotation: positions.final[i].rotation,
            scale: 1,
            ease: "power2.out",
            duration: 1,
          },
          i * 0.3
        );
      }
    });

    // Cleanup function to handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, { scope: containerRef });

  return (
    <section
      id="gallery"
      className="container mx-auto flex justify-center items-center min-h-screen h-screen overflow-hidden px-4 sm:px-6 lg:px-8"
      ref={containerRef}
    >
      <div className="center-point relative w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] aspect-square">
        {gallery.map((card, index) => {
          return (
            <div
              key={index}
              className="image-wrapper absolute w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] xl:w-[350px] aspect-square rounded-lg p-2 sm:p-3 md:p-4 bg-[#fafafa] shadow-lg sm:shadow-xl md:shadow-2xl invisible"
              ref={(el) => (imageRef.current[index] = el)}
            >
              <img
                className="w-full h-full object-cover rounded"
                src={card.link}
                alt={`Gallery image ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PhotoGallery;