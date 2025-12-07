import React, { useRef } from 'react'
import Navbar from './Components/Navbar'
import gsap from 'gsap'
import {ScrollTrigger, SplitText, ScrollSmoother} from 'gsap/all'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'
import { useGSAP } from '@gsap/react'
import {motion} from 'motion/react'

import PhotoGallery from './Components/PhotoGallery'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
gsap.registerPlugin(SplitText)

const App = () => {
  
  return (
    <main className='min-h-screen bg-[#023020] m-0 p-0'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <PhotoGallery />
    </main>
  )
}

export default App