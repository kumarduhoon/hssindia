import React from 'react'
import "./ProductHero.scss"
import product_banner from "../../../assests/images/productPage/product_banner.svg"

function ProductHero() {
  return (
    <div className="product-container">
      <img
        src={product_banner}
        alt='product banner'
        className='product-image-banner'
      />
    </div>
  )
}

export default ProductHero