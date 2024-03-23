import React, { useState } from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom'
import {assets} from '../../Assets/assets'
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState('home')
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} className='logo' /></Link>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</li>
        <li onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>Menu</li>
        <li onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>Mobile-App</li>
        <li onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
