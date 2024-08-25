import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className='w-full'>
      <StaticImage
        src='../../../../static/accessories_hero.png'
        alt='Accessories hero'
      />
    </div>
  )
}

export default Hero