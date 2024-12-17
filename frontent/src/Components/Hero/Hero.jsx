import React from 'react'
import './Hero.css'
import hero_img from '../Assets/mainbanner.png'

export const Hero = () => {
  return (
    <div className='hero'>
         <img src={hero_img} alt="" />
         <div className="hero-left">
            <h2>New Arrivals only</h2>
            <div>
                <p>Collection</p>
                <p>For <span style={{color:'Brown'}}>You</span></p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
            </div>
         </div>
    </div>
  )
}
