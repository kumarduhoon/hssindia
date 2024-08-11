import React from 'react'
import "./HomeAbout.scss"

function HomeAbout() {
  return (
    <div className='relative'>
      <div className='max-w-full'>
        <img
          src='/home_hero.jpg'
          alt="Logo"
          className="home-about-class"
        />
      </div>
      <div className='container max-w-lg m-auto absolute top-28 right-28 p-4'>
        <h1 className='text-lg text-color'>About Us</h1>
        <h1 className='text-white text-2xl mt-4'>Your Success Is Our <br />
          Success
        </h1>
        <p className='text-white text-lg mt-3'>At HSS, Our Misson is to enhance your competitiveness with industry-leading motion and control solution. We accomplish this by designing, building and delivering complete hydraulic and pneumatic system with leading edge technology and design assistance, backed by quality product, value pricing and premier service that will exceed you expectations </p>
        <div className='container mt-8'>
          <button className='py-2 px-10 transform transition  duration-500  hover:scale-110 text-white btn-color-home-about text-2 rounded'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout