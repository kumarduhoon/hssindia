import React from 'react'
import "./ReachUsContact.scss"
import reactUs from "../../../../static/reach_us_catch.png"
import address from "../../../../static/address.png"
import email from "../../../../static/email.png"
import phone from "../../../../static/phone.png"
import formName from "../../../../static/form_name.svg"
import formEmail from "../../../../static/form_email.svg"
import formPhone from "../../../../static/form_arrow.svg"
import formWirte from "../../../../static/form_write.svg"
import formLang from "../../../../static/form_down.svg"

function ReachUsContact() {
  return (
    <div className='grid grid-cols-2 gap-10 my-14 mx-16'>
      <div className='container p-2'>
        <div className='container max-w-full'>
          <img
            src={reactUs}
            alt='reach us contact'
            className='w-full'
          />
        </div>
        <div className='conatiner text-6xl my-5'>
          <b>Find us here. Make real results happen.</b>
        </div>
        <div className='grid grid-cols-2 gap-5 mt-8'>
          <div className='container'>
            <div className='flex justify-between'>
              <div>
                Plot no. 382, Sec.- 68, IMT<br /> Faridabad, Haryana, India
              </div>
              <div >
                <img
                  src={address}
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
                  src={email}
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
                  src={phone}
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
                  src={phone}
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
      <div className='container p-2'>
        <div className="container form-custom-class px-4 py-8">
          <form>
            <div className='container text-3xl text-center pb-9'><b>Ask Question or Get Quote</b></div>
            <div className='container flex justify-around'>
              <div className='container relative'>
                <input
                  className='h-12 w-64 p-2 bg-white rounded'
                  placeholder='Full Name'
                />
                <img
                  src={formName}
                  alt='name'
                  className=' absolute top-3 right-6'
                />
              </div>
              <div className='container relative'>
                <input
                  className='h-12 w-64 p-2 bg-white input-tag-custom rounded'
                  placeholder='Email Address'
                />
                <img
                  src={formEmail}
                  alt='email'
                  className=' absolute top-3 right-6'
                />
              </div>
            </div>
            <div className='container flex justify-around mt-14'>
              <div className='container relative'>
                <input
                  className='h-12 w-64 p-2 bg-white  rounded'
                  placeholder='Phone Number'
                />
                <img
                  src={formPhone}
                  alt='phone'
                  className=' absolute top-3 right-6'
                />
              </div>
              <div className='container relative'>
                <input
                  className='h-12 w-64 p-2 bg-white rounded input-tag-custom'
                  placeholder='Language'
                />
                <img
                  src={formLang}
                  alt='lang'
                  className=' absolute top-4 right-3'
                />
              </div>
            </div>
            <div className='container mt-14 relative'>
              <textarea
                placeholder='Questions'
                rows="4"
                cols="63"
                className='p-2'
              />
              <img
                src={formWirte}
                alt='question'
                className=' absolute top-2 right-4'
              />
            </div>
            <div className='container mt-12 flex justify-center'>
              <button className='custom-btn-contact-form py-3 rounded px-56'>
                Get Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReachUsContact