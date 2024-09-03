import React from 'react'
import ListCard from '../Accessories/ListCard'
import hoseMachineOne from "../../../../static/hose_crimping_machine_one.jpg"
import hoseMachineTwo from "../../../../static/hose_crimping_machine_two.jpg"
import hoseMachineThree from "../../../../static/hose_crimping_machine_three.jpg"
import hoseMachineFour from "../../../../static/hose_crimping_machine_four.jpg"

function Content() {
  return (
    <div className='m-14'>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 p-4">
          <div className='global-color text-2xl'><b>Hose Crimping Machines</b></div>
          <div className='my-2'><b>HSS</b> offers a wide range of machines used for Hose assembly process like</div>
          <div className='my-2'>Hose Crimper</div>
          <div className='my-2'>Hose testing</div>
          <div className='my-2'>Hose Skiving</div>
          <div className='my-2'>Hose Inserter</div>
          <div className='my-5'>
            <div className='flex justify-evenly'>
              <div className='mr-2'>
                <img
                  src={hoseMachineOne}
                  alt="box one"
                />
              </div>
              <div className='mr-2 ml-2'>
                <img
                  src={hoseMachineTwo}
                  alt="box one"
                />
              </div>
              <div className='mr-2 ml-2'>
                <img
                  src={hoseMachineThree}
                  alt="box one"
                />
              </div>
              <div className='ml-2'>
                <img
                  src={hoseMachineFour}
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

