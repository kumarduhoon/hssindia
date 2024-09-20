import React from 'react';
import { navigate } from "gatsby"
import "./HomeProduct.scss"
import { Link } from 'gatsby';
import ProductOne from "../../../assests/images/homepage/productOne.png";
import ProductTwo from "../../../assests/images/homepage/productTwo.png";
import ProductThree from "../../../assests/images/homepage/productThree.png";
import ProductFour from "../../../assests/images/homepage/productFour.png";
import ProductFive from "../../../assests/images/homepage/productFive.png";
import ProductSix from "../../../assests/images/homepage/productSix.png";
import ProductSeven from "../../../assests/images/homepage/productSeven.png";
import ProductEight from "../../../assests/images/homepage/productEight.png";
import ProductNine from "../../../assests/images/homepage/productNine.jpg";
import ProductTen from "../../../assests/images/homepage/productTen.png";
import ProductEleven from "../../../assests/images/homepage/productEleven.png";
import ProductTwelve from "../../../assests/images/homepage/productTwelve.jpg";
import ProductThreeten from "../../../assests/images/homepage/productThreeten.png";
import ProductFourteen from "../../../assests/images/homepage/productFourteen.jpg";
import ProductFifteen from "../../../assests/images/homepage/productFifteen.jpg";

const HomeProduct = () => {

  const handleClick = () => {
    navigate('/products'); // Navigate to About page
  };
  const style = {
    '--duration': '100s', // Define the CSS variable
  };
  return (
    <div className="max-w-8xl mx-auto p-4 home-product-div">
      <div className="smart-home">
        <h2 className="text-center text-2xl font-semibold our-facilities-main-head">Our Products</h2>
        <section className="hero-section">
          <div className="services">
            <div className="MarqueeContainer">
              <div className="marquee">
                <div className="marquee marquee--borders" style={style}>
                  <div className="marquee marquee--reverse">
                    <div className="marquee__group">
                      <Link to="/hose-fittings">
                        <div className="service-card image-one" >
                          <img
                            src={ProductOne}
                            alt="Hose Fittings"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Hose Fittings</b></h3>
                        </div>
                      </Link>
                      <Link to='/adaptors'>
                        <div className="service-card image-Two" >
                          <img
                            src={ProductTwo}
                            alt="Adaptors"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Adaptors</b></h3>
                        </div>
                      </Link>
                      <Link to="/hose-assemblies">
                        <div className="service-card image-three" >
                          <img
                            src={ProductThree}
                            alt="Hose Assemblies"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Hose Assemblies</b></h3>
                        </div>
                      </Link>
                      <Link to="/tube-fitting">
                        <div className="service-card image-four" >
                          <img
                            src={ProductFour}
                            alt="Tube Fittings"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Tube Fittings</b></h3>
                        </div>
                      </Link>
                      <Link to="/sae-flanges">
                        <div className="service-card image-five " >
                          <img
                            src={ProductFive}
                            alt="SAE Flanges"
                          />
                          <h3 className="service-card-head-three mt-4"><b>SAE Flanges</b></h3>
                        </div>
                      </Link>
                      <Link to="/ball-valves-qrc">
                        <div className="service-card image-six" >
                          <img
                            src={ProductSix}
                            alt="Ball valves and QRC"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Ball valves and QRC</b></h3>
                        </div>
                      </Link>
                      <Link to="/clamps">
                        <div className="service-card image-seven" >
                          <img
                            src={ProductSeven}
                            alt="Clamps"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Clamps</b></h3>
                        </div>
                      </Link>
                      <Link to="/spring-guards">
                        <div className="service-card image-eight" >
                          <img
                            src={ProductEight}
                            alt="Spring Guards and Spiral Sleeves"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Spring Guards and Spiral Sleeves</b></h3>
                        </div>
                      </Link>
                      <Link to="/tube-assemblies">
                        <div className="service-card image-nine" >
                          <img
                            src={ProductNine}
                            alt="Tube Assemblies"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Tube Assemblies</b></h3>
                        </div>
                      </Link>
                      <Link to="/microbore-hose-fittings">
                        <div className="service-card image-ten" >
                          <img
                            src={ProductTen}
                            alt="Microbore Hose and Fittings"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Microbore Hose and Fittings</b></h3>
                        </div>
                      </Link>
                      <Link to="/spools">
                        <div className="service-card image-eleven" >
                          <img
                            src={ProductEleven}
                            alt="Spools"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Spools</b></h3>
                        </div>
                      </Link>
                      <Link to="/hose-crimpimg-machine">
                        <div className="service-card image-twolve" >
                          <img
                            src={ProductTwelve}
                            alt="Hose Crimping Machines"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Hose Crimping Machines</b></h3>
                        </div>
                      </Link>
                      <Link to="/accessories">
                        <div className="service-card image-thriteen" >
                          <img
                            src={ProductThreeten}
                            alt="Accessories"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Accessories</b></h3>
                        </div>
                      </Link>
                      <Link to="/hydraulic-manifolds">
                        <div className="service-card image-fourteen" >
                          <img
                            src={ProductFourteen}
                            alt="Hydraulic Manifolds"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Hydraulic Manifolds</b></h3>
                        </div>
                      </Link>
                      <Link to="/tube-clamps">
                        <div className="service-card image_fifteen" >
                          <img
                            src={ProductFifteen}
                            alt="Tube Clamps"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Tube Clamps</b></h3>
                        </div>
                      </Link>
                    </div>
                    <div aria-hidden="true" className="marquee__group space-margin">                      <Link to="/hose-fittings">
                      <div className="service-card image-one" >
                        <img
                          src={ProductOne}
                          alt="Hose Fittings"
                        />
                        <h3 className="service-card-head-three mt-4"><b>Hose Fittings</b></h3>
                      </div>
                    </Link>
                      <Link to='/adaptors'>
                        <div className="service-card image-Two" >
                          <img
                            src={ProductTwo}
                            alt="Adaptors"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Adaptors</b></h3>
                        </div>
                      </Link>
                      <Link to="/hose-assemblies">
                        <div className="service-card image-three" >
                          <img
                            src={ProductThree}
                            alt="Hose Assemblies"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Hose Assemblies</b></h3>
                        </div>
                      </Link>
                      <Link to="/tube-fitting">
                        <div className="service-card image-four" >
                          <img
                            src={ProductFour}
                            alt="Tube Fittings"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Tube Fittings</b></h3>
                        </div>
                      </Link>
                      <Link to="/sae-flanges">
                        <div className="service-card image-five " >
                          <img
                            src={ProductFive}
                            alt="SAE Flanges"
                          />
                          <h3 className="service-card-head-three mt-4"><b>SAE Flanges</b></h3>
                        </div>
                      </Link>
                      <Link to="/ball-valves-qrc">
                        <div className="service-card image-six" >
                          <img
                            src={ProductSix}
                            alt="Ball valves and QRC"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Ball valves and QRC</b></h3>
                        </div>
                      </Link>
                      <Link to="/clamps">
                        <div className="service-card image-seven" >
                          <img
                            src={ProductSeven}
                            alt="Clamps"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Clamps</b></h3>
                        </div>
                      </Link>
                      <Link to="/spring-guards">
                        <div className="service-card image-eight" >
                          <img
                            src={ProductEight}
                            alt="Spring Guards and Spiral Sleeves"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Spring Guards and Spiral Sleeves</b></h3>
                        </div>
                      </Link>
                      <Link to="/tube-assemblies">
                        <div className="service-card image-nine" >
                          <img
                            src={ProductNine}
                            alt="Tube Assemblies"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Tube Assemblies</b></h3>
                        </div>
                      </Link>
                      <Link to="/microbore-hose-fittings">
                        <div className="service-card image-ten" >
                          <img
                            src={ProductTen}
                            alt="Microbore Hose and Fittings"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Microbore Hose and Fittings</b></h3>
                        </div>
                      </Link>
                      <Link to="/spools">
                        <div className="service-card image-eleven" >
                          <img
                            src={ProductEleven}
                            alt="Spools"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Spools</b></h3>
                        </div>
                      </Link>
                      <Link to="/hose-crimpimg-machine">
                        <div className="service-card image-twolve" >
                          <img
                            src={ProductTwelve}
                            alt="Hose Crimping Machines"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Hose Crimping Machines</b></h3>
                        </div>
                      </Link>
                      <Link to="/accessories">
                        <div className="service-card image-thriteen" >
                          <img
                            src={ProductThreeten}
                            alt="Accessories"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Accessories</b></h3>
                        </div>
                      </Link>
                      <Link to="/hydraulic-manifolds">
                        <div className="service-card image-fourteen" >
                          <img
                            src={ProductFourteen}
                            alt="Hydraulic Manifolds"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Hydraulic Manifolds</b></h3>
                        </div>
                      </Link>
                      <Link to="/tube-clamps">
                        <div className="service-card image_fifteen" >
                          <img
                            src={ProductFifteen}
                            alt="Tube Clamps"
                          />
                          <h3 className="service-card-head-three mt-4"><b>Tube Clamps</b></h3>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center mt-6">
          <button className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition duration-300" onClick={handleClick}>
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;




