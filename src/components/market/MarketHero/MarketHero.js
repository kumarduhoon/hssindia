import React from 'react'
import "./MarketHero.scss"
import { StaticImage } from 'gatsby-plugin-image'


function MarketHero() {
  return (
    <div className="about-us-container">
      <StaticImage
        src='../../../../static/market.webp'
        srcset="../../../../static/market.webp"
        alt="blurred"
        aria-label="market Cover"
        className="about-us-img-hero"
      />
    </div>
  )
}

export default MarketHero