import React from 'react'
import ListCard from '../Accessories/ListCard'
import microboreFittingsOne from "../../../../static/microbore_one.jpg"
import microboreFittingsTwo from "../../../../static/microbore_two.jpg"
import microboreFittingsThree from "../../../../static/microbore_three.png"
import microboreFittingsFour from "../../../../static/microbore_four.jpg"

function Content() {
  return (
    <div className='m-14'>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>Microbore</b></div>
          <div className='my-2'><b>HSS</b> offers a complete range of miniature fittings, check couplings and accessories. HSS offers a simple, inexpensive appliance to check pressure in hydraulic systems. Permanently mounted pressure gauges and shut-off valves are no more necessary, thereby reducing initial costs. Replacement costs due to gauges broken by system problems or external damages are also eliminated.</div>
          <div className='my-2'>Besides hoses, fittings and check couplings, HSS offers optional hose ends to adapt to many other test couplings from other suppliers. Besides, they can be used for obtaining fluid samples from various points in hydraulic systems or as an air bleed device.</div>
          <div className='my-2'>
            The HSS micro system is versatile enough to be used instead of rigid pipes for pressure gauges, pressure switches, pressure transducers, pilot lines, etc. It dampens pressure peaks and prevents vibration from reaching the instruments, thanks to the micro hose’s capillary effect.
          </div>
          <div className='my-2'>vibration from reaching the instruments, thanks to the micro hose’s capillary effect.With HSS hoses and fittings, pressure can be checked while hydraulic systems are at full pressure. Micro test fittings and micro-bore hoses can bear a max. working pressure of 630 bar. Thanks to their design, both the connector and the micro hose coupling can be joined under pressure by screwing the coupling with two fingers without any tools and any leakage; the connection is self-sealing and will not loosen under vibration or pressure peaks. The micro-bore hose is so small and flexible that it can be installed like an electrical wiring.
          </div>
          <div className='my-5'>
            <div className='flex justify-evenly'>
              <div className='mr-2'>
                <img
                  src={microboreFittingsOne}
                  alt="box one"
                />
              </div>
              <div className='mr-2 ml-2'>
                <img
                  src={microboreFittingsTwo}
                  alt="box one"
                />
              </div>
              <div className='mr-2 ml-2'>
                <img
                  src={microboreFittingsThree}
                  alt="box one"
                />
              </div>
              <div className='ml-2'>
                <img
                  src={microboreFittingsFour}
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

