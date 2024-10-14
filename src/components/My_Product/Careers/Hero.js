import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'
function Hero() {
  return (
    <div className="careers-container">
      <StaticImage
        src='../../../assests/images/reach_us/care_hero.png'
        srcset="../../../assests/images/reach_us/care_hero.png"
        alt="blurred"
        aria-label="careers Cover"
        className="careers-img-hero"
      />
    </div>
  )
}

export default Hero