import React from 'react'
import "./Services_Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'


function ServicesHero() {
  return (
    <div className="service-us-container">
      <StaticImage
        src='../../../assests/images/servicePage/back_ground_service.svg'
        srcset="../../../assests/images/servicePage/back_ground_service.svg"
        alt="blurred"
        aria-label="service Cover"
        className="service-us-img-hero"
      />
    </div>
  )
}

export default ServicesHero