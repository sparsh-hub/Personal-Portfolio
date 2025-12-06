import React from 'react'
import Navbar from './Components/Navbar'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main className='min-h-screen bg-[#023020] m-0 p-0'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </main>
  )
}

export default App