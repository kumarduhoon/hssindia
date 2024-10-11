import React from 'react'
import "./MarketHero.scss"
import { StaticImage } from 'gatsby-plugin-image'


function MarketHero() {
  return (
    <div className="market-us-container">
      <StaticImage
        src='../../../assests/images/market/marke_bannner.png'
        srcset="../../../assests/images/market/marke_bannner.png"
        alt="blurred"
        aria-label="market Cover"
        className="market-us-img-hero"
      />
    </div>
  )
}

export default MarketHero