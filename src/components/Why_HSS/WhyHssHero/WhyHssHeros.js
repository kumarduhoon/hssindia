import React from 'react'
import "./WhyHSSHero.scss"
import { StaticImage } from "gatsby-plugin-image"

function WhyHSSHeros() {
  return (
    <div className="why-hss-container">
      <StaticImage
        src='../../../assests/images/whyhss/whyhss.png'
        srcset="../../../assests/images/whyhss/whyhss.png"
        alt="blurred"
        aria-label="why-hss-image-banner"
        className="why-hss-image-banner"
      />
    </div>
  )
}

export default WhyHSSHeros