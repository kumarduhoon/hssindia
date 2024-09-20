import React from "react";
import "./HomeMarket.scss"
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
  const sectors = [
    { title: "Automotive", image: OneMarket, src: "/market" },
    { title: "Mobile Equipments", image: TwoMarket, src: "/market" },
    { title: "Oil & Gas", image: ThreeMarket, src: "/market" },
    { title: "Refinery and Petrochemic", image: FourMarket, src: "/market" },
    { title: "Food and Pharmaceuticals", image: FiveMarket, src: "/market" },
    { title: "Railways", image: SixMarket, src: "/market" },
    { title: "Agriculture", image: SevenMarket, src: "/market" },
    { title: "More", image: EightMarket, src: "/market" },
  ];
  return (
    <section className="industry-sectors">
      <h2>Our Market</h2>
      <p>
        HSS major strength is our ability to provide a complete hose and hydraulic system solution.
      </p>
      <div className="sector-grid">
        {sectors.map((sector, index) => (
          <Link to={sector.src} key={index}>
            <div className="sector-card" >
              <img src={sector.image} alt={sector.title} />
              <div className="sector-title">{sector.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeMarket;
