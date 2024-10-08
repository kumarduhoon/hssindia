import React from 'react'
import ListCard from '../Accessories/ListCard'
import saeFlangeOne from "../../../../static/sae_one.jpg"
import saeFlangeTwo from "../../../../static/sae_two.jpg"
import saeFlangeThree from "../../../../static/sae_three.jpg"
import saeFlangeFour from "../../../../static/sae_four.jpg"

function Content() {
  return (
    <div className='m-14'>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>SAE Flanges</b></div>
          <div className='my-2'>
            We manufacture an array of SAE flanges and Hydraulic flanges which corresponds to relevant international standards. These flanges find application in industries where flanged joints are encountered during the tasks of fabrication & maintenance. Our wide array of SAE Flanges can also be customized as per the drawings and specifications provided by the clients.
          </div>
          <div className='my-2'>Various types of flanges manufactured
          </div>
          <div className='my-2'>SPLIT FLANGES
          </div>
          <div className='my-2'>MONOBLOCK FLANGES</div>
          <div className='my-2'>BUTT WELD FLANGES </div>
          <div className='my-2'>SOCKET WELD FLANGES</div>
          <div className='my-2'>THREADED FLANGES</div>
          <div className='my-2'>BUTT WELD FLANGE ADAPTOR</div>
          <div className='my-2'>THREADED FLANGE ADAPTORS</div>
          <div className='my-5'>
            <div className='flex justify-evenly'>
              <div className='mr-2'>
                <img
                  src={saeFlangeOne}
                  alt="box one"
                />
              </div>
              <div className='ml-2 mr-2'>
                <img
                  src={saeFlangeTwo}
                  alt='box four'
                />
              </div>
              <div className='ml-2 mr-2'>
                <img
                  src={saeFlangeThree}
                  alt='box four'
                />
              </div>
              <div className='ml-2'>
                <img
                  src={saeFlangeFour}
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

