import React from 'react';
import "./HomeNew.scss"
import { Link } from 'gatsby';

const HomeNew = () => {
  const products = [
    {
      name: "Optimal Humans",
      description:
        "Guide on health and performance optimisation journey. Enjoy educational lessons and tips from our Industry leading experts.",
      icon: "OH",
      src: "/"
    },
    {
      name: "HELIOS AI",
      description:
        "For innovative funds, explore Comprehend: Elite for rich data. Get accessible insights with Earnings Polygraph.",
      icon: "HA",
      src: "/"
    },
    {
      name: "Currinda",
      description:
        "Give your fashion brand a powerful digital uplift with the digitalization powered by AI and mobile app innovations.",
      icon: "C",
      src: "/"
    },
  ];

  return (
    <div className="products-container">
      <h2 className="text-xl mb-6 text-center home-customer-head">Our News</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <Link to={product.src} key={index}>
            <div className="product-card" >
              <div className="product-icon">{product.icon}</div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeNew;
