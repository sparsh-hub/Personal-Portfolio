import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Cursor = () => {
    const [mousePos, setMousePos] = useState({x:0,y:0})
    useGSAP(() => {
        const mouseMove = (e) => {
            setMousePos({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove)
        gsap.to(".cursor",{
            x: mousePos.x,
            y: mousePos.y
        })
    }, [mousePos])
  return (
    <div>
        <div className='cursor h-6 w-6 bg-[#1AFF00] animate-pulse rounded-full fixed z-150'></div>
    </div>
  )
}

export default Cursor