import React from 'react'
import MarketHero from "../../components/market/MarketHero/MarketHero"
import MarketHeroText from "../../components/market/MarketHeroText/MarketHeroText"
import MarketService from "../../components/market/marketService/MarketService"

function Market() {
  return (
    <>
      <MarketHero />
      <MarketHeroText />
      <MarketService />
    </>
  )
}

export default Market