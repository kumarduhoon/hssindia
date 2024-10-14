import React from 'react'
import ListCard from '../Accessories/ListCard'
import hoseAssembliesOne from "../../../assests/images/productPage/hose_assemblies_one.png"
import hoseAssembliesTwo from "../../../assests/images/productPage/hose_assemblies_two.jpg"

function Content() {
  return (
    <div className='mx-4 sm:mx-8 lg:mx-14 my-8'>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="p-4 bg-white shadow">
          <ListCard />
        </div>
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>Hydraulic Hose Assemblies</b></div>
          <div className='my-2'>
            Hydraulic hose assemblies are used to transmit forces by means of oil pressure, and consist of flexible hydraulic hoses to which fittings are attached at either end to ensure safe, interlocking connections.
          </div>
          <div className='my-2'>The correct choice of a hose assembly is influenced by many factors, particularly dynamic working pressure, resistance to media handled, operating temperature – both of the medium and of the surroundings.
          </div>
          <div className='my-2'>
            HSS manufactures a wide range of hose assemblies with wire braid, Teflon, PTFE , concrete hoses, industrial hoses and spiral hoses with standard and customized end connections. Hose assemblies are available from 3/16” to 8” hose sizes.
          </div>
          <div className='my-2'>
            Hose assemblies are made in standard length as well as to customer specific drawings.
          </div>
          <div className='my-5'>
            <div className='flex justify-evenly'>
              <div className='mr-2'>
                <img
                  src={hoseAssembliesOne}
                  alt="box one"
                />
              </div>
              <div className='ml-2'>
                <img
                  src={hoseAssembliesTwo}
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

