import React from 'react';
import Slider from 'react-slick';
import './HomeNew.scss';
import MobileViewNews from "./MobileViewNews"
import { Link } from 'gatsby';
import catalogImg from "../../../assests/images/homepage/catalog.jpg"
import industryOutlookImg from "../../../assests/images/homepage/industry_outlook.png"
import awardsImg from "../../../assests/images/homepage/awards.png"
const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow-new next-arrow-new" onClick={onClick}>
      ➡
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow-new prev-arrow-new" onClick={onClick}>
      ⬅
    </div>
  );
};

const HomeNew = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const products = [
    {
      id: 1,
      title: 'HSS-India Catalog',
      description: 'HSS CNG Hose Assemblies are designed for dispensing compressed natural gas at workingpressures to 5000 psi. Constructed of high strength conductive polymer core tubing todissipate static charge .',
      image: catalogImg,
      url: "/hssIndia_catalog_booklet.pdf"
    },
    {
      id: 2,
      title: 'HSS-India Award',
      description: 'Hydraulic Sealing Solutions manufactures an extensive range of adaptors in excess of 3000 different variations. We make adaptors to international standards i.e. JIC, SAE, DIN, BSP,ORFS, BSPT',
      image: awardsImg,
      url: "/awards.pdf"
    },
    {
      id: 3,
      title: 'HSS-India Outlooks',
      description: 'Hydraulic hose assemblies are used to transmit forces by means of oil pressure, and consist of flexible hydraulic hoses to which fittings are attached at either end to ensure safe...',
      image: industryOutlookImg,
      url: 'static/industry_outlook.pdf'
    },
    {
      id: 4,
      title: 'HSS-India Catalog',
      description: 'HSS CNG Hose Assemblies are designed for dispensing compressed natural gas at workingpressures to 5000 psi. Constructed of high strength conductive polymer core tubing todissipate static charge .',
      image: catalogImg,
      url: "static/hssIndia_catalog_booklet.pdf"
    },
    {
      id: 5,
      title: 'HSS-India Award',
      description: 'Hydraulic Sealing Solutions manufactures an extensive range of adaptors in excess of 3000 different variations. We make adaptors to international standards i.e. JIC, SAE, DIN, BSP,ORFS, BSPT',
      image: awardsImg,
      url: "/awards.pdf"
    },
    {
      id: 6,
      title: 'HSS-India Outlooks',
      description: 'Hydraulic hose assemblies are used to transmit forces by means of oil pressure, and consist of flexible hydraulic hoses to which fittings are attached at either end to ensure safe...',
      image: industryOutlookImg,
      url: '/industry_outlook.pdf'
    },
  ];

  const handleAfterChange = (current) => {
    setActiveIndex(current);
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container-new">
      <h2 className='our-new-title'>Our News</h2>
      <div className='desktop-view-news'>
        <Slider {...settings} afterChange={handleAfterChange}>
          {products.map((product, index) => (
            <div key={product.id} className={`card-new ${activeIndex === index ? 'active' : 'inactive'}`}>
              <img src={product.image} alt={product.title} />
              <div className='new-bg-img-hss'>
                <h2><b>{product.title}</b></h2>
                <p className='new-description'>{product.description}</p>
                {activeIndex === index ? <a href={product.url} target="_blank" rel="noopener noreferrer"><div className='new-bg-img-hss-url-active'>+</div></a> : <a href={product.url} target="_blank" rel="noopener noreferrer"><div className='new-bg-img-hss-url-inactive'>+</div></a>}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='mobile-view-news'>
        <MobileViewNews />
      </div>
    </div>
  );
};

export default HomeNew;
