import React from 'react'
import "./Content.scss"
import ListCard from '../Accessories/ListCard'

import adaptorOne from "../../../assests/images/productPage/adaptors_one.jpg"
import adaptorTwo from "../../../assests/images/productPage/adaptors_two.jpg"
import adaptorThree from "../../../assests/images/productPage/adaptors_three.jpg"
import adaptorFour from "../../../assests/images/productPage/adaptors_four.jpg"
import adaptorFive from "../../../assests/images/productPage/adaptors_five.jpg"

function Content() {
  return (
    <div className='mx-4 sm:mx-8 lg:mx-14 my-8'>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="p-4 bg-white shadow">
          <ListCard />
        </div>
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>Adaptors</b></div>
          <div className='my-2 hss-text-para'>
            <b>Hydraulic Sealing Solutions</b> manufactures an extensive range of adaptors in excess of 3000 different variations. We make adaptors to international standards i.e. JIC, SAE, DIN, BSP,ORFS, BSPT, NPTF and NPSM from Carbon steel, Stainless Steel and other metals
          </div>
          <div className='my-2 hss-text-para'>
            We specialize in not just one type of product – we have the flexibility to produce special requirements alongside our standard product ranges. This diversity of ranges and sizes, combined with our unparalleled customer service and technical assistance, gives HSS a distinct advantage over other suppliers.
          </div>
          <div className='my-2 hss-text-para'>
            The market for hydraulic adaptors is a truly diverse one. Hydraulics are used in almost every facet of industry; Agriculture, Transport, Waste, Defence, Manufacturing, Marine, Construction, Mining, Engineering, etc. Hydraulic power plays a crucial global role in keeping these and other industries going.
          </div>
          <div className='my-2 hss-text-para'>
            There are 3 main user groups – Original Equipment Manufacturers (OEM), Large Consumers and “End User.” We supply these markets both directly and through static distributors, operating from trade warehouses and providing products “over the counter” to their customers.
          </div>
          <div className='my-2 hss-text-para'>
            <ul className='ml-4'>
              <li>BSP</li>
              <li>JIC</li>
              <li>METRIC</li>
            </ul>
          </div>
          <div className='my-5'>
            <div className='flex justify-evenly'>
              <div className='mr-2'>
                <img
                  src={adaptorOne}
                  alt="box one"
                />
              </div>
              <div className='ml-2 mr-2'>
                <img
                  src={adaptorTwo}
                  alt='adaptors two'
                />
              </div>
              <div className='ml-2 mr-2'>
                <img
                  src={adaptorThree}
                  alt='adaptors three'
                />
              </div>
              <div className='ml-2 mr-2'>
                <img
                  src={adaptorFour}
                  alt='adaptors four'
                />
              </div>
              <div className='ml-2'>
                <img
                  src={adaptorFive}
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

