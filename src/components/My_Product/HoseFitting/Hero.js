import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="product-hose-fitting-container">
      <StaticImage
        src='../../../assests/images/productPage/hose_Fitting.png'
        srcset="../../../assests/images/productPage/hose_Fitting.png"
        alt="blurred"
        aria-label="hose fittingd Cover"
        className="product-hose-fitting-img-hero"
      />
    </div>
  )
}

export default Hero