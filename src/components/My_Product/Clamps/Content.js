import React from 'react'
import ListCard from '../Accessories/ListCard'
import clmapsOne from "../../../../static/clamps_one.png"
import clmapsTwo from "../../../../static/clamps_two.png"
import clmapsThree from "../../../../static/clamps_three.png"

function Content() {
  return (
    <div className='m-14'>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>Clamps</b></div>
          <div className='my-2'>Screw clamps consist of a galvanized or stainless steel band into which a screw thread pattern has been cut or pressed. One end of the band contains a captive screw. The clamp is put around the hose or tube to be connected, with the loose end being fed into a narrow space between the band and the captive screw. When the screw is turned, it acts as a worm drive pulling the threads of the band, causing the band to tighten around the hose (or when screwed the opposite direction, to loosen). Screw clamps are normally used for hoses 1/2 in diameter and up, with other clamps used for smaller hoses.</div>
          <div className='my-2'>Standard hose clamps are available in sizes ½” to 6” hose</div>
          <div className='my-2'>In SS202 and SS306 material. Heavy duty clamps are also available in different sizes.
          </div>
          <div className='my-5'>
            <div className='flex justify-evenly'>
              <div className='mr-2'>
                <img
                  src={clmapsOne}
                  alt="box one"
                />
              </div>
              <div className='mr-2 ml-2'>
                <img
                  src={clmapsTwo}
                  alt="box one"
                />
              </div>
              <div className='ml-2'>
                <img
                  src={clmapsThree}
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

