import React from 'react'

function MyProduct() {
  return (
    <div className='w-full m-auto'>
      <div className='my-10 mx-20 grid grid-cols-2 gap-6'>
        <div>
          <div className=' bg-white shadow-md border-l-8 border-b-8 border-orange-600 p-16 rounded'>
            <img
              src='/pexels_gustavo_fring.png'
              alt='gas fuel'
              className='rounded'
            />
          </div>
          <div className='text-4xl text-center mt-8'><b>Gas Fuel</b></div>
        </div>
        <div>
          <div className=' bg-white shadow-md border-l-8 border-b-8 border-orange-600 p-16 rounded'>
            <img
              src='/hydraulic_hose_fittings.webp'
              alt='hydraulic'
              className='rounded'
            />
          </div>
          <div className='text-4xl text-center mt-8'><b>Hydraulic</b></div>
        </div>
        {/* <div className='my-12'>
          <div className=' bg-white shadow-md border-l-8 border-b-8 border-orange-600 p-16 rounded'>
            <img
              src='/emobility_getty.png'
              alt='mobility'
              className='rounded mb-2'
            />
          </div>
          <div className='text-4xl text-center mt-8'><b>E-Mobility</b></div>
        </div> */}
        <div className='my-12'>
          <div className=' bg-white shadow-md border-l-8 border-b-8 border-orange-600 p-16 rounded'>
            <img
              src='/common_pneumatic_solution.png'
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