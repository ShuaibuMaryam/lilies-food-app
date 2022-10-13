import React from 'react'
import logo from '../../Assets/home/logo.png'

function Navbar() {
  return (
    <div className='default-padding'>
        <nav>
            <div className='navbar-brand'>
                <img src={logo} />
                <h2>Lilies</h2>
            </div>
            <ul className='nav-links'>
              <li><a href='/' className='home-link'>Home</a></li>
              <li><a href='/login' className='login-link'>Login</a></li>
              <li><a href='/signup' className='signup-link'>Sign Up</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar