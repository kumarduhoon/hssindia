import React from 'react'
import './WhyHssVerticalCard.scss'
import whyHssTwo from "../../../../static/why_hss_5.png"
import whyHssThree from "../../../../static/why_hss_8.png"

function WhyHssVerticalCard() {
  return (
    <>
      <div className="py-5 px-5">
        <div className="max-w-5xl m-auto mt-16">
          <div className="relative card_custom_css rounded-lg shadow-lg p-5 bg-gray-300">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20">
              <img
                src={whyHssTwo}
                alt="guarantee"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-justify p-6">
              <div className="text-orange-600 text-lg font-semibold mb-2">
                Consistently Reliable
              </div>
              <p className="text-gray-600 text-sm">We will be happy to provide Pre-Dispatch Inspection (PDI) Report and a material test certificate for all raw materials used in the manufacturing of your order, upon request with every lot.</p>
              <p className="mt-3 text-gray-600 text-sm">We check the MTC of each lot of raw material received and send samples to NABL accredited lab for third party inspection. Further we, conduct ultrasonic crack testing for all raw material.</p>
              <p className="mt-3 text-gray-600 text-sm">
                In addition to the above, we can provide on request:
                <ul>
                  <li className=" text-gray-600 text-sm">Guarantee Certificate</li>
                  <li className=" text-gray-600 text-sm">Pressure Test Certificate</li>
                  <li className=" text-gray-600 text-sm">Millipore Test Report</li>
                  <li className=" text-gray-600 text-sm">Salt Spray Report</li>
                </ul>
              </p>
              <p className="mt-3 text-gray-600 text-sm">HSS Leak Free products reliably function every time and exceed performance standards. HSS Leak Free products can be used with complete peace of mind in high pressure applications which involve potentially dangerous and hazardous outcomes.</p>
              <p className="mt-3 text-gray-600 text-sm">HSS Leak Free products reliably function every time and exceed performance standards. HSS Leak Free products can be used with complete peace of mind in high pressure applications which involve potentially dangerous and hazardous outcomes.</p>
              <p className="mt-3 text-gray-600 text-sm">
                HSS products pass through multiple stages of quality checks before being dispatched to you:
                <ul>
                  <li className=" text-gray-600 text-sm">Incoming Inspection of Raw Materials (Bar Stock, Forgings) as well as bought out products such as Rubber Seals</li>
                  <li className=" text-gray-600 text-sm">In Process Inspection on hourly basis for each machine by Quality Line Inspector</li>
                  <li className=" text-gray-600 text-sm">First Article Inspection Report whenever a new operation is being performed on the product</li>
                  <li className=" text-gray-600 text-sm">Pre-Dispatch Inspection at time of dispatching</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl m-auto mt-16">
          <div className="relative card_custom_css rounded-lg shadow-lg p-5 bg-gray-300">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20">
              <img
                src={whyHssThree}
                alt="guarantee"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-justify p-6">
              <div className="text-orange-600 text-lg font-semibold mb-2">
                Premium Quality
              </div>
              <p className="text-gray-600 text-sm">We offer interchangeability and very close dimensional tolerances of all our parts so that the end customer is able to conduct preventive and breakdown maintenance of their equipment easily. HSS Fittings are manufactured:</p>
              <p className="mt-3 text-gray-600 text-sm">Incomplete compliance of international standards such as ISO 8434. We have the technical know-how and design capability for the same.</p>
              <p className="mt-3 text-gray-600 text-sm">
                Export Worthy Packaging preventing dust, damage, dents and marks on surfaces with plastic end caps for male threads, bubble wrapped in corrugated box.
              </p>
              <p className="mt-3 text-gray-600 text-sm">HSS offers Type-P design of Swivel coupling has a Thrust wire pin resulting in zero chances of ferrule slipping over the tube under pressure, thus the joint is positive and safe.</p>
              <p className="mt-3 text-gray-600 text-sm">Where ever a Rubber at seal or a O-Ring is used in a HSS fitting, extra care is taken to provide a smooth seat finish without any roughness or turning lines otherwise it may damage the rubber seal or O-Ring and leakage may start after some time</p>
              <p className="mt-3 text-gray-600 text-sm">
                All Rubber parts being used in our range of tings have a shelf life. We not only use the best raw material for this important hydraulic part but also keep a track of its expiry date. Expired O-Ring breaks or starts leaking while doing assembly / Testing
              </p>
              <p className="mt-3 text-gray-600 text-sm">
                Every fitting / Hose is being cleaned with cleaning solvents & blow pressurized air so that dust / foreign particles or iron particles may not enter the hydraulic circuit and may not damage / block the passage of your costly hydraulic equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyHssVerticalCard