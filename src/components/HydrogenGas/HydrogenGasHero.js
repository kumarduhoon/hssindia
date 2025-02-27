import React from 'react'
import "./HydrogenGasHero.scss"
import { StaticImage } from 'gatsby-plugin-image'
function HydrogenGasHero() {
  return (
    <div className="hydrogen-gas-hero-container">
      <StaticImage
        src='../../assests/images/homecards/hydragen_gas.png'
        srcset='../../assests/images/homecards/hydragen_gas.png'
        alt="blurred"
        aria-label="hydragen Gas Cover"
        className="hydrogen-gas-hero-image-banner"
      />
    </div>
  )
}

export default HydrogenGasHero