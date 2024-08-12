import React from 'react'
import "./WhyHssCards.scss"

function WhyHssCards() {
  return (
    <div className='container grid grid-cols-3 gap-4'>
      <div className='container relative'>
        <div className='container absolute'>
          <img
            src='/guarantee.png'
            alt='guarantee'
          />
        </div>
      </div>
      <div>one</div>
      <div>one</div>
    </div>
  )
}

export default WhyHssCards