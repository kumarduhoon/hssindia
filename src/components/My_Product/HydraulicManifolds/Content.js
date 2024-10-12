import React from 'react'
import ListCard from '../Accessories/ListCard'
import mainOne from "../../../assests/images/productPage/hydraulic_manifolds_one.jpg"
import mainTwo from "../../../assests/images/productPage/hydraulic_manifolds_two.jpg"
import mainThree from "../../../assests/images/productPage/hydraulic_manifolds_three.jpg"

function Content() {
  return (
    <div className='mx-4 sm:mx-8 lg:mx-14 my-8'>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="p-4 bg-white shadow">
          <ListCard />
        </div>
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>Hydraulic Manifolds</b></div>
          <div className='my-2 hss-text-para'>
            HSS manufactures hydraulic manifold blocks for industry and mobile applications.They are used for industry hydraulics, truck hydraulics, mobile hydraulics, hydraulic power units and many more applications. The manifold blocks, in steel or aluminium design, offer maximum functionality in a very small space.
          </div>
          <div className='my-5'>
            <div className='flex justify-evenly'>
              <div className='mr-2'>
                <img
                  src={mainOne}
                  alt="box one"
                />
              </div>
              <div className='ml-2 mr-2'>
                <img
                  src={mainTwo}
                  alt='adaptors four'
                />
              </div>
              <div className='ml-2'>
                <img
                  src={mainThree}
                  alt='adaptors five'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Content

