import React from 'react'
import "./WhyHSSHero.scss"
import { StaticImage } from "gatsby-plugin-image"

function WhyHSSHeros() {
  return (
    <div className='w-full'>
      <StaticImage
        src='../../../../static/whyhss.png'
        alt=' why hss'
      />
    </div>
  )
}

export default WhyHSSHeros