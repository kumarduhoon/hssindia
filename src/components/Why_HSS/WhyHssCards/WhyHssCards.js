import React from 'react'
import "./WhyHssCards.scss"

function WhyHssCards() {
  return (
    <div className='py-5 px-5'>
      <div className='container grid max-w-5xl m-auto mt-16 grid-cols-3 gap-10'>
        <div className='container relative card_custom_css rounded p-5 pt-12'>
          <div className='container absolute max-w-14 card_image left-32'>
            <img
              src='/guarantee.png'
              alt='guarantee'
            />
          </div>
          <div className='container'>
            <p >
              HSS fittings are proven to show no signs of cracks or damage when pressure testing at 4 times working pressure under tube burst condition.
            </p>
            <p className='mt-3'>
              We regularly conduct Hydro-static pressure Testing at 1.5 times working pressure to ensure HSS products are 100% leak free.
            </p>
          </div>
        </div>
        <div className='container relative card_custom_css rounded p-5 pt-12'>
          <div className='container absolute card_image max-w-14 left-32'>
            <img
              src='/guarantee.png'
              alt='guarantee'
            />
          </div>
          <div className='container'>
            <p>HSS offers complete peace of mind through our 36 months guarantee and premium quality products against any manufacturing defect on all our products from the date of dispatch from our factory or channel partner. </p>
          </div>
        </div>
        <div className='container relative card_custom_css rounded p-5 pt-12'>
          <div className='container absolute card_image max-w-14 left-32'>
            <img
              src='/guarantee.png'
              alt='guarantee'
            />
          </div>
          <div className='container'>
            <p>Since HSS product range includes a large and diverse range such as Hydraulic Fittings, Seamless Tubes, Hose Assemblies and Tube Clamps. We have the capability to be your single source for fluid conveyance products</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyHssCards