import React, { useState } from 'react'
import "./ReachUsContact.scss"
import { Link } from 'gatsby'
import { ToastContainer, toast } from "react-toastify";
import insta from "../../../assests/images/reach_us/insta.png"
import twitter from "../../../assests/images/reach_us/twitter.png"
import linkedin from "../../../assests/images/reach_us/linkedin.png"



function ReachUsContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);


  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "3fd5d999-5eda-4d58-acaa-ae2425cd4e59");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast.success(res.message);
        event.target.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-14 mx-6 lg:mx-16'>
      <div className='container  p-6'>
        <div className='head_contact_us'>Contact Us</div>
        <div className='text_contact_us'>
          Share your thoughts, suggestions and questions with us.
          We will get back to you as soon as possible.
        </div>
        <div className='office_time_con'>
          <div className='office_time_heading'>Opening Hours</div>
          <div className='time_day_con'>
            <div className='day_con'><b>Mon - Sat</b></div>
            <div className='time_con'><b>9:30 am - 18:30 pm</b></div>
          </div>
          <div className='time_day_con mt-6'>
            <div className='day_con'><b>Sunday</b></div>
            <div className='time_con' ><b>Off - Day</b></div>
          </div>
        </div>
        <div className='social_media_con'>
          <div className='social_media_text_con'>Follow Us</div>
          <div className='social_media_handle_con'>
            <Link to="/">
              <img
                src={insta}
                alt='insta'
                className='social_media_insta'
              />
            </Link>
            <Link to="/">
              <img
                src={twitter}
                alt='twitter'
                className='social_media_twitter'
              />
            </Link>
            <Link to="/">
              <img
                src={linkedin}
                alt='linkedin'
                className='social_media_linkedin'
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='container p-6 rounded-lg shadow-lg'>
        <div className="container form-custom-class px-4 py-8">
          <form onSubmit={onSubmit}>
            <div className='container text-3xl text-center pb-9 text-con-ask'><b>Ask Question or Get Quote</b></div>
            <div className='container'>
              <label htmlFor='name_id' className='lable-common-css'>Full Name</label>
              <input
                className='h-12 w-full p-2 bg-white rounded'
                placeholder='Enter Your full Name*'
                id="name_id"
                type="text" name="name"
                required
              />
            </div>
            <div className='container flex justify-around mt-14 info-con-phone-email'>
              <div className='mr-3'>
                <input type="hidden" name="subject" value="New Client form Details from HSS  India" />
                <input type="hidden" name="from_name" value="Notifications From HSS INDIA"></input>
                <label htmlFor="phone_id" className='lable-common-css'>Phone Number</label>
                <input
                  className='h-12 w-full p-2 bg-white rounded input-tag-custom-email-phone'
                  placeholder='Phone Number*'
                  id="phone_id"
                  type="tel"
                  name="phone"
                  required
                />
              </div>
              <div className='ml-3'>
                <label htmlFor='email_id' className='lable-common-css'>Email Addreess</label>
                <input
                  className='h-12 w-full p-2 bg-white rounded input-tag-custom input-tag-custom-email-phone'
                  placeholder='E-mail Address*'
                  id="email_id"
                  type="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className='mt-14'>
              <label htmlFor='message_id' className='lable-common-css'>Message</label>
              <textarea
                placeholder='Enter Your Message*'
                rows="4"
                className='p-2 w-full'
                id='message_id'
                name="message"
                required
              />
            </div>
            <div className='container mt-12 flex justify-center'>
              <button
                className='py-3 rounded px-48 custom-btn-contact-form'
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Get Quote"}
              </button>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReachUsContact