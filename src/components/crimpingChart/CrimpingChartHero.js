import React from 'react'
import "./CrimpingChartHero.scss"
import { StaticImage } from 'gatsby-plugin-image'



function CrimpingChartHero() {
  return (
    <div className="crimping-chart-hero-container">
      <StaticImage
        src='../../assests/images/technical/Crimping_Chart.webp'
        srcset="../../assests/images/technical/Crimping_Chart.webp"
        alt="blurred"
        aria-label="Crimping Chart Cover"
        className="crimping-chart-hero-image-banner"
      />
    </div>
  )
}

export default CrimpingChartHero