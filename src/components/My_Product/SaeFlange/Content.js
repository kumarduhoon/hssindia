import React from 'react'
import ListCard from '../Accessories/ListCard'
import saeFlangeOne from "../../../assests/images/productPage/sae_one.jpg"
import saeFlangeTwo from "../../../assests/images/productPage/sae_two.jpg"
import saeFlangeThree from "../../../assests/images/productPage/sae_three.jpg"
import saeFlangeFour from "../../../assests/images/productPage/sae_four.jpg"

function Content() {
  return (
    <div className='mx-4 sm:mx-8 lg:mx-14 my-8'>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="p-4 bg-white shadow">
          <ListCard />
        </div>
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>SAE Flanges</b></div>
          <div className='my-2 hss-text-para'>
            We manufacture an array of SAE flanges and Hydraulic flanges which corresponds to relevant international standards. These flanges find application in industries where flanged joints are encountered during the tasks of fabrication & maintenance. Our wide array of SAE Flanges can also be customized as per the drawings and specifications provided by the clients.
          </div>
          <div className='my-2 hss-text-para'>Various types of flanges manufactured
          </div>
          <div className='my-2 hss-text-para'>SPLIT FLANGES
          </div>
          <div className='my-2 hss-text-para'>MONOBLOCK FLANGES</div>
          <div className='my-2 hss-text-para'>BUTT WELD FLANGES </div>
          <div className='my-2 hss-text-para'>SOCKET WELD FLANGES</div>
          <div className='my-2 hss-text-para'>THREADED FLANGES</div>
          <div className='my-2 hss-text-para'>BUTT WELD FLANGE ADAPTOR</div>
          <div className='my-2 hss-text-para'>THREADED FLANGE ADAPTORS</div>
          <div className='my-5 '>
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
      </div>
    </div>

  )
}

export default Content

