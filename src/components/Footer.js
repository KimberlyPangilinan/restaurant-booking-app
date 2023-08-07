import React from 'react'
import "../styles/footer.css"
import Logo from '../assets/Logo.svg'
const Footer = () => {
  return (
    <footer id="footer" >
      <img src={Logo} alt="Little Lemon logo"/>
        <div>
          <h3>Site Navigation</h3>
          <ul>
            <li>Little Lemon</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <h3>Contact details</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempory</p>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Website</li>
          </ul>
        </div>
      
    </footer>
  )
}

export default Footer
