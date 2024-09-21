import React from 'react'
import marketOne from "../../../assests/images/market/market_one.webp"
import marketTwo from "../../../assests/images/market/market_two.webp"
import marketThree from "../../../assests/images/market/market_three.webp"
import marketFour from "../../../assests/images/market/market_four.webp"
import marketFive from "../../../assests/images/market/market_five.webp"
import marketSix from "../../../assests/images/market/market_six.webp"
import marketSeven from "../../../assests/images/market/market_seven.webp"
import marketEight from "../../../assests/images/market/market_eight.webp"
import marketNine from "../../../assests/images/market/market_nine.webp"

function MarketService() {
  return (
    <>
      <div className='grid grid-cols-3 gap-10 mx-16 my-4'>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src={marketOne}
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500  text-center text-2xl '><b>Automotive</b></div>
        </div>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src={marketTwo}
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500   text-center text-2xl'><b>Mobile Equipments</b></div>
        </div>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src={marketThree}
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500   text-center text-2xl'><b>Oil & Gas</b></div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-10 mx-16 my-4 mb-6'>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src={marketFour}
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500   text-center text-2xl'><b>Refinery and Petrochemic</b></div>
        </div>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src={marketFive}
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500   text-center text-2xl'><b>Food and Pharmaceuticals</b></div>
        </div>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src={marketSix}
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500   text-center text-2xl'><b>Railways</b></div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-10 mx-16 my-4 mb-8'>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src={marketSeven}
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500   text-center text-2xl'><b>Agriculture</b></div>
        </div>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src={marketEight}
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500   text-center text-2xl'><b>Mini Equipments</b></div>
        </div>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src={marketNine}
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500   text-center text-2xl'><b>General Industry</b></div>
        </div>
      </div>
    </>
  )
}

export default MarketService