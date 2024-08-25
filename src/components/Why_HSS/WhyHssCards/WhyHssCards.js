import React from 'react'
import "./WhyHssCards.scss"

function WhyHssCards({ data }) {
  console.log(data, "data")
  return (
    <div className='py-5 px-5'>
      <div className='container grid max-w-5xl m-auto mt-16 grid-cols-3 gap-10'>
        <div className='container relative card_custom_css rounded p-5 pt-12'>
          <div className='container absolute max-w-14 card_image_1 left-32'>
            <img
              src={data.card_one.img}
              alt='guarantee'
            />
          </div>
          <div className='container'>
            <div className='text-orange-600 text-lg mb-2 text-center'>{data.card_one.head}</div>
            <p className='text-center'>
              {data.card_one.para1}
            </p>
            <p className='mt-3 text-center'>
              {data.card_one.para2}
            </p>
          </div>
        </div>
        <div className='container relative card_custom_css rounded p-5 pt-12'>
          <div className='container absolute card_image max-w-14 left-32'>
            <img
              src={data.card_two.img}
              alt='guarantee'
            />
          </div>
          <div className='container'>
            <div className='text-orange-600 text-lg mb-2 text-center'>{data.card_two.head}</div>
            <p className='text-center'>{data.card_two.para1}</p>
          </div>
        </div>
        <div className='container relative card_custom_css rounded p-5 pt-12'>
          <div className='container absolute card_image_7 max-w-14 left-32'>
            <img
              src={data.card_three.img}
              alt='guarantee'
            />
          </div>
          <div className='container'>
            <div className='text-orange-600 text-lg mb-2 text-center'>{data.card_three.head}</div>
            <p className='text-center'>{data.card_three.para1}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyHssCards