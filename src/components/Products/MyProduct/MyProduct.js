import React from 'react'
import pexelsGustavo from "../../../../static/pexels_gustavo_fring.png"
import hydraulicHose from "../../../../static/hydraulic_hose_fittings.webp"
// import emobilityGetty from "../../../../static/emobility_getty.png"
import commonPneumatic from "../../../../static/common_pneumatic_solution.png"

function MyProduct() {
  return (
    <div className='w-full m-auto'>
      <div className='my-10 mx-20 grid grid-cols-2 gap-6'>
        <div>
          <div className=' bg-white shadow-md border-l-8 border-b-8 border-orange-600 p-16 rounded'>
            <img
              src={pexelsGustavo}
              alt='gas fuel'
              className='rounded'
            />
          </div>
          <div className='text-4xl text-center mt-8'><b>Gas Fuel</b></div>
        </div>
        <div>
          <div className=' bg-white shadow-md border-l-8 border-b-8 border-orange-600 p-16 rounded'>
            <img
              src={hydraulicHose}
              alt='hydraulic'
              className='rounded'
            />
          </div>
          <div className='text-4xl text-center mt-8'><b>Hydraulic</b></div>
        </div>
        {/* <div className='my-12'>
          <div className=' bg-white shadow-md border-l-8 border-b-8 border-orange-600 p-16 rounded'>
            <img
              src={emobilityGetty}
              alt='mobility'
              className='rounded mb-2'
            />
          </div>
          <div className='text-4xl text-center mt-8'><b>E-Mobility</b></div>
        </div> */}
        <div className='my-12'>
          <div className=' bg-white shadow-md border-l-8 border-b-8 border-orange-600 p-16 rounded'>
            <img
              src={commonPneumatic}
              alt='pneumatic'
              className='rounded'
            />
          </div>
          <div className='text-4xl text-center mt-8'><b>Pneumatic</b></div>
        </div>
      </div>
    </div>
  )
}

export default MyProduct