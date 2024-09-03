import React from 'react'
import ListCard from '../Accessories/ListCard'
import tubeFitting from "../../../../static/tube_fitting_one.png"

function Content() {
  return (
    <div className='m-14'>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>Tube Fittings</b></div>
          <div className='my-2'>
            We are renowned for manufacturing wide range of Hydraulic Fittings as per National and International Standards (DIN 2353). These fittings are widely appreciated for their low maintenance, excellent durability, high performance, corrosion resistance, dimensional accuracy and cost effectiveness. Our diverse range includes Hydraulic Equal Elbows, Hydraulic Equal Tees, Hydraulic Swivel Couplings, Single Ferrule Hydraulic Fittings and Hydraulic BSP Swivel Tees. In addition to this, we also offer, Hydraulic BSP Swivel Elbows, Hydraulic BSP Male Tees, Hydraulic BSP Male Elbows and Hydraulic BSP/UNF Adapters
          </div>
          <div className='my-2'>
            We specialize in not just one type of product – we have the flexibility to produce special requirements alongside our standard product ranges. This diversity of ranges and sizes, combined with our unparalleled customer service and technical assistance, gives HSS a distinct advantage over other suppliers.
          </div>
          <div className='my-5'>
            <div className='flex justify-start'>
              <div className='mr-2'>
                <img
                  src={tubeFitting}
                  alt="box one"
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

