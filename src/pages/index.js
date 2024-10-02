import React from "react";
import HomeHero from "../components/Home/Home_hero"
import HomeAbout from "../components/Home/HomeAbout/HomeAbout";
import HomeProduct from "../components/Home/HomeProduct/HomeProduct"
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