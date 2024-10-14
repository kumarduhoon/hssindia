import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="product-tube-clmap-container">
      <StaticImage
        src='../../../assests/images/productPage/tube_clamp.png'
        srcset="../../../assests/images/productPage/tube_clamp.png"
        alt="blurred"
        aria-label="hose fittingd Cover"
        className="product-tube-clmap-img-container"
      />
    </div>
  )
}

export default Hero

