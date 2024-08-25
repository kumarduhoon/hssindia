import React from 'react'
import "./Content.scss"

function Content() {
  return (
    <div className='w-full'>
      <div className='m-16'>
        <div className=' p-3'>
          <p className='mb-2'><b>Nominal Pressure (PN)</b></p>
          The Pressures specified are in accordance to DIN 2401 part 1 draft. The pressure has a safety factor of 4 times according to DIN 3859 standards.
        </div>
        <div className=' p-3'>
          <p className='mb-2'><b>Pressure Range</b></p>
          <ul className='ml-4'>
            <li>LL Series: Up to 100 Bar</li>
            <li>L Series: Up to 500 Bar</li>
            <li>S Series: Up to800 Bar</li>
          </ul>
          <p>Compression Fittings Temperature Ratings</p>
          Compression Fitting Temperature ratings vary in accordance to the body material as per below:
        </div>
        <div className=' p-3'>
          <p className='mb-2'><b>Body Material Temperature Rating</b></p>
          <ul className='ml-4'>
            <li>Stainless Steel:-60oC to 400oC (DIN 17440)</li>
            <li>Steel:-40oC to 120oC (DIN 3859)</li>
            <li>Brass:-60oC to 175oC</li>
          </ul>
          When combing seal material,then temperature ratings of seal may become the limiting factor on the fitting's temperature rating.Kindly refer to the temperature rating below:
        </div>
        <div className=' p-3'>
          <p className='mb-2'><b>Elastomer's Temperature Rating</b></p>
          <ul className='ml-4'>
            <li>NBR:-35oC to 100oC (Default Option)</li>
            <li>Viton:-25oC to 200oC</li>
            <li>PTFE:-60oCCto 240oC</li>
          </ul>
        </div>
        <div className=' p-3'>
          <p className='mb-2'><b>Presure Reduction in temperature</b></p>
          There are reductios in the nominal pressure(PN) caused by the temperature of the fluid medium or surroundings.
        </div>
        <div className=' p-3'>
          <div> Please refer to the table below:</div>
          <div className='my-4'>
            <table className='pressure-table'>
              <tr className='table-row'>
                <th className='table-header'>Fitting Material</th>
                <th className='table-header'>Temperature range</th>
                <th className='table-header'>Pressure Reduction</th>
              </tr>
              <tr className='table-row'>
                <td className='table-data'>Stainless Steel</td>
                <td className='table-data'>-60&deg;C to +20&deg;C</td>
                <td className='table-data'>-</td>
              </tr>
              <tr className='table-row'>
                <td className='table-data'>stainless Steel</td>
                <td className='table-data'>+50&deg;C</td>
                <td className='table-data'>4%</td>
              </tr>
              <tr className='table-row'>
                <td className='table-data'>stainless Steel</td>
                <td className='table-data'>+100&deg;C</td>
                <td className='table-data'>11%</td>
              </tr>
              <tr className='table-row'>
                <td className='table-data'>stainless Steel</td>
                <td className='table-data'>+200&deg;C</td>
                <td className='table-data'>20%</td>
              </tr>
              <tr className='table-row'>
                <td className='table-data'>stainless Steel</td>
                <td className='table-data'>+300&deg;C</td>
                <td className='table-data'>29%</td>
              </tr>
              <tr className='table-row'>
                <td className='table-data'>stainless Steel</td>
                <td className='table-data'>+400&deg;C</td>
                <td className='table-data'>33%</td>
              </tr>
              <tr className='table-row'>
                <td className='table-data'>Steel</td>
                <td className='table-data'>-40&deg;C to +120&deg;C</td>
                <td className='table-data'>-</td>
              </tr>
              <tr className='table-row'>
                <td className='table-data'>Brass</td>
                <td className='table-data'>-40&deg;C to +175&deg;C</td>
                <td className='table-data'>35%</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content