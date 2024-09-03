import React from 'react'
import ListCard from '../Accessories/ListCard'
import tubeClampOne from "../../../../static/tube_clamps_one.jpg"
import tubeClampTwo from "../../../../static/tube_clamps_two.jpg"
import tubeClampThree from "../../../../static/tube_clamps_three.jpg"

function Content() {
  return (
    <div className='m-14'>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>Tube Clamps</b></div>
          <div className='my-2'>
            Tube clamps reduce the harmful effects of mechanical shock and strong vibrations common in fluid power systems. They have a polypropylene cushion to help reduce wear from rubbing and chafing that can result in leakage, malfunctions, and downtime.HSS Tube clamps are designed as per DIN 3015 standards. Rib designed structure to provide resistance against impact and vibration dampening The tube clamps provides strength in the direction of the tube axis ensuring a high degree of sound deadening. Tube clamps are as per pipe OD, W.P rating, types of steel materials being used for piping, types of layout for piping, number of piping lines.
          </div>
          <div className='my-5'>
            <div className='flex justify-evenly'>
              <div className='mr-2'>
                <img
                  src={tubeClampOne}
                  alt="box one"
                />
              </div>
              <div className='ml-2 mr-2'>
                <img
                  src={tubeClampTwo}
                  alt='adaptors four'
                />
              </div>

              <div className='ml-2'>
                <img
                  src={tubeClampThree}
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

