import React from 'react'
import "./ReachUsHero.scss"
import { StaticImage } from "gatsby-plugin-image"
function ReachUsHero() {
  return (
    <div className="hss-reach-us-container">
      <StaticImage
        src='../../../assests/images/reach_us/reach_us.png'
        srcset="../../../assests/images/reach_us/reach_us.png"
        alt="blurred"
        aria-label="hose fittingd Cover"
        className="hss-reach-us-img-container"
      />
    </div>
  )
}

export default ReachUsHero