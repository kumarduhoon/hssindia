import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "./ProductHero.scss"

function ProductHero() {
  return (
    <div className='w-full'>
      <StaticImage
        src='../../../../static/OurProducts.webp'
        alt='services hero'
      />
    </div>
  )
}

export default ProductHero