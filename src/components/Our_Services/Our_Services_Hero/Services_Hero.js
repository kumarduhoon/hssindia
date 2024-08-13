import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function ServicesHero() {
  return (
    <div className='w-full'>
      <StaticImage
        src='../../../../static/our_services.webp'
        alt='services hero'
      />
    </div>
  )
}

export default ServicesHero