// ProductSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; // Correct CSS import
import 'swiper/css/navigation'; // For navigation arrows
import 'swiper/css/pagination';
import "./ProductSlider.scss";
import { Navigation } from 'swiper/modules'

const products = [
  {
    title: "Hose Assemblies",
    description: "Hydraulic hose assemblies are used to transmit force...",
    image: "url-to-hose-image",
  },
  {
    title: "SAE Flanges",
    description: "We manufacture an array of SAE flanges and Hydraulic flanges...",
    image: "url-to-flanges-image",
  },
  {
    title: "Adaptors",
    description: "Hydraulic sealing solutions manufactures an extensive range...",
    image: "url-to-adaptors-image",
  },
];

const ProductSlider = () => {
  return (
    <div className="product-slider-container">
      <h2>Our Products</h2>
      <Swiper // Make sure Navigation is enabled
        spaceBetween={20}
        modules={[Navigation]}
        slidesPerView={3}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          640: { slidesPerView: 1, slidesPerGroup: 1 },
          768: { slidesPerView: 2, slidesPerGroup: 1 },
          1024: { slidesPerView: 3, slidesPerGroup: 1 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <button className="product-button">+</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="view-all-button">
        <button>View All Products</button>
      </div>
    </div>
  );
};

export default ProductSlider;
