import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            {/* <img src={assets.logo} alt="" className='footer-logo'/> */}
            <p>To insert non-localized, pseudo-Latin sample text in Word, type =lorem() in the document where you want the text to appear, and then press ENTER. Note: In this function, p is the number of paragraphs, and l is the number of lines that you want to appear in each paragraph. The parameters are optional.</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
                <li>1998847747</li>
                <li>contact@gmail.com</li>
            </ul>
        </div>
        <div className="footer-content-centre">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privey Policy</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright at Tomato .com in 2024</p>
    </div>
  )
}

export default Footer
