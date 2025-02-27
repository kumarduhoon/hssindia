import React from 'react'
import ReachUsHero from "../../components/ReachUs/ReachUsHero/ReachUsHero"
import ReachUsMap from "../../components/ReachUs/ReachUSMap/ReachUSMap"
import ReachUsContact from "../../components/ReachUs/ReachUsContact/ReachUsContact"
import { Helmet } from 'react-helmet'

function Contact() {
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
      <ReachUsHero />
      <ReachUsMap />
      <ReachUsContact />
    </>
  )
}

export default Contact