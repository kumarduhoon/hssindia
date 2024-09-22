import React from 'react'
import "./market.scss"
import MarketHero from "../../components/market/MarketHero/MarketHero"
import MarketHeroText from "../../components/market/MarketHeroText/MarketHeroText"
import MarketService from "../../components/market/marketService/MarketService"

function Market() {
  return (
    <div className='market-main-con'>
      <MarketHero />
      <MarketHeroText />
      <MarketService />
    </div>
  )
}

export default Market