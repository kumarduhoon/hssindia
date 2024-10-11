import React from 'react';
import "./HomeAbout.scss"
import { navigate } from "gatsby"
import aboutImage from '../../../assests/images/homepage/homeAbout.png';

const HomeAbout = () => {
  const handleClick = () => {
    navigate('/about');
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-10 px-4 bg-white">
      <h2 className="text-2xl font-bold text-color mb-6 text-center home-about-us-head about-home-mobile">About Us</h2>
      <div className="md:w-1/2 flex justify-center ">
        <div className='img-width-con'>
          <img
            src={aboutImage}
            alt="Hydraulic Fittings"
            className="w-full h-auto object-cover rounded-md shadow-lg object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8  px-14 py-6 md:text-left my-div-heading md:px-8">
        <h2 className="text-2xl font-bold text-color mb-6 text-center home-about-us-head about-home-desktop">About Us</h2>
        <p className="text-gray-700 mb-6 text-center my-text-con">
          At HSS, our mission is to enhance your competitiveness with industry-leading
          motion and control solutions. We accomplish this by designing, building, and
          delivering complete hydraulic and pneumatic systems with leading-edge technology
          and design assistance. Backed by quality products, value pricing, and premier
          service that will exceed your expectations.
        </p>

        <div className="flex justify-center">
          <button className="bg-btn-color-about text-white px-6 py-2 mt-4 rounded-md transition duration-300 ease-in-out"
            onClick={handleClick}
          >
            More Info &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
