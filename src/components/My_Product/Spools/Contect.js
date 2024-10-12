import React from 'react'
import ListCard from '../Accessories/ListCard'
import spoolsOne from "../../../assests/images/productPage/spools_one.png"
import spoolsTwo from "../../../assests/images/productPage/spoole_two.png"
import spoolsThree from "../../../assests/images/productPage/spoole_three.png"

function Content() {
  return (
    <div className='mx-4 sm:mx-8 lg:mx-14 my-8'>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="p-4 bg-white shadow">
          <ListCard />
        </div>
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>Spools</b></div>
          <div className='my-2 hss-text-para'>
            Spool valves come in a wide variety of different types and configurations, some having more ports and able to control multiple items of equipment at once. Spool valves can be used in both hydraulics (where the oil is the energy source) or Pneumatics (where the air is the energy source) and their job is to control the flow direction of the energy source by combining or switching the paths through which the oil or air can trave
          </div>
          <div className='my-2 hss-text-para'>HSS offers a wide variety of spools for construction equipments like Backhoe loaders, Excavators and for solenoid valves. Our spools are made from high grade raw material and close tolerances are maintained on final product to ensure optimal performance of products. Our spools are rates as best for backhoe loaders.
          </div>
          <div className='my-5'>
            <div className='flex justify-evenly'>
              <div className='mr-2'>
                <img
                  src={spoolsOne}
                  alt="box one"
                />
              </div>
              <div className='ml-2 mr-2'>
                <img
                  src={spoolsTwo}
                  alt='adaptors four'
                />
              </div>

              <div className='ml-2'>
                <img
                  src={spoolsThree}
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

