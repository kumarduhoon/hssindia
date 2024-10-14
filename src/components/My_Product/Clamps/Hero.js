import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="product-clamps-container">
      <StaticImage
        src='../../../assests/images/productPage/tubeClamps.png'
        srcset="../../../assests/images/productPage/tubeClamps.png"
        alt="blurred"
        aria-label="hose fittingd Cover"
        className="product-clamps-img-hero"
      />
    </div>
  )
}

export default Hero