import React from 'react'
import Logo from './img/Logo.svg'
import Cart from './img/Cart.svg'
import Search from './img/Search.svg'
import Hamburger from './img/hamburger-menu.png'
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
      <div className="mobile-nav">
        <div className="hambruger-menu">
          <img src={Hamburger} alt="" id='menuicon' onClick={() => {
            let navbar = document.getElementById('navlinks')
            let hide = document.getElementById('hide')
            let menuicon = document.getElementById('menuicon')
            if (menuicon.classList.contains('opened')) {
              console.log(1)
              hide.style.display = 'none'
              console.log(2)
              menuicon.classList.remove('opened')
              return console.log(3)
            }
            hide.style.display = 'unset'
            menuicon.classList.add('opened')
          }} />
        </div>
        <div id='hide'>
          <div className="mobile-navlinks" id='navlinks'>
            <a href="/">الصفحه الرئيسيه</a>
            <a href="/">بوستات ديسكورد</a>
            <a href="/">نيتروهات ديسكورد</a>
            <a href="/">اعضاء ديسكورد</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar