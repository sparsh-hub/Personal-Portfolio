import React from 'react'
import { FaMailBulk } from "react-icons/fa";



const Hero = () => {
  return (
    <section id='home' className='text-[#F2F0EF] '>
        <h1 className='font-mono font-bold mt-50 text-5xl text-center'>Hi <span className='text-[#1AFF00]'>Sparsh</span> here.<span className='text-[#1AFF00] animate-ping'>|</span></h1>
        <h2 className='font-mono font-bold mt-5 text-3xl text-center'>On A Learning Phase</h2>
        <p className='text-center ml-120 mr-120 font-mono font-bold text-lg mt-5'>I am a second-year Computer Science student at Panjab University, Chandigarh, leveraging a foundation in ECE and robotics. Driven by an interdisciplinary curiosity, I am actively exploring diverse fields from core CS to Finance and Psychology</p>
        <a href="mailto:sparshag2803@gmail.com" className='flex flex-row justify-center gap-4 mt-20 text-lg font-bold border ml-190 mr-190 p-8 border-[#1AFF00] text-[#1AFF00] rounded-lg hover:bg-[#023020] hover:opacity-70 hover:animate-bounce'><FaMailBulk size="30px" />Say Hi</a>
    </section>
  )
}

export default Hero