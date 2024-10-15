import React from 'react'
import "./WhyHssCards.scss"

function WhyHssCards({ data }) {
  return (
    <div className="py-5 px-5">
      <div className="grid max-w-5xl m-auto mt-16 gap-10 
                  grid-cols-1  lg:grid-cols-3">
        {/* Card 1 */}
        <div className="relative card_custom_css rounded-lg shadow-lg p-5 pt-16 card-gb-color card-gb-color">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
            <img
              src={data.card_one.img}
              alt="guarantee"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center">
            <div className="text-orange-600 text-lg font-semibold mb-2">
              {data.card_one.head}
            </div>
            <p className="text-gray-600 text-sm">{data.card_one.para1}</p>
            <p className="mt-3 text-gray-600 text-sm">{data.card_one.para2}</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative card_custom_css rounded-lg shadow-lg p-5 pt-16 card-gb-color">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
            <img
              src={data.card_two.img}
              alt="guarantee"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center">
            <div className="text-orange-600 text-lg font-semibold mb-2">
              {data.card_two.head}
            </div>
            <p className="text-gray-600 text-sm">{data.card_two.para1}</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative card_custom_css rounded-lg shadow-lg p-5 pt-16 card-gb-color">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
            <img
              src={data.card_three.img}
              alt="guarantee"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center">
            <div className="text-orange-600 text-lg font-semibold mb-2">
              {data.card_three.head}
            </div>
            <p className="text-gray-600 text-sm">{data.card_three.para1}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default WhyHssCards