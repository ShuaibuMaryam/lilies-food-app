import React from 'react'
import instagramIcon from '../../Assets/home/instagram.png'
import twitterIcon from '../../Assets/home/twitter.png'
import youtubeIcon from '../../Assets/home/youtube.png'

function FooterSocials() {
  return (
    <div className='footer'>
        <div className='footer-socials'>
                <div className='span'>
                    <span>© 2021 LILIES, All rights reserved</span>
                </div>
                <div className='socials'>
                    <img src={instagramIcon} alt='' />
                    <img src={twitterIcon} alt='' />
                    <img src={youtubeIcon} alt='' />
                </div>
        </div>
    </div>
  )
}

export default FooterSocials