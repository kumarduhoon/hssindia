import React from 'react'
import "./ReachUsContact.scss"

function ReachUsContact() {
  return (
    <div className='grid grid-cols-2 gap-10 my-14 mx-16'>
      <div className='container p-2'>
        <div className='container max-w-full'>
          <img
            src='/reach_us_contact.webp'
            alt='reach us contact'
            className='w-full'
          />
        </div>
        <div className='conatiner text-6xl my-5'>
          <b>Find us here. Make real results happen.</b>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div className='container'>
            <div className='flex justify-between'>
              <div>
                Plot no. 382, Sec.- 68, IMT<br /> Faridabad, Haryana, India
              </div>
              <div >
                <img
                  src="/address.png"
                  alt="address img"
                  className=" mt-1 ml-3 w-7"
                />
              </div>
            </div>
            <div className='flex justify-between mt-4'>
              <div>
                sales@hssindia.in
              </div>
              <div >
                <img
                  src="/email.png"
                  alt="email img"
                  className="ml-3 w-8"
                />
              </div>
            </div>
            <div className='flex justify-between mt-4'>
              <div>
                +91-9667 73 62 68
              </div>
              <div >
                <img
                  src="/phone.png"
                  alt="phone img"
                  className="ml-3 w-5"
                />
              </div>
            </div>
            <div className='flex justify-between mt-4'>
              <div>
                +91-129-4057836
              </div>
              <div >
                <img
                  src="/phone.png"
                  alt="phone img"
                  className="ml-3 w-5"
                />
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='p-5 bg-zinc-900 rounded-md'>
              <div className='text-3xl text-white text-center'> Opening Hours</div>
              <div className='flex justify-between mt-6'><p className='text-white text-center'>Mon - Sat </p> <p className='text-white text-center'> 9:30 - 18:30</p></div>
              <div className='flex justify-between my-6'><p className='text-white text-center'>Sunday</p> <p className='text-orange-500 text-center'>Off - Day</p></div>
            </div>

          </div>
        </div>
      </div>
      <div className='container p-2'></div>
    </div>
  )
}

export default ReachUsContact