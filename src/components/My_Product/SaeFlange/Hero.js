import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="product-sae-flange-container">
      <StaticImage
        src='../../../assests/images/productPage/sae_flange.png'
        srcset="../../../assests/images/productPage/sae_flange.png"
        alt="blurred"
        aria-label="hose fittingd Cover"
        className="product-sae-flange-img-hero"
      />
    </div>
  )
}

export default Hero