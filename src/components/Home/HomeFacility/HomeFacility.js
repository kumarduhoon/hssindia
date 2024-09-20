import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeFacility.scss"
import ProductOne from "../../../assests/images/homepage/productOne.svg";

const HomeFacility = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    adaptiveHeight: true,
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
    <div className="max-w-7xl mx-auto p-4 our-facilities-main-con-outer">
      <h2 className="text-center text-2xl font-semibold mb-12 our-facilities-main-head">Our Facilities</h2>
      <div className="our-facilities-main-con">
        <Slider {...settings}>
          {marketItems.map((item, index) => (
            <div key={index} className="p-4">
              <FlipCard item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const FlipCard = ({ item }) => {
  return (
    <div >
      <img src={item.image} alt={item.title} className="card-img-card" />
    </div>
  );
};

const marketItems = [
  { title: "Automotive", image: ProductOne },
  { title: "Mobile Equipments", image: ProductOne },
  { title: "Oil & Gas", image: ProductOne },
  { title: "Agriculture", image: ProductOne },
];

export default HomeFacility;
