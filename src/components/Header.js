import React from 'react'
import Nav from './Nav'
import Logo from '../assets/Logo.svg'
import '../styles/header.css'
const Header = () => {
  return (
    <header id="header">
      <img src={Logo} alt="Little Lemon logo"/>
      <Nav/>
    </header>
  )
}

export default Header
