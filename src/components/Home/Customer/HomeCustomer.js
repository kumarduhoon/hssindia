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
    <div className="home-customer-head-main">
      <div className="flex flex-col items-center justify-centerpy-4 ">
        <h2 className="text-xl mb-6 text-center home-customer-head">Our Customers</h2>
      </div>
      <div className="grid-container-customer-one">
        <img
          src={green}
          alt="Greenfuel"
          className="h-20 w-36 object-contain"
        />
        <img
          src={hcc}
          alt="hcc"
          className="h-20 w-36 object-contain"
        />
        <img
          src={logoMetso}
          alt="logoMetso"
          className="h-20 w-36 object-contain"
        />
        <img
          src={polyhose}
          alt="polyhose"
          className="h-20 w-36 object-contain"
        />
        <img
          src={afcons}
          alt="afcons"
          className="h-20 w-36 object-contain"
        />
      </div>
      <div className="grid-container-customer-one">
        <img
          src={superHoze}
          alt="superHoze"
          className="h-20 w-36 object-contain"
        />
        <img
          src={indianOil}
          alt="indianOil"
          className="h-20 w-36 object-contain"
        />
        <img
          src={gates}
          alt="gates"
          className="h-20 w-36 object-contain"
        />
        <img
          src={l_t}
          alt="l_t"
          className="h-20 w-36 object-contain"
        />
        <img
          src={jbm}
          alt="jbm"
          className="h-20 w-36 object-contain"
        />
      </div>
      <div className="grid-container-customer-one">
        <img
          src={jkFinner}
          alt="jkFinner"
          className="h-20 w-36 object-contain"
        />
        <img
          src={plasserIndia}
          alt="plasserIndia"
          className="h-20 w-36 object-contain"
        />
        <img
          src={robbinsLogo}
          alt="robbinsLogo"
          className="h-20 w-36 object-contain"
        />
      </div>
    </div>
  );
};

export default HomeCustomer;
