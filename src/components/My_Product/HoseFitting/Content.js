import React from 'react'
import ListCard from '../Accessories/ListCard'
import hoseFittingOne from "../../../../static/hose_fitting_one.jpg"
import hoseFittingTwo from "../../../../static/hose_fitting_two.jpg"
import hoseFittingThree from "../../../../static/hose_fitting_three.jpg"
import hoseFittingFour from "../../../../static/hose_fitting_four.jpg"
import hoseFittingFive from "../../../../static/hose_fitting_five.jpg"

function Content() {
  return (
    <div className='mx-4 sm:mx-8 lg:mx-14 my-8'>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow">
          <ListCard />
        </div>
        <div className="lg:col-span-2 p-4">
          <div>
            <div className='global-color text-xl sm:text-2xl'><b>Hydraulic Hose Fittings</b></div>
            <div className='my-2 text-sm sm:text-base'>
              Fittings are designed for mounting on to hydraulic hose. The fitting must be compatible with the hose in order to withstand the rigors encountered in extreme working conditions. HSS End Fittings are manufactured from different materials namely –
            </div>
            <div className='my-2 text-sm sm:text-base'>
              <ul className='ml-4 list-disc'>
                <li>Carbon Steel</li>
                <li>Stainless Steel</li>
                <li>Brass</li>
                <li>Other Material</li>
              </ul>
            </div>
            <div className='my-2 text-sm sm:text-base'>
              Fittings made from normal Carbon Steel are the most common and are Cr-VI free electro zinc plated for protection against corrosion and finished with clear passivation. HSS end fittings are manufactured as per international standards and two-piece configuration in NON-SKIVE style. Complete range available as per below standard:
            </div>
            <div className='my-2 text-sm sm:text-base'>
              <b className='text-base sm:text-lg'>BSP, DIN METRIC, SAE ORFS, JIC, JIS, KOMATSU, CAT.</b>
            </div>
            <div className='my-5'>
              <div className='flex flex-col sm:flex-row justify-evenly'>
                <div className='mb-4 sm:mb-0 sm:mr-2'>
                  <img
                    src={hoseFittingOne}
                    alt="box one"
                    className='w-full'
                  />
                </div>
                <div className='sm:ml-2'>
                  <img
                    src={hoseFittingTwo}
                    alt='adaptors five'
                    className='w-full'
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='global-color text-xl sm:text-2xl'><b>Industrial Hose Fittings</b></div>
            <div className='my-2 text-sm sm:text-base'>
              HSS offers an import line of industrial hose fittings. These fittings are used in a variety of applications; low-pressure air hose fittings, sandblast, hose clamp fittings for industrial hose, pump fittings. They are also used for mending hose, attaching hose to anything that has female NPT thread, such as pipe, cam & groove couplers, trucks, and tanks. These fittings can also be used for jackhammer hose.
            </div>
            <div className='my-2 text-sm sm:text-base'>
              Low-pressure couplings for applications with low pressure can be swaged with ferrules or assembled with hose clamps. As a further customer service, we can also offer pre-assembled hoses with couplings. The couplings are available in materials such as brass, aluminum, stainless steel, steel, and polypropylene.
            </div>
            <div className='my-5'>
              <div className='flex flex-col sm:flex-row justify-evenly'>
                <div className='mb-4 sm:mb-0 sm:mr-2'>
                  <img
                    src={hoseFittingThree}
                    alt="box one"
                    className='w-full'
                  />
                </div>
                <div className='mb-4 sm:mb-0 sm:ml-2 sm:mr-2'>
                  <img
                    src={hoseFittingFour}
                    alt='adaptors four'
                    className='w-full'
                  />
                </div>
                <div className='sm:ml-2'>
                  <img
                    src={hoseFittingFive}
                    alt='adaptors five'
                    className='w-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content

