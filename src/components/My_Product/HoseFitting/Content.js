import React from 'react'
import ListCard from '../Accessories/ListCard'
import hoseFittingOne from "../../../../static/hose_fitting_one.jpg"
import hoseFittingTwo from "../../../../static/hose_fitting_two.jpg"
import hoseFittingThree from "../../../../static/hose_fitting_three.jpg"
import hoseFittingFour from "../../../../static/hose_fitting_four.jpg"
import hoseFittingFive from "../../../../static/hose_fitting_five.jpg"

function Content() {
  return (
    <div className='m-14'>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>Hydraulic Hose Fittings</b></div>
          <div className='my-2'>
            Fittings are designed for mounting on to hydraulic hose. The fitting must be compatible to the hose in order to withstand the rigors encountered in extreme working conditions.HSS End Fittings are manufactured from different materials namely –
          </div>
          <div className='my-2'>
            <ul className='ml-4'>
              <li>Carbon Steel</li>
              <li>Stainless Steel</li>
              <li>Brass</li>
              <li>Other Material</li>
            </ul>
          </div>
          <div className='my-2'>
            Fittings made from normal Carbon Steel are the most common and are Cr-VI free electro zinc plated for protection against corrosion and finished with clear passivation. HSS end fittings are manufactured as per international standards and two piece configuration in NON-SKIVE style .Complete range available as per below standard
          </div>
          <div className='my-2'>
            <b className='text-lg'>BSP, DIN METRIC, SAE ORFS, JIC, JIS, KOMATSU, CAT.</b>
          </div>
          <div className='my-5'>
            <div className='flex justify-evenly'>
              <div className='mr-2'>
                <img
                  src={hoseFittingOne}
                  alt="box one"
                />
              </div>
              <div className='ml-2'>
                <img
                  src={hoseFittingTwo}
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
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>Industrial Hose Fittings</b></div>
          <div className='my-2'>
            HSS offers an import line of industrial hose fittings. These fittings are used in variety of applications; low pressure air hose fittings, sand blast, hose clamp fittings for industrial hose, pump fittings. They are also used for mending hose, attaching hose to anything that has female NPT thread, such as pipe, cam & groove couplers, trucks and tanks. These fittings can also be used for jack hammer hose.
          </div>
          <div className='my-2'>
            Low pressure couplings for applications with low pressure can be swaged with ferrules or assembled with hose clamps. As a further customer service, we can also offer pre-assembled hoses with couplings. The couplings are available in materials such as brass, aluminum, stainless steel, steel, and polypropylene.</div>
          <div className='my-5'>
            <div className='flex justify-evenly'>
              <div className='mr-2'>
                <img
                  src={hoseFittingThree}
                  alt="box one"
                />
              </div>
              <div className='ml-2 mr-2'>
                <img
                  src={hoseFittingFour}
                  alt='adaptors four'
                />
              </div>
              <div className='ml-2'>
                <img
                  src={hoseFittingFive}
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

