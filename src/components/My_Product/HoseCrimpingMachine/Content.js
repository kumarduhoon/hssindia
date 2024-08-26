import React from 'react'
import ListCard from '../Accessories/ListCard'

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
                  src='/hose_crimping_machine_one.jpg'
                  alt="box one"
                />
              </div>
              <div className='mr-2 ml-2'>
                <img
                  src='/hose_crimping_machine_two.jpg'
                  alt="box one"
                />
              </div>
              <div className='mr-2 ml-2'>
                <img
                  src='/hose_crimping_machine_three.jpg'
                  alt="box one"
                />
              </div>
              <div className='ml-2'>
                <img
                  src='/hose_crimping_machine_four.jpg'
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

