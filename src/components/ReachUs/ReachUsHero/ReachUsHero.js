import React from 'react'
import "./ReachUsHero.scss"
import { StaticImage } from "gatsby-plugin-image"

function ReachUsHero() {
  return (
    <div className='w-full'>
      <StaticImage
        src='../../../../static/reach_us_hero.webp'
        alt='Reach us hero'
      />
    </div>
  )
}

export default ReachUsHero