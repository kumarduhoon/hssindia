import React from 'react'

function ListCard() {
  return (
    <div className='my-5 mx-3'>
      <div className='w-full bg-orange-600 text-white text-center rounded-md py-3 text-xl'>
        <b>Our Products</b>
      </div>
      {data.map(function (item) {
        return (
          <div className='flex justify-between my-4 mx-6 pb-1 border-b-2 border-black hover:text-orange-600 cursor-pointer' key={item.name}>
            <div className=''><b>{item.name}</b></div>
            <div className='w-5 mt-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg></div>
          </div>)
      })}
    </div>
  )
}

export default ListCard


const data = [
  { name: "Hose Fittings" },
  { name: "Adaptors" },
  { name: "Hose Assemblies" },
  { name: "Tube Fittings" },
  { name: "SAE Flanges" },
  { name: "Clamps" },
  { name: "Ball Valves & QRC" },
  { name: "Spring Guard and Spiral Sleeves" },
  { name: "Tube Assemblies" },
  { name: "Microbore Hose & Fittings" },
  { name: "Spools" },
  { name: "Hose Crimping Machine" },
  { name: "Accessories" },
  { name: "Hydraulic Manifolds" },
  { name: "Tube Clamps" },
]