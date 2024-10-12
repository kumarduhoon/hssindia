import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="product-hose-assemblies-container">
      <StaticImage
        src='../../../assests/images/productPage/hose_fitting_hero.png'
        srcset="../../../assests/images/productPage/hose_fitting_hero.png"
        alt="blurred"
        aria-label="hose fittingd Cover"
        className="product-hose-assemblies-img-hero"
      />
    </div>
  )
}

export default Hero