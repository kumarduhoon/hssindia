import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeFacility.scss"
import FacilityOne from "../../../assests/images/homepage/one_facility.png"
import FacilityTwo from "../../../assests/images/homepage/two_facility.png"
import FacilityThree from "../../../assests/images/homepage/three_facility.png"
import FacilityFour from "../../../assests/images/homepage/four_facility.png"
import FacilityFive from "../../../assests/images/homepage/five_facility.png"



const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow-facility next-arrow-facility" onClick={onClick}>
      ➡
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow-facility prev-arrow-facility" onClick={onClick}>
      ⬅
    </div>
  );
};

const HomeFacility = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    cssEase: "ease-in-out",
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
      <h2 className="text-center text-2xl font-semibold mb-8 our-facilities-main-head">Our Facilities</h2>
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
      <div className="facility-card-head">{item.title}</div>
    </div>
  );
};

const marketItems = [
  { title: "CNC PIPE BANDING M/C", image: FacilityOne },
  { title: "CRIMPING M/C", image: FacilityTwo },
  { title: "HOSE TESTING M/C", image: FacilityThree },
  { title: "HOSE CUTTING M/C", image: FacilityFour },
  { title: "HOSE TESTING M/C", image: FacilityFive },
];

export default HomeFacility;
