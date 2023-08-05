import React from 'react'
import Nav from './Nav'
import Logo from '../assets/Logo.svg'
const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Little Lemon logo"/>
      <Nav/>
    </header>
  )
}

export default Header
