import React, { useState } from 'react';
import '../assets/css/common.scss';

const Navbar = () => {
  return (
    <header className='header__wrapper'>
      <div className="custom-container">
        <div className="header__sec">
          <div className="navbar__logo">
            <h2>MyLogo</h2>
          </div>
          <nav className="navbar">
            <div className="navbar__toggle">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={`navbar__links`}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
