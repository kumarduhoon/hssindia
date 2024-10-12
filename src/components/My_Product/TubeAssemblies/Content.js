import React from 'react'
import ListCard from '../Accessories/ListCard'
import tubeAssemblie from "../../../assests/images/productPage/tube_assemblies_one.jpg"

function Content() {
  return (
    <div className='mx-4 sm:mx-8 lg:mx-14 my-8'>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="p-4 bg-white shadow">
          <ListCard />
        </div>
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>Tube Assemblies</b></div>
          <div className='my-2 hss-text-para '>
            HSS offers an extensive portfolio of low, medium and high pressure hydraulic tubing assemblies to support a variety of customer Fluid Power applications including Agriculture, Construction, and Material handling equipment, Truck and Bus, Wind Turbines, Lawn and Garden, and Engines. The tube assemblies are constructed from tubing products that meet SAE, ISO, and ASTM industry standards. We custom fabricate tube assemblies to each customer’s design specifications. We have the unique capability to fully process hydraulic tube assemblies in-house. This includes cutting, end forming, assembly, brazing and high accuracy CNC bending. This affords us a high level of quality control over the entire process.
          </div>
          <div className='my-2 hss-text-para '>
            <ul className='ml-4'>
              <li>HSS uses a broad range of stainless and carbon steel tubing raw materials in sizes used in today’s hydraulic applications.</li>
              <li>We specialize in combining hydraulic hose and tube into one Hose-Tube Combination assembly to reduce leak points, improve routing, eliminate excess components, and reduce cost.</li>
              <li>With our broad portfolio offering of hose assemblies and hydraulic tubing, we are best positioned to improve routing, eliminate excess components and cost-effective component application.</li>
              <li>We are capable of fabricating hydraulic tube assemblies from tubing ranging in diameter from 6.53 mm (.25″) through 38.1 mm (1.5”). Our current maximum length is 3000 mm (118”)</li>
            </ul>
          </div>
          <div className='my-5'>
            <div className='flex justify-start'>
              <div className='mr-2'>
                <img
                  src={tubeAssemblie}
                  alt="box one"
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

