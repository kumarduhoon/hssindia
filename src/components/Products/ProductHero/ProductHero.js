import React from 'react'
import "./ProductHero.scss"
import { StaticImage } from "gatsby-plugin-image";

function ProductHero() {
  return (
    <div className="about-us-container">
      <StaticImage
        src='../../../assests/images/productPage/product_banner.svg'
        srcset="../../../assests/images/productPage/product_banner.svg"
        alt="blurred"
        aria-label="Product Cover"
        className="about-us-img-hero"
      />
    </div>
  )
}

export default ProductHero