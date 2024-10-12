import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="product-adaptors-container">
      <StaticImage
        src='../../../assests/images/productPage/adaptor_hero.png'
        srcset="../../../assests/images/productPage/adaptor_hero.png"
        alt="blurred"
        aria-label="hose fittingd Cover"
        className="product-adaptors-img-hero"
      />
    </div>
  )
}

export default Hero