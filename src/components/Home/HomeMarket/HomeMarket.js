import React from "react";
import "./HomeMarket.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "gatsby";
import { navigate } from "gatsby"
import OneMarket from "../../../assests/images/homepage/oneMarket.png"
import TwoMarket from "../../../assests/images/homepage/TwoMarket.png"
import ThreeMarket from "../../../assests/images/homepage/threeMarket.jpg"
import FourMarket from "../../../assests/images/homepage/fourMarket.png"
import FiveMarket from "../../../assests/images/homepage/fiveMarket.png"
import SixMarket from "../../../assests/images/homepage/sixMarket.png"
import SevenMarket from "../../../assests/images/homepage/sevenMarket.png"
import EightMarket from "../../../assests/images/homepage/eightMarket.png"
import NineMarket from "../../../assests/images/homepage/marketNine.jpg"


const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next-arrow" onClick={onClick}>
      ➡
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev-arrow" onClick={onClick}>
      ⬅
    </div>
  );
};

const HomeMarket = () => {


  const handleClick = () => {
    navigate('/market');
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '120px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '100px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px',
        },
      },
    ],
  };

  return (
    <div className="slider-container-market">
      <h2 className='our-market-title'>Our Market</h2>
      <Slider {...settings}>
        {marketItems.map((marketItem) => (
          <Link to={marketItem.src}>
            <div key={marketItem.id} className="slider-item-market">
              <div className="card-content-market">
                <img src={marketItem.image} alt={marketItem.title} className="card-content-market-img" />
                <div className="overlay-content-market">
                  <h3>{marketItem.title}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
      <div className='market-all-btn-div'><button onClick={handleClick} className="view-all-button">View All Market</button></div>
    </div>
  )
}
export default HomeMarket;


const marketItems = [
  { title: "Automotive", image: OneMarket, src: "/market", },
  { title: "Mobile Equipments", image: TwoMarket, src: "/market", },
  { title: "Oil & Gas", image: ThreeMarket, src: "/market", },
  { title: "Refinery & Petrochemic", image: FourMarket, src: "/market", },
  { title: "Food & Pharmaceuticals", image: FiveMarket, src: "/market", },
  { title: "Railways", image: SixMarket, src: "/market", },
  { title: "Agriculture", image: SevenMarket, src: "/market", },
  { title: "Mini Equipments", image: EightMarket, src: "/market", },
  { title: "General Industry", image: NineMarket, src: "/market", },
];

