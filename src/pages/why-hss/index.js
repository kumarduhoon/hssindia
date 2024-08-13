import React from 'react'
import WhyHSSHero from "../../components/Why_HSS/WhyHssHero/WhyHssHeros"
import WhyHssCards from "../../components/Why_HSS/WhyHssCards/WhyHssCards"
import WhyHssVerticalCard from "../../components/Why_HSS/whyHssVertical/WhyHssVerticalCard"

function WhyHss() {
  return (
    <>
      <WhyHSSHero />
      <WhyHssCards />
      <WhyHssVerticalCard />
      <WhyHssCards />
      <div className='mb-8'></div>
    </>
  )
}

export default WhyHss