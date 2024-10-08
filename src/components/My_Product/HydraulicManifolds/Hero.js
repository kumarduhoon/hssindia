import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className='w-full'>
      <StaticImage
        src='../../../../static/hydraulic_manifolds_hero.png'
        alt='adaptor hero'
      />
    </div>
  )
}

export default Hero