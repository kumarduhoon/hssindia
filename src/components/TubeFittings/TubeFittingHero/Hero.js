import React from 'react'
import "./Hero.scss"
import tube_fittings_comparison_banner from "../../../assests/images/technical/tube_fittings_comparison.png"

function Hero() {
  return (
    <div className="tube-fittings-comparison-container">
      <img
        src={tube_fittings_comparison_banner}
        alt='tube fittings comparison banner'
        className='tube-fittings-comparison-image-banner'
      />
    </div>
  )
}

export default Hero