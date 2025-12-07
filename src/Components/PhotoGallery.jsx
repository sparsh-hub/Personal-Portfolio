import React, { useRef } from "react";
import { gallery } from "../Store";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const PhotoGallery = () => {
  const containerRef = useRef(null);
  const imageRef = useRef([]);

  useGSAP(() => {
    const images = imageRef.current

    const startPositions = [
      {x: "-120vw", y: "-50vh"},
      {x: "120vw", y: "-60vh"},
      {x: "-130vw", y: "60vh"},
      {x: "130vw", y: "50vh"},
      {x: "0vw", y: "-70vh"},
      {x: "10vw", y: "100vh"},
    ]
    const finalPositions = [
      {x: "-40%", y: "20%", rotation: 7},
      {x: "40%", y: "-45%", rotation: -12},
      {x: "-45%", y: "-35%", rotation: 10},
      {x: "20%", y: "25%", rotation: -15},
      {x: "45%", y: "-15%", rotation: -5},
      {x: "0%", y: "0%", rotation: 0},
    ]

    images.forEach((image,i) => {
      gsap.set(image, {
        x: startPositions[i].x,
        y: startPositions[i].y,
        rotation: gsap.utils.random(-60,60),
        scale:0.5,
        visibility: "visible", 
      })
    })

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: containerRef.current,
        start: "top top",
        end: "+=2500",
        scrub:2,
        pin:true,
        anticipatePin:1,
      }
    })

    images.forEach((image,i) => {
      tl.to(image, {
        x: finalPositions[i].x,
        y: finalPositions[i].y,
        rotation: finalPositions[i].rotation,
        scale: 1,
        ease: "power2.out",
        duration:1,
      }, i*0.3)
    })

  },{scope : containerRef})
  return (
    <section id="gallery"  className="container flex justify-center items-center h-screen overflow-hidden" ref={containerRef}>
      <div className="center-point relative w-[250px] aspect-square">
        {gallery.map((card, index) => {
          return (
            <div key={index} className="image-wrapper absolute w-[300px] aspect-square rounded-lg p-4 bg-[#fafafa] shadow-2xl invisible" ref={(el) => (imageRef.current[index] = el)}>
              <img className="w-full h-full object-cover " src={card.link} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PhotoGallery;


// {gallery.map((card,index) => {
//         return(
//         <div key={index} className='' >
//           <img className='w-60 mt-20 ml-20 border-0 rounded-3xl h-60' src={card.link} alt="" />
//         </div>
//         )
//       })}