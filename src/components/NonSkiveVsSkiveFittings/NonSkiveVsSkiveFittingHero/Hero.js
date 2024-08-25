import React from 'react'
import "./Hero.scss"
import { StaticImage } from 'gatsby-plugin-image'


function Hero() {
  return (
    <div className='w-full'>
      <StaticImage
        src='../../../../static/non_skive_vs_skive_fitting.png'
        alt='Non skive hero'
      />
    </div>
  )
}

export default Hero