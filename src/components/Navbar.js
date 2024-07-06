import React, { useState } from 'react';
import ziwy from '../../src/ziwy-logo.png'
import './navbar.css'

const Navbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
    <nav>
      <div className="navbar-container">
        <div className="left-side">
          
          <img src= {ziwy} alt='' className='logo'/>
          <ul className="nav-links">
            <li><a href="/" className='link'>Enrollment</a></li>
            <li><a href="/" className='link'>Events</a></li>
            <li><a href="/" className='link'>Reports</a></li>
          </ul>
        </div>
        <div className="right-side">
          <div className="buttons">
          
            {isLoggedIn ? (
              <div className="auth-buttons">
                <button onClick={handleLogout}>Logout</button>
                <div className="account-dropdown">
                  <button>Account<br/></button>
                  <div className="dropdown-content">
                    <a href="/">Profile</a><br/>
                    <a href="/">Settings</a>
                  </div>
                 
                </div>
                
                <p className='welcome'>Welcome Johana Carvajal</p>
              </div>
              
            ) : (
              <div className="auth-buttons">
                <button onClick={handleLogin}>Login</button>
              </div>
            )}
          </div>
        </div>
      
      </div>
      
    </nav>
    </>
  );
};

export default Navbar;
