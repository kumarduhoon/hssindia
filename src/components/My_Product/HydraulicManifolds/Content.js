import React from 'react'
import ListCard from '../Accessories/ListCard'

function Content() {
  return (
    <div className='m-14'>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>Hydraulic Manifolds</b></div>
          <div className='my-2'>
            HSS manufactures hydraulic manifold blocks for industry and mobile applications.They are used for industry hydraulics, truck hydraulics, mobile hydraulics, hydraulic power units and many more applications. The manifold blocks, in steel or aluminium design, offer maximum functionality in a very small space.
          </div>
          <div className='my-5'>
            <div className='flex justify-evenly'>
              <div className='mr-2'>
                <img
                  src='/hydraulic_manifolds_one.jpg'
                  alt="box one"
                />
              </div>
              <div className='ml-2 mr-2'>
                <img
                  src='/hydraulic_manifolds_two.jpg'
                  alt='adaptors four'
                />
              </div>
              <div className='ml-2'>
                <img
                  src='/hydraulic_manifolds_three.jpg'
                  alt='adaptors five'
                />
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 bg-white shadow">
          <ListCard />
        </div>
      </div>
    </div>

  )
}

export default Content

