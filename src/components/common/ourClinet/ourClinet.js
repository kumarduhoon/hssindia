import React from 'react'
import "./ourClinet.scss"
import green from "../../../assests/images/homepage/green.svg"
import hcc from "../../../assests/images/homepage/hcc.svg"
import logoMetso from "../../../assests/images/homepage/logo_metso.svg"
import polyhose from "../../../assests/images/homepage/polyhose.svg"
import afcons from "../../../assests/images/homepage/afcons.svg"
import superHoze from "../../../assests/images/homepage/super_hoze.svg"
import indianOil from "../../../assests/images/homepage/indian_oil.svg"
import gates from "../../../assests/images/homepage/gates.svg"
import l_t from "../../../assests/images/homepage/l&t.svg"
import jbm from "../../../assests/images/homepage/jbm.svg"
import jkFinner from "../../../assests/images/homepage/jk_finner.svg"
import plasserIndia from "../../../assests/images/homepage/plasser_India.svg"
import robbinsLogo from "../../../assests/images/homepage/robbins_logo.svg"

function OurClinet() {
  return (
    <React.Fragment>
      <div className='our-client-main-container'>
        <div className='our-client-head-con'>
          <h1 className='our-client-head' >OUR CUSTOMER</h1>
        </div>
        <div className="marqueeContainer">
          <div className="marquee marquee--borders" style={{ "--duration": "100s" }}>
            <div className="marquee marquee--reverse">
              <div className="marquee__group">
                <div className='our-client-img-con'>
                  <img src={green} alt="green" />
                </div>
                <div className='our-client-img-con'>
                  <img src={hcc} alt="hcc" />
                </div>
                <div className='our-client-img-con'>
                  <img src={logoMetso} alt="Metso" />
                </div>
                <div className='our-client-img-con'>
                  <img src={polyhose} alt="polyhose" />
                </div>
                <div className='our-client-img-con'>
                  <img src={afcons} alt="afcons" />
                </div>
                <div className='our-client-img-con'>
                  <img src={superHoze} alt="super Hoze" />
                </div>
                <div className='our-client-img-con'>
                  <img src={indianOil} alt="indian Oil" />
                </div>
                <div className='our-client-img-con'>
                  <img src={gates} alt="gates" />
                </div>
                <div className='our-client-img-con'>
                  <img src={l_t} alt="l&t" />
                </div>
                <div className='our-client-img-con'>
                  <img src={jbm} alt="jbm" />
                </div>
                <div className='our-client-img-con'>
                  <img src={jkFinner} alt="jk Finner" />
                </div>
                <div className='our-client-img-con'>
                  <img src={plasserIndia} alt="plasser India" />
                </div>
                <div className='our-client-img-con'>
                  <img src={robbinsLogo} alt="robbins" />
                </div>
              </div>
              <div aria-hidden="true" className="marquee__group space-in-img">
                <div className='our-client-img-con'>
                  <img src={green} alt="green" />
                </div>
                <div className='our-client-img-con'>
                  <img src={hcc} alt="hcc" />
                </div>
                <div className='our-client-img-con'>
                  <img src={logoMetso} alt="Metso" />
                </div>
                <div className='our-client-img-con'>
                  <img src={polyhose} alt="polyhose" />
                </div>
                <div className='our-client-img-con'>
                  <img src={afcons} alt="afcons" />
                </div>
                <div className='our-client-img-con'>
                  <img src={superHoze} alt="super Hoze" />
                </div>
                <div className='our-client-img-con'>
                  <img src={indianOil} alt="indian Oil" />
                </div>
                <div className='our-client-img-con'>
                  <img src={gates} alt="gates" />
                </div>
                <div className='our-client-img-con'>
                  <img src={l_t} alt="l&t" />
                </div>
                <div className='our-client-img-con'>
                  <img src={jbm} alt="jbm" />
                </div>
                <div className='our-client-img-con'>
                  <img src={jkFinner} alt="jk Finner" />
                </div>
                <div className='our-client-img-con'>
                  <img src={plasserIndia} alt="plasser India" />
                </div>
                <div className='our-client-img-con'>
                  <img src={robbinsLogo} alt="robbins" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default OurClinet