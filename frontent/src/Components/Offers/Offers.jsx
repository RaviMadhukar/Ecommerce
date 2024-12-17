import React from 'react'
import './Offers.css'
import exclusiveimg from '../Assets/midbanner.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <img src={exclusiveimg} alt="" />
        <div className="offers-left">
            <h1>Exclusive</h1>
            <p>Offers For <span style={{fontSize:"40px" , color:"white" }}>You</span></p>
            <button>Check Now</button>
        </div>
    </div>
  )
}
