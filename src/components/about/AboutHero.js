import React from 'react'
import "./about_us.scss"
import About_us_banner from "../../assests/images/aboutpage/about-us_banner.svg"

function AboutHero() {
  return (
    <div className="about-us-container">
      <img
        src={About_us_banner}
        alt='about banner'
      />
    </div>
  )
};


export default AboutHero