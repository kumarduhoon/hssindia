import React from 'react'
import "./ServicesData.scss"

function ServicesData() {
  return (
    <div className='container-main-service-data mt-8' >
      <div className='container m-10'>
        <h1 className='text-3xl  global-color underline'><b>Our Services</b></h1>
        <p className='mt-3 service-font-size'>At HSS, we believe that the key to our success is exceptional service. From day one, HSS management has valued the contributions of its employees and the loyalty of its customers. Recognizing the importance of a cohesive partnership with customers and suppliers, HSS employs a quality of business ethic worthy of both.</p>
        <p className='mt-3 service-font-size'>More and more companies are requesting their suppliers to deliver subassemblies rather than components to their manufacturing lines. We offer many types of Value Added Services to help our customers increase their own productivity</p>
        <p className='mt-3 service-font-size'>These services include hydraulic manifold assembly, valve assembly, port adaptor installation, kitting (combining multiple components under one part number), pre-setting of adjustable or configurable devices, custom nameplates, testing and certification to third-party specifications and perhaps your unique need.</p>
        <h1 className='text-xl mt-3'><b>Systems Engineering and Design</b></h1>
        <p className='mt-3 service-font-size'>TECHNICAL SUPPORT AND TRAINING</p>
        <p className='mt-3 service-font-size'>SUB ASSEMBLIES</p>
        <p className='mt-3 service-font-size'>KITTING</p>
        <p className='mt-3 mb-3 service-font-size'>TESTING AND CERTIFICATION</p>
      </div>
    </div>
  )
}

export default ServicesData