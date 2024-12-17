import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import fb_icon from '../Assets/fb_logo.png'
import insta_icon from '../Assets/insta_logo.png'
import whatsapp_icon from '../Assets/whatsapp_logo.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Gaumayam</p>
        </div>
        <ul className="footer-link">
            <li>Products</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blogs</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={fb_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={insta_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}
