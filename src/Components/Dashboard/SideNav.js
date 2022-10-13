import React from 'react'
import logo from '../../Assets/home/logo.png'
import homeIcon from '../../Assets/dashboard/home-icon.png'
import profileIcon from '../../Assets/dashboard/profile-icon.png'
import ordersIcon from '../../Assets/dashboard/orders-icon.png'
import cartIcon from '../../Assets/dashboard/cart-icon.png'

function SideNav({openOrderModal, openCartModal}) {
  return (
    <div className='side-nav'>
        <div className='navbar-brand side-nav-logo'>
            <img src={logo} />
            <h2>Lilies</h2>
        </div>

        <div className='side-nav-links'>

            <div className='dashboard-link'>
                <img src={homeIcon}/>
                <button>Dashboard</button>
            </div>

            <div className='profile-link'>
                <img src={profileIcon}/>
                <button>Your Profile</button>
            </div>

            <div className='orders-link'>
                <div>
                    <img src={ordersIcon}/>
                    <button onClick={openOrderModal}>Orders</button>
                </div>
                <button className='order-count'>6</button>
            </div>

            <div className='cart-link'>
                <div>
                    <img src={cartIcon}/>
                    <button onClick={openCartModal}>Your Cart</button>
                </div>
                <button className='order-count cart-count'>6</button>
            </div>

        </div>
    </div>
  )
}

export default SideNav