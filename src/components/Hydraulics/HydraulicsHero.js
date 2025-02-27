import React from 'react'
import "./HydraulicsHero.scss"
import { StaticImage } from 'gatsby-plugin-image'
function HydraulicsHero() {
  return (
    <div className="hydraulics-gas-hero-container">
      <StaticImage
        src='../../assests/images/homecards/hydraulics_open.png'
        srcset='../../assests/images/homecards/hydraulics_open.png'
        alt="blurred"
        aria-label="hydraulics Gas Cover"
        className="hydraulics-gas-hero-image-banner"
      />
    </div>
  )
}

export default HydraulicsHero