import React from "react";
import "./HomeService.scss"

const HomeService = () => {
  return (
    <div className="position-relative marquee-container d-none d-sm-block">
      <div className="marquee d-flex justify-content-around">
        <div className="market-card">
          <img className="card-icon" alt="CNG" />
          <h3 className="card-title">CNG</h3>
        </div>
        <div className="market-card">
          <img className="card-icon" alt="HYDROGEN" />
          <h3 className="card-title">HYDROGEN</h3>
        </div>
        <div className="market-card">
          <img className="card-icon" alt="HYDRAULICS" />
          <h3 className="card-title">HYDRAULICS</h3>
        </div>
        <div className="market-card">
          <img className="card-icon" alt="LNG/PNG" />
          <h3 className="card-title">LNG/PNG</h3>
        </div>
        <div className="market-card">
          <img className="card-icon" alt="E-MOBILITY" />
          <h3 className="card-title">E-MOBILITY</h3>
        </div>
        <div className="market-card">
          <img className="card-icon" alt="PNEUMATICS" />
          <h3 className="card-title">PNEUMATICS</h3>
        </div>
      </div>
      <div className="marquee marquee2 d-flex justify-content-around">
        <div className="market-card">
          <img className="card-icon" alt="CNG" />
          <h3 className="card-title">CNG</h3>
        </div>
        <div className="market-card">
          <img className="card-icon" alt="HYDROGEN" />
          <h3 className="card-title">HYDROGEN</h3>
        </div>
        <div className="market-card">
          <img className="card-icon" alt="HYDRAULICS" />
          <h3 className="card-title">HYDRAULICS</h3>
        </div>
        <div className="market-card">
          <img className="card-icon" alt="LNG/PNG" />
          <h3 className="card-title">LNG/PNG</h3>
        </div>
        <div className="market-card">
          <img className="card-icon" alt="E-MOBILITY" />
          <h3 className="card-title">E-MOBILITY</h3>
        </div>
        <div className="market-card">
          <img className="card-icon" alt="PNEUMATICS" />
          <h3 className="card-title">PNEUMATICS</h3>
        </div>
      </div>
    </div>
  );
};
export default HomeService;
