import React from 'react';
import './ServiceNevigation.scss';
import { Link } from 'gatsby';

const ServiceNevigation = () => {
  return (
    <div className="service-nevigation-container">
      <div className="service-nevigation-menu">
        <Link className="service-nevigation-menu-link" to="#">CNG →</Link>
        <Link className="service-nevigation-menu-link" to="#">HYDROGEN →</Link>
        <Link className="service-nevigation-menu-link" to="#">HYDRAULICS →</Link>
        <Link className="service-nevigation-menu-link" to="#">LNG/PNG →</Link>
        <Link className="service-nevigation-menu-link" to="#">E-MOBILITY →</Link>
        <Link className="service-nevigation-menu-link" to="#">PNEUMATICS →</Link>
        <Link className="service-nevigation-menu-link" to="#">HOSE CRIMPING & CUTTING MACHINE →</Link>
        <Link className="service-nevigation-menu-link" to="#">PNEUMATICS →</Link>
      </div>
      <div className="service-nevigation-content">
        <h2 className='service-nevigation-head'>About Gasfuel Division</h2>
        <p className='service-nevigation-para-text'>
          Established in 2006, HSS Energy Solutions is an established name and market leader in Alternative Gas Fuel Systems, supplying components and complete solutions to OEMs across the automotive spectrum - from buses and commercial vehicles to passenger cars and three-wheelers.
        </p>
        <p className='service-nevigation-para-text-two'>
          We are the first company to introduce NGV filling systems in India as well as automatic cylinder tracking, and the only company to complete fuel delivery and storage systems for over 40 buses in India. Our gas and fuel systems are tested and trusted by leading names in the automotive sector and are backed by decades of research and market insight. Our components have completed more than 40 billion km on road, making us the only company to achieve this milestone.
        </p>
      </div>
    </div>
  );
};

export default ServiceNevigation;
