import React from 'react'
import HydrogenGasHero from "../../components/HydrogenGas/HydrogenGasHero"
import demo from "../../assests/images/homecards/demo.png"
import ServiceNevigation from "../../components/common/serviceNevigation/ServiceNevigation"
import OurApplication from "../../components/common/ourApplication/OurApplication"
import OurClinet from "../../components/common/ourClinet/ourClinet"
import Products from "../../components/common/products/Products"
import hose from "../../assests/images/homecards/hoses.png"
import { Helmet } from 'react-helmet'


function HydrogenGas() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Hydraulic Sealing Solutions" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HSS - Hydraulic Sealing Solutions</title>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </Helmet>
      <HydrogenGasHero />
      <ServiceNevigation />
      <OurApplication
        ourApplication={ourApplication}
      />
      <OurClinet />
      <Products
        title="STATION PRODUCTS"
        data={products}
      />
    </React.Fragment>
  )
}

export default HydrogenGas



const ourApplication = [
  {
    title: 'STATION PRODUCTS',
    imageUrl: demo,
  },
  {
    title: 'PASSENGER CAR PRODUCTS',
    imageUrl: demo,
  },
];

const products = [
  {
    title: 'Hoses',
    imageUrl: hose,
  },]