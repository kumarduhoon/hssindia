import React from 'react'
import "./about.scss"
import AboutHero from "../../components/about/AboutHero"
import AboutHistory from "../../components/about/aboutHistory/AboutHistory"
function About() {
  return (
    <div className='about-main-con'>
      <AboutHero />
      <AboutHistory />
    </div>
  )
}

export default About