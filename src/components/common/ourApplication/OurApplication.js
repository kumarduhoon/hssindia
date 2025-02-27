import React from 'react';
import './OurApplication.scss';

const OurApplication = ({ ourApplication }) => {
  return (
    <div className="our-application-container">
      <h2 className="our-application-title-head">Our Applications</h2>
      <div className="our-application-grid">
        {ourApplication.map((app, index) => (
          <div key={index} className="our-application-card">
            <img src={app.imageUrl} alt={app.title} className="our-application-image" />
            <div className="our-application-title">{app.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurApplication;
