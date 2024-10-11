import React from 'react'
import "./CrimpingChartHero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function CrimpingChartHero() {
  return (
    <div className="crimping-chart-hero-container">
      <StaticImage
        src='../../assests/images/technical/cripming_chart.png'
        srcset="../../assests/images/technical/cripming_chart.png"
        alt="blurred"
        aria-label="Crimping Chart Cover"
        className="crimping-chart-hero-image-banner"
      />
    </div>
  )
}

export default CrimpingChartHero