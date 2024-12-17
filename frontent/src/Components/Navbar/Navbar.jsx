import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/carticon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/menu.png'

export const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems}= useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e)=>{
       menuRef.current.classList.toggle('nav-menu-visible');
       e.traget.classList.toggle('open');
  }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <img className='nav_dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none', color:'black'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("puja")}}><Link style={{textDecoration: 'none', color:'black'}}  to='/puja'>Puja Incense</Link> {menu==="puja"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mosquito")}}><Link style={{textDecoration: 'none', color:'black'}}  to='/mosquito'>Mosquito Incense</Link> {menu==="mosquito"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("backflow")}}><Link style={{textDecoration: 'none', color:'black'}}  to='backflow'>BackFlow Incense</Link> {menu==="backflow"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("brass")}}><Link style={{textDecoration: 'none', color:'black'}}  to='brass'>Brass Stands</Link> {menu==="brass"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

