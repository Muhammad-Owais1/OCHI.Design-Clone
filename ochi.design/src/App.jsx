import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'

export default function App() {
  return (
      <div className='w-full h-screen text-zinc-800 bg-zinc-100'>
        <Navbar />
        <LandingPage />
        <Marquee />
      </div>
  )
}
