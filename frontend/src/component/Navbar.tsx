import React from 'react'
import "../App.css"
const Navbar = () => {
  return (
    <div>
      <div className="AppInfo">
        <p>ATTENDANCE SYSTEM</p>
        <ul>
          <li><a href="/">Home</a> </li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>

        </ul>
        <ul>
          <li>
        <a href="/login">Login</a>
          </li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar
