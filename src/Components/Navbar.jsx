import React from 'react'
import './Components.css'
function Navbar() {
  return (
    <div className='nav'>
    <img src="/lo.png" className='im'></img> 
    <ul className='uitop'>
       <li className="about"><a href='#'>ABOUT IITK</a></li> 
       <li className="about"><a href='#'>FOR COMPANIES</a></li> 
       <li className="about"><a href='/'>FOR STUDENTS</a></li> 
       <li className="about"><a href='#'>SAMVARDHAN</a></li> 
       <li className="about"><a href='#'>CONTACT</a></li> 

        </ul> 
        <div class="dropdown">
  <div class="hamburger">&#9776;</div>
  <div class="dropdown-content">
    <a href="#">ABOUT IITK</a>
    <a href="#">FOR COMPANIES</a>
    <a href="#">FOR STUDENTS</a>
    <a href='#'> SAMVARDHAN</a>
    <a href='#'> CONTACT</a>
  </div>
</div>
    </div>
  )
}

export default Navbar
