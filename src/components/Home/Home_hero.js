import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home_hero.scss';
import { Link } from "gatsby";
// import slideOne from "../../assests/images/homepage/sider_one.png"
import sliderTwo from "../../assests/images/homepage/slider_two.png"
import sliderThree from "../../assests/images/homepage/slider_three.png"

const Home_hero = ({ }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Hide the arrows

    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="custom-dot">
        <span></span> {/* Custom dot as per your design */}
      </div>
    )
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="container-with-img">
            <img src={item.src} alt="Banner" className="carousel-image" />
            <div className="content-banner">
              <h1 className="content-banner-head">{item.head}</h1>
              <p className="content-banner-para">{item.para}</p>
              <div className="content-banner-btn-group">
                <button className="content-banner-btn">
                  <Link to={item.btn_one}>Our Services</Link>
                </button>
                <button className="content-banner-btn">
                  <Link to={item.btn_two}>Get A Quote</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home_hero;

const data = [
  {
    id: 1001,
    src: sliderTwo,
    head: "We analyse best",
    para: "HSS is a leading manufacturer and trader for all Hydraulic hose assemblies, Adaptors, Fittings, and accessories.",
    btn_one: "/our-services",
    btn_two: "/contact",
  },
  {
    id: 1002,
    src: sliderThree,
    head: "SINGLE PIECE NON-SKIVE FITTINGS",
    para: "We are the pioneers in introducing Single Piece Non-skive fittings to Indian market.",
    btn_one: "/our-services",
    btn_two: "/contact",
  },
  {
    id: 1003,
    src: sliderThree,
    head: "CUSTOMIZED SOLUTIONS",
    para: "HSS provides all type of customized solutions to fulfill the challenges in meeting customer requirements for performance, quality and durability.",
    btn_one: "/our-services",
    btn_two: "/contact",
  }
]