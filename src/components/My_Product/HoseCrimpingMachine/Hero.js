import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="product-crimping-machine-container">
      <StaticImage
        src='../../../assests/images/productPage/hose_crimping_machine.png'
        srcset="../../../assests/images/productPage/hose_crimping_machine.png"
        alt="blurred"
        aria-label="hose fittingd Cover"
        className="product-crimping-machine-img-container"
      />
    </div>
  )
}

export default Hero