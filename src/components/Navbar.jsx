import React from 'react'
import Logo from './img/Logo.svg'
import Cart from './img/Cart.svg'
import Search from './img/Search.svg'
import './Navbar.css'
function Navbar() {
  return (
    <nav className='navbar'>
        <div className='nav-icons'>
            <a href="/"><img src={Cart} alt="" /></a>
            <a href="/"><img src={Search} alt="" /></a>
        </div>
        <div className='navlinks'>
            <a href="/">الصفحه الرئيسيه</a>
            <a href="/">بوستات ديسكورد</a>
            <a href="/">نيتروهات ديسكورد</a>
            <a href="/">اعضاء ديسكورد</a>
        </div>
        <div className='logo-navbar'>
            <img src={Logo} alt="" />
        </div>
    </nav>
  )
}

export default Navbar