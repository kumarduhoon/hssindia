import React from 'react'
import Hero from '../../components/My_Product/HoseAssemblies/Hero'
import Content from '../../components/My_Product/HoseAssemblies/Content'
import { Helmet } from 'react-helmet'

function HoseAssemblies() {
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
      <Hero />
      <Content />
    </>
  )
}

export default HoseAssemblies