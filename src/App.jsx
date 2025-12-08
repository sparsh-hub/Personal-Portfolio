import React, { Suspense, useRef } from 'react'
import gsap from 'gsap'
import {ScrollTrigger, SplitText, ScrollSmoother} from 'gsap/all'
import { useGSAP } from '@gsap/react'
import Loader from './Components/Loader'


const Navbar = React.lazy(() => import('./Components/Navbar'))
const Hero = React.lazy(() => import('./Components/Hero'))
const About = React.lazy(() => import('./Components/About'))
const Experience = React.lazy(() => import('./Components/Experience'))
const PhotoGallery = React.lazy(() => import('./Components/PhotoGallery'))
const Footer = React.lazy(() => import('./Components/Footer'))


gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
gsap.registerPlugin(SplitText)

const App = () => {
  
  return (
    <main className='min-h-screen bg-[#023020] m-0 p-0'>
      <Suspense fallback={<div><Loader /></div>}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <PhotoGallery />
        <Footer />
      </Suspense>
    </main>
  )
}

export default App