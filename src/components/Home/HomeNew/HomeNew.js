import React from 'react';
import Slider from 'react-slick';
import './HomeNew.scss';
import MobileViewNews from "./MobileViewNews"
import { Link } from 'gatsby';
import { navigate } from "gatsby"
import ProductOne from "../../../assests/images/homepage/productOne.png"
import ProductTwo from "../../../assests/images/homepage/productTwo.png"
import ProductThree from "../../../assests/images/homepage/productThree.png"
import ProductFour from "../../../assests/images/homepage/productFour.png"
import ProductFive from "../../../assests/images/homepage/productFive.png"
import ProductSix from "../../../assests/images/homepage/productSix.png"

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
      title: 'Hose Fittings',
      description: 'Fittings are designed for mounting on to hydraulic hose. The fitting must be compatible to the hose in order to withstand the rigors encountered in extreme working conditions...',
      image: ProductOne,
      url: "/hose-fittings"
    },
    {
      id: 2,
      title: 'Adaptors',
      description: 'Hydraulic Sealing Solutions manufactures an extensive range of adaptors in excess of 3000 different variations. We make adaptors to international standards i.e. JIC, SAE, DIN, BSP,ORFS, BSPT',
      image: ProductTwo,
      url: "/adaptors"
    },
    {
      id: 3,
      title: 'Hose Assemblies',
      description: 'Hydraulic hose assemblies are used to transmit forces by means of oil pressure, and consist of flexible hydraulic hoses to which fittings are attached at either end to ensure safe...',
      image: ProductThree,
      url: '/hose-assemblies'
    },
    {
      id: 4,
      title: 'Tube Fittings',
      description: 'We are renowned for manufacturing wide range of Hydraulic Fittings as per National and International Standards (DIN 2353). These fittings are widely appreciated for their low maintenanc..',
      image: ProductFour,
      url: "/tube-fitting"
    },
    {
      id: 5,
      title: 'SAE Flanges',
      description: 'We manufacture an array of SAE flanges and Hydraulic flanges which corresponds to relevant international standards. These flanges find application in industries where flanged joints...',
      image: ProductFive,
      url: "/sae-flanges"
    },
    {
      id: 6,
      title: 'Ball valves and QRC',
      description: 'Hydraulic Sealing Solutions offers High Pressure Ball Valves to suit a wide range of applications including mobile plant and industrial equipment. These valves should not be used as flow...',
      image: ProductSix,
      url: "/ball-valves-qrc"
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
                {activeIndex === index ? <div className='new-bg-img-hss-url-active'>+</div> : <Link to={product.url}><div className='new-bg-img-hss-url-inactive'>+</div></Link>}
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
