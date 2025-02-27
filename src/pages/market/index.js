import React from 'react'
import MarketHero from "../../components/market/MarketHero/MarketHero"
import MarketHeroText from "../../components/market/MarketHeroText/MarketHeroText"
import MarketService from "../../components/market/marketService/MarketService"
import { Helmet } from 'react-helmet'

function Market() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Hydraulic Sealing Solutions" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HSS - Hydraulic Sealing Solutions</title>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </Helmet>
      <MarketHero />
      <MarketHeroText />
      <MarketService />
    </>
  )
}

export default Market