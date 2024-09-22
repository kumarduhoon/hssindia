import React from 'react'
import "./about_us.scss"
import { StaticImage } from "gatsby-plugin-image";

function AboutHero() {
  return (
    <div className="about-us-container">
      <StaticImage
        src='../../assests/images/aboutpage/about-us_banner.svg'
        srcset="../../assests/images/aboutpage/about-us_banner.svg"
        alt="blurred"
        aria-label="About Cover"
        className="about-us-img-hero"
      />
    </div>
  )
};


export default AboutHero