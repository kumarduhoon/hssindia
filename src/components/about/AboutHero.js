import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function AboutHero() {
  return (
    <div className='w-full'>
      <StaticImage
        src='../../../static/about_us_imge.webp'
      />
    </div>
  )
}

export default AboutHero