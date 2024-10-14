import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="product-spring-gurads-container">
      <StaticImage
        src='../../../assests/images/productPage/springuards_and_spiral_sleeves.png'
        srcset="../../../assests/images/productPage/springuards_and_spiral_sleeves.png"
        alt="blurred"
        aria-label="hose fittingd Cover"
        className="product-spring-gurads-img-container"
      />
    </div>
  )
}

export default Hero