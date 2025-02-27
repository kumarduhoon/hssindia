import React from 'react'
import "./Index.scss"
import { StaticImage } from 'gatsby-plugin-image'

function CngFuelHero() {
  return (
    <div className="cng-fuel-hero-container">
      <StaticImage
        src='../../../assests/images/homecards/cng_fuel.png'
        srcset="../../../assests/images/homecards/cng_fuel.png"
        alt="blurred"
        aria-label="CNG Fuel Cover"
        className="cng-fuel-hero-image-banner"
      />
    </div>
  )
}

export default CngFuelHero