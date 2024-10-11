import React from 'react'
import "./Content.scss"

function Content() {
  return (
    <div className='w-full'>
      <div className='mx-4 sm:mx-8 lg:mx-16 my-8'>
        <div className='text-xl sm:text-2xl lg:text-3xl p-3 text-orange-600'>
          <b>The Advantages of No-Skive Versus Skive Hydraulic Hose Assemblies</b>
        </div>
        <div className='p-3 text-sm sm:text-base lg:text-lg class-text'>
          Skiving refers to removing (or shaving) part of the hydraulic hose cover and/or inner tube prior to attaching hose ends. No-skive means the hose and fittings are designed to work without this step. In other words, hose and fittings come ready to assemble. The big difference between skive and no-skive hose is in the thickness of the outer cover. The thicker cover requires a different hydraulic fitting shell due to the thickness.
        </div>
        <div className='p-3 text-sm sm:text-base lg:text-lg class-text'>
          <p className='mb-4'><b>So what is the advantage to you?</b></p>
          With no-skive, the hose core is not exposed to possible damage since the cover or inner tubes do not need to be removed to attach the crimped fittings. Also, a no-skive hydraulic hose speeds up the assembly time of a hose assembly, and there is no additional equipment or clean-up needed. Furthermore, the correct combination of no-skive hose and fittings guarantees a total form lock connection between shell and reinforcement and assures a safe and leak-free long service life.
        </div>
        <div className='p-3 text-sm sm:text-base lg:text-lg class-text'>
          <p><b>No-Skive hose also offers the following benefits:</b></p>

          <ul className='mt-4 ml-5 list-disc class-text'>
            <li>Avoids premature hose failure caused by under or over skiving</li>
            <li>Protects the steel wire reinforcement against corrosion</li>
            <li>Offers an outer rubber cover to mechanically protect the steel wire reinforcement during hose fitting assembly</li>
            <li>Includes engineered fittings where the teeth of the shell bite down to the wire provide a metal-to-metal grip</li>
            <li>Eliminates costly skiving equipment <br />
              No-skive hose not only speeds assembly, it eliminates needing skiving equipment, wasted time, and clean-up. No-skive hose assemblies are the preferred choice for all medium pressure mobile and industrial applications.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Content