import React from "react";
import "./HomeService.scss"
import cng from "../../../assests/images/homepage/CNG.png"
import pneumatics from "../../../assests/images/homepage/PNEUMATICS.png"
import e_mobile from "../../../assests/images/homepage/E-MOBILITY.png"
import lng from "../../../assests/images/homepage/LNGPNG.png"
import hydraulics from "../../../assests/images/homepage/HYDRAULICS.png"
import hydrogen from "../../../assests/images/homepage/HYDROGEN.png"

const Card = ({ title, icon }) => {
  return (
    <div className="card-service">
      <img src={icon} alt={title} className="card-icon-service" />
      <h3 className="card-icon-service-head"><b>{title}</b></h3>
    </div>
  );
};

const HomeService = () => {
  const cardData = [
    { title: 'CNG', icon: cng },
    { title: 'PNEUMATICS', icon: pneumatics },
    { title: 'E-Mobile', icon: e_mobile },
    { title: 'LNG/PNG', icon: lng },
    { title: "HYDRAULICS", icon: hydraulics },
    { title: "HYDROGEN", icon: hydrogen }
  ];
  return (
    <div className="home_service_main">
      <div className="home_service_main-inner">
        <h1 className="home_service_main-inner-head">We support a wide range of Services.</h1>
      </div>
      <div className="card-row">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} icon={card.icon} />
        ))}
      </div>
    </div>
  );
};
export default HomeService;
