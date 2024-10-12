import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="product-accessories-container">
      <StaticImage
        src='../../../assests/images/productPage/accessories_hero.png'
        srcset="../../../assests/images/productPage/accessories_hero.png"
        alt="blurred"
        aria-label="hose fittingd Cover"
        className="product-accessories-img-container"
      />
    </div>
  )
}

export default Hero