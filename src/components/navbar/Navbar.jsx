import './navbar.scss'
import Logo from '@/assets/logo.png'
import Menu from '@/assets/menu.png'
import Close from '@/assets/close.svg'
import { useState } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu((prev) => !prev) // toggle the value of showMenu
    console.log('showMenu: ', showMenu)
  }

  return (
    <nav>
      <div className='left'>
        <div className='logo-container'>
          <a href='#' className='logo'>
            <img src={Logo} alt='' />
            <span>MarikEstates</span>
          </a>
        </div>
        {/* <div className='nav-links'> */}
        <a className='desktop-link' href='/'>
          Home
        </a>
        <a className='desktop-link' href='/'>
          About
        </a>
        <a className='desktop-link' href='/'>
          Contact
        </a>
        <a className='desktop-link' href='/'>
          Agents
        </a>
        {/* </div> */}
      </div>
      {/*  DESKTOP  */}
      <div className='right'>
        <div className='desktop-buttons'>
          <a href='/'>Sign In</a>
          <a href='/' className='register'>
            Sign Up
          </a>
        </div>

        {/*  MOBILE  */}
        <div className='menu-icon' onClick={() => toggleMenu()}>
          <img src={Menu} alt='' />
        </div>
        <div className={`mobile-menu ${showMenu ? 'show' : ''}`}>
          <div className='close' onClick={() => toggleMenu()}>
            <img src={Close} alt='' />
          </div>
          <div className='mobile-links'>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>Contact</a>
            <a href='/'>Agents</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
