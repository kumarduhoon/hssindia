import React from 'react'
import "./AboutHistory.scss"
import { StaticImage } from 'gatsby-plugin-image'

function AboutHistory() {
  return (
    <div className='container mt-8 grid grid-cols-2 gap-4'>
      <div className='container m-2'>
        <StaticImage
          src='../../../../static/crop-men-shaking-hands.webp'
          alt='hand shake Image'
        />
      </div>
      <div className='container m-3'>
        <h1 className='text-5xl  global-color underline'><b>Our History</b></h1>
        <p className='mt-3'>At its inception in 2014, Hydraulic Sealing Solutions sought only to provide local technical expertise in the application of fluid power components. Over the years, this has grown to include complete system integration, manufacturing, and support for the energy, industrial, power generation, and construction markets.</p>
        <p>HSS manufactures a wide range of Adaptors, Flanges, and Hose End Fittings, from low to ultra high pressure range and compatible to high temperature, aggressive fluids in single/double wire braided and multi-spiral hoses. Our components conform to BCS, SAE, ISO, DIN/EN and other international standards.</p>
        <p>All our products meet highest industrial norms and standards. Over a period of time, we have built up a lot of goodwill and reputation. Customer satisfaction is our prime motive so we always strive for timely Delivery and efficient service.</p>
        <p>
          We distinguish ourselves from other End fitting manufacturers by offering products that have genuine quality, are reliable, flexible and durable, and stringently comply with high international quality parameters. Moreover, we have a state-of-the-art infrastructure and efficient team that aids us providing finest quality products and make prompt Deliveries. Hence, for those searching superior quality Adaptors and End Fittings, HSS India, Faridabad is just the right place.
        </p>
        <p>
          We dedicate ourselves to serve the customer to their satisfaction and assure our utmost consideration at all times.
        </p>
      </div>
    </div>
  )
}

export default AboutHistory