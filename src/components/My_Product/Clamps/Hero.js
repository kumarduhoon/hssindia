import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="product-clamps-container">
      <StaticImage
        src='../../../assests/images/productPage/clamps.png'
        srcset="../../../assests/images/productPage/clamps.png"
        alt="blurred"
        aria-label="hose clamp Cover"
        className="product-clamps-img-hero"
      />
    </div>
  )
}

export default Hero