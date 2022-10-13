import React from 'react'
import playStore from '../../Assets/home/google-play.png'
import appleStore from '../../Assets/home/apple-store.png'


function Footer() {
  return (
    <div className='footer default-padding' id='footer'>
        <div className='footer-sections'>
            <div className='footer-section'>
                <h4>Company</h4>
                <ul className='footer-links'>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
            </div>

            <div className='footer-section'>
                <h4>Support</h4>
                <ul className='footer-links'>
                    <li><a href='#'>Help Center</a></li>
                    <li><a href='#'>Safety Center</a></li>
                </ul>
            </div>

            <div className='footer-section'>
                <h4>Legal</h4>
                <ul className='footer-links'>
                    <li><a href='#'>Cookies Policy</a></li>
                    <li><a href='#'>Privacy Policy</a></li>
                    <li><a href='#'>Terms of Service</a></li>
                    <li><a href='#'>Dispute resolution</a></li>
                </ul>
            </div>

            <div className='footer-section'>
                <h4>Install App</h4>
                <ul className='footer-links'>
                    <li><a href='#'><img src={playStore}/></a></li>
                    <li><a href='#'><img src={appleStore}/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer