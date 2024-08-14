import React from 'react'
import "./ReachUsMap.scss"
import { StaticImage } from "gatsby-plugin-image"

function ReachUsMap() {
  return (
    <div className='flex justify-center my-14'>
      <StaticImage
        src='../../../../static/map.webp'
        alt='Reach us map'
      />
    </div>
  )
}

export default ReachUsMap