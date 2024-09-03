import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <div className='w-full'>
      <StaticImage
        src='../../../../static/spools.png'
        alt='spools hero'
      />
    </div>
  )
}

export default Hero

