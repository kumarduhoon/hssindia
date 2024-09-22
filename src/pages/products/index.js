import React from 'react'
import "./products.scss"
import ProductHero from "../../components/Products/ProductHero/ProductHero"
import MyProduct from "../../components/Products/MyProduct/MyProduct"

function Products() {
  return (
    <div className='product-main-con'>
      <ProductHero />
      <MyProduct />
    </div>
  )
}

export default Products