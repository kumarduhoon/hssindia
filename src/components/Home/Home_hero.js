import React from 'react'
import "./Home_hero.scss"
import { StaticImage } from 'gatsby-plugin-image'

function HomeHero() {
  return (
    <div className='relative'>
      <div className='max-w-full'>
        <StaticImage
          src='../../../static/home_hero.png'
          alt="Logo"
          className="home-hero-class"
        />
      </div>
      <div className='container max-w-80 m-auto absolute top-40 left-20 p-4'>
        <h1 className='text-white text-2xl'>We Analysic Best</h1>
        <p className='text-white text-lg mt-3'>HSS is leading manufacturers and trade for all Hydraulic hose Assemblies, Adaptors, Fillings and Accessories </p>
        <div className='container flex justify-start mt-3'>
          <button className='py-2 px-4 transform transition  duration-500  hover:scale-110 text-white btn-color-service text-2 rounded'>Our Services</button>
          <button className='py-2 px-4 transform transition  duration-500  hover:scale-110 text-white text-2 btn-color-quote ml-8 rounded'>Get A Quote</button>
        </div>
      </div>
    </div>
  )
}

export default HomeHero