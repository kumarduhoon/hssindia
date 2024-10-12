import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'


function Hero() {
  return (
    <div className="product-hose-fitting-container">
      <StaticImage
        src='../../../assests/images/productPage/tube_fitting_hero.png'
        srcset="../../../assests/images/productPage/tube_fitting_hero.png"
        alt="blurred"
        aria-label="tube fittingd Cover"
        className="product-hose-fitting-img-hero"
      />
    </div>
  )
}

export default Hero

