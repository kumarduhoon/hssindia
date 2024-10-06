import React from "react";
import "./HomeCustomer.scss"
import green from "../../../assests/images/homepage/green.svg"
import hcc from "../../../assests/images/homepage/hcc.svg"
import logoMetso from "../../../assests/images/homepage/logo_metso.svg"
import polyhose from "../../../assests/images/homepage/polyhose.svg"
import afcons from "../../../assests/images/homepage/afcons.svg"
import superHoze from "../../../assests/images/homepage/super_hoze.svg"
import indianOil from "../../../assests/images/homepage/indian_oil.svg"
import gates from "../../../assests/images/homepage/gates.svg"
import l_t from "../../../assests/images/homepage/l&t.svg"
import jbm from "../../../assests/images/homepage/jbm.svg"
import jkFinner from "../../../assests/images/homepage/jk_finner.svg"
import plasserIndia from "../../../assests/images/homepage/plasser_India.svg"
import robbinsLogo from "../../../assests/images/homepage/robbins_logo.svg"

const logos = [
  { src: robbinsLogo, alt: "Robbins" },
  { src: plasserIndia, alt: "Plasser India" },
  { src: jkFinner, alt: "JK Fenner" },
  { src: jbm, alt: "JBM" },
  { src: l_t, alt: "L&T" },
  { src: gates, alt: "Gates" },
  { src: indianOil, alt: "Indian Oil" },
  { src: superHoze, alt: "Super Hoze" },
  { src: afcons, alt: "Afcons" },
  { src: polyhose, alt: "Polyhose" },
  { src: logoMetso, alt: "Metso" },
  { src: hcc, alt: "HCC" },
  { src: green, alt: "Greenfuel" }
];

const HomeCustomer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-4 home-customer-head-main">
      <h2 className="text-xl mb-6 text-center home-customer-head">Our Customers</h2>
      <div className="main-con-gap grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 w-full lg:px-2 md:px-2">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center img-customer-zoom">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-20 w-36 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCustomer;
