import React from 'react'
import CngFuelHero from "../../components/CNGFuel/cngFuelHero/Index"
import ServiceNevigation from "../../components/common/serviceNevigation/ServiceNevigation"
import OurApplication from "../../components/common/ourApplication/OurApplication"
import demo from "../../assests/images/homecards/demo.png"
import OurClinet from "../../components/common/ourClinet/ourClinet"
import Products from "../../components/common/products/Products"
import hose from "../../assests/images/homecards/hoses.png"
import { Helmet } from 'react-helmet'
function CNGFuel() {
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
      <CngFuelHero />
      <ServiceNevigation />
      <OurApplication
        ourApplication={ourApplication}
      />
      <OurClinet />
      <Products
        title="STATION PRODUCTS"
        data={products}
      />
    </>
  )
}

export default CNGFuel


const ourApplication = [
  {
    title: 'STATION PRODUCTS',
    imageUrl: demo,
  },
  {
    title: 'PASSENGER CAR PRODUCTS',
    imageUrl: demo,
  },
  {
    title: 'COMMERCIAL VEHICLE PRODUCTS',
    imageUrl: demo,
  },
  {
    title: 'SAFETY PRODUCTS',
    imageUrl: demo,
  },
];

const products = [
  {
    title: 'Hoses',
    imageUrl: hose,
  },]