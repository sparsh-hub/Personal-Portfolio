import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'

const App = () => {
  return (
    <main className='min-h-screen bg-[#023020] m-0 p-0'>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App