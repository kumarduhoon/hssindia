import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="product-spring-gurads-container">
      <StaticImage
        src='../../../assests/images/productPage/ball_valves_and_QRC.png'
        srcset="../../../assests/images/productPage/ball_valves_and_QRC.png"
        alt="blurred"
        aria-label="hose fittingd Cover"
        className="product-spring-gurads-img-container"
      />
    </div>
  )
}

export default Hero