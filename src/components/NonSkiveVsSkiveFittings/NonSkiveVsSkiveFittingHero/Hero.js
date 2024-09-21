import React from 'react'
import "./Hero.scss"
import non_skive_vs_skive_fitting_banner from "../../../assests/images/technical/non_skive_vs_skive_fitting.png"


function Hero() {
  return (
    <div className="non-skive-vs-skive-container">
      <img
        src={non_skive_vs_skive_fitting_banner}
        alt='non skive vs skive banner'
        className='non-skive-vs-skive-image-banner'
      />
    </div>
  )
}

export default Hero