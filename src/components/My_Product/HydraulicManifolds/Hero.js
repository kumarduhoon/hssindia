import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="product-hydraulic-mainfolds-container">
      <StaticImage
        src='../../../assests/images/productPage/ball_valves_and_QRC.png'
        srcset="../../../assests/images/productPage/ball_valves_and_QRC.png"
        alt="blurred"
        aria-label="hose fittingd Cover"
        className="product-hydraulic-mainfolds-img-container"
      />
    </div>
  )
}

export default Hero