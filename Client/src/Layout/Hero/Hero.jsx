import React from 'react'
import Navbar from '../Navbar/Navbar'
import Welcome from '../../Component/Welcome/Welcome'

function Hero() {
  return (
    <div className="hero">
        <Navbar/>
        <Welcome/>
    </div>
  )
}

export default Hero