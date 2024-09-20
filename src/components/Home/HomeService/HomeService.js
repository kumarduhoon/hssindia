import React from "react";
import "./HomeService.scss"

const HomeService = () => {
  return (
    <div className="tech-index-container">
      <h1 className="tech-heading">
        We Deliver Solutions with the Goal of Trusting Workshops
      </h1>
      <div className="services-grid">
        {data.map((service, index) => (
          <div className="service-cards" key={index}>
            <div className="service-icon">{service.icon}</div>
            <div className="service-name">{service.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample data for the slider
const data = [
  { id: 1, label: 'CNG', icon: '⛽️' },
  { id: 2, label: 'HYDROGEN', icon: '💧' },
  { id: 3, label: 'HYDRAULICS', icon: '⚙️' },
  { id: 4, label: 'LNG/PNG', icon: '❄️' },
  { id: 5, label: 'E-MOBILITY', icon: '🚗' },
  { id: 6, label: 'PNEUMATICS', icon: '🔧' },
];

export default HomeService;
