import React from 'react'
import'./about.css'
import theme_patttern from '../../assets/theme_pattern.svg'
import profile_img from'../../assets/about_profile.svg'

const About = () => {
  return (
 <div id='about' className="about">
    <div className="about-title">
        <h1>about me</h1>
        <img src={theme_patttern}alt="" /></div>
        <div className="about-sections">
          <div className="about-left">
            <img src={profile_img} alt=""/>
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, quia laudantium ut natus nisi inventore modi atque fugit sunt sapiente, saepe earum perspiciatis impedit illo ullam praesentium nulla id aspernatur.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam aut perspiciatis repellendus obcaecati iure, atque at velit aliquid adipisci provident accusantium doloremque ut magnam vero, architecto placeat beatae alias. Fugiat.</p>
            </div>
            <div className="about-skills">
              <div className="about-skill"> <p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
              <div className="about-skill"> <p>React Js</p><hr style={{width:"70%"}} /></div>
              <div className="about-skill"> <p>JavaScript</p><hr style={{width:"60%"}} /></div>
              <div className="about-skill"> <p>Next JS</p><hr style={{width:"50%"}} /></div>
              <div className="about-skill"> <p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
            </div>
          </div>
            

        </div>
    
    <div className="about-achievements">
    <div className="about-achievement">
      <h1>10+</h1>
      <p>YEARS OF EXPERIENCE </p>
    </div>
    <hr/>
    <div className="about-achievement">
      <h1>90+</h1>
      <p>PROJECT COMPLETED</p>
    </div>
    <hr/>
    <div className="about-achievement">
      <h1>15+</h1>
      <p>Happy clients</p>
    </div>
    </div>
 </div>
  )
}

export default About