import React from 'react'
import AboutHero from "../../components/about/AboutHero"
import AboutHistory from "../../components/about/aboutHistory/AboutHistory"
import { Helmet } from 'react-helmet'
function About() {
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
      <AboutHero />
      <AboutHistory />
    </>
  )
}

export default About