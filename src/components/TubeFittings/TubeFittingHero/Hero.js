import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (

    <div className="tube-fittings-comparison-container">
      <StaticImage
        src='../../../assests/images/technical/tube_fittings_comparison.png'
        srcset="../../../assests/images/technical/tube_fittings_comparison.png"
        alt="blurred"
        aria-label="tube fittings comparison Cover"
        className="tube-fittings-comparison-image-banner"
      />
    </div>
  )
}

export default Hero