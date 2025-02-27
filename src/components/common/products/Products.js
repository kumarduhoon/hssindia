import React from 'react';
import './Products.scss';

const Products = ({ data, title }) => {
  return (
    <div className="products-container">
      <h2 className="products-container-title-head">{title}</h2>
      <div className="products-container-grid">
        {data.map((app, index) => (
          <div key={index} className="products-container-card">
            <img src={app.imageUrl} alt={app.title} className="products-container-image" />
            <div className="products-container-title">{app.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
