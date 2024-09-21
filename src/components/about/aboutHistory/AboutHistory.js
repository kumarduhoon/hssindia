import React from 'react'
import "./AboutHistory.scss"
import About_us from "../../../assests/images/aboutpage/about_us.svg"

function AboutHistory() {
  return (
    <div className="bg-white p-6 lg:p-12">
      {/* History Section */}
      <section className="flex flex-col lg:flex-row items-center mb-10">
        <div className="lg:w-1/2 p-4">
          <img
            src={About_us}
            alt="History"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Our History</h2>
          <p className="text-gray-600 mb-2 custom-p-tag-about-us">At its inception in 2014, Hydraulic Sealing Solutions sought only to provide local technical expertise in the
            application of fluid power components. Over the years, this has grown to include complete system integration,manufacturing, and support for the energy, industrial, power generation, and construction markets.
          </p>
          <p className="text-gray-600 custom-p-tag-about-us">
            HSS manufactures a wide range of Adaptors, Flanges, and Hose End Fittings, from low to ultra high pressure range and compatible to high temperature, aggressive fluids in single/double wire braided and multi-spiral hoses. Our components conform to BCS, SAE, ISO, DIN/EN and other international standards.
          </p>
          <p className="text-gray-600 custom-p-tag-about-us">All our products meet highest industrial norms and standards. Over a period of time, we have built up a lot of goodwill and reputation. Customer satisfaction is our prime motive so we always strive for timely Delivery and efficient service.
          </p>
          <p className="text-gray-600 custom-p-tag-about-us">We distinguish ourselves from other End fitting manufacturers by offering products that have genuine quality, are reliable, flexible and durable, and stringently comply with high international quality parameters. Moreover, we have a state-of-the-art infrastructure and efficient team that aids us providing finest quality products and make prompt Deliveries. Hence, for those searching superior quality Adaptors and End Fittings, HSS India, Faridabad is just the right place.
          </p>
          <p className="text-gray-600 custom-p-tag-about-us">We dedicate ourselves to serve the customer to their satisfaction and assure our utmost consideration at all times.
          </p>
        </div>
      </section>

      {/* Our History and Our People */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Our History</h2>
          <p className="text-gray-600 custom-p-tag-about-us">
            At HSS, our mission is to enhance your competitiveness, today and into the future.We will accomplish this by providing you with leading edge technology and design assistance, backed by quality products, value pricing, and premier service that will exceed your expectations.
          </p>
          <p className="text-gray-600 custom-p-tag-about-us">Our goal is to supply you with your correct parts in a timely manner and to help you quickly resolve any application issues that may arise. We achieve this with a large inventory, experienced personnel, and the full support of the manufacturing team.
          </p>
          <p className="text-gray-600 custom-p-tag-about-us">We understand you have many choices and hope you will give us an opportunity to earn your business.
          </p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Our People</h2>
          <p className="text-gray-600 custom-p-tag-about-us">
            Friendly professionals who have years of experience in providing solutions to your problems, and a vested interest in your success.
          </p>
          <p className="text-gray-600 custom-p-tag-about-us">
            Factory training is ongoing, and many of our staff are factory certified in addition to having college degrees in engineering or fluid power. That’s the HSS difference: people who have the attitude and the ability to under- stand your priorities.
          </p>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">Industries We Serve</h2>
        <p className="text-gray-600 mb-2 custom-p-tag-about-us">
          HSS serves a broad spectrum of commercial and public sector industries including oil and gas exploration, power generation, pipeline fabrication, construction equipment, and manufacturing machinery. The standards, tools, components, and aspects of design make each industry unique. Our innovative thinking, commitment to quality, and exceptional support remains the same.
        </p>
        <p className="text-gray-600 mb-2 custom-p-tag-about-us">Regardless if your particular industry is featured, contact us today to find out how we can deliver a solution that exceeds your expectations. The expertise gained from providing a wide variety of systems both large and small for over past years is a valuable asset that serves us well in delivering the very best in motion and control systems for any application.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li className="list-custom-css text-gray-600">OIL &GAS</li>
          <li className="list-custom-css text-gray-600">POWER GENERATION</li>
          <li className="list-custom-css text-gray-600">MANUFACTURING</li>
          <li className="list-custom-css text-gray-600">CONSTRUCTION</li>
          <li className="list-custom-css text-gray-600">PROCESS AND PIPELINE</li>
          <li className="list-custom-css text-gray-600">MACHINE BUILDING</li>
        </ul>
      </section>

      {/* Turn Key Solutions We Offer */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          Turn Key Solutions We Offer
        </h2>
        <p className="text-gray-600 mb-2 custom-p-tag-about-us">
          At HSS, we take pride in developing complete motion and control solutions for your business. When you choose to have HSS take sole source responsibility for all aspects of the motion and control of your machine, it reduces design time and eliminates the problems often encountered when interfacing multiple systems from separate sources. Our turn key hydraulic solutions have a proven record of value and reliability in a number of industries because of our passion for innovation, quality, and our customers.
        </p>
        <p className="text-gray-600 custom-p-tag-about-us">
          With experienced technicians and fabricators, industry-leading suppliers, and unmatched experience in motion and control, HSS is the clear choice as your go-to partner for fluid power and automation
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li className="list-custom-css text-gray-600">POWER UNITS</li>
          <li className="list-custom-css text-gray-600">MOBILE HYDRAULIC SOLUTIONS</li>
          <li className="list-custom-css text-gray-600">HOSES AND FITTINGS</li>
        </ul>
      </section>
    </div>
  )
}

export default AboutHistory