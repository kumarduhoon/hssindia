import React from 'react'
import ProductHero from "../../components/Products/ProductHero/ProductHero"
import MyProduct from "../../components/Products/MyProduct/MyProduct"
import { Helmet } from 'react-helmet'

function Products() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Hydraulic Sealing Solutions" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HSS - Hydraulic Sealing Solutions</title>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </Helmet>
      <ProductHero />
      <MyProduct />
    </>
  )
}

export default Products