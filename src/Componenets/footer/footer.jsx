import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
     <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a  fronted developer from , India from 1 years of experience in companies like microsoft ,tesla and apple</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-suscribe">suscribe</div>
            </div>
            </div>
             <hr/>
            <div className="footer-buttom">
                <p className="footer-butom-left"> @Sanket Malve.All rights reserved </p>
                <div className="footer-buttom-right">
                    <p>Terms of services</p>
                    <p>privacy policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>

    
  )
}

export default Footer