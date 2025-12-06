import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'

const App = () => {
  return (
    <main className='h-screen bg-[#023020]'>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App