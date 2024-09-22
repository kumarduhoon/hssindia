import React from 'react'
import "./our_services.scss"
import ServicesHero from "../../components/Our_Services/Our_Services_Hero/Services_Hero"
import ServicesData from "../../components/Our_Services/OurServicesData/ServicesData"

function OurServices() {
  return (
    <div className='our-service-main-con'>
      <ServicesHero />
      <ServicesData />
    </div>
  )
}

export default OurServices