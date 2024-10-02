import React from "react";
import "./HomeMarket.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "gatsby";
import OneMarket from "../../../assests/images/homepage/oneMarket.png"
import TwoMarket from "../../../assests/images/homepage/TwoMarket.png"
import ThreeMarket from "../../../assests/images/homepage/threeMarket.jpg"
import FourMarket from "../../../assests/images/homepage/fourMarket.png"
import FiveMarket from "../../../assests/images/homepage/fiveMarket.png"
import SixMarket from "../../../assests/images/homepage/sixMarket.png"
import SevenMarket from "../../../assests/images/homepage/sevenMarket.png"
import EightMarket from "../../../assests/images/homepage/eightMarket.png"

const HomeMarket = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:px-2 market-slider-container">
      <h2 className="slider-title">Our Market</h2>
      <Slider {...settings}>
        {marketItems.map((item, index) => (
          <div key={index} className="flip-card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front of the card (Image) */}
                <div className="flip-card-front">
                  <div className="heading-bg-image-homemarket">
                    <div>
                      <span className="span-heading-market">{item.title}</span>
                    </div>
                  </div>
                  <img src={item.image} alt={item.title} className="card-image" />
                </div>
                {/* Back of the card (Content) */}
                <div className="flip-card-back">
                  <div>
                    <span className="span-heading-market-back-side">{item.title}</span>
                  </div>
                  <p className="span-padding-market-back-side">{item.description}</p>
                  <div>
                    <Link to={item.src} className="span-btn-market-back-side">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button className="view-all-button">View All Market</button>
    </div>
  )
}
export default HomeMarket;


const marketItems = [
  { title: "Automotive", image: OneMarket, src: "/market", description: "HSS major strength is our ability to provide a complete hose and hydraulic system solution" },
  { title: "Mobile Equipments", image: TwoMarket, src: "/market", description: "HSS major strength is our ability to provide a complete hose and hydraulic system solution" },
  { title: "Oil & Gas", image: ThreeMarket, src: "/market", description: "HSS major strength is our ability to provide a complete hose and hydraulic system solution" },
  { title: "Refinery & Petrochemic", image: FourMarket, src: "/market", description: "HSS major strength is our ability to provide a complete hose and hydraulic system solution" },
  { title: "Food & Pharmaceuticals", image: FiveMarket, src: "/market", description: "HSS major strength is our ability to provide a complete hose and hydraulic system solution" },
  { title: "Railways", image: SixMarket, src: "/market", description: "HSS major strength is our ability to provide a complete hose and hydraulic system solution" },
  { title: "Agriculture", image: SevenMarket, src: "/market", description: "HSS major strength is our ability to provide a complete hose and hydraulic system solution" },
  { title: "More", image: EightMarket, src: "/market", description: "HSS major strength is our ability to provide a complete hose and hydraulic system solution" },
];

