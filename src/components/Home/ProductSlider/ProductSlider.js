import React from 'react';
import Slider from 'react-slick';
import './ProductSlider.scss';
import { Link } from 'gatsby';
import { navigate } from "gatsby"
import ProductOne from "../../../assests/images/homepage/productOne.png"
import ProductTwo from "../../../assests/images/homepage/productTwo.png"
import ProductThree from "../../../assests/images/homepage/productThree.png"
import ProductFour from "../../../assests/images/homepage/productFour.png"
import ProductFive from "../../../assests/images/homepage/productFive.png"
import ProductSix from "../../../assests/images/homepage/productSix.png"
import ProductSeven from "../../../assests/images/homepage/productSeven.png"
import ProductEight from "../../../assests/images/homepage/productEight.png"
import ProductNine from "../../../assests/images/homepage/productNine.jpg"
import ProductTen from "../../../assests/images/homepage/productTen.png"
import ProductEleven from "../../../assests/images/homepage/productEleven.png"
import ProductTwelve from "../../../assests/images/homepage/productTwelve.jpg"
import ProductThreeten from "../../../assests/images/homepage/productThreeten.png"
import ProductFourteen from "../../../assests/images/homepage/productFourteen.jpg"
import ProductFifteen from "../../../assests/images/homepage/productFifteen.jpg"

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next-arrow" onClick={onClick}>
      ➡
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev-arrow" onClick={onClick}>
      ⬅
    </div>
  );
};

const ProductSlider = () => {
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
    {
      id: 7,
      title: 'Clamps',
      description: 'Screw clamps consist of a galvanized or stainless steel band into which a screw thread pattern has been cut or pressed. One end of the band contains a captive screw. The clamp is put...',
      image: ProductSeven,
      url: "/clamps"
    },
    {
      id: 8,
      title: 'Spring Guards and Spiral Sleeves',
      description: 'Rust resistant, zinc plated open wound spring guards prolong the life of the hose cover and reinforcement from abrasion, kinking and other damage incurred in severe working areas.',
      image: ProductEight,
      url: "/spring-guards"
    },
    {
      id: 9,
      title: 'Tube Assemblies',
      description: 'HSS offers an extensive portfolio of low, medium and high pressure hydraulic tubing assemblies to support a variety of customer Fluid Power applications including Agriculture..',
      image: ProductNine,
      url: "/tube-assemblies"
    },
    {
      id: 10,
      title: 'Microbore Hose and Fittings',
      description: 'HSS offers a complete range of miniature fittings, check couplings and accessories. HSS offers a simple, inexpensive appliance to check pressure in hydraulic systems.',
      image: ProductTen,
      url: "/microbore-hose-fittings"
    },

    {
      id: 11,
      title: 'Spools',
      description: 'Spool valves come in a wide variety of different types and configurations, some having more ports and able to control multiple items of equipment at once. Spool valves can be used..',
      image: ProductEleven,
      url: "/spools"
    },
    {
      id: 12,
      title: 'Hose Crimping Machines',
      description: 'At HSS, our mission is to enhance your competitiveness with industry-leading motion and control solutions. We accomplish this by designing, building, and delivering complete hydraulic...',
      image: ProductTwelve,
      url: '/contact'
    },
    {
      id: 13,
      title: 'Accessories',
      description: 'Hydraulic Sealing Solutions manufactures an extensive range of adaptors in excess of 3000 different variations. We make adaptors to international standards i.e. JIC, SAE, DIN, BSP,ORFS..',
      image: ProductThreeten,
      url: "/accessories"
    },
    {
      id: 14,
      title: 'Hydraulic Manifolds',
      description: 'HSS manufactures hydraulic manifold blocks for industry and mobile applications.They are used for industry hydraulics, truck hydraulics, mobile hydraulics, hydraulic power units....',
      image: ProductFourteen,
      url: "/hydraulic-manifolds"
    },
    {
      id: 15,
      title: 'Tube Clamps',
      description: 'Tube clamps reduce the harmful effects of mechanical shock and strong vibrations common in fluid power systems. They have a polypropylene cushion to help reduce wear from rubbing...',
      image: ProductFifteen,
      url: "/tube-clamps"
    },
  ];

  const handleAfterChange = (current) => {
    setActiveIndex(current);
  };

  const handleClick = () => {
    navigate('/products');
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
    <div className="slider-container ">
      <h2 className='our-product-title'>Our Products</h2>
      <Slider {...settings} afterChange={handleAfterChange}>
        {products.map((product, index) => (
          <div key={product.id} className={`card ${activeIndex === index ? 'active' : 'inactive'}`}>
            <img src={product.image} alt={product.title} />
            <div className='product-bg-img-hss'>

              <h2><b>{product.title}</b></h2>
              <p className='product-description'>{product.description}</p>
              {activeIndex === index ? null : <Link to={product.url}><div className='product-bg-img-hss-url-inactive'>+</div></Link>}
            </div>
            {activeIndex === index ? <Link to={product.url}><div className='product-bg-img-hss-triangle'><div className='product-bg-img-hss-url-active'>+</div></div></Link> : null}
          </div>
        ))}
      </Slider>
      <div className='product-all-btn-div'><button onClick={handleClick} className="view-all-button">View All Products</button></div>
    </div>
  );
};

export default ProductSlider;
