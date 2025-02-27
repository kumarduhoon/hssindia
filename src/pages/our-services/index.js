import React from 'react'
import ServicesHero from "../../components/Our_Services/Our_Services_Hero/Services_Hero"
import ServicesData from "../../components/Our_Services/OurServicesData/ServicesData"
import { Helmet } from 'react-helmet'

function OurServices() {
  return (
    <div className='our-service-main-con'>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Hydraulic Sealing Solutions" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HSS - Hydraulic Sealing Solutions</title>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </Helmet>
      <ServicesHero />
      <ServicesData />
    </div>
  )
}

export default OurServices