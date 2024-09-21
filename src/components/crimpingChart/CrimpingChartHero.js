import React from 'react'
import "./CrimpingChartHero.scss"
import crimping_chart_banner from "../../assests/images/technical/Crimping_Chart.webp"


function CrimpingChartHero() {
  return (
    <div className="crimping-chart-hero-container">
      <img
        src={crimping_chart_banner}
        alt='crimping chart hero'
        className='crimping-chart-hero-image-banner'
      />
    </div>
  )
}

export default CrimpingChartHero