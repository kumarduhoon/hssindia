import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className='w-full'>
      <StaticImage
        src='../../../../static/tube_fitting_hero.png'
        alt='adaptor hero'
      />
    </div>
  )
}

export default Hero

