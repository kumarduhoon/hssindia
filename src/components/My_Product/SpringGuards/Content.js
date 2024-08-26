import React from 'react'
import ListCard from '../Accessories/ListCard'

function Content() {
  return (
    <div className='m-14'>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>Spring Guards and Spiral Sleeves</b></div>
          <div className='my-2'>Rust resistant, zinc plated open wound spring guards prolong the life of the hose cover and reinforcement from abrasion, kinking and other damage incurred in severe working areas. Open wound spring guards are available for all types and sizes of hoses</div>
          <div className='my-2'>Widely used in excavators, loaders, road rollers, pavers, forklifts, cranes, dump trucks and other construction machinery and injection moulding machine equipment. Mainly installed in the hydraulic hose, wire and cable products external. Its function is to enhance the hydraulic hose external wear resistance in a variety of harsh environments and extend the life of hose assembly.</div>
          <div className='my-2'>
            Standard length of spring guards are available for hoses from 3/16” to 2” size. we have the flexibility to produce special requirements alongside our standard product ranges.
          </div>
          <div className='my-5'>
            <div className='flex justify-evenly'>
              <div className='mr-2'>
                <img
                  src='/spring_guard_one.jpg'
                  alt="box one"
                />
              </div>
              <div className='mr-2 ml-2'>
                <img
                  src='/spring_guard_two.jpg'
                  alt="box one"
                />
              </div>
              <div className='ml-2'>
                <img
                  src='/spring_guard_three.png'
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

