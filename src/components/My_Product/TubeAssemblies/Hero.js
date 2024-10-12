import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="product-tube-assemblies-container">
      <StaticImage
        src='../../../assests/images/productPage/tube_assemblies_hero.png'
        srcset="../../../assests/images/productPage/tube_assemblies_hero.png"
        alt="blurred"
        aria-label="hose fittingd Cover"
        className="product-tube-assemblies-img-container"
      />
    </div>
  )
}

export default Hero

