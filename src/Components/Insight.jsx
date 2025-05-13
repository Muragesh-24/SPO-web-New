import React from 'react'
import './Components.css'
import Navbar from './Navbar'
import Software from './Software'
import Quant from './Quant'
import Core from './Core'
import Conslt from './Conslt'
function Insight() {
  return (
    <div>
      <Navbar/>
      <div className="sdiv">
        <h1>SPO Insights</h1>
      </div>
      <div className="mai">
        <Software/>
        <Quant/>
        <Core/>
        <Conslt/>
      </div>
       <div className="foot">
  <div className="grid">
 <div className="g">
  <h3>IITK Links</h3>
  <p><a href="https://www.iitk.ac.in" target="_blank" rel="noopener noreferrer">IITK Homepage</a></p>
  <p><a href="https://www.iitk.ac.in/doaa" target="_blank" rel="noopener noreferrer">DoAA</a></p>
  <p><a href="https://www.iitk.ac.in/dosa" target="_blank" rel="noopener noreferrer">DoSA</a></p>
  <p><a href="https://students.iitk.ac.in" target="_blank" rel="noopener noreferrer">Students' Gymkhana</a></p>
</div>

<div className="g">
  <h3>For Companies</h3>
  <p><a href="/company-registration" target="_blank" rel="noopener noreferrer">Steps - Company registration</a></p>
  <p><a href="/recruitment-policy" target="_blank" rel="noopener noreferrer">Recruitment Procedure and Policy</a></p>
  <p><a href="/brochures" target="_blank" rel="noopener noreferrer">Brochures</a></p>
  <p><a href="/departmental-brochures" target="_blank" rel="noopener noreferrer">Departmental Brochures</a></p>
  <p><a href="/company-faqs" target="_blank" rel="noopener noreferrer">FAQs</a></p>
</div>

<div className="g " id="target-section">
  <h3>For Students</h3>
  <p><a href="/student-registration" target="_blank" rel="noopener noreferrer">Steps - Students Registration</a></p>
  <p><a href="/student-policy" target="_blank" rel="noopener noreferrer">Policy</a></p>
  <p><a href="/preparation-portal" target="_blank" rel="noopener noreferrer">Preparation Portal</a></p>
  <p><a href="/insights" target="_blank" rel="noopener noreferrer">Insights</a></p>
  <p><a href="/student-faqs" target="_blank" rel="noopener noreferrer">FAQs</a></p>
</div>

<div className="g">
  <h3>Contact</h3>
  <p>Students' Placement Office</p>
  <p>109, Outreach Building</p>
  <p>IIT Kanpur, Kanpur-208016</p>
  <p>Phone: +91 512 259 4433/34</p>
  <p>Email: <a href="mailto:spo@iitk.ac.in">spo@iitk.ac.in</a></p>
</div>

  </div>
  <div className="li">
  {/* Social Media Icons */}
  <div className="social-icons">
    <a href="mailto:spo@iitk.ac.in" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/ios-filled/50/007bff/email.png " alt="Email" />
    </a>
    <a href="https://www.facebook.com/iitk.spo" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/ios-filled/50/007bff/facebook.png" alt="Facebook" />

    </a>
    <a href="https://www.linkedin.com/school/iitk/" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/ios-filled/50/007bff/linkedin.png" alt="LinkedIn" />
    </a>
  </div>

  {/* Copyright Text */}
  <div className="copyright">
    © Copyright 2025 SPO, IIT Kanpur
  </div>
</div>

</div>
    </div>
  )
}

export default Insight
