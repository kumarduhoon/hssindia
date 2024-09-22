import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className="non-skive-vs-skive-container">
      <StaticImage
        src='../../../assests/images/technical/non_skive_vs_skive_fitting.png'
        srcset="../../../assests/images/technical/non_skive_vs_skive_fitting.png"
        alt="blurred"
        aria-label="non skive vs skive fitting Cover"
        className="non-skive-vs-skive-image-banner"
      />
    </div>
  )
}

export default Hero