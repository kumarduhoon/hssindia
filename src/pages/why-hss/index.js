import React from 'react'
import WhyHSSHero from "../../components/Why_HSS/WhyHssHero/WhyHssHeros"
import WhyHssCards from "../../components/Why_HSS/WhyHssCards/WhyHssCards"
import WhyHssVerticalCard from "../../components/Why_HSS/whyHssVertical/WhyHssVerticalCard"
import hssOne from "../../../static/why_hss_1.png"
import hssTwo from "../../../static/guarantee.png"
import hssthree from "../../../static/why_hss_7.png"
import hssFour from "../../../static/why_hss_10.png"
import hssFive from "../../../static/why_hss_11.png"
import hssSix from "../../../static/why_hss_1.png"

function WhyHss() {
  return (
    <>
      <WhyHSSHero />
      <WhyHssCards
        data={cardData1}
      />
      <WhyHssVerticalCard />
      <WhyHssCards
        data={cardData2}
      />
      <div className='mb-8'></div>
    </>
  )
}

export default WhyHss

const cardData1 = {
  card_one: {
    img: hssOne,
    head: "Performance in High Pressure",
    para1: " HSS fittings are proven to show no signs of cracks or damage when pressure testing at 4 times working pressure under tube burst condition.",
    para2: "We regularly conduct Hydro-static pressure Testing at 1.5 times working pressure to ensure HSS products are 100% leak free."
  },
  card_two: {
    img: hssTwo,
    head: "36 Months Guarantee",
    para1: "HSS offers complete peace of mind through our 36 months guarantee and premium quality products against any manufacturing defect on all our products from the date of dispatch from our factory or channel partner."
  },
  card_three: {
    img: hssthree,
    head: "Wide Selection of Products",
    para1: "Since HSS product range includes a large and diverse range such as Hydraulic Fittings, Seamless Tubes, Hose Assemblies and Tube Clamps. We have the capability to be your single source for fluid conveyance products"
  }
}

const cardData2 = {
  card_one: {
    img: hssFour,
    head: "System Oriented - Powered by ERP",
    para1: "We are a system-oriented company with sophisticated ERP software to ensure an excellent and professional pre and post-sales experience.",
  },
  card_two: {
    img: hssFive,
    head: "Meaningful Customer Relationships",
    para1: "We make meaningful relationships with our customers and put them first. It is not uncommon at HSS to go out of the way for our customers to deliver on their specific need.",
  },
  card_three: {
    img: hssSix,
    head: "Customized Solutions/ Prototyping",
    para1: "Our design team is equipped with the latest 3D CAD systems and in-House tool room and carries a combined experience of 80 years enabling us to quickly understand your customized requirements and provide prototypes within days with the help of our experienced production team.",
  }
}
