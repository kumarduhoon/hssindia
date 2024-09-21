import React from 'react'
import "./MyProduct.scss"
import { Link } from 'gatsby'
import product_one from "../../../assests/images/productPage/productOne.png"
import product_two from "../../../assests/images/productPage/productTwo.png"
import product_three from "../../../assests/images/productPage/productThree.png"
import product_four from "../../../assests/images/productPage/productFour.png"
import product_five from "../../../assests/images/productPage/productFive.png"
import product_six from "../../../assests/images/productPage/productSix.png"
import product_seven from "../../../assests/images/productPage/productSeven.png"
import product_eight from "../../../assests/images/productPage/productEight.png"
import product_nine from "../../../assests/images/productPage/productNine.jpg"
import product_ten from "../../../assests/images/productPage/productTen.png"
import product_eleven from "../../../assests/images/productPage/productEleven.png"
import product_twelve from "../../../assests/images/productPage/productTwelve.jpg"
import product_thirteen from "../../../assests/images/productPage/productThreeten.png"
import product_fourteen from "../../../assests/images/productPage/productFourteen.jpg"
import product_fifteen from "../../../assests/images/productPage/productFifteen.jpg"

const products = [
  { id: 1, image: product_one, title: "Hose Fittings", description: "Fittings are designed for mounting on to hydraulic hose. The fitting must be compatible to the hose in order to withstand...", url: "/hose-fittings" },
  { id: 2, image: product_two, title: "Adaptors", description: "Hydraulic Sealing Solutions manufactures an extensive range of adaptors in excess of different variations. We make adaptors...", url: "/adaptors" },
  { id: 3, image: product_three, title: "Hose Assemblies", description: "Hydraulic hose assemblies are used to transmit forces by means of oil pressure, and consist of flexible hydraulic hoses to which...", url: "/hose-assemblies" },
  { id: 4, image: product_four, title: "Tube Fittings", description: "We are renowned for manufacturing wide range of Hydraulic Fittings as per National and International Standards (DIN 2353). Fittings...", url: "/tube-fitting" },
  { id: 5, image: product_five, title: "SAE Flanges", description: "We manufacture an array of SAE flanges and Hydraulic flanges which corresponds to relevant international standards. These flanges...", url: "/sae-flanges" },
  { id: 6, image: product_six, title: "Ball Valves and QRC", description: "Hydraulic Sealing Solutions offers High Pressure Ball Valves to suit a wide range of applications including mobile plant and industrial...", url: "/ball-valves-qrc" },
  { id: 7, image: product_seven, title: "Clamps", description: "Screw clamps consist of a galvanized or stainless steel band into which a screw thread pattern has been cut or pressed. One...", url: "/clamps" },
  { id: 8, image: product_eight, title: "Spring Guards and Spiral Sleeves", description: "Rust resistant, zinc plated open wound spring guards prolong life of hose cover and reinforcement from abrasion, kinking...", url: "/clamps", url: "/spring-guards" },
  { id: 9, image: product_nine, title: "Tube Assemblies", description: "HSS offers an extensive portfolio of low, medium and high pressure hydraulic tubing assemblies to support a variety of customer...", url: "/tube-assemblies" },
  { id: 10, image: product_ten, title: "Microbore Hose Fittings", description: "HSS offers a complete range of miniature fittings, check couplings and accessories. HSS offers a simple, inexpensive appliance...", url: "/microbore-hose-fittings" },
  { id: 11, image: product_eleven, title: "Spools", description: "Spool valves come in a wide variety of different types and configurations, some having more ports and able to control multiple...", url: "/spools" },
  { id: 12, image: product_twelve, title: "Hose Crimping Machines", description: "Hose Crimpimg Machine are used to assemble hoses for air conditioning, power steering, brakes, and hydraulic systems in vehicles...", url: "/hose-crimpimg-machine" },
  { id: 13, image: product_thirteen, title: "Accessories", description: "Hydraulic Sealing Solutions manufactures an extensive range of adaptors in excess of different variations. We make adaptors...", url: "/accessories" },
  { id: 14, image: product_fourteen, title: "Hydraulic Manifolds", description: "HSS manufactures hydraulic manifold blocks for the industry and the mobile applications.They are used for industry hydraulics...", url: "/hydraulic-manifolds" },
  { id: 15, image: product_fifteen, title: "Tube Clamps", description: "Tube clamps reduce the harmful effects of mechanical shock and strong vibrations common in fluid power systems. They have a polypropylene cushion...", url: "/tube-clamps" },];

function MyProduct() {
  return (
    <div className="product-grid-page">
      {products.map((product) => (
        <Link key={product.id} to={product.url}>
          <div className="product-card-page">
            <img src={product.image} alt={product.title} className="product-image-page" />
            <div className='card-background-image'>
              <h3 className="product-title-page">{product.title}</h3>
              <p className="product-description-page">{product.description}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MyProduct