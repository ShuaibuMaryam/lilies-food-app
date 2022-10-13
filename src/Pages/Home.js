import React from 'react'
import Footer from '../Components/Home/Footer.js'
import FooterSocials from '../Components/Home/FooterSocials.js'
import Hero from '../Components/Home/Hero.js'
import Meals from '../Components/Home/Meals.js'
import Navbar from '../Components/Home/Navbar.js'
import Notify from '../Components/Home/Notify.js'
import style from '../style.css'

function Home() {
  return (
    <div className='home'>
        <Navbar />

        <Hero />

        <Meals />

        <Notify />

        <Footer />

        <FooterSocials />
    </div>
  )
}

export default Home