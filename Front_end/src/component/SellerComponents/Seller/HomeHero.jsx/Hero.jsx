import React from 'react'
import './Hero.css'
import SellButton from '../SellButton'

const Hero = () => {
  return (
    <div className="hero">
        <div className='hero-text'>
            <h2>WELCOME TO SELLER</h2>
            <p>MAKE YOUR PRODUCT SELL
            </p>
        </div>
        <div className='sellButton'><SellButton/> </div>
    </div>
  )
}

export default Hero