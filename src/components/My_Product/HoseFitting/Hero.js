import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="about-us-container">
      <StaticImage
        src='../../../../static/hose_fitting_hero.png'
        srcset="../../../../static/hose_fitting_hero.png"
        alt="blurred"
        aria-label="hose fittingd Cover"
        className="about-us-img-hero"
      />
    </div>
  )
}

export default Hero