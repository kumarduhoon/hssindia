import React from 'react'

function MarketService() {
  return (
    <>
      <div className='grid grid-cols-3 gap-10 mx-16 my-4'>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src='/market_one.webp'
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500  text-center text-2xl '><b>Automotive</b></div>
        </div>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src='/market_two.webp'
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500   text-center text-2xl'><b>Mobile Equipments</b></div>
        </div>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src='/market_three.webp'
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
              src='/market_four.webp'
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500   text-center text-2xl'><b>Refinery and Petrochemic</b></div>
        </div>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src='/market_five.webp'
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500   text-center text-2xl'><b>Food and Pharmaceuticals</b></div>
        </div>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src='/market_six.webp'
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
              src='/market_seven.webp'
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500   text-center text-2xl'><b>Agriculture</b></div>
        </div>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src='/market_eight.webp'
              className='w-full'
              alt=' market one'
            />
          </div>
          <div className='py-8 hover:cursor-pointer hover:text-white hover:bg-orange-500   text-center text-2xl'><b>Mini Equipments</b></div>
        </div>
        <div className='container'>
          <div className='continer border-b-4 border-l-4 border-orange-500'>
            <img
              src='/market_nine.webp'
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