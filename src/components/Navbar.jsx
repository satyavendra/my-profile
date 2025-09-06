import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='custom-container'>
        <nav>
    <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Tech Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
