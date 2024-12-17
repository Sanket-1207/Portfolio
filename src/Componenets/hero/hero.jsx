import React from 'react'
import'./hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className="Hero">
        <img src={profile_img}alt="" />
        <h1><span>I'm Sanket Malve</span> Frontend developer based in India</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi eos hic quas aut nam, dolore eius non, officia, beatae in consectetur? Eum beatae deleniti voluptatem dolores quasi est repellat quia.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero