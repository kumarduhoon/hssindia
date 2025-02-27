import React from "react";
import { Helmet } from "react-helmet";
import HomeHero from "../components/Home/Home_hero"
import HomeAbout from "../components/Home/HomeAbout/HomeAbout";
import HomeMarket from "../components/Home/HomeMarket/HomeMarket"
import HomeFacility from "../components/Home/HomeFacility/HomeFacility"
import HomeAchievement from "../components/Home/HomeAchievement/HomeAchievement"
import HomeService from "../components/Home/HomeService/HomeService"
import HomeCustomer from "../components/Home/Customer/HomeCustomer"
import HomeNew from "../components/Home/HomeNew/HomeNew"
import ProductSlider from "../components/Home/ProductSlider/ProductSlider"


function Home() {

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
      <HomeHero />
      <HomeAbout />
      <ProductSlider />
      <HomeMarket />
      <HomeFacility />
      <HomeAchievement />
      <HomeService />
      <HomeCustomer />
      <HomeNew />
    </>
  )
}
export default Home