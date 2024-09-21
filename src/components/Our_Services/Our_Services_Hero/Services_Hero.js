import React from 'react'
import "./Services_Hero.scss"
import services_banner from "../../../assests/images/servicePage/back_ground_service.svg"


function ServicesHero() {
  return (
    <div className="service-container">
      <img
        src={services_banner}
        alt='service banner'
        className='service-image-banner'
      />
    </div>
  )
}

export default ServicesHero