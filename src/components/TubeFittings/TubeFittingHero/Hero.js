import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className='w-full'>
      <StaticImage
        src='../../../../static/tube_fittings_comparison.png'
        alt='hero'
      />
    </div>
  )
}

export default Hero