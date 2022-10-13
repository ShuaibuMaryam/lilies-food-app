import React from 'react'
import playStore from '../../Assets/home/google-play.png'
import appleStore from '../../Assets/home/apple-store.png'
import heroImage from '../../Assets/home/hero-image.png'

function Hero() {
  return (
    <div className='hero default-padding'>
        <div className='hero-text'>
            <h1>Order <span>food</span> anytime, anywhere</h1>
            <p>Browse from our list of specials to place your order and have food delivered to you in
                 no time. Affordable, tasty and fast!
            </p>
            <div className='hero-text-image'>
                <img src= {playStore}/>
                <img src= {appleStore}/>
            </div>
        </div>
        <div className='hero-image'>
            <img src= {heroImage}/>
        </div>
    </div>
  )
}

export default Hero